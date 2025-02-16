import AddAPI from "./AddApi";
import ShowAPI from "./ShowAPI";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [currentAPI, setCurrentAPI] = useState([]);

  const [errorMessage, setErrorMessage] = useState({
    message: "",
  });

  async function fetchAPI() {
    try {
      const response = await fetch("http://localhost:5000/apis");
      const resData = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch API Data");
      }
      setCurrentAPI(resData);
    } catch (error) {
      setErrorMessage({ message: error.message });
    }
  }

  async function refreshStatus() {
    try {
      const response = await fetch("http://localhost:5000/status");
      const resData = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch API Data");
      }
      setCurrentAPI(resData);
      console.log("updated frontend");
    } catch (error) {
      setErrorMessage({ message: error.message });
    }
  }
  useEffect(() => {
    fetchAPI();
    const interval = setInterval(() => {
      fetchAPI(); // Fetch new data every 5 seconds
    }, 60000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <>
      {errorMessage.message && (
        <p style={{ color: "red" }}>Error occured : {errorMessage.message}</p>
      )}
      {/* <button
        className="bg-stone-200 rounded-md p-2 m-4 "
        onClick={refreshStatus}
      >
        Current Status
      </button> */}
      <AddAPI fetchAPI={fetchAPI} />
      <ShowAPI currentAPI={currentAPI} handleRefresh={refreshStatus} />
    </>
  );
}
