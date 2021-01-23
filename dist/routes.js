"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

const routes = _express2.default.Router();

routes.get("/connect", ({ res }) => {
  res.json("Hello, you are connected in server_vehicles_store");
});
