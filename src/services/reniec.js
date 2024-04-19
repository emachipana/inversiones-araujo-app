import { RENIEC_TOKEN, RENIEC_URI } from "../config";

async function getPersonData (dni) {
  const response = await fetch(`${RENIEC_URI}/${dni}?token=${RENIEC_TOKEN}`);

  return await response.json();
}

export default getPersonData;
