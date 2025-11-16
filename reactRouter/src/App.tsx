import React from 'react'

import Navbar from './components/Navbar';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Rootlayout from './layout/Rootlayout';


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout />}>
        
        <Route path='products' element={<Products />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        
     <Route />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  );
};

export default (App);