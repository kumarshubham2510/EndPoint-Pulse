import express from "express";

import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";
import { pingUrl } from "./pingUrl.js";

// Load environment variables
dotenv.config();

const google = await pingUrl("https://www.google.com");
const yahoo = await pingUrl("https://www.yahoo.com");

const db = [
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
  console.log("Trying to add something");
  const getUrl = req.body;

  const getPing = await pingUrl(getUrl.url.url);
  const newAPI = {
    ...getUrl.url,
    status: getPing.status,
    message: getPing.message,
  };
  db.push(newAPI);
  res.status(200).json({ message: "URL added successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
