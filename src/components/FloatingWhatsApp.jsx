import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const FloatingWhatsApp = () => {
  const whatsappNumber = '6281234567890' // Ganti dengan nomor asli
  const message = 'Halo Yo\'i Foundation, saya ingin bertanya tentang program Anda.'
  
  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 1000,
        width: '60px',
        height: '60px',
        background: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        cursor: 'pointer',
        boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
        border: '2px solid #fff'
      }}
    >
      <MessageCircle size={32} fill="currentColor" color="#25D366" />
      
      {/* Pulsing effect */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          inset: -5,
          borderRadius: '50%',
          border: '2px solid #25D366',
          zIndex: -1
        }}
      />
    </motion.div>
  )
}

export default FloatingWhatsApp
