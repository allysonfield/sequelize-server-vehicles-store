import { Router } from "express";
import AuthenticateController from "./app/controllers/Auth/AuthenticateController";
import RegisterController from "./app/controllers/Register/RegisterController";

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
 *              verification_code:
 *                type: string
 *                example: '4s4a4ss4'
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */

routes.post("/login", AuthenticateController.show);
routes.post("/create", RegisterController.store);

export default routes;
