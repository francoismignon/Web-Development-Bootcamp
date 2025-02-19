import { console } from 'inspector';
import db from './db';
import { promises } from 'dns';

export interface Book{
    id_book: number;
    author_id: number;
    title: string;
    read_date: Date;
    rating: number;
    review: string;
    cover_url: string;
}
export interface BookInput{
    author_id?: number;
    title?: string;
    read_date?: Date;
    rating?: number;
    review?: string;
    cover_url?: string;
}
export interface BookAuthor extends Book{
    id_author?:number;
    last_name?:string;
    fist_name?:string;
}

export const findAllBooks = async ():Promise<Book[]> => {
    try {
        const result = await db.query('SELECT * FROM books');
        return result.rows;
    } catch (error) {
        console.error(error);
        throw new Error("Aucun livre n'as été trouvé");
    }
}
export const findBookById = async(id:string):Promise<Book> =>{
    try {
        const result = await db.query(
            'SELECT * FROM books WHERE id_book = $1',
            [id]
        );
        return result.rows[0] || null;
    } catch (error) {
        console.error(error);
        throw new Error("Le livre n'as pas été trouvé");
    }
}
export const findBookAuthorById = async(id:string):Promise<BookAuthor> =>{
    try {
        const result = await db.query(
            'SELECT * FROM books INNER JOIN authors ON books.author_id = authors.id_author WHERE books.id_book = $1',
            [id]
        );
        return result.rows[0] || null;
    } catch (error) {
        console.error(error);
        throw new Error("Le livre n'as pas été trouvé");
    }
}
export const createBook = async (bookData:BookInput):Promise<Book> =>{
    try {
        const result = await db.query(
            'INSERT INTO books (author_id, title, read_date, rating, review, cover_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [bookData.author_id, bookData.title, bookData.read_date, bookData.rating, bookData.review, bookData.cover_url]
        );
        return result.rows[0];
    } catch (error) {
        console.error(error);
        throw new Error("Impossible de créer le livre en base.");
    }    
}
export const updateBookById = async (id:string, bookData:BookInput):Promise<Book> =>{
    try {
        const result = await db.query(
            'UPDATE books SET author_id = $1, title = $2, read_date = $3, rating = $4, review = $5, cover_url = $6 WHERE id_book = $7 RETURNING *',
            [bookData.author_id, bookData.title, bookData.read_date, bookData.rating, bookData.review, bookData.cover_url, id]
        );
        return result.rows[0];
    } catch (error) {
        console.error(error);
        throw new Error("La mise a jour n'as pas fonctionné");
    }
}
export const deleteBookById = async (id:string):Promise<Book> =>{
    try {
        const result = await db.query(
            'DELETE FROM books WHERE id_book = $1 RETURNING *',
            [id]
        );
        return result.rows[0];
    } catch (error) {
        console.error(error);
        throw new Error("Le livre n'as pas été supprimé correctement");
    }
}
export const findAllBooksWithAutor = async ():Promise<BookAuthor[]>=>{
    try {
        const result = await db.query(
            'SELECT * FROM books INNER JOIN authors ON books.author_id = authors.id_author ORDER BY books.title ASC'
        );
        return result.rows;
    } catch (error) {
        console.error(error);
        throw new Error('Probleme rencontré lors de la récupération des livres');
    }
}