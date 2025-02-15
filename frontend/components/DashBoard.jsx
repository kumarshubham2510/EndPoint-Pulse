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
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      {errorMessage.message && (
        <p style={{ color: "red" }}>Error occured : {errorMessage.message}</p>
      )}
      <AddAPI fetchAPI={fetchAPI} />
      <h2>Current API's</h2>
      <ShowAPI currentAPI={currentAPI} fetchAPI={fetchAPI} />
    </>
  );
}
