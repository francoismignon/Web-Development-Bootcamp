import db from './db'

export interface Author{
    id_author: number;
    last_name: string;
    first_name?: string;
}
export interface AuthorInput{
    last_name: string;
    first_name?: string;
}

export const createAuthor = async (author:AuthorInput):Promise<Author> =>{
    try {
        const result = await db.query(
            'INSERT INTO authors (last_name, first_name) VALUES ($1, $2) RETURNING *',
            [author.last_name, author.first_name]
        );
        return result.rows[0];
    } catch (error) {
        throw new Error("Impossible de créer l'Autheur en base de donnée: ");
    }
}