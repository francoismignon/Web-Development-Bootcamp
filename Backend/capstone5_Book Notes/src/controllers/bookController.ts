import * as BookModel from '../models/bookModel'
import { Request, Response } from 'express';
import * as OpenlibraryService from '../services/openLibraryService';
import {Book} from '../models/bookModel';

export const showIndex = async (req: Request, res: Response)=>{
    const books:Book[] = await BookModel.fetchAllBooks();
    books.forEach(book => {
        if(!book.cover_url){
            const bookWithCover = OpenlibraryService.fetchBookCover(book);
        }        
    });
    res.render('books/index', {
        title: 'Liste des livres',
        books
    });
}