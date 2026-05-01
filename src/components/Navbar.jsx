import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Pendidikan', path: '/learning' },
    { name: 'Tim Kami', path: '/team' },
  ]

  return (
    <>
      <nav className="navbar">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: '#fff' }}>
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
          >
            Mulai
          </motion.button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
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
              background: 'rgba(15, 15, 15, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '24px',
              padding: '2rem',
              zIndex: 999,
              border: '1px solid var(--glass-border)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}
          >
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {links.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem', fontWeight: '600' }}
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
