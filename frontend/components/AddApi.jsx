import { useState, useEffect } from "react";
export default function AddAPI({ fetchAPI }) {
  const [currUrl, setCurrUrl] = useState("");
  const [responsMsg, setResponsMsg] = useState({
    success: "",
    failed: "",
  });

  useEffect(() => {
    let timer;

    if (responsMsg) {
      // Only set the timer if the state is true
      timer = setTimeout(() => {
        setResponsMsg({
          failed: "",
          success: "",
        });
      }, 5000); // 5000 milliseconds = 5 seconds
    }

    return () => clearTimeout(timer); // Clear the timer if the component unmounts or state changes
  }, [responsMsg]);

  function handleChange(event) {
    setCurrUrl(event.target.value);
  }

  const handleSubmit = async () => {
    if (!currUrl) {
      setResponsMsg({
        ...responsMsg,
        failed: "Please add the url to submit",
      });
      return;
    }

    const newAPI = {
      url: {
        id: Math.floor(Math.random() * 100) + 1,
        url: currUrl,
        error: responsMsg.failed,
      },
    };

    try {
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
      <div className=" flex gap-4 my-4 w-[35%]">
        {" "}
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 w-[80%]"
          placeholder="Enter API URL"
          name="apiurl"
          value={currUrl}
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className="hover:cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded"
        >
          Add API
        </button>
      </div>
    </>
  );
}
