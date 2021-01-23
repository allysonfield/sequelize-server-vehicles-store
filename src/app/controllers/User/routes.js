import { Router } from "express";
import UserController from "./UserController";

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
 *      description: Return user list
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
 *  /user/create:
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

userRoutes.get("/list", UserController.index);
userRoutes.post("/create", UserController.store);

export default userRoutes;
