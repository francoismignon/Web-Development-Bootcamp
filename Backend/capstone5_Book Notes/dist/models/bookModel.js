"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllBooksWithAutor = exports.deleteBookById = exports.updateBookById = exports.createBook = exports.findBookAuthorById = exports.findBookById = exports.findAllBooks = void 0;
const inspector_1 = require("inspector");
const db_1 = __importDefault(require("./db"));
const findAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM books');
        return result.rows;
    }
    catch (error) {
        inspector_1.console.error(error);
        throw new Error("Aucun livre n'as été trouvé");
    }
});
exports.findAllBooks = findAllBooks;
const findBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM books WHERE id_book = $1', [id]);
        return result.rows[0] || null;
    }
    catch (error) {
        inspector_1.console.error(error);
        throw new Error("Le livre n'as pas été trouvé");
    }
});
exports.findBookById = findBookById;
const findBookAuthorById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM books INNER JOIN authors ON books.author_id = authors.id_author WHERE books.id_book = $1', [id]);
        return result.rows[0] || null;
    }
    catch (error) {
        inspector_1.console.error(error);
        throw new Error("Le livre n'as pas été trouvé");
    }
});
exports.findBookAuthorById = findBookAuthorById;
const createBook = (bookData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('INSERT INTO books (author_id, title, read_date, rating, review, cover_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [bookData.author_id, bookData.title, bookData.read_date, bookData.rating, bookData.review, bookData.cover_url]);
        return result.rows[0];
    }
    catch (error) {
        inspector_1.console.error(error);
        throw new Error("Impossible de créer le livre en base.");
    }
});
exports.createBook = createBook;
const updateBookById = (id, bookData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('UPDATE books SET author_id = $1, title = $2, read_date = $3, rating = $4, review = $5, cover_url = $6 WHERE id_book = $7 RETURNING *', [bookData.author_id, bookData.title, bookData.read_date, bookData.rating, bookData.review, bookData.cover_url, id]);
        return result.rows[0];
    }
    catch (error) {
        inspector_1.console.error(error);
        throw new Error("La mise a jour n'as pas fonctionné");
    }
});
exports.updateBookById = updateBookById;
const deleteBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('DELETE FROM books WHERE id_book = $1 RETURNING *', [id]);
        return result.rows[0];
    }
    catch (error) {
        inspector_1.console.error(error);
        throw new Error("Le livre n'as pas été supprimé correctement");
    }
});
exports.deleteBookById = deleteBookById;
const findAllBooksWithAutor = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM books INNER JOIN authors ON books.author_id = authors.id_author ORDER BY books.title ASC');
        return result.rows;
    }
    catch (error) {
        inspector_1.console.error(error);
        throw new Error('Probleme rencontré lors de la récupération des livres');
    }
});
exports.findAllBooksWithAutor = findAllBooksWithAutor;
