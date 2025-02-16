import db from './db';

export interface Book{
    id_book: number,
    author_id: number,
    title: string,
    read_date: object,
    rating: number,
    review: string,
    cover_url: string,
    id_author: number,
    last_name: string,
    first_name: string
}

export const fetchAllBooks = async () => {
    const result = await db.query('SELECT * FROM books INNER JOIN authors ON books.author_id = authors.id_author');
    return result.rows;
}

export const updateBook = async (id: string, data: { id_book: any; author_id?: any; title?: any; read_date?: string; rating?: number; review?: string; cover_url?: any; id_author?: any; last_name?: any; first_name?: any; })=>{
    await db.query('UPDATE books SET cover_url = $1 WHERE id_book = $2', [data.id_book, id]);
}

export const fetchBookById = async (id:string)=>{
    const result = await db.query('SELECT * FROM books INNER JOIN authors ON books.author_id = authors.id_author WHERE id_book = $1', [id]);
    return result.rows[0];
}