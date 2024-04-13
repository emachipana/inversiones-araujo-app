import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from '@emotion/react';
import { RESET } from './styles';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={RESET} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
