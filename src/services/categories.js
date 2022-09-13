import { apiFetch } from "./api-fetch";

export async function getCategories() {
  return await apiFetch("categories");
}

export async function createCategory(data) {
  return await apiFetch("categories", { body: data });
}

export async function updateCategory(id, data) {
  return await apiFetch(`categories/${id}`, { body: data, method: "PATCH" });
}

export async function deleteCategory(id) {
  return await apiFetch(`categories/${id}`, { method: "DELETE" });
}
