const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const User = require('./app/controllers/User/routes');
const Car = require('./app/controllers/Car/routes');
const CarBooking = require('./app/controllers/CarBooking/routes');
const Branch = require('./app/controllers/Branch/routes');

const routes = express.Router();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0.0',
      title: 'Vehicle store Api Docs',
      description: 'Api Docs for vehicles store',
      contact: {
        name: 'Allyson Monteiro',
        email: 'allysonfield2@gmail.com',
      },
      servers: ['http://localhost:3333'],
    },
    securityDefinitions: {
      Bearer: {
        description: 'Token',
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
  },
  apis: ['**/*routes.js'],
};

const cssOptions = {
  customCss: `.topbar-wrapper img {content:url(https://image.flaticon.com/icons/png/512/1493/1493169.png); width:90px; height:auto; display: block;
    margin-left: 0 auto;
    margin-right: auto;}
  .swagger-ui .topbar { background-color: #FCFBFB; border-bottom: 2px solid #fbbd29; },
  customSiteTitle: 'Vehicles Store Documentation',
  `,
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
routes.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs, cssOptions, { explorer: true })
);

routes.get('/connect', ({ res }) => {
  res.json('Hello, you are connected in server_vehicles_store');
});

routes.use('/user', User);
routes.use('/car', Car);
routes.use('/booking', CarBooking);
routes.use('/branch', Branch);

module.exports = routes;
