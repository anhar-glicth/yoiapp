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
      style={{ paddingTop: '10rem' }}
    >
      <div className="container">
        {/* Story Section */}
        <div className="grid grid-2" style={{ alignItems: 'center', marginBottom: '8rem' }}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <span style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1rem', display: 'block' }}>Kisah Kami</span>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Membangun Dunia Tanpa <span style={{ color: 'var(--primary)' }}>Hambatan</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Yo'i lahir dari sebuah kegelisahan akan sulitnya akses pendidikan bagi teman-teman disabilitas, terutama dalam hal komunikasi bahasa isyarat. 
              Kami percaya bahwa setiap individu memiliki hak yang sama untuk berkembang dan berkontribusi bagi masyarakat.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              Melalui perpaduan teknologi terkini dan metode pendidikan yang empatik, kami berkomitmen untuk menciptakan ekosistem inklusif yang memberdayakan semua orang, tanpa terkecuali.
            </p>
          </motion.div>
          
          <div className="glass-card" style={{ padding: '1rem', aspectRatio: '4/5', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
              alt="Team working together" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-2" style={{ gap: '3rem', marginBottom: '8rem' }}>
          <div className="glass-card" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-20px', left: '2rem', background: 'var(--primary)', padding: '1rem', borderRadius: '12px' }}>
              <Eye color="#000" size={32} />
            </div>
            <h2 style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>Visi Kami</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              Menjadi platform global terdepan dalam mewujudkan masyarakat inklusif di mana perbedaan kemampuan bukan lagi menjadi penghalang untuk kemajuan bersama.
            </p>
          </div>
          
          <div className="glass-card" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-20px', left: '2rem', background: 'var(--primary)', padding: '1rem', borderRadius: '12px' }}>
              <Target color="#000" size={32} />
            </div>
            <h2 style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>Misi Kami</h2>
            <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.2rem', lineHeight: 1.7 }}>
              <li style={{ marginBottom: '1rem' }}>Menyediakan akses pendidikan bahasa isyarat berkualitas secara gratis dan mudah dijangkau.</li>
              <li style={{ marginBottom: '1rem' }}>Membangun teknologi asistif yang memudahkan aktivitas sehari-hari penyandang disabilitas.</li>
              <li>Meningkatkan kesadaran masyarakat akan pentingnya etika dan inklusivitas digital.</li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2 style={{ marginBottom: '4rem' }}>Dampak Yang Telah Kita Buat</h2>
          <div className="grid grid-3">
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>10K+</h3>
              <p style={{ color: 'var(--text-muted)' }}>Pelajar Isyarat Aktif</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>50+</h3>
              <p style={{ color: 'var(--text-muted)' }}>Komunitas Mitra</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>100+</h3>
              <p style={{ color: 'var(--text-muted)' }}>Proyek Kemanusiaan</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
