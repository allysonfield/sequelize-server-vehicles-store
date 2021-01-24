import express from "express";
import cors from "cors";
import routes from "./routes";

import "./database";
import route from "./authRoutes";

// import general from "./routeGeneral";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json({ limit: "100mb", extended: true }));
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
    this.server.use(route);
  }
}

export default new App().server;
