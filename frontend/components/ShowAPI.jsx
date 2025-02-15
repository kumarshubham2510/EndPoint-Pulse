import { useState, useEffect } from "react";

export default function ShowAPI({ currentAPI }) {
 

  return (
    <>
      <ul>
        {currentAPI.map((curr) => (
          <li key={curr.id}>{curr.url}</li>
        ))}
      </ul>
    </>
  );
}
