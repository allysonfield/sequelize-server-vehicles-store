import { Router } from "express";
import CarBookingController from "./CarBookingController";

const bookingRoutes = Router();

/**
 * @swagger
 * tags:
 *  name: Booking
 *  description: Car Booking routes
 * # schemes:
 * # - http
 * paths:
 *  /booking/list:
 *    get:
 *      tags:
 *      - Booking
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
 *  /booking/create:
 *    post:
 *      tags:
 *      - Booking
 *      description: Create a Car Booking
 *      parameters:
 *        - name: body
 *          in: body
 *          description: Car's ID
 *          required: true
 *          schema:
 *            type: object
 *            properties:
 *              car_id:
 *                type: number
 *                example: 1
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */

bookingRoutes.get("/list", CarBookingController.index);
bookingRoutes.post("/create", CarBookingController.store);

export default bookingRoutes;
