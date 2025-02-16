import { useState, useEffect } from "react";
import Button from "./Button";

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

      <div class="h-90% w-90% bg-gradient-to-r from-blue-100 to-blue-50 p-8">
        <div class="bg-white/30 backdrop-blur-lg rounded-lg shadow-lg p-6">
          <div class="flex items-center justify-between mb-4">
            {" "}
            <h3 class="text-gray-800 font-bold text-xl">List Of API's</h3>
            <Button handleClick={handleRefresh} />
          </div>
          <table class="w-full table-auto border-collapse ">
            <thead>
              <tr>
                <th class="text-left text-gray-800 font-bold py-2 px-4 ">
                  API Name
                </th>
                <th class="text-left text-gray-800 font-bold py-2 px-4 ">
                  URL
                </th>
                <th class="text-left text-gray-800 font-bold py-2 px-4">
                  Status
                </th>
                <th class="text-left text-gray-800 font-bold py-2 px-4">
                  Message
                </th>
                <th class="text-left text-gray-800 font-bold py-2 px-4">
                  Last Updated
                </th>
              </tr>
            </thead>
            <tbody>
              {currentAPI.map((curr) => (
                <tr>
                  <td class="py-2 px-4 text-gray-700 ">{curr.url}</td>
                  <td class="py-2 px-4 text-gray-700 ">{curr.url}</td>
                  <td
                    class="py-2 px-4 text-gray-700 "
                    style={{
                      background: curr.status === 200 ? "green" : "red",
                      color: "white",
                    }}
                  >
                    {curr.status}
                  </td>
                  <td class="py-2 px-4 text-gray-700 ">{curr.message}</td>
                  <td class="py-2 px-4 text-gray-700 ">{curr.lastUpdatedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
