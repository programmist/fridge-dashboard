import FridgeService from "./db/FridgeService.mjs";

const service = new FridgeService();

import express from "express";
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api/fridges", (req, res) => {
  res.json(service.getAll());
});

app.get("/api/fridge/:fridgeId", (req, res) => {
  res.json(service.getFridge(parseInt(req.params.fridgeId)));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
