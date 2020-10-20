import {Router} from 'express';
import {verifyToken, isAdmin} from '../middlewares/authorization';
import * as usersController from '../controllers/users.controller';

const router = Router();

router 
    .get('/', [verifyToken, isAdmin], usersController.getUsers)
    .get('/:id', [verifyToken, isAdmin], usersController.getUserByID)
    .put('/:id', [verifyToken, isAdmin], usersController.updateUserByID)
    .delete('/:id', [verifyToken, isAdmin], usersController.deleteUserByID)

export default router;
