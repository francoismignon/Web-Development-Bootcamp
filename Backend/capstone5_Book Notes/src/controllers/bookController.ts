import * as BookModel from '../models/bookModel'
import { Request, Response } from 'express';
import * as OpenlibraryService from '../services/openLibraryService';
import {Book} from '../models/bookModel';

export const showIndex = async (req: Request, res: Response)=>{
    const books:Book[] = await BookModel.fetchAllBooks();
    for(const book of books){
        if(!book.cover_url){
            book.cover_url = await OpenlibraryService.fetchBookCover(book.title);
            BookModel.updateBook(book);
        }
    }
    res.render('books/index', {
        title: 'Liste des livres',
        books
    });
}

export const editBook = async (req: Request, res: Response)=>{
    const id = req.params.id;
    const book:Book = await BookModel.fetchBookById(id);

    res.render('books/edit', {
        title: book.title,
        book
    });
}