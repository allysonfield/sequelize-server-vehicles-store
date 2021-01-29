const { Router } = require('express');
const AuthenticateController = require('./app/controllers/Auth/AuthenticateController');
const RegisterController = require('./app/controllers/Register/RegisterController');

const routes = Router();
/**
 * @swagger
 * # schemes:
 * # - http
 * paths:
 *  /login:
 *    post:
 *      tags:
 *      - User
 *      description: Log in platform
 *      parameters:
 *        - name: body
 *          in: body
 *          description: Email, Password
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: 'johndoe@gmail.com'
 *              password:
 *                type: string
 *                example: 'mypass'
 *      responses:
 *        '200':
 *          description: A successful response
 */

/**
 * @swagger
 * # schemes:
 * # - http
 * paths:
 *  /create:
 *    post:
 *      tags:
 *      - User
 *      description: Create a user
 *      parameters:
 *        - name: body
 *          in: body
 *          description: ID do cartório, Código IBGE, quantidade, Array de objetos com os IDs e status das notificacões
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: 'John Doe'
 *              email:
 *                type: string
 *                example: 'johndoe@gmail.com'
 *              birthdate:
 *                type: date
 *                example: '1989-12-07'
 *              password:
 *                type: string
 *                example: 'swordfish'
 *              status:
 *                type: string
 *                example: 'N'
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */

/**
 * @swagger
 * # schemes:
 * # - http
 * paths:
 *  /verification/{email}/{verification_code}:
 *    get:
 *      tags:
 *      - User
 *      description: Verify the email of the user
 *      parameters:
 *        - name: email
 *          in: path
 *          required: true
 *          description: User's email
 *          type: string
 *          example: 'johndoe@gmail.com'
 *        - name: verification_code
 *          in: path
 *          required: true
 *          description: Verification code
 *          type: string
 *          example: 'hjad76dahgis6d78aushdsdsd'
 *      responses:
 *        '200':
 *          description: email verified with success.
 *      security:
 *      - Bearer: []
 */

routes.post('/login', AuthenticateController.show);
routes.post('/create', RegisterController.store);
routes.get(
  '/verification/:email/:verification_code',
  AuthenticateController.update
);

module.exports = routes;
