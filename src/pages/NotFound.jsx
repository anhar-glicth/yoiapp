import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Ghost } from 'lucide-react'

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-dark)',
        textAlign: 'center',
        padding: '2rem'
      }}
    >
      <div className="container">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{ marginBottom: '2rem', display: 'inline-block' }}
        >
          <Ghost size={120} color="var(--primary)" strokeWidth={1} />
        </motion.div>

        <h1 style={{ fontSize: 'clamp(4rem, 15vw, 10rem)', fontWeight: '900', lineHeight: 1, marginBottom: '1rem', color: 'var(--primary-glow)', position: 'relative' }}>
          404
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '0.2em', color: 'var(--text-main)', width: '100%' }}>
            HALAMAN TIDAK DITEMUKAN
          </span>
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
          Ups! Sepertinya halaman yang Anda cari telah berpindah tempat atau tidak pernah ada.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary" style={{ padding: '1rem 2rem', borderRadius: '14px' }}>
            <Home size={18} style={{ marginRight: '0.8rem' }} /> Kembali ke Beranda
          </Link>
          <button onClick={() => window.history.back()} className="btn btn-outline" style={{ padding: '1rem 2rem', borderRadius: '14px' }}>
            <ArrowLeft size={18} style={{ marginRight: '0.8rem' }} /> Halaman Sebelumnya
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default NotFound
