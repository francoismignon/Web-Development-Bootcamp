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

export const findAllAuthors = async () => {
    try {
        const result = await db.query('SELECT * FROM authors');
        return result.rows; 
    } catch (error) {
        throw new Error("Aucun auteur n'as été trouvé");
    }
}
export const findAuthorById = async(id:number):Promise<Author | null> =>{
    try {
        const result = await db.query(
            'SELECT * FROM authors WHERE id_author = $1',
            [id]
        );
        return result.rows[0] || null;
    } catch (error) {
        throw new Error("l'auteur n'as pas été trouvé");
    }
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
export const updateAuthorById = async (id:number, authorData:AuthorInput):Promise<Author> =>{
    try {
        const result = await db.query(
            'UPDATE authors SET last_name = $1, first_name = $2 WHERE id_author = $3 RETURNING *',
            [authorData.last_name, authorData.first_name, id]
        );
        return result.rows[0];
    } catch (error) {
        throw new Error("La mise a jour n'as pas fonctionné");
    }
}
export const deleteAuthorById = async (id:number):Promise<Author | null> =>{
    try {
        const result = await db.query(
            'DELETE FROM authors WHERE id_author = $1',
            [id]
        );
        return result.rows[0] || null;
    } catch (error) {
        throw new Error("L'auteur n'as pas été supprimé correctement");
    }
}