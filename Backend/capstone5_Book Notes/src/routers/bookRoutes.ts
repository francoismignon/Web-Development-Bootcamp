import express from 'express';
import * as BookController from '../controllers/bookController';
const router = express.Router();

// Routes RESTful pour les livres
router.get("/", BookController.getAllBooks);
router.get("/new", BookController.getNewBookForm);
router.post("/", BookController.createBook);
router.get("/:id", BookController.showBook);
router.get("/:id/edit", BookController.getBookForEdit);
router.put("/:id", BookController.updateBook);
router.delete("/:id", BookController.deleteBook);

export default router;