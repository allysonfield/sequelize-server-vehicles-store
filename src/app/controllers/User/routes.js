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
 *      description: Returns user list
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */

userRoutes.get("/list", UserController.index);

export default userRoutes;
