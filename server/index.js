import FridgeService from "./db/FridgeService.mjs";

const service = new FridgeService();

import express from "express";
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
  res.json(service.getAll());
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
