import config from "../../config.js";
import client from "../conns/once.js";
import productData from "./productData.json";

(async () => {
  try {
    const conn = await client.connect();
    await conn.db(config.dbName).collection("products").insertMany(productData);
    await conn.close();
    console.info("Products 🏬 seeded! 🌱 🗃️ ");
  } catch (err) {
    console.error(err.message);
  }
})();
