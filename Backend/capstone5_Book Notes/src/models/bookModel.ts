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
    db.end();
    return result.rows;
}