import { writable } from "svelte/store";
import apiClient from './../../../Client/api';
import api from "../../../Client/constants";

// Variables State 
let loading = writable();
const books = writable([]);

export {
    loading, 
    books
}

// Functions 

export const getAllBooks = async() => {
    loading.set = true;
    try {
        const response = apiClient.get(api.endpoints.GET_ALL_BOOKS);
        const data = (await response).data;
        books.set(data);
    } catch (e) {
        console.log("Error Here", e);
    }
    finally{
        loading.set = false;
    }
}

