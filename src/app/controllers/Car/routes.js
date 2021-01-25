import { Router } from 'express';
import CarController from './CarController';

const carRoutes = Router();

/**
 * @swagger
 * tags:
 *  name: Car
 *  description: Car routes
 * # schemes:
 * # - http
 * paths:
 *  /car/list:
 *    get:
 *      tags:
 *      - Car
 *      description: Returns car list
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
 *  /car/create:
 *    post:
 *      tags:
 *      - Car
 *      description: Create a car
 *      parameters:
 *        - name: body
 *          in: body
 *          description: Car's color, Car's price, Car's branch, Car's year, Status, Car's name
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              color:
 *                type: string
 *                example: 'red'
 *              price:
 *                type: number
 *                example: 50.000
 *              branch_id:
 *                type: integer
 *                example: 1
 *              year:
 *                type: string
 *                example: '2021/2022'
 *              name:
 *                type: string
 *                example: 'Gol'
 *              image:
 *                type: array
 *                example: [{image: 'url'}, {image: 'url'}, {image: 'url'}]
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */

carRoutes.get('/list', CarController.index);
carRoutes.post('/create', CarController.store);

export default carRoutes;
