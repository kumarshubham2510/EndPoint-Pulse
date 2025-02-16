import { pingUrl } from "./pingUrl.js";

let google = await pingUrl("https://www.google.com");
let yahoo = await pingUrl("https://www.yahoo.com");

let db = [
  {
    id: 1,
    url: "https://www.google.com",
    status: google.status,
    message: google.message,
    lastUpdatedBy: new Date().toLocaleString(),
  },
  {
    id: 2,
    url: "https://www.yahoo.com",
    status: yahoo.status,
    message: yahoo.message,
    lastUpdatedBy: new Date().toLocaleString(),
  },
];
export const getDb = () => db; // Function to get the current db
export const updateDb = (newDb) => {
  db = newDb;
}; // Function to update db
