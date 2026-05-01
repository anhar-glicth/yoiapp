import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Menu, X, Moon, Sun } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

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
    { name: 'Tim Kami', path: '/team' },
    { name: 'Dukungan', path: '/donation' },
  ]

  return (
    <>
      <nav className="navbar">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'var(--text-main)' }}>
          <div style={{ background: 'var(--primary)', padding: '0.4rem', borderRadius: '8px' }}>
            <Heart size={20} fill="#000" color="#000" />
          </div>
          <span style={{ fontSize: '1.4rem', fontWeight: '800', fontFamily: "'Outfit', sans-serif", letterSpacing: '-1px' }}>Yo'i</span>
        </Link>
        
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.path}><Link to={link.path} className="nav-link">{link.name}</Link></li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button 
            onClick={toggleTheme}
            style={{ 
              background: 'var(--glass)', 
              border: '1px solid var(--glass-border)', 
              color: 'var(--text-main)', 
              cursor: 'pointer', 
              padding: '0.5rem', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s'
            }}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link to="/learning" style={{ textDecoration: 'none' }}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem', cursor: 'pointer' }}
            >
              Mulai
            </motion.button>
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
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
              top: '5.5rem',
              left: '1rem',
              right: '1rem',
              background: 'var(--bg-card)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              padding: '2rem',
              zIndex: 999,
              border: '1px solid var(--glass-border)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
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
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .mobile-menu-btn {
          display: none;
        }
        @media (max-width: 640px) {
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar
