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
exports.fetchBookCover = fetchBookCover;
const axios_1 = __importDefault(require("axios"));
function fetchBookCover(title) {
    return __awaiter(this, void 0, void 0, function* () {
        const API_URL = "https://openlibrary.org/search.json";
        try {
            const bookURL = yield axios_1.default.get(`${API_URL}`, {
                params: {
                    title: title,
                    // author: book.last_name,
                },
            });
            const doc = bookURL.data.docs.find((doc) => doc.cover_edition_key);
            const olid = doc.cover_edition_key;
            //cree mon URL pour qui point vers l'image de la couverture du livre
            const bookCoverURL = `https://covers.openlibrary.org/b/olid/${olid}-M.jpg`;
            return bookCoverURL;
        }
        catch (error) {
            console.log(error);
            return "";
        }
    });
}
