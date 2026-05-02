import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: '#0A0A0B',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem'
      }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{
          width: '80px',
          height: '80px',
          background: 'var(--primary)',
          borderRadius: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 50px var(--primary-glow)'
        }}
      >
        <Heart size={40} fill="#fff" color="#fff" />
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ 
            fontSize: '1.8rem', 
            fontWeight: '900', 
            color: '#fff', 
            fontFamily: "'Outfit', sans-serif",
            letterSpacing: '2px'
          }}
        >
          YO'I
        </motion.span>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '100px' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ height: '2px', background: 'var(--primary)', marginTop: '0.5rem', borderRadius: '10px' }}
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.8rem', textTransform: 'uppercase', letterSpacing: '3px' }}
        >
          Human Inclusivity
        </motion.span>
      </div>
    </motion.div>
  )
}

export default Preloader
