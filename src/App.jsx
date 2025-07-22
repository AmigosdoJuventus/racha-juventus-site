import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Temporada from './components/pages/Temporada'
import Atletas from './components/pages/Atletas'
import AtletaProfile from './components/pages/AtletaProfile'
import AreaSocio from './components/pages/AreaSocio'
import AreaAtleta from './components/pages/AreaAtleta'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background">
        <Header user={user} setUser={setUser} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/temporada" element={<Temporada />} />
            <Route path="/atletas" element={<Atletas />} />
            <Route path="/atleta/:id" element={<AtletaProfile />} />
            <Route path="/area-socio" element={<AreaSocio setUser={setUser} />} />
            <Route path="/area-atleta" element={<AreaAtleta user={user} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

