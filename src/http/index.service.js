import axios from "axios";
const baseURL = "http://65.0.15.182:8081/catalogapi/v1";

export const publicRequest = axios.create({
    baseURL
});

export const privateRequest = axios.create({
    baseURL,
    headers: { Authorization: `Bearer <token>` },
});