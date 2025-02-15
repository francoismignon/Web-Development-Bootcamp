import { Router } from 'express';
import * as BookController from '../controllers/bookController';

const router: Router = Router();

router.get('/', BookController.showIndex);
router.get('/book/:id', BookController.editBook);

export default router;