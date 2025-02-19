import express from 'express';
import * as BookController from '../controllers/bookController';
const router = express.Router();

// Routes RESTful pour les livres
router.get("/", BookController.getAllBooks);
router.get("/new", BookController.getNewBookForm);
router.post("/", BookController.createBook);
router.get("/:id/edit", BookController.getBookForEdit);
router.post("/:id", BookController.updateBook);
router.post("/:id/delete", BookController.deleteBook);

export default router;