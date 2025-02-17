import * as BookModel from '../models/bookModel'
import { Request, Response } from 'express';
import * as OpenlibraryService from '../services/openLibraryService';
import {Book} from '../models/bookModel';

export const getAllBooks = async (req: Request, res: Response)=>{
    const books:Book[] = await BookModel.findAll();
    // for(const book of books){
    //     if(!book.cover_url){
    //         book.cover_url = await OpenlibraryService.fetchBookCover(book.title);
    //         BookModel.updateBook(book);
    //     }
    // }
    res.render('books/index', {
        title: 'Liste des livres',
        books
    });
}

export const getNewBookForm = async (req:Request, res:Response)=>{
    res.render('books/new', {
        title: 'Nouveau livre'
    });
}

export const createBook = async (req:Request, res:Response)=>{
    
}















export const showBookEdit = async (req: Request, res: Response)=>{
    const id = req.params.id;
    const book:Book = await BookModel.fetchBookById(id);

    res.render('books/edit', {
        title: book.title,
        book
    });
}

export const editBook = async (req:Request, res:Response) =>{
    const book = {
        id_book: req.params.id,
        author_id: req.body.author_id,
        title: req.body.title,
        read_date: String(req.body["read-date"]),
        rating: Number(req.body.rating),
        review: String(req.body.review),
        cover_url: req.body.cover_url,
        id_author: req.body.id_author,
        last_name: req.body.last_name,
        first_name: req.body.first_name 
    }
    BookModel.updateBook(req.params.id, book);
    res.redirect("/");
}