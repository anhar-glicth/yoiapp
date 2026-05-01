import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Team from './pages/Team'
import Learning from './pages/Learning'
import About from './pages/About'
import Donation from './pages/Donation'
import ModuleDetail from './pages/ModuleDetail'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/learning/:moduleId" element={<ModuleDetail />} />
            <Route path="/donation" element={<Donation />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </Router>
  )
}

export default App
