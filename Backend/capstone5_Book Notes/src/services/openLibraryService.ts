import axios, { AxiosResponse } from "axios";
import { Book } from "../models/bookModel";

export async function fetchBookCover(book: Book): Promise<Book> {
  const API_URL = "https://openlibrary.org/search.json";
  const bookURL: AxiosResponse = await axios.get(`${API_URL}`, {
    params: { 
        title: book.title,
        author: book.last_name
     },
  });
  try {
    console.log(bookURL.data.docs[0].cover_edition_key);
  } catch (error) {
    console.log("le livre n'as pas de covereditionkey")
  }
  
  return book;
}
