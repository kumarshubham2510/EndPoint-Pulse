# Endpoint Pulse

**Endpoint Pulse** is a web application built to monitor the status of APIs. It provides a dashboard that allows users to add APIs and continuously check and update if those APIs are up and running. The frontend is built using **React**, and the backend is powered by **Node.js**.

## Features

- Add APIs to be monitored
- Display the status of each API (Online/Offline)
- Auto-ping each API to get the current status
- View the updated status of all APIs
- Refresh the status in real-time

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** In-memory array (mock database) will connect to MongoDB in future
- **API status pinging:** Custom pinging logic using Node.js

---

## Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/kumarshubham2510/EndPoint-Pulse
```

### 2. Install Backend Dependencies

Navigate to the **backend** folder:

```bash
cd backend
```

Install the dependencies using npm:

```bash
npm install
```

### 3. Run the Backend

To start the backend in development mode, use the following command:

```bash
npm run dev
```

This will start the server on `http://localhost:5000`. The backend will listen for API status checks and allow you to add new APIs to monitor.

### 4. Install Frontend Dependencies

Navigate to the **frontend** folder:

```bash
cd frontend
```

Install the dependencies using npm:

```bash
npm install
```

### 5. Run the Frontend

To start the React frontend, run the following:

```bash
npm run dev
```

This will start the React app on `http://localhost:3000`.

---

## How It Works

1. **Frontend:**
   - The frontend is built using React.js, where you can add new APIs and view the status of all the APIs.
   - The frontend uses **Server-Sent Events (SSE)** or **Polling** to refresh the status of all APIs.
2. **Backend:**
   - The backend is built using **Node.js** and **Express.js**.
   - The backend provides endpoints to **add new APIs**, **fetch current APIs**, and **ping the URLs** to check their status.
   - Every 5 seconds, the backend uses a scheduler to **ping each API** and update their status.

---

## API Endpoints

### 1. **POST** `/apis`

- Adds a new API to be monitored.

**Request Body:**

```json
{
  "url": {
    "id": 1,
    "url": "https://example.com"
  }
}
```

**Response:**

```json
{
  "message": "URL added successfully",
  "data": {
    "id": 1,
    "url": "https://example.com",
    "status": "Online",
    "message": "API is online"
  }
}
```

### 2. **GET** `/apis`

- Fetches the list of all added APIs with their current status.

**Response:**

```json
{
  "data": [
    {
      "id": 1,
      "url": "https://example.com",
      "status": "Online",
      "message": "API is online"
    },
    {
      "id": 2,
      "url": "https://example2.com",
      "status": "Offline",
      "message": "API is down"
    }
  ]
}
```

---

## Scheduling & Updating Status

- The **scheduler** runs in the backend every 60 seconds to **ping all APIs**.
- The backend then updates the status of the APIs (Online/Offline).
- The frontend listens for **real-time updates** to reflect the status in the UI.

---

## Running Tests

- Tests are not currently implemented.

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

---

---

Let me know if you'd like to add or change anything! 😊
