import axios from "axios";
import { api, url } from "../../constants";

export const apiClient = axios.create({
    baseURL: url.baseURL,
})
