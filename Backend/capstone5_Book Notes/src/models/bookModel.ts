import db from './db';

export interface Book{
    id_book: number;
    author_id: number;
    title: string;
    read_date?: Date;
    rating?: number;
    review?: string;
    cover_url?: string;
}
export interface BookInput{
    author_id: number;
    title: string;
    read_date?: Date;
    rating?: number;
    review?: string;
    cover_url?: string;
}

export const findAllBooks = async () => {
    try {
        const result = await db.query('SELECT * FROM books');
        return result.rows;
    } catch (error) {
        throw new Error("Aucun livre n'as été trouvé");
    }
}
export const findBookById = async(id:number):Promise<Book | null> =>{
    try {
        const result = await db.query(
            'SELECT * FROM books WHERE id_book = $1',
            [id]
        );
        return result.rows[0] || null;
    } catch (error) {
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
        throw new Error("Impossible de créer le livre en base.");
    }    
}
export const updateBookById = async (id:number, bookData:BookInput):Promise<Book> =>{
    try {
        const result = await db.query(
            'UPDATE books SET author_id = $1, title = $2, read_date = $3, rating = $4, review = $5, cover_url = $6 WHERE id_book = $7 RETURNING *',
            [bookData.author_id, bookData.title, bookData.read_date, bookData.rating, bookData.review, bookData.cover_url, id]
        );
        return result.rows[0];
    } catch (error) {
        throw new Error("La mise a jour n'as pas fonctionné");
    }
}
export const deleteBookById = async (id:number):Promise<Book | null> =>{
    try {
        const result = await db.query(
            'DELETE FROM books WHERE id_book = $1',
            [id]
        );
        return result.rows[0] || null;
    } catch (error) {
        throw new Error("Le livre n'as pas été supprimé correctement");
    }
}