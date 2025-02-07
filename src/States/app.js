import { writable } from "svelte/store";
import apiClient from "./../../../Client/api";
import api from "../../../Client/constants";

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
      book.imageUrl = img;
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
    console.log(_id);
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
