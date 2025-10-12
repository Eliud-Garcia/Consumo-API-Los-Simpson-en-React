import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header.jsx'
import CharactersPage from './Pages/CharactersPage/CharactersPage.jsx'
import LocationsPage from './Pages/LocationsPage/LocationsPage.jsx'
import EpisodiesPage from './Pages/EpisodiesPage/EpisodiesPage.jsx'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/Personajes' element={<CharactersPage />} />
          <Route path='/Lugares' element={<LocationsPage />} />
          <Route path='/Episodios' element={<EpisodiesPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
