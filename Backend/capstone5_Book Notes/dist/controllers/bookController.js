"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.getBookForEdit = exports.createBook = exports.getNewBookForm = exports.getAllBooks = void 0;
const BookModel = __importStar(require("../models/bookModel"));
const AuthorModel = __importStar(require("../models/authorModel"));
const OpenlibraryService = __importStar(require("../services/openLibraryService"));
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield BookModel.findAllBooksWithAutor();
        res.render('books/index', {
            title: 'Liste des livres',
            books
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.getAllBooks = getAllBooks;
const getNewBookForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('books/new', {
        title: 'Nouveau livre'
    });
});
exports.getNewBookForm = getNewBookForm;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = {
            last_name: req.body['last-name'],
            first_name: req.body['first-name'],
        };
        const newAuthor = yield AuthorModel.createAuthor(author);
        const book = {
            author_id: newAuthor.id_author,
            title: req.body.title,
            read_date: req.body['read-date'],
            rating: req.body.rating,
            review: req.body.review,
            cover_url: yield OpenlibraryService.fetchBookCover(req.body.title)
        };
        const newBook = yield BookModel.createBook(book);
        console.table(newBook);
        res.redirect("/books");
    }
    catch (error) {
        console.error(error);
    }
});
exports.createBook = createBook;
const getBookForEdit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookAuthor = yield BookModel.findBookAuthorById(req.params.id);
    console.log(bookAuthor);
    res.render('books/edit', {
        title: `Modification ${bookAuthor.title}`,
        bookAuthor
    });
});
exports.getBookForEdit = getBookForEdit;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idBook = req.params.id;
        const book = yield BookModel.findBookAuthorById(idBook);
        const updateAuthor = {
            last_name: req.body['last-name'],
            first_name: req.body['first-name']
        };
        const newUpdateAuthor = yield AuthorModel.updateAuthorById(book.author_id, updateAuthor);
        const updateBook = {
            title: (req.body.title !== book.title) ? req.body.title : book.title,
            read_date: (req.body['read-date'] !== book.read_date) ? req.body['read-date'] : book.read_date,
            rating: (req.body.rating !== book.rating) ? req.body.rating : book.rating,
            review: (req.body.review !== book.review) ? req.body.review : book.review,
            cover_url: (req.body.title !== book.title) ? yield OpenlibraryService.fetchBookCover(req.body.title) : book.cover_url,
            author_id: newUpdateAuthor.id_author
        };
        const newUpdateBook = yield BookModel.updateBookById(idBook, updateBook);
        res.redirect("/books");
    }
    catch (error) {
        console.error(error);
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookDeleted = yield BookModel.deleteBookById(req.params.id);
        res.redirect("/books");
    }
    catch (error) {
        console.error(error);
    }
});
exports.deleteBook = deleteBook;
