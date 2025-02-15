import { useState } from "react";
export default function AddAPI({ fetchAPI }) {
  const [currUrl, setCurrUrl] = useState("");
  const [responsMsg, setResponsMsg] = useState({
    success: "",
    failed: "",
  });

  function handleChange(event) {
    setCurrUrl(event.target.value);
  }

  const handleSubmit = async () => {
    const newAPI = {
      url: {
        id: Math.random(),
        url: currUrl,
      },
    };

    try {
      console.log("Sending:", JSON.stringify(newAPI));
      const response = await fetch("http://localhost:5000/apis", {
        method: "POST",
        body: JSON.stringify(newAPI),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error("Failed to update APIS");
      }

      setResponsMsg({
        ...responsMsg,
        success: resData.message,
      });

      setCurrUrl("");
      await fetchAPI();
    } catch (error) {
      console.log("Got an error");
      setResponsMsg({
        ...responsMsg,
        failed: error,
      });
    }
  };
  return (
    <>
      {" "}
      {responsMsg.failed ? (
        <p style={{ color: "red" }}>{responsMsg.failed}</p>
      ) : (
        <p>{responsMsg.success}</p>
      )}
      <input
        name="apiurl"
        value={currUrl}
        placeholder="Enter your API Url"
        onChange={handleChange}
      ></input>
      <button onClick={handleSubmit}>Submit </button>
    </>
  );
}
