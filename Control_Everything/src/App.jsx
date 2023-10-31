// React and Scss
  import React from 'react';
  import './Styles/Global.scss'
  import { Route, Routes, useLocation } from 'react-router-dom';
// React and Scss

// Internal Components
  import * as Public_Page from './Imports/public.pages';
  import * as Container from './Imports/containers';
  import * as Intermediate_Pages from './Imports/intermediate.pages'
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
        <Route path="activate/:token" element={ <Intermediate_Pages.ActivateAccount /> } />
        <Route path='Recover_Password/:token' element={ <Public_Page.Recover_Password/> } />
      </Routes>
    </main>
  )
}

export default App;