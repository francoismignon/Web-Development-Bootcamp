import db from './db';

export interface Book{
    id_book: number,
    author_id: number,
    title: string,
    read_date: object,
    rating: number,
    review: string,
    cover_url?: string | null,
    id_author: number,
    last_name: string,
    first_name: string
}

export const fetchAllBooks = async () => {
    const result = await db.query('SELECT * FROM books INNER JOIN authors ON books.author_id = authors.id_author');
    return result.rows;
}

export const updateBook = async (book:Book)=>{
    await db.query('UPDATE books SET cover_url = $1 WHERE title = $2', [book.cover_url, book.title]);
}

export const fetchBookById = async (id:string)=>{
    const result = await db.query('SELECT * FROM books INNER JOIN authors ON books.author_id = authors.id_author WHERE id_book = $1', [id]);
    return result.rows[0];
}