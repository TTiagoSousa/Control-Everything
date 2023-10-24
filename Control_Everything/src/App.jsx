// React and Scss
  import React from 'react';
  import './Styles/Global.scss'
  import { Route, Routes, useLocation } from 'react-router-dom';
// React and Scss

// Internal Components
  import * as Public_Page from './Imports/public.pages';
  import * as Container from './Imports/containers';
// Internal Components

function App() {

  const location = useLocation();

  const Containers_Location = location.pathname === '/';

  return (
    <main>

      {Containers_Location && (
        <> 
          <Container.Custumize_Sidebar />
        </>
      )}

      <Routes>
        <Route index element={ <Public_Page.Index /> } />
        <Route path='Auth' element={ <Public_Page.Auth /> } />
      </Routes>
    </main>
  )
}

export default App;