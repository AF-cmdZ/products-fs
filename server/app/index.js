import express from "express";
import config from "./config.js";

const app = express();

app.use(express.json());

app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});
