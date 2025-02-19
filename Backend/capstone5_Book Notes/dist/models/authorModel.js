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
exports.deleteAuthorById = exports.updateAuthorById = exports.createAuthor = exports.findAuthorById = exports.findAllAuthors = void 0;
const db_1 = __importDefault(require("./db"));
const findAllAuthors = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM authors');
        return result.rows;
    }
    catch (error) {
        console.error(error);
        throw new Error("Il y a eu un probleme lors de la recherche");
    }
});
exports.findAllAuthors = findAllAuthors;
const findAuthorById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT * FROM authors WHERE id_author = $1', [id]);
        return result.rows[0] || null;
    }
    catch (error) {
        console.error(error);
        throw new Error("probleme lors de la recherche");
    }
});
exports.findAuthorById = findAuthorById;
const createAuthor = (author) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('INSERT INTO authors (last_name, first_name) VALUES ($1, $2) RETURNING *', [author.last_name, author.first_name]);
        return result.rows[0];
    }
    catch (error) {
        console.error(error);
        throw new Error("probleme lors de la création ");
    }
});
exports.createAuthor = createAuthor;
const updateAuthorById = (id, authorData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('UPDATE authors SET last_name = $1, first_name = $2 WHERE id_author = $3 RETURNING *', [authorData.last_name, authorData.first_name, id]);
        return result.rows[0];
    }
    catch (error) {
        console.error(error);
        throw new Error("probleme lors de la mise a jour");
    }
});
exports.updateAuthorById = updateAuthorById;
const deleteAuthorById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('DELETE FROM authors WHERE id_author = $1', [id]);
        return result.rows[0] || null;
    }
    catch (error) {
        console.error(error);
        throw new Error("L'auteur n'as pas été supprimé correctement");
    }
});
exports.deleteAuthorById = deleteAuthorById;
