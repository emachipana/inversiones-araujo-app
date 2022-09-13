import { apiFetch } from "./api-fetch";

export async function getUser() {
  return await apiFetch("profile");
}

export async function updateUser(data) {
  return await apiFetch("profile", { body: data, method: "PATCH" });
}
