import { apiFetch } from "./api-fetch";

export async function get(endpoint) {
 return await apiFetch(endpoint)
}

export async function post(endpoint, data) {
  return await apiFetch(endpoint, { body: data });
}

export async function update(endpoint, id, data) {
  return await apiFetch(
    ( id ? `${endpoint}/${id}` : endpoint ),
    { body: data, method: "PATCH" });
}

export async function destroy(endpoint, id) {
  return await apiFetch(`${endpoint}/${id}`, { method: "DELETE" });
}
