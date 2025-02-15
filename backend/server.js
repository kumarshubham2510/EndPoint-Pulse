import express from "express";

import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";
import { pingUrl } from "./pingUrl.js";

// Load environment variables
dotenv.config();

const google = await pingUrl("https://www.google.com");
const yahoo = await pingUrl("https://www.yahoo.com");

let db = [
  {
    id: 1,
    url: "https://www.google.com",
    status: google.status,
    message: google.message,
  },
  {
    id: 2,
    url: "https://www.yahoo.com",
    status: yahoo.status,
    message: yahoo.message,
  },
];

// Example usage

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

// app.use(cors());

app.get("/", (req, res) => {
  res.send("EndPoint Pulse");
});

app.get("/apis", async (req, res) => {
  res.status(200).json(db);
});

app.post("/apis", async (req, res) => {
  const getUrl = req.body;
  const getPing = await pingUrl(getUrl.url.url);
  const newAPI = {
    ...getUrl.url,
    status: getPing.status ? getPing.status : "Offline",
    message: getPing.message,
  };
  db.push(newAPI);
  res.status(200).json({ message: "URL added successfully" });
});

app.get("/status", async (req, res) => {
  try {
    console.log("Pinging All APi's again");

    const updatedStatuses = await Promise.all(
      db.map(async (api) => {
        const pingResult = await pingUrl(api.url);
        return {
          ...api,
          status: pingResult.status,
          message: pingResult.message,
        };
      })
    );

    db = [...updatedStatuses];
    console.log(db);

    res.status(200).json(db);
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
