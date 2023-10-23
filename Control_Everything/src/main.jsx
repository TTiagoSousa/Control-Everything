// React and Scss
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App.jsx';
  import { BrowserRouter } from 'react-router-dom';
// React and Scss

// Contexts
  import ThemeContext from './Contexts/Theme_Context.jsx';
  import NavsContext from './Contexts/Navs_Context.jsx';
// Contexts

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>  
    <ThemeContext>
      <NavsContext>
        <App />
      </NavsContext>
    </ThemeContext>
  </BrowserRouter>,
)
