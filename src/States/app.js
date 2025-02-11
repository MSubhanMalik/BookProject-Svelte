import { writable } from "svelte/store";
import api from "../../../Client/constants";
import axios from "axios";
import { apiClient } from './../../api';

// Variables State
const loading = writable(false);
const books = writable([]);

export { loading, books };

// Functions

export const getAllBooks = async () => {
  loading.set(true);
  try {
    const response = apiClient.get(api.endpoints.GET_ALL_BOOKS);
    let data = (await response).data;
    data = data.map(async (book) => {
      let img = await getImage(book?.imageId);
      book.imageId = img;
      return book;
    });
    data = await Promise.all(data);
    books.set(data);
  } catch (e) {
    console.log("Error Here", e);
  } finally {
    loading.set(false);
  }
};

export const getGoogleBooks = async (title, authorName, category) => {
  loading.set(true);
  try {
    return await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${
        title || ""
      }+inauthor:${authorName || ""}+subject:${
        category || ""
      }&key=AIzaSyAWOV-usR3dqEWOhJrW5teLnbuj-aO7F8Y`
    );
  } catch (error) {
    console.log("Error: ", error.message)
  }
  finally{
    loading.set(false)
  }
 
};

export const sanitizeData = (books) => {
  if (books?.length > 0) {
    return books.map((book) => {
      book = book.volumeInfo;
      book.title = book.title;
      book.authorName = book.authors ? book?.authors[0] : "";
      book.imageId = book?.imageLinks?.thumbnail;
      if (`${book.publishedDate}`.includes("-")) {
        book.publishedDate = book.publishedDate.split("-")[0];
      }
      book.publishYear = book.publishedDate;
      return book;
    });
  }
  else return [];
};

export const getImage = async (_id) => {
  try {
    if (`${_id}`.includes("google")) {
      return _id;
    }
    if (!_id) {
      return null;
    }
    const response = await apiClient.get(
      api.endpoints.GET_IMAGE.replace(":id", _id)
    );
    return response.data;
  } catch (e) {
    console.log(e.message, _id);
  }
};

export const deleteBook = async (_id) => {
  loading.set(true);
  try {
    await apiClient.delete(api.endpoints.DELETE_BOOK, { data: { _id } });
    await getAllBooks();
  } catch (error) {
    console.log(error);
  } finally {
    loading.set(false);
  }
};

export const createBook = async (formData) => {
  loading.set(true);
  try {
    const res = await apiClient.post(api.endpoints.CREATE_BOOK, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    await getAllBooks();
  } catch (error) {
    console.log(error);
  } finally {
    loading.set(false);
  }
};

export const updateBook = async (formData) => {
  loading.set(true);
  try {
    const res = await apiClient.put(api.endpoints.UPDATE_BOOK, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    await getAllBooks();
  } catch (error) {
    console.log(error);
  } finally {
    loading.set(false);
  }
};
