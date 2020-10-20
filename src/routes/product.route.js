import {Router} from 'express';
import {verifyToken, isAdmin} from '../middlewares/authorization';
import * as productsController from '../controllers/products.controller';

const router = Router();

router 
    .get('/', productsController.getProducts)
    .post('/add', [verifyToken, isAdmin], productsController.createProduct)
    .get('/:id', productsController.getProductByID)
    .put('/:id', [verifyToken, isAdmin], productsController.updateProductByID)
    .delete('/:id', [verifyToken, isAdmin], productsController.deleteProductByID)

export default router;
