const { Router } = require('express');
const CarController = require('./CarController');

const carRoutes = Router();

/**
 * @swagger
 * # schemes:
 * # - http
 * paths:
 *  /car/one/{car_id}:
 *    get:
 *      tags:
 *      - Car
 *      description: Returns a Car
 *      parameters:
 *        - name: car_id
 *          in: path
 *          required: true
 *          description: Car's ID
 *          type: number
 *          example: 1
 *      responses:
 *        '200':
 *          description: senha alterada com sucesso.
 *      security:
 *      - Bearer: []
 */

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
 *  /car/list/{branch_id}/{page}/{limit}:
 *    get:
 *      tags:
 *      - Car
 *      description: Returns a paginated car list
 *      parameters:
 *        - name: branch_id
 *          in: path
 *          required: true
 *          description: Branch's ID
 *          type: number
 *          example: 1
 *        - name: page
 *          in: path
 *          required: true
 *          description: page index
 *          type: number
 *          example: 0
 *        - name: limit
 *          in: path
 *          required: true
 *          description: limit of lines
 *          type: number
 *          example: 10
 *      responses:
 *        '200':
 *          description: senha alterada com sucesso.
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
 *                type: string
 *                example: '50'
 *              branch_id:
 *                type: number
 *                example: 1
 *              year:
 *                type: string
 *                example: '2021/2022'
 *              name:
 *                type: string
 *                example: 'Gol'
 *              images:
 *                type: array
 *                example: [{image: 'url'}, {image: 'url'}, {image: 'url'}]
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */

carRoutes.get('/list', CarController.index);
carRoutes.get('/one/:car_id', CarController.show);
carRoutes.get('/list/:branch_id/:page/:limit', CarController.list);
carRoutes.post('/create', CarController.store);

module.exports = carRoutes;
