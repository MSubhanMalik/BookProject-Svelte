import axios from "axios";
import api from "./constants";

export const apiClient = axios.create({
    baseURL: api.url.baseURL,
})
