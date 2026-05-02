import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Clock, Users, Star, ChevronRight, Award, TrendingUp, Target } from 'lucide-react'

const categories = ['Semua', 'Teknologi', 'Bisnis', 'Desain', 'Bahasa', 'Keterampilan']

const trainings = [
  {
    id: 1, title: 'Pemrograman Web Dasar', category: 'Teknologi', level: 'Pemula',
    duration: '8 Minggu', participants: 120, rating: 4.8, color: '#1565C0', icon: '💻',
    desc: 'Pelajari HTML, CSS, dan JavaScript dari nol hingga bisa membuat website pertamamu.',
  },
  {
    id: 2, title: 'Digital Marketing', category: 'Bisnis', level: 'Menengah',
    duration: '6 Minggu', participants: 95, rating: 4.7, color: '#FF6D00', icon: '📊',
    desc: 'Kuasai strategi pemasaran digital: SEO, media sosial, iklan berbayar, dan email marketing.',
  },
  {
    id: 3, title: 'UI/UX Design Fundamentals', category: 'Desain', level: 'Pemula',
    duration: '10 Minggu', participants: 80, rating: 4.9, color: '#6A1B9A', icon: '🎨',
    desc: 'Pelajari prinsip desain antarmuka dan pengalaman pengguna menggunakan Figma.',
  },
  {
    id: 4, title: 'Bahasa Inggris Profesional', category: 'Bahasa', level: 'Semua Level',
    duration: '12 Minggu', participants: 200, rating: 4.6, color: '#2E7D32', icon: '🗣️',
    desc: 'Tingkatkan kemampuan bahasa Inggris untuk kebutuhan profesional dan karier.',
  },
  {
    id: 5, title: 'Kewirausahaan Muda', category: 'Bisnis', level: 'Pemula',
    duration: '8 Minggu', participants: 150, rating: 4.8, color: '#C62828', icon: '🚀',
    desc: 'Dari ide hingga bisnis nyata. Pelajari cara membangun startup dari awal.',
  },
  {
    id: 6, title: 'Fotografi & Videografi', category: 'Keterampilan', level: 'Pemula',
    duration: '6 Minggu', participants: 70, rating: 4.7, color: '#00838F', icon: '📷',
    desc: 'Belajar teknik pengambilan gambar dan video profesional untuk konten kreatif.',
  },
]

const stats = [
  { icon: <BookOpen size={28} />, value: '20+', label: 'Kelas Siap Kerja', color: '#1565C0' },
  { icon: <Users size={28} />, value: '1.200+', label: 'Peserta Aktif', color: '#FF6D00' },
  { icon: <Award size={28} />, value: '98%', label: 'Tingkat Kepuasan', color: '#2E7D32' },
  { icon: <TrendingUp size={28} />, value: '85%', label: 'Langsung Dapat Kerja', color: '#6A1B9A' },
]

const Pelatihan = () => {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const filtered = activeCategory === 'Semua' ? trainings : trainings.filter(t => t.category === activeCategory)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--primary)', paddingTop: '60px', paddingBottom: '100px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 2px, transparent 2px)', backgroundSize: '30px 30px', zIndex: 0 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.4rem 1.2rem', borderRadius: '100px', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '2px', marginBottom: '1.5rem', textTransform: 'uppercase' }}>🎯 Siap Kerja — Belajar, Berkarya, Bekerja</span>
            <h1 style={{ color: 'white', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1.2rem' }}>Pendidikan yang<br />Langsung Siap Kerja</h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
              Program Siap Kerja menghadirkan pelatihan berbasis industri nyata — kurikulum bersama praktisi, proyek langsung, dan portofolio siap kerja setelah lulus.
            </p>
          </motion.div>
        </div>
        <svg viewBox="0 0 1440 80" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }} preserveAspectRatio="none">
          <path d="M0,80 C360,0 1080,80 1440,0 L1440,80 Z" fill="var(--bg-dark)" />
        </svg>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--bg-dark)', padding: '4rem 0 2rem' }}>
        <div className="container">
          <div className="grid grid-stats grid-4">
            {stats.map((s, i) => (
              <motion.div key={i} className="glass-card" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ textAlign: 'center', padding: '1.2rem 0.8rem' }}>
                <div style={{ color: s.color, marginBottom: '0.8rem', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-main)', fontFamily: "'Outfit', sans-serif" }}>{s.value}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.3rem' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Cards */}
      <section className="section" style={{ background: 'var(--bg-dark)', paddingTop: '3rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-main)', marginBottom: '0.6rem' }}>Pilih Kelas Siap Kerja</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>Semua kelas dirancang bersama praktisi industri — bukan teori saja, tapi langsung praktik nyata dan siap kerja.</p>
            <div className="hide-scrollbar" style={{ 
              display: 'flex', 
              gap: '0.6rem', 
              overflowX: 'auto', 
              padding: '0.5rem 1rem', 
              margin: '0 -1rem 1.5rem',
              justifyContent: 'flex-start',
              WebkitOverflowScrolling: 'touch'
            }}>
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)} 
                  style={{ 
                    padding: '0.5rem 1.2rem', 
                    borderRadius: '100px', 
                    border: 'none', 
                    cursor: 'pointer', 
                    fontWeight: '600', 
                    fontSize: '0.85rem', 
                    whiteSpace: 'nowrap',
                    transition: 'all 0.25s', 
                    background: activeCategory === cat ? 'var(--primary)' : 'var(--bg-card)', 
                    color: activeCategory === cat ? 'white' : 'var(--text-muted)', 
                    boxShadow: activeCategory === cat ? '0 4px 14px var(--primary-glow)' : 'none',
                    flexShrink: 0
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-2-mobile grid-3">
            {filtered.map((item, i) => (
              <motion.div key={item.id} className="glass-card" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: i * 0.08 }} whileHover={{ y: -6 }} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: `${item.color}18`, borderRadius: '12px', padding: '1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                  <div>
                    <span style={{ display: 'inline-block', background: `${item.color}22`, color: item.color, padding: '0.2rem 0.7rem', borderRadius: '100px', fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase' }}>{item.category}</span>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '0.2rem' }}>{item.level}</div>
                  </div>
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, flex: 1 }}>{item.desc}</p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)', fontSize: '0.83rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={14} />{item.duration}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Users size={14} />{item.participants}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#F59E0B' }}><Star size={14} fill="#F59E0B" />{item.rating}</span>
                </div>
                <button style={{ marginTop: '1.2rem', padding: '0.75rem', borderRadius: '12px', border: `2px solid ${item.color}`, background: 'transparent', color: item.color, fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'all 0.2s', fontSize: '0.9rem' }}
                  onMouseEnter={e => { e.currentTarget.style.background = item.color; e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = item.color }}>
                  Daftar Sekarang <ChevronRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '5rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--primary) 0%, #0d47a1 100%)', borderRadius: '40px' }}>
            <Target size={48} color="rgba(255,255,255,0.6)" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Mulai Perjalanan Siap Kerja-mu</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '460px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Daftarkan diri sekarang dan dapatkan akses ke kelas industri, mentor berpengalaman, dan portofolio siap kerja.
            </p>
            <a href="mailto:info@yoi.or.id" className="btn" style={{ background: 'var(--secondary)', color: 'white', padding: '1rem 3rem', fontSize: '1.05rem' }}>Daftar Siap Kerja Gratis</a>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Pelatihan
