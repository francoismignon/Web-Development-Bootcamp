import axios, { AxiosResponse } from "axios";

export async function fetchBookCover(title: string): Promise<string> {
  const API_URL = "https://openlibrary.org/search.json";
  try {
    const bookURL: AxiosResponse = await axios.get(`${API_URL}`, {
      params: {
        title: title,
        // author: book.last_name,
      },
    });

    const doc = bookURL.data.docs.find(
      (doc: { cover_edition_key: any }) => doc.cover_edition_key
    );
    const olid = doc.cover_edition_key;
    //cree mon URL pour qui point vers l'image de la couverture du livre
    const bookCoverURL:string = `https://covers.openlibrary.org/b/olid/${olid}-M.jpg`;
    return bookCoverURL;
  } catch (error) {
    console.log(error);
    return "";
  }
}
