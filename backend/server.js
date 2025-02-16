import express from "express";

import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";
import { pingUrl } from "./pingUrl.js";
import schedulePing from "./scheduler.js";
import { getDb, updateDb } from "./db.js";

// Load environment variables
dotenv.config();

schedulePing();

// Example usage
const db = getDb();

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
  res.status(200).json(getDb());
});

app.post("/apis", async (req, res) => {
  const getUrl = req.body;
  const getPing = await pingUrl(getUrl.url.url);
  const newAPI = {
    ...getUrl.url,
    status: getPing.status ? getPing.status : "Offline",
    message: getPing.message,
    lastUpdatedBy: new Date().toLocaleString(),
  };
  db.push(newAPI);
  updateDb(db);
  res.status(200).json({ message: "URL added successfully" });
});

app.get("/status", async (req, res) => {
  try {
    console.log("Pinging All APi's again");

    let updatedStatuses = await Promise.all(
      db.map(async (api) => {
        const pingResult = await pingUrl(api.url);
        return {
          ...api,
          status: pingResult.status,
          message: pingResult.message,
          lastUpdatedBy: new Date().toLocaleString(),
        };
      })
    );

    updateDb(updatedStatuses);

    res.status(200).json(getDb());
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
