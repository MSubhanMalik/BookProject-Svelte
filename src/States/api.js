import axios from "axios";
import api from "./constants.js";

export const apiClient = axios.create({
    baseURL: api?.url.baseUrl,
    withCredentials: true,
})
