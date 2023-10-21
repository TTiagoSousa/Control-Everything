// React and Scss
  import React from 'react';
  import './Styles/Global.scss'
  import { Route, Routes, useLocation } from 'react-router-dom';
// React and Scss

// Internal Components
  import * as Public_Page from './Imports/public.pages';
// Internal Components

function App() {

  return (
    <main>
      <Routes>
        <Route index element={ <Public_Page.Index /> } />
        <Route path='Login' element={ <Public_Page.Index /> } />
      </Routes>
    </main>
  )
}

export default App;