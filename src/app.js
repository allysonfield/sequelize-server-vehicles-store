const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('./database');
const route = require('./authRoutes');

// import general from "./routeGeneral";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json({ limit: '100mb', extended: true }));
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
    this.server.use(route);
  }
}

module.exports = new App().server;
