import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Menu, X, Moon, Sun, User } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const links = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Pendidikan', path: '/learning' },
    { name: 'Pelatihan', path: '/pelatihan' },
    { name: 'Lowongan Kerja', path: '/lowongan' },
    { name: 'Tim Kami', path: '/team' },
    { name: 'Inovasi', path: '/inovasi' },
  ]

  return (
    <>
      <nav className="navbar">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <div style={{ 
            background: 'var(--accent)', 
            padding: '0.4rem', 
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Heart size={22} fill="var(--primary)" color="var(--primary)" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary)', fontFamily: "'Outfit', sans-serif" }}>Yo'i</span>
            <span style={{ fontSize: '0.7rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Foundation</span>
          </div>
        </Link>
        
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className="nav-link" style={{ fontSize: '0.95rem', fontWeight: '600' }}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="nav-cta-group" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: '#f1f5f9', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--text-main)'
              }}>
                <User size={20} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Join Us Now</span>
                <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>Support a Child</span>
              </div>
            </div>
            
            <Link to="/donation" style={{ textDecoration: 'none' }}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn"
                style={{ 
                  background: 'var(--secondary)', 
                  color: 'white', 
                  padding: '0.8rem 1.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                Donate Now <Heart size={16} fill="white" />
              </motion.button>
            </Link>
          </div>
          
          <button 
            onClick={toggleTheme}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--text-muted)', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer', display: 'none' }}
            className="mobile-menu-btn"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '5rem',
              left: '1rem',
              right: '1rem',
              background: 'var(--bg-card)',
              borderRadius: '24px',
              padding: '2rem',
              zIndex: 999,
              border: '1px solid var(--glass-border)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
            }}
          >
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {links.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/donation" className="btn" style={{ background: 'var(--secondary)', color: 'white', width: '100%', marginTop: '1rem' }}>
                  Donate Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .nav-links { display: none; }
          .nav-cta-group { display: none; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}

export default Navbar
