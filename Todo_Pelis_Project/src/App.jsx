import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Movies from './page/Movies'
import TVShows from './page/TVShows'
import Documentales from './page/Documentales'
import Contacto from './page/Contacto'

import './App.css'

function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Movies" element={<Movies/>} />
        <Route path="/TVShows" element={<TVShows/>} />
        <Route path="/Documentales" element={<Documentales/>} />
        <Route path="/Contacto" element={<Contacto/>} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
