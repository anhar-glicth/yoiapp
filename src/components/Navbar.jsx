import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Menu, X, Moon, Sun, User, ChevronDown, Home, GraduationCap, Briefcase, Search, MoreHorizontal, Sparkles } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [moreOpen, setMoreOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const moreRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    { name: 'Pendidikan', path: '/learning' },
    { name: 'Siap Kerja', path: '/pelatihan' },
    { name: 'Lowongan', path: '/lowongan' },
    { name: 'Inovasi', path: '/inovasi' },
  ]

  const moreLinks = [
    { name: 'Tentang Kami', path: '/about', icon: '🏛️' },
    { name: 'Tim Kami', path: '/team', icon: '👥' },
    { name: 'Kontak', path: '/contact', icon: '📞' },
  ]

  const allLinks = [{ name: 'Beranda', path: '/', icon: '🏠' }, ...primaryLinks, ...moreLinks]

  const isActive = (path) => location.pathname === path

  const mobileNavItems = [
    { name: 'Home', path: '/', icon: <Home size={22} /> },
    { name: 'Akademi', path: '/learning', icon: <GraduationCap size={22} /> },
    { name: 'Karir', path: '/lowongan', icon: <Briefcase size={22} /> },
    { name: 'Inovasi', path: '/inovasi', icon: <Sparkles size={22} /> },
    { name: 'Menu', path: '#', icon: <MoreHorizontal size={22} />, action: () => setIsOpen(true) },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{ 
        padding: scrolled ? '0.8rem 5%' : '1.5rem 5%',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
          <div style={{
            background: 'var(--primary)',
            width: '40px', height: '40px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 15px var(--primary-glow)'
          }}>
            <Heart size={22} fill="#fff" color="#fff" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--text-main)', fontFamily: "'Outfit', sans-serif" }}>Yo'i</span>
            <span style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Foundation</span>
          </div>
        </Link>

        <ul className="nav-links" style={{ gap: '0.5rem' }}>
          {primaryLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`nav-link-item ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li ref={moreRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setMoreOpen(p => !p)}
              className={`nav-link-item ${moreOpen ? 'active' : ''}`}
              style={{ border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              Lainnya <ChevronDown size={14} style={{ transform: moreOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  className="dropdown-menu"
                >
                  {moreLinks.map((link) => (
                    <Link key={link.path} to={link.path} className="dropdown-item">
                      <span style={{ fontSize: '1.1rem' }}>{link.icon}</span>
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          <button onClick={toggleTheme} className="icon-btn">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Link to="/donation" className="desktop-only">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              style={{ borderRadius: '12px', padding: '0.7rem 1.5rem', fontSize: '0.9rem', fontWeight: '800' }}
            >
              Donasi <Heart size={16} fill="currentColor" style={{ marginLeft: '0.5rem' }} />
            </motion.button>
          </Link>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar - Native App Style */}
      <div className="mobile-bottom-nav">
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
          {mobileNavItems.map((item, idx) => (
            item.action ? (
              <button key={idx} onClick={item.action} className={`mobile-nav-btn ${isOpen ? 'active' : ''}`}>
                <div className="icon-wrap">{item.icon}</div>
                <span>{item.name}</span>
              </button>
            ) : (
              <Link key={idx} to={item.path} className={`mobile-nav-btn ${isActive(item.path) ? 'active' : ''}`}>
                <div className="icon-wrap">{item.icon}</div>
                <span>{item.name}</span>
              </Link>
            )
          ))}
        </div>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-overlay"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="mobile-drawer"
              onClick={e => e.stopPropagation()}
            >
              <div className="drawer-handle" />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '900' }}>Navigasi</h2>
                <button onClick={() => setIsOpen(false)} className="icon-btn"><X size={24} /></button>
              </div>

              <div className="drawer-links">
                {allLinks.map((link) => (
                  <Link key={link.path} to={link.path} className={`drawer-link-item ${isActive(link.path) ? 'active' : ''}`}>
                    <span style={{ fontSize: '1.4rem' }}>{link.icon}</span>
                    {link.name}
                  </Link>
                ))}
              </div>

              <Link to="/donation" className="btn btn-primary" style={{ width: '100%', marginTop: 'auto', padding: '1.2rem', fontSize: '1.1rem', borderRadius: '18px' }}>
                Donasi Sekarang <Heart size={20} fill="currentColor" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar.scrolled {
          background: var(--bg-card);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .nav-link-item {
          padding: 0.6rem 1.1rem;
          border-radius: 12px;
          text-decoration: none;
          color: var(--text-muted);
          font-weight: 700;
          font-size: 0.9rem;
          transition: all 0.3s;
        }
        .nav-link-item:hover, .nav-link-item.active {
          color: var(--primary);
          background: var(--primary-glow);
        }
        .dropdown-menu {
          position: absolute;
          top: calc(100% + 15px);
          right: 0;
          background: var(--bg-card);
          border-radius: 20px;
          border: 1px solid var(--glass-border);
          padding: 0.8rem;
          min-width: 220px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          z-index: 1000;
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.2rem;
          text-decoration: none;
          color: var(--text-main);
          font-weight: 700;
          border-radius: 12px;
          transition: 0.2s;
        }
        .dropdown-item:hover {
          background: var(--primary-glow);
          color: var(--primary);
        }
        .icon-btn {
          width: 44px; height: 44px; border-radius: 12px;
          background: var(--bg-card); border: 1px solid var(--glass-border);
          color: var(--text-main); cursor: pointer;
          display: flex; alignItems: center; justifyContent: center;
          transition: all 0.3s;
        }
        .icon-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .mobile-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.4);
          backdrop-filter: blur(8px); z-index: 2000;
          display: flex; align-items: flex-end;
        }
        .mobile-drawer {
          width: 100%; background: var(--bg-card);
          border-radius: 30px 30px 0 0; padding: 2rem;
          height: 85vh; display: flex; flexDirection: column;
        }
        .drawer-handle {
          width: 40px; height: 5px; background: var(--glass-border);
          border-radius: 10px; margin: -1rem auto 2rem;
        }
        .drawer-links {
          display: grid; grid-template-columns: 1fr; gap: 0.8rem;
        }
        .drawer-link-item {
          display: flex; alignItems: center; gap: 1.2rem;
          padding: 1.2rem; border-radius: 18px;
          text-decoration: none; color: var(--text-main);
          font-weight: 800; font-size: 1.15rem;
          background: var(--bg-dark); border: 1px solid var(--glass-border);
        }
        .drawer-link-item.active {
          background: var(--primary-glow); color: var(--primary); border-color: var(--primary);
        }
        .mobile-nav-btn {
          display: flex; flex-direction: column; align-items: center;
          gap: 0.4rem; color: var(--text-muted); text-decoration: none;
          background: none; border: none; font-weight: 700; font-size: 0.65rem;
        }
        .mobile-nav-btn.active { color: var(--primary); }
        .mobile-nav-btn .icon-wrap {
          width: 42px; height: 32px; border-radius: 12px;
          display: flex; alignItems: center; justifyContent: center;
          transition: 0.3s;
        }
        .mobile-nav-btn.active .icon-wrap { background: var(--primary-glow); }
        @media (max-width: 900px) {
          .nav-links, .desktop-only { display: none !important; }
        }
      `}</style>
    </>
  )
}

export default Navbar
