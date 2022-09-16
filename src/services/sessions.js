import { token_key } from "../config";
import { apiFetch } from "./api-fetch";

export async function login(credentials) {
  const response = await apiFetch("login", { body: credentials });
  const { token, ...user } = response;
  if (user.user_type === "client") throw new Error("Tienes que ser administrador para ingresar");
  sessionStorage.setItem(token_key, token);
  return user;
}

export async function logout() {
  await apiFetch("logout", { method: "DELETE" });
  sessionStorage.removeItem(token_key);
}
