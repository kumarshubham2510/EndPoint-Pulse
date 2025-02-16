import { useState, useEffect } from "react";
import Button from "./Button";
import Table from "./Table";

export default function ShowAPI({ currentAPI, handleRefresh }) {
  return (
    <>
      {/* <ul> */}
      {/* {currentAPI.map((curr) => (
          <li key={curr.id}>
            <span>{curr.url}</span> <span></span> <span>{curr.message}</span>
            <span>{curr.lastUpdatedBy}</span>
          </li>
        ))} */}
      {/* </ul> */}

      <div className="flex items-center justify-between mb-4">
        {" "}
        <h3 className="text-gray-800 font-bold text-2xl">List Of API's</h3>
        <Button handleClick={handleRefresh} />
      </div>
      <Table data={currentAPI} />
    </>
  );
}
