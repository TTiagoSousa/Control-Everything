import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import ThemeContext from './Contexts/Theme_Context.jsx';
import './i18n/index.js';
import DataBaseContext from './Contexts/DataBase_Context.jsx';
import NavsContext from './Contexts/Navs_Context.jsx';
import GlobalContext from './Contexts/Global_Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeContext>
      <NavsContext>
        <GlobalContext>
          <DataBaseContext>
            <App />
          </DataBaseContext>
        </GlobalContext>
      </NavsContext>
    </ThemeContext>
  </BrowserRouter>,
)
