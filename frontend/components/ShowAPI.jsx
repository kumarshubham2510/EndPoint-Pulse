import { useState, useEffect } from "react";

export default function ShowAPI({ currentAPI }) {
  return (
    <>
      <ul>
        {currentAPI.map((curr) => (
          <li key={curr.id}>
            <span>{curr.url}</span> <span>{curr.status}</span>{" "}
            <span
              style={{
                background: curr.status === 200 ? "green" : "red",
                color: "white",
              }}
            >
              {curr.message}
            </span>
            <span>{curr.lastUpdatedBy}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
