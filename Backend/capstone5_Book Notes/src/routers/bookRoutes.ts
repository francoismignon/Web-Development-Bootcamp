import { Router } from 'express';
import * as BookController from '../controllers/bookController';

const router: Router = Router();

router.get('/', BookController.showIndex);

export default router;