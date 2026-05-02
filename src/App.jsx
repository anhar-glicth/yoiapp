import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import Team from './pages/Team'
import Learning from './pages/Learning'
import About from './pages/About'
import Donation from './pages/Donation'
import Inovasi from './pages/Inovasi'
import Pelatihan from './pages/Pelatihan'
import LowonganKerja from './pages/LowonganKerja'
import ModuleDetail from './pages/ModuleDetail'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      <CustomCursor />
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--primary)',
          transformOrigin: '0%',
          zIndex: 9999
        }}
        style={{ scaleX }}
      />
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
            <Route path="/inovasi" element={<Inovasi />} />
            <Route path="/pelatihan" element={<Pelatihan />} />
            <Route path="/lowongan" element={<LowonganKerja />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </Router>
  )
}

export default App
