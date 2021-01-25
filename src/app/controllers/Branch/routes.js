import { Router } from 'express';
import BranchController from './BranchController';

const brancheRoutes = Router();

/**
 * @swagger
 * tags:
 *  name: Branch
 *  description: Branch routes
 * # schemes:
 * # - http
 * paths:
 *  /branch/list:
 *    get:
 *      tags:
 *      - Branch
 *      description: Returns car list
 *      responses:
 *        '200':
 *          description: A successful response
 *      security:
 *      - Bearer: []
 */

brancheRoutes.get('/list', BranchController.index);
// brancheRoutes.post('/create', BranchController.store);

export default brancheRoutes;
