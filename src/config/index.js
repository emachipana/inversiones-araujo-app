const BASE_API_URI = process.env.REACT_APP_BASE_API_URI;
const TOKEN_KEY = process.env.REACT_APP_TOKEN_KEY;
const RENIEC_URI = process.env.REACT_APP_RENIEC_URI;
const RENIEC_TOKEN = process.env.REACT_APP_RENIEC_TOKEN;

const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

export { BASE_API_URI, TOKEN_KEY, RENIEC_TOKEN, RENIEC_URI, FIREBASE_CONFIG };
