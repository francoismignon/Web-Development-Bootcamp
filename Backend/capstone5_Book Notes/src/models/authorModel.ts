import db from './db'

export interface Author{
    id_author: number;
    last_name: string;
    first_name: string;
}
export interface AuthorInput{
    last_name?: string;
    first_name?: string;
}

export const findAllAuthors = async ():Promise<Author[]> => {
    try {
        const result = await db.query('SELECT * FROM authors');
        return result.rows; 
    } catch (error) {
        console.error(error);
        throw new Error("Il y a eu un probleme lors de la recherche");
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
        console.error(error);
        throw new Error("probleme lors de la recherche");
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
        console.error(error);
        throw new Error("probleme lors de la création ");
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
        console.error(error);
        throw new Error("probleme lors de la mise a jour");
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
        console.error(error);
        throw new Error("L'auteur n'as pas été supprimé correctement");
    }
}