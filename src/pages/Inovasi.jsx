import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Rocket, Cpu, Leaf, Globe, Zap } from 'lucide-react'

const innovations = [
  {
    icon: <Lightbulb size={32} />,
    title: 'Inovasi 1',
    tag: 'Pendidikan',
    desc: 'Deskripsi inovasi pertama akan ditampilkan di sini. Ceritakan solusi kreatif yang dikembangkan.',
    color: '#FFD600',
  },
  {
    icon: <Rocket size={32} />,
    title: 'Inovasi 2',
    tag: 'Teknologi',
    desc: 'Deskripsi inovasi kedua akan ditampilkan di sini. Jelaskan bagaimana inovasi ini berdampak.',
    color: '#1565C0',
  },
  {
    icon: <Cpu size={32} />,
    title: 'Inovasi 3',
    tag: 'Digital',
    desc: 'Deskripsi inovasi ketiga akan ditampilkan di sini. Uraikan manfaat dan penerapannya.',
    color: '#FF6D00',
  },
  {
    icon: <Leaf size={32} />,
    title: 'Inovasi 4',
    tag: 'Lingkungan',
    desc: 'Deskripsi inovasi keempat akan ditampilkan di sini. Dampak positif terhadap lingkungan.',
    color: '#2E7D32',
  },
  {
    icon: <Globe size={32} />,
    title: 'Inovasi 5',
    tag: 'Komunitas',
    desc: 'Deskripsi inovasi kelima akan ditampilkan di sini. Bagaimana komunitas mendapatkan manfaat.',
    color: '#6A1B9A',
  },
  {
    icon: <Zap size={32} />,
    title: 'Inovasi 6',
    tag: 'Sosial',
    desc: 'Deskripsi inovasi keenam akan ditampilkan di sini. Perubahan sosial yang ingin diwujudkan.',
    color: '#C62828',
  },
]

const Inovasi = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Banner */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--primary)',
        paddingTop: '140px',
        paddingBottom: '80px',
        textAlign: 'center',
      }}>
        {/* Dotted Background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px)',
          backgroundSize: '30px 30px',
          zIndex: 0,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <span style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              padding: '0.4rem 1.2rem',
              borderRadius: '100px',
              fontWeight: '700',
              fontSize: '0.85rem',
              letterSpacing: '2px',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
            }}>
              Yo'i Foundation
            </span>
            <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem' }}>
              Inovasi Kami
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
              Kumpulan ide dan solusi inovatif yang kami kembangkan untuk menciptakan dampak nyata bagi masyarakat luas.
            </p>
          </motion.div>
        </div>

        {/* Wave shape at bottom */}
        <svg viewBox="0 0 1440 80" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }} preserveAspectRatio="none">
          <path d="M0,80 C360,0 1080,80 1440,0 L1440,80 Z" fill="var(--bg-dark)" />
        </svg>
      </section>

      {/* Innovation Cards */}
      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>Program Inovasi</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '540px', margin: '0 auto' }}>
              Setiap inovasi lahir dari kebutuhan nyata. Berikut adalah program-program unggulan yang sedang kami kembangkan.
            </p>
          </div>

          <div className="grid grid-3">
            {innovations.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: `0 20px 40px ${item.color}22` }}
                style={{ cursor: 'default' }}
              >
                {/* Icon */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: `${item.color}1a`,
                  color: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}>
                  {item.icon}
                </div>

                {/* Tag */}
                <span style={{
                  display: 'inline-block',
                  background: `${item.color}1a`,
                  color: item.color,
                  padding: '0.2rem 0.8rem',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}>
                  {item.tag}
                </span>

                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: 'var(--text-main)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {item.desc}
                </p>

                {/* Coming Soon Badge */}
                <div style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--glass-border)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <span style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: item.color,
                    display: 'inline-block',
                    animation: 'pulse 2s infinite',
                  }} />
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                    Segera Hadir
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '8rem' }}>
        <div className="container">
          <div className="glass-card" style={{
            padding: '5rem 2rem',
            background: 'linear-gradient(135deg, var(--primary) 0%, #0d47a1 100%)',
            borderRadius: '40px',
            color: 'white',
          }}>
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Punya Ide Inovatif?</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
              Bergabunglah bersama kami dan wujudkan ide Anda menjadi solusi nyata untuk masyarakat.
            </p>
            <a
              href="mailto:info@yoi.or.id"
              className="btn"
              style={{ background: 'var(--secondary)', color: 'white', fontSize: '1.1rem', padding: '1rem 3rem' }}
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
      `}</style>
    </motion.div>
  )
}

export default Inovasi
