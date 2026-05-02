import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, ShieldCheck, Heart } from 'lucide-react'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="section"
      style={{ paddingTop: '8rem' }}
    >
      <div className="container">
        {/* Story Section */}
        <div className="grid grid-2" style={{ alignItems: 'center', marginBottom: '6rem', gap: '3rem' }}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ 
              color: 'var(--primary)', 
              fontWeight: '800', 
              fontSize: '0.85rem', 
              marginBottom: '1rem', 
              display: 'block',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>Kisah Kami</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', marginBottom: '1.5rem', fontWeight: '800' }}>
              Membangun Dunia Tanpa <span style={{ color: 'var(--primary)' }} className="glow-text">Hambatan</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Yo'i lahir dari sebuah kegelisahan akan sulitnya akses pendidikan bagi teman-teman disabilitas, terutama dalam hal komunikasi bahasa isyarat. 
              Kami percaya bahwa setiap individu memiliki hak yang sama untuk berkembang.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Melalui perpaduan teknologi terkini dan metode pendidikan yang empatik, kami berkomitmen untuk menciptakan ekosistem inklusif yang memberdayakan semua orang.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card" 
            style={{ padding: '0.8rem', borderRadius: '32px', overflow: 'hidden' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
              alt="Team working together" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }}
            />
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-2" style={{ gap: '2rem', marginBottom: '6rem' }}>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card" 
            style={{ position: 'relative', padding: '3rem 2rem 2.5rem' }}
          >
            <div style={{ position: 'absolute', top: '-25px', left: '2rem', background: 'var(--primary)', width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px var(--primary-glow)' }}>
              <Eye color="#fff" size={28} />
            </div>
            <h2 style={{ marginBottom: '1.2rem', fontSize: '1.8rem', fontWeight: '800' }}>Visi Kami</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
              Menjadi platform global terdepan dalam mewujudkan masyarakat inklusif di mana perbedaan kemampuan bukan lagi menjadi penghalang untuk kemajuan bersama.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card" 
            style={{ position: 'relative', padding: '3rem 2rem 2.5rem' }}
          >
            <div style={{ position: 'absolute', top: '-25px', left: '2rem', background: 'var(--secondary)', width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(255, 109, 0, 0.3)' }}>
              <Target color="#fff" size={28} />
            </div>
            <h2 style={{ marginBottom: '1.2rem', fontSize: '1.8rem', fontWeight: '800' }}>Misi Kami</h2>
            <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.2rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '0.8rem' }}>Menyediakan akses pendidikan bahasa isyarat berkualitas secara gratis.</li>
              <li style={{ marginBottom: '0.8rem' }}>Membangun teknologi asistif yang memudahkan aktivitas sehari-hari.</li>
              <li>Meningkatkan kesadaran masyarakat akan pentingnya inklusivitas digital.</li>
            </ul>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card" 
          style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--bg-card)' }}
        >
          <h2 style={{ marginBottom: '3.5rem', fontSize: '2rem', fontWeight: '800' }}>Dampak Yang Telah Kita Buat</h2>
          <div className="grid grid-stats grid-3">
            <div>
              <h3 style={{ fontSize: '2.8rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '800', fontFamily: "'Outfit', sans-serif" }}>10K+</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Pelajar Aktif</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.8rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '800', fontFamily: "'Outfit', sans-serif" }}>50+</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Komunitas Mitra</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.8rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '800', fontFamily: "'Outfit', sans-serif" }}>100+</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Proyek Sosial</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
