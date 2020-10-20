import {Router} from 'express';
import {verifyToken, isAdmin} from '../middlewares/authorization';
import * as neighborhoodsController from '../controllers/neighborhoods.controller';

const router = Router();

router 
    .get('/', neighborhoodsController.getNeighborhoods)
    .post('/add', [verifyToken, isAdmin], neighborhoodsController.createNeighborhood)
    .get('/:id', [verifyToken, isAdmin], neighborhoodsController.getNeighborhoodByID)
    .put('/:id', [verifyToken, isAdmin], neighborhoodsController.updateNeighborhoodByID)
    .delete('/:id', [verifyToken, isAdmin], neighborhoodsController.deleteNeighborhoodByID)

export default router;
