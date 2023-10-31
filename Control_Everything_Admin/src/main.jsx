// React and Scss
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App.jsx';
  import { BrowserRouter } from 'react-router-dom';
import DataBaseContext from './Contexts/DataBase_Context.jsx';
// React and Scss

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>  
    <DataBaseContext>
      <App />
    </DataBaseContext>
  </BrowserRouter>,
)
