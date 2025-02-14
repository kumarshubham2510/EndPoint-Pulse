import { useState } from "react";

export default function HomePage() {
  const [apiUrl, setApiUrl] = useState("");

  function handleChange(event) {
    setApiUrl(event.target.value);
  }
  function handleSubmit() {
    console.log("API url submttted");
  }

  return (
    <>
      <input
        name="apiurl"
        value={apiUrl}
        placeholder="Enter your API Url"
        onChange={handleChange}
      ></input>
      <button onClick={handleSubmit}>Submit </button>
    </>
  );
}
