const { Router } = require('express');
const UserController = require('./UserController');

const userRoutes = Router();

/**
 * @swagger
 * tags:
 *  name: User
 *  description: User routes
 * # schemes:
 * # - http
 * paths:
 *  /user/list:
 *    get:
 *      tags:
 *      - User
 *      description: Returns user list
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */

userRoutes.get('/list', UserController.index);

module.exports = userRoutes;
