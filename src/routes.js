import express from "express";

const routes = express.Router();

routes.get("/connect", ({ res }) => {
  res.json("Hello, you are connected in server_vehicles_store");
});

export default routes;
