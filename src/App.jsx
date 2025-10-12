import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header.jsx'
import CharactersPage from './Pages/CharactersPage/CharactersPage.jsx'
import LocationsPage from './Pages/LocationsPage/LocationsPage.jsx'
import EpisodiesPage from './Pages/EpisodiesPage/EpisodiesPage.jsx'
import HomePage from './Pages/HomePage/HomePage.jsx'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router basename="/ApiSimpsons_2025IIg1_Garcia_Jhonnier">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Personajes' element={<CharactersPage />} />
          <Route path='/Lugares' element={<LocationsPage />} />
          <Route path='/Episodios' element={<EpisodiesPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
