import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Menu, X, Moon, Sun, User, ChevronDown, Home, GraduationCap, Briefcase, Search, MoreHorizontal } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [moreOpen, setMoreOpen] = useState(false)
  const moreRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const handler = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => { setIsOpen(false); setMoreOpen(false) }, [location])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  const primaryLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Pendidikan', path: '/learning' },
    { name: 'Siap Kerja', path: '/pelatihan' },
    { name: 'Lowongan Kerja', path: '/lowongan' },
    { name: 'Inovasi', path: '/inovasi' },
  ]

  const moreLinks = [
    { name: 'Tentang Kami', path: '/about', icon: '🏛️' },
    { name: 'Tim Kami', path: '/team', icon: '👥' },
  ]

  const allLinks = [...primaryLinks, ...moreLinks]

  const isActive = (path) => location.pathname === path

  const mobileNavItems = [
    { name: 'Beranda', path: '/', icon: <Home size={20} /> },
    { name: 'Pendidikan', path: '/learning', icon: <GraduationCap size={20} /> },
    { name: 'Siap Kerja', path: '/pelatihan', icon: <Briefcase size={20} /> },
    { name: 'Lowongan', path: '/lowongan', icon: <Search size={20} /> },
    { name: 'Menu', path: '#', icon: <MoreHorizontal size={20} />, action: () => setIsOpen(true) },
  ]

  return (
    <>
      <nav className="navbar" style={{ padding: '0 3%' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            background: 'var(--accent)',
            padding: '0.4rem',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Heart size={20} fill="var(--primary)" color="var(--primary)" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary)', fontFamily: "'Outfit', sans-serif" }}>Yo'i</span>
            <span style={{ fontSize: '0.6rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Foundation</span>
          </div>
        </Link>

        <ul className="nav-links" style={{ gap: '0.3rem' }}>
          {primaryLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="nav-link"
                style={{
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  padding: '0.45rem 0.7rem',
                  borderRadius: '8px',
                  color: isActive(link.path) ? 'var(--primary)' : 'var(--text-muted)',
                  background: isActive(link.path) ? 'var(--primary-glow)' : 'transparent',
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li ref={moreRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setMoreOpen(p => !p)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.3rem',
                padding: '0.45rem 0.7rem', borderRadius: '8px', border: 'none',
                background: moreOpen ? 'var(--primary-glow)' : 'transparent',
                color: moreOpen ? 'var(--primary)' : 'var(--text-muted)',
                cursor: 'pointer', fontWeight: '600', fontSize: '0.82rem',
                whiteSpace: 'nowrap', transition: 'all 0.2s'
              }}
            >
              Lainnya
              <motion.span animate={{ rotate: moreOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={14} />
              </motion.span>
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    position: 'absolute', top: 'calc(100% + 10px)', left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--bg-card)', borderRadius: '16px',
                    border: '1px solid var(--glass-border)',
                    boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
                    minWidth: '200px', zIndex: 100, overflow: 'hidden',
                  }}
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.8rem',
                        padding: '0.9rem 1.2rem', textDecoration: 'none',
                        color: isActive(link.path) ? 'var(--primary)' : 'var(--text-main)',
                        background: isActive(link.path) ? 'var(--primary-glow)' : 'transparent',
                        fontWeight: '600', fontSize: '0.9rem',
                        transition: 'all 0.15s', borderBottom: '1px solid var(--glass-border)',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--glass)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = isActive(link.path) ? 'var(--primary-glow)' : 'transparent' }}
                    >
                      <span style={{ fontSize: '1.2rem' }}>{link.icon}</span>
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexShrink: 0 }}>
          <div className="nav-cta-group" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '34px', height: '34px', borderRadius: '50%',
              background: '#f1f5f9', display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: 'var(--text-main)', flexShrink: 0
            }}>
              <User size={17} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>Join Us Now</span>
              <span style={{ fontSize: '0.78rem', fontWeight: '700', whiteSpace: 'nowrap' }}>Support a Child</span>
            </div>
          </div>

          <Link to="/donation" className="desktop-only" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn"
              style={{
                background: 'var(--secondary)', color: 'white',
                padding: '0.65rem 1.3rem', fontSize: '0.82rem',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                whiteSpace: 'nowrap'
              }}
            >
              Donate Now <Heart size={14} fill="white" />
            </motion.button>
          </Link>

          <button
            onClick={toggleTheme}
            style={{
              background: 'none', border: 'none', color: 'var(--text-muted)',
              cursor: 'pointer', display: 'flex', alignItems: 'center',
              padding: '0.4rem', borderRadius: '8px', flexShrink: 0
            }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <div className="mobile-bottom-nav">
        {mobileNavItems.map((item, idx) => (
          item.action ? (
            <button key={idx} onClick={item.action} className={`mobile-nav-item ${isOpen ? 'active' : ''}`} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              {item.icon}
              <span>{item.name}</span>
            </button>
          ) : (
            <Link key={idx} to={item.path} className={`mobile-nav-item ${isActive(item.path) ? 'active' : ''}`}>
              {item.icon}
              <span>{item.name}</span>
            </Link>
          )
        ))}
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)',
              zIndex: 2000, display: 'flex', justifyContent: 'flex-end'
            }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                width: '80%', maxWidth: '300px', height: '100%', background: 'var(--bg-card)',
                padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem'
              }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: '800', color: 'var(--primary)', fontSize: '1.2rem' }}>Menu</span>
                <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-main)' }}>
                  <X size={24} />
                </button>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {allLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.8rem',
                        padding: '1rem', borderRadius: '12px',
                        color: isActive(link.path) ? 'var(--primary)' : 'var(--text-main)',
                        textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600',
                        background: isActive(link.path) ? 'var(--primary-glow)' : 'transparent',
                      }}
                    >
                      {link.icon && <span>{link.icon}</span>}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 'auto' }}>
                <Link to="/donation" className="btn" style={{ background: 'var(--secondary)', color: 'white', width: '100%', justifyContent: 'center' }}>
                  Donate Now <Heart size={16} fill="white" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1200px) {
          .nav-cta-group { display: none !important; }
        }
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .desktop-only { display: none !important; }
        }
        .nav-link:hover {
          color: var(--primary) !important;
          background: var(--primary-glow) !important;
        }
      `}</style>
    </>
  )
}

export default Navbar
