import { useState } from "react";
export default function Table({ data }) {
  return (
    <table className="w-full table-auto border-collapse ">
      <thead>
        <tr>
          <th className="text-left text-gray-800 font-bold py-2 px-4 ">
            API Name
          </th>
          <th className="text-left text-gray-800 font-bold py-2 px-4 ">URL</th>
          <th className="text-left text-gray-800 font-bold py-2 px-4">
            Status
          </th>
          <th className="text-left text-gray-800 font-bold py-2 px-4">
            Message
          </th>
          <th className="text-left text-gray-800 font-bold py-2 px-4">
            Last Updated
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((curr, rowIndex) => (
          <tr key={curr.id}>
            <td className="py-2 px-4 text-gray-700 ">{curr.url}</td>
            <td className="py-2 px-4 text-gray-700 ">{curr.url}</td>
            <td
              className="py-2 px-4 text-gray-700 "
              style={{
                background: curr.status === 200 ? "green" : "red",
                color: "white",
              }}
            >
              {curr.status}
            </td>
            <td className="py-2 px-4 text-gray-700 ">{curr.message}</td>
            <td
              className={`py-2 px-4 text-gray-700 transition-colors duration-300`}
            >
              {curr.lastUpdatedBy}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
