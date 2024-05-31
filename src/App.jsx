import React from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Work from './Pages/Work';
import Contract from './Pages/Contract';
import Footer from './components/Footer';

function App()  {
  return <div className='App'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Work' element={<Work/>}/>
      <Route path='/Contact' element={<Contract/>}/>
    </Routes>
    <Footer/>
  </div>

}

export default App
