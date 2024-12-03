import './App.scss';
import { Route, Routes } from 'react-router-dom';
import * as Public_Page from './Imports/public.pages';
import Authentication_Check from './Authentication/Authentication_Check';
import * as Private_Page from './Imports/private.pages';

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route index element={<Public_Page.Index />} />
          <Route path='Sign_Up' element={ <Public_Page.Sign_up /> } />
          <Route path='Sign_In' element={ <Public_Page.Sign_In /> } />

          <Route
            path="/CE/*"
            element={
              <Authentication_Check>
                <Private_Page.CE />
              </Authentication_Check>
            }
          />
        </Routes>
      </main>
    </>
  )
};

export default App;
