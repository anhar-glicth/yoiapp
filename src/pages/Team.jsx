import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Briefcase, Mail } from 'lucide-react'

const Team = () => {
  const members = [
    {
      name: 'Muhammad Anhar Solihin',
      role: 'Founder & Lead Tech',
      desc: 'Ahli teknologi asistif dengan pengalaman 4+ tahun dalam pengembangan platform inklusif.',
      image: '/anhar.jpeg'
    },
    {
      name: 'Nurul Hasanah',
      role: 'Head of Education',
      desc: 'Pakar Bahasa Isyarat (SIBI & BISINDO) yang berdedikasi menciptakan kurikulum ramah Tuli.',
      image: '/nurul.jpeg'
    },
    {
      name: 'Aira Rakmah',
      role: 'Fullstack Developer',
      desc: 'Spesialis React & Node.js yang fokus pada aksesibilitas web dan performa tinggi.',
      image: '/aira.jpeg'
    },
    {
      name: 'Ghaitsa Shofa Adelya',
      role: 'Community Manager',
      desc: 'Penghubung antara teknologi Yo\'i dengan komunitas disabilitas di seluruh Indonesia.',
      image: '/ghaitsa.jpg'
    },
    {
      name: 'Jabaringin Hasibuan',
      role: 'Community Manager',
      desc: 'Penghubung antara teknologi Yo\'i dengan komunitas disabilitas di seluruh Indonesia.',
      image: '/ghaitsa.jpg'
    },
    {
      name: 'Indi',
      role: 'Community Manager',
      desc: 'Penghubung antara teknologi Yo\'i dengan komunitas disabilitas di seluruh Indonesia.',
      image: '/ghaitsa.jpg'
    }


  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="section"
      style={{ paddingTop: '10rem' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem', color: '#fff' }}
          >
            Orang-orang di Balik <span style={{ color: 'var(--primary)' }} className="glow-text">Yo'i</span>
          </motion.h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Kami adalah kolaborasi antara pengembang, pendidik, dan aktivis yang percaya bahwa teknologi adalah kunci kesetaraan.
          </p>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          {[...members, ...members].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (i % members.length) * 0.1 }}
              className="glass-card team-card"
              style={{ textAlign: 'left', padding: '1.5rem' }}
            >
              <div style={{
                width: '100%',
                aspectRatio: '1/1',
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '1.5rem',
                border: '1px solid var(--glass-border)'
              }}>
                <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>{member.name}</h3>
              <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '1rem', fontSize: '0.9rem' }}>{member.role}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '60px' }}>{member.desc}</p>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <Globe size={18} className="cursor-pointer" style={{ opacity: 0.5 }} />
                <Briefcase size={18} className="cursor-pointer" style={{ opacity: 0.5 }} />
                <Mail size={18} className="cursor-pointer" style={{ opacity: 0.5 }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Team
