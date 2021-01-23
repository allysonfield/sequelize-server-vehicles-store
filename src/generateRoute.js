import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import User from "./app/controllers/User/routes";

const routes = express.Router();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Vehicle store Api Docs",
      description: "Api Docs for vehicles store",
      contact: {
        name: "Allyson Monteiro",
        email: "allysonfield2@gmail.com",
      },
      servers: ["http://localhost:3333"],
    },
    securityDefinitions: {
      Bearer: {
        description: "Token",
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    },
  },
  apis: ["**/*routes.js"],
};

const cssOptions = {
  customCss: `.topbar-wrapper img {content:url(https://www.diretotech.com.br/static/media/NotificaDiretoLogo.2b1e0d09.png); width:90px; height:auto; display: block;
    margin-left: 0 auto;
    margin-right: auto;}
  .swagger-ui .topbar { background-color: #FCFBFB; border-bottom: 2px solid #fbbd29; },
  customSiteTitle: 'Vehicles Store Documentation',
  `,
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
routes.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs, cssOptions, { explorer: true })
);

routes.get("/connect", ({ res }) => {
  res.json("Hello, you are connected in server_vehicles_store");
});

routes.use("/user", User);

export default routes;
