import * as BookModel from '../models/bookModel';
import * as AuthorModel from '../models/authorModel';
import { Request, Response } from 'express';
import * as OpenlibraryService from '../services/openLibraryService';
import { AuthorInput } from '../models/authorModel';
import { Author } from '../models/authorModel';
import { BookInput } from '../models/bookModel';
import { BookAuthor } from '../models/bookModel';
import { Book } from '../models/bookModel';

export const getAllBooks = async (req: Request, res: Response)=>{
    try {
        const books:BookAuthor[] = await BookModel.findAllBooksWithAutor();
        res.render('books/index', {
            title: 'Liste des livres',
            books
        });
    } catch (error) {
        console.error(error);
    }
    
}

export const getNewBookForm = async (req:Request, res:Response)=>{
    res.render('books/new', {
        title: 'Nouveau livre'
    });
}

export const createBook = async (req:Request, res:Response)=>{
    try {
        const author:AuthorInput = {
            last_name: req.body['last-name'],
            first_name: req.body['first-name'],
        }
        const newAuthor = await AuthorModel.createAuthor(author);
        const book:BookInput={
            author_id: newAuthor.id_author,
            title: req.body.title,
            read_date: req.body['read-date'],
            rating: req.body.rating,
            review: req.body.review,
            cover_url: await OpenlibraryService.fetchBookCover(req.body.title)
        }
        const newBook = await BookModel.createBook(book);
        console.table(newBook);

        res.redirect("/books");
    } catch (error) {
        console.error(error);
    }
}
export const getBookForEdit = async (req:Request, res:Response)=>{
    const bookAuthor= await BookModel.findBookAuthorById(req.params.id);
    console.log(bookAuthor);
    res.render('books/edit', {
        title: `Modification ${bookAuthor.title}`,
        bookAuthor
    });
}
export const updateBook = async (req:Request, res:Response)=>{
    try {
        const idBook:string = req.params.id;
        const book:BookAuthor = await BookModel.findBookAuthorById(idBook);
        
        const updateAuthor:AuthorInput = {
            last_name: req.body['last-name'],
            first_name: req.body['first-name']
        }

        const newUpdateAuthor:Author = await AuthorModel.updateAuthorById(book.author_id, updateAuthor);

        const updateBook:BookInput = {
            title: (req.body.title !== book.title)?req.body.title:book.title,
            read_date: (req.body['read-date'] !== book.read_date)?req.body['read-date']:book.read_date,
            rating: (req.body.rating !== book.rating)?req.body.rating:book.rating,
            review: (req.body.review !== book.review)?req.body.review:book.review,
            cover_url: (req.body.title !== book.title)? await OpenlibraryService.fetchBookCover(req.body.title):book.cover_url,
            author_id: newUpdateAuthor.id_author
        }
        const newUpdateBook:Book = await BookModel.updateBookById(idBook, updateBook);
        
        res.redirect("/books");
    } catch (error) {
        console.error(error);
    }
}
export const deleteBook = async (req:Request, res:Response)=>{
    try {
        const bookDeleted = await BookModel.deleteBookById(req.params.id);
        res.redirect("/books");
    } catch (error) {
        console.error(error);
    }
}