import { Route, Routes } from 'react-router-dom';
import './App.scss';
import * as Public_Page from './Imports/public.pages';
import { DataBaseState } from './Contexts/DataBase_Context';

function App() {

  const { authenticated } = DataBaseState();

  return (
    <>
      <main>
        <Routes>
          <Route index element={<Public_Page.Index />} />
          <Route path='Sign_Up' element={ authenticated ? <Navigate to="/" /> :  <Public_Page.Sign_Up /> } />
          <Route path='Sign_In' element={ authenticated ? <Navigate to="/" /> :  <Public_Page.Sign_In /> } />
        </Routes>
      </main>
    </>
  )
};

export default App;
