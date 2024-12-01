import './App.scss';
import { Route, Routes } from 'react-router-dom';
import * as Public_Page from './Imports/public.pages';

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route index element={<Public_Page.Index />} />
          <Route path='Sign_Up' element={ <Public_Page.Sign_up /> } />
        </Routes>
      </main>
    </>
  )
};

export default App;
