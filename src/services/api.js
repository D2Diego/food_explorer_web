import axios from "axios";

export const api = axios.create({
    baseURL: "https://food-explorer-api-wu3e.onrender.com"
});