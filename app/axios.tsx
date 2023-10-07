import axios from "axios";

export const baseUrl = axios.create({
  baseURL: import.meta.env.BASE_URL || '',
});
