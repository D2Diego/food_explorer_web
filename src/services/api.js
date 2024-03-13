import axios from "axios";

export const api = axios.create({
    baseURL: "https://food-explorer-api-dz5z.onrender.com"
});