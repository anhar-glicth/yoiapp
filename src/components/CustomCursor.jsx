import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const mouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('mouseover', mouseOver)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mouseover', mouseOver)
    }
  }, [])

  return (
    <>
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(21, 101, 192, 0.2)' : 'var(--primary)',
          borderColor: isHovering ? 'var(--primary)' : 'transparent'
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          border: '2px solid transparent'
        }}
      />
      <motion.div
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          background: '#fff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          boxShadow: '0 0 10px rgba(255,255,255,0.5)'
        }}
      />
      <style>{`
        @media (max-width: 900px) {
          .custom-cursor { display: none !important; }
        }
        body, a, button {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}

export default CustomCursor
