import {Router} from 'express';
import {verifyToken, isAdmin} from '../middlewares/authorization';
import * as ordersController from '../controllers/order.controller';

const router = Router();

router 
    .get('/', [verifyToken, isAdmin], ordersController.getOrders)
    .post('/add', [verifyToken], ordersController.createOrder)
    .get('/:id', [verifyToken, isAdmin], ordersController.getOrderByID)
    .put('/:id', [verifyToken, isAdmin], ordersController.updateOrderByID)
    .delete('/:id', [verifyToken, isAdmin], ordersController.deleteOrderByID)

export default router;
