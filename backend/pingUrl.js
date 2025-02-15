import axios from "axios";

export async function pingUrl(url) {
  try {
    const response = await axios.get(url, { timeout: 5000 }); // 5 sec timeout
    return { url, status: response.status, message: "Online" };
  } catch (error) {
    return {
      url,
      status: error.cause,
      message: "Offline",
    };
  }
}
