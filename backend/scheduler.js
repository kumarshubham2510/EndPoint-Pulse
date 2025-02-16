import { pingUrl } from "./pingUrl.js";
import { getDb, updateDb } from "./db.js";

const schedulePing = () => {
  setInterval(async () => {
    console.log("Scheduler running: Checking API statuses...");

    const db = getDb();
    const updatedStatuses = await Promise.all(
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
  }, 60000);
};

export default schedulePing;
