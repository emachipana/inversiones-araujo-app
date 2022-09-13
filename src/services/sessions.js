import axios from "axios";
import { base_uri, token_key } from "../config";

export async function login(credentials) {
  const response = await axios.post(`${base_uri}/login`, credentials);
  const { token, ...user } = response.data;
  sessionStorage.setItem(token_key, token);
  return user;
}

export async function logout() {
  const token = sessionStorage.getItem(token_key);
  const response = await axios.delete(`${base_uri}/logout`, { headers: {
    Authorization: `Token token=${token}`
  } });
  sessionStorage.removeItem(token_key);
  return response.data;
}
