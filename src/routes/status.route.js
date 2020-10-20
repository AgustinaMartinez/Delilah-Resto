import {Router} from 'express';
import {verifyToken, isAdmin} from '../middlewares/authorization';
import * as statusController from '../controllers/status.controller';

const router = Router();

router.get('/', [verifyToken, isAdmin], statusController.getStatus)

export default router;
