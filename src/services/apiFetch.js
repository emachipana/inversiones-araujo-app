import { BASE_API_URI, TOKEN_KEY } from "../config";

async function apiFetch(endpoint, { method, headers, body } = {}) {
  const token = localStorage.getItem(TOKEN_KEY);

  if(token) {
    headers = {
      "Authorization": `Bearer ${token}`,
      ...headers
    }
  }

  if(body) {
    headers = {
      "Content-Type": "application/json",
      ...headers
    }
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body): null
  }

  const response = await fetch(`${BASE_API_URI}/${endpoint}`, config);

  let data;
  if(!response.ok) {
    try {
      data = await response.json();
    }catch(e) {
      console.error(e);

      throw new Error(response.statusText);
    }

    throw new Error(JSON.stringify(data.data.message));
  }

  try {
    data = await response.json();
  }catch(e) {
    data = response.statusText;
  }

  return data;
}

export default apiFetch;
