import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Menu, X, Moon, Sun, User, ChevronDown, Home, GraduationCap, Briefcase, Search, MoreHorizontal, Sparkles, Globe, Users, Mail, Hospital, Scale, Shield, Fingerprint, Landmark, Palmtree, Church, Navigation } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [layananOpen, setLayananOpen] = useState(false)
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const layananRef = useRef(null)
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
      if (layananRef.current && !layananRef.current.contains(e.target)) setLayananOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => { setIsOpen(false); setMoreOpen(false); setLayananOpen(false) }, [location])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  const primaryLinks = [
    { name: 'Pendidikan', path: '/learning' },
    { name: 'Siap Kerja', path: '/pelatihan' },
    { name: 'Lowongan', path: '/lowongan' },
    { name: 'Inovasi', path: '/inovasi' },
  ]

  const layananLinks = [
    { name: 'Kesehatan', path: '/health-services', icon: <Hospital size={18} /> },
    { name: 'Layanan Hukum', path: '/health-services?cat=Layanan Hukum', icon: <Scale size={18} /> },
    { name: 'Layanan Kepolisian', path: '/health-services?cat=Layanan Kepolisian', icon: <Shield size={18} /> },
    { name: 'Dukcapil', path: '/health-services?cat=Dukcapil', icon: <Fingerprint size={18} /> },
    { name: 'Perbankan', path: '/health-services?cat=Perbankan', icon: <Landmark size={18} /> },
    { name: 'Transportasi', path: '/health-services?cat=Transportasi', icon: <Navigation size={18} /> },
    { name: 'Pariwisata', path: '/health-services?cat=Pariwisata', icon: <Palmtree size={18} /> },
    { name: 'Keagamaan', path: '/health-services?cat=Keagamaan', icon: <Church size={18} /> },
    { name: 'Semua Layanan', path: '/services', icon: <Sparkles size={18} /> },
  ]

  const moreLinks = [
    { name: 'Tentang Kami', path: '/about', icon: <Globe size={18} /> },
    { name: 'Tim Kami', path: '/team', icon: <Users size={18} /> },
    { name: 'Kontak', path: '/contact', icon: <Mail size={18} /> },
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
          <li ref={layananRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setLayananOpen(p => !p)}
              className={`nav-link-item ${layananOpen ? 'active' : ''}`}
              style={{ border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              Layanan <ChevronDown size={14} style={{ transform: layananOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
            </button>

            <AnimatePresence>
              {layananOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  className="dropdown-menu"
                >
                  {layananLinks.map((link) => (
                    <Link key={link.name} to={link.path} className="dropdown-item">
                      <span style={{ fontSize: '1.1rem' }}>{link.icon}</span>
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

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
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="mobile-drawer"
              onClick={e => e.stopPropagation()}
            >
              <div className="drawer-header">
                <div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--text-main)', marginBottom: '0.2rem' }}>Menu</h2>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700' }}>Navigasi Yo'i Foundation</p>
                </div>
                <button onClick={() => setIsOpen(false)} className="close-drawer-btn"><X size={24} /></button>
              </div>

              <div className="drawer-content">
                <div className="drawer-links-grid">
                  <Link to="/" className={`drawer-link-card ${isActive('/') ? 'active' : ''}`}>
                    <div className="link-icon">🏠</div>
                    <div className="link-text">Beranda</div>
                  </Link>
                  
                  {/* Collapsible Layanan for Mobile */}
                  <div className={`drawer-link-card collapsible ${mobileLayananOpen ? 'expanded' : ''}`} onClick={() => setMobileLayananOpen(!mobileLayananOpen)}>
                    <div className="link-icon"><Sparkles size={20} /></div>
                    <div className="link-text" style={{ flex: 1 }}>Layanan</div>
                    <ChevronDown size={18} style={{ transform: mobileLayananOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                  </div>
                  
                  <AnimatePresence>
                    {mobileLayananOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
                      >
                        {layananLinks.map((link) => (
                          <Link key={link.name} to={link.path} className="drawer-sub-link">
                            {link.icon} {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {primaryLinks.map((link) => (
                    <Link key={link.path} to={link.path} className={`drawer-link-card ${isActive(link.path) ? 'active' : ''}`}>
                      <div className="link-icon">{link.name === 'Pendidikan' ? <GraduationCap size={20} /> : <Sparkles size={20} />}</div>
                      <div className="link-text">{link.name}</div>
                    </Link>
                  ))}
                  
                  {moreLinks.map((link) => (
                    <Link key={link.path} to={link.path} className={`drawer-link-card ${isActive(link.path) ? 'active' : ''}`}>
                      <div className="link-icon">{link.icon}</div>
                      <div className="link-text">{link.name}</div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="drawer-footer">
                <Link to="/donation" className="btn btn-primary drawer-cta">
                  Dukung Kami <Heart size={18} fill="currentColor" />
                </Link>
              </div>
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
          top: calc(100% + 10px);
          right: 0;
          background: var(--bg-card);
          border-radius: 20px;
          border: 1px solid var(--glass-border);
          padding: 0.5rem;
          min-width: 200px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          z-index: 5000;
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.2rem;
          text-decoration: none;
          color: #0D47A1 !important; /* Force deep blue for visibility */
          font-weight: 800;
          border-radius: 12px;
          transition: 0.2s;
        }
        .dropdown-item:hover {
          background: rgba(21, 101, 192, 0.1);
          color: #1565C0 !important;
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
          position: fixed;
          top: 0;
          right: 0;
          width: 85%;
          height: 100vh;
          background: var(--bg-card);
          box-shadow: -10px 0 50px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          z-index: 3000;
        }
        .drawer-header {
          padding: 2.5rem 1.5rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--glass-border);
        }
        .close-drawer-btn {
          width: 44px; height: 44px; border-radius: 12px;
          background: var(--bg-dark); border: 1px solid var(--glass-border);
          color: var(--text-main); display: flex; align-items: center; justify-content: center;
        }
        .drawer-content {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
        }
        .drawer-links-grid {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .drawer-link-card {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          padding: 1rem;
          border-radius: 16px;
          text-decoration: none;
          background: var(--bg-dark);
          border: 1px solid var(--glass-border);
          transition: 0.3s;
        }
        .drawer-link-card .link-icon {
          width: 45px; height: 45px; border-radius: 12px;
          background: var(--bg-card); display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem;
        }
        .drawer-link-card .link-text {
          font-weight: 800; color: var(--text-main); font-size: 1.05rem;
        }
        .drawer-link-card.active {
          background: var(--primary-glow); border-color: var(--primary);
        }
        .drawer-link-card.active .link-text { color: var(--primary); }
        .drawer-sub-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.8rem 1.2rem;
          color: var(--text-main);
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 12px;
          transition: 0.2s;
        }
        .drawer-sub-link:hover {
          background: var(--primary-glow);
          color: var(--primary);
        }
        .drawer-sub-link svg {
          color: var(--primary);
        }
        .drawer-footer {
          padding: 1.5rem;
          border-top: 1px solid var(--glass-border);
          background: var(--bg-dark);
        }
        .drawer-cta {
          width: 100%; padding: 1rem; border-radius: 16px; font-weight: 900;
          display: flex; align-items: center; justify-content: center; gap: 0.8rem;
        }
        .mobile-bottom-nav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 75px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          z-index: 1000;
          padding-bottom: env(safe-area-inset-bottom);
        }
        [data-theme='dark'] .mobile-bottom-nav {
          background: rgba(15, 23, 42, 0.85);
          border-top-color: rgba(255, 255, 255, 0.05);
        }
        .mobile-nav-btn {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          color: var(--text-muted);
          text-decoration: none;
          background: none;
          border: none;
          font-weight: 800;
          font-size: 0.62rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .mobile-nav-btn.active {
          color: var(--primary);
        }
        .mobile-nav-btn .icon-wrap {
          width: 50px;
          height: 30px;
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
          margin-bottom: 2px;
        }
        .mobile-nav-btn.active .icon-wrap {
          background: var(--primary-glow);
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .nav-links, .desktop-only { display: none !important; }
        }
      `}</style>
    </>
  )
}

export default Navbar
