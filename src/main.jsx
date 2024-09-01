import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import ThemeContext from './Contexts/Theme_Context.jsx';
import './i18n/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeContext>
      <App />
    </ThemeContext>
  </BrowserRouter>,
)
