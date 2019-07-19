import axios from "axios";

// console.log(process.env.API_ENDPOINT);

export const api = axios.create({
  baseURL: process.env.API_ENDPOINT
});
