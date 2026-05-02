import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Clock, Users, Star, ChevronRight, Award, TrendingUp, Target, Sparkles, GraduationCap } from 'lucide-react'

const categories = ['Semua', 'Teknologi', 'Bisnis', 'Desain', 'Bahasa', 'Keterampilan']

const trainings = [
  {
    id: 1, title: 'Pemrograman Web Dasar', category: 'Teknologi', level: 'Pemula',
    duration: '8 Minggu', participants: 120, rating: 4.8, color: 'var(--primary)', icon: '💻',
    desc: 'Pelajari HTML, CSS, dan JavaScript dari nol hingga bisa membuat website pertamamu.',
  },
  {
    id: 2, title: 'Digital Marketing Specialist', category: 'Bisnis', level: 'Menengah',
    duration: '6 Minggu', participants: 95, rating: 4.7, color: 'var(--secondary)', icon: '📊',
    desc: 'Kuasai strategi pemasaran digital: SEO, media sosial, iklan berbayar, dan email marketing.',
  },
  {
    id: 3, title: 'UI/UX Design Bootcamp', category: 'Desain', level: 'Pemula',
    duration: '10 Minggu', participants: 80, rating: 4.9, color: '#8b5cf6', icon: '🎨',
    desc: 'Pelajari prinsip desain antarmuka dan pengalaman pengguna menggunakan Figma dan Prototyping.',
  },
  {
    id: 4, title: 'English for Professionals', category: 'Bahasa', level: 'Menengah',
    duration: '12 Minggu', participants: 200, rating: 4.6, color: '#059669', icon: '🗣️',
    desc: 'Tingkatkan kemampuan bahasa Inggris untuk kebutuhan wawancara, presentasi, dan karier global.',
  },
  {
    id: 5, title: 'Youth Entrepreneurship', category: 'Bisnis', level: 'Pemula',
    duration: '8 Minggu', participants: 150, rating: 4.8, color: '#ef4444', icon: '🚀',
    desc: 'Dari ide hingga bisnis nyata. Pelajari cara membangun startup dan validasi pasar dari awal.',
  },
  {
    id: 6, title: 'Creative Multimedia', category: 'Keterampilan', level: 'Semua Level',
    duration: '6 Minggu', participants: 70, rating: 4.7, color: '#0ea5e9', icon: '📷',
    desc: 'Belajar teknik pengambilan gambar dan editing video profesional untuk berbagai platform.',
  },
]

const stats = [
  { icon: <BookOpen size={24} />, value: '25+', label: 'Modul Industri', color: 'var(--primary)' },
  { icon: <Users size={24} />, value: '1.5k+', label: 'Peserta Aktif', color: 'var(--secondary)' },
  { icon: <Award size={24} />, value: '98%', label: 'Kepuasan Peserta', color: '#059669' },
  { icon: <TrendingUp size={24} />, value: '85%', label: 'Penempatan Kerja', color: '#8b5cf6' },
]

const Pelatihan = () => {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const filtered = activeCategory === 'Semua' ? trainings : trainings.filter(t => t.category === activeCategory)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'var(--bg-dark)' }}
    >
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        paddingTop: '100px', 
        paddingBottom: '80px', 
        textAlign: 'center',
        background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-dark) 100%)'
      }}>
        <div className="container">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.6rem 1.2rem', background: 'var(--primary-glow)',
              borderRadius: '100px', color: 'var(--primary)', fontSize: '0.8rem',
              fontWeight: '800', marginBottom: '2rem', letterSpacing: '1px'
            }}>
              <GraduationCap size={16} /> PROGRAM SIAP KERJA
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: '800', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Belajar, Berkarya, <br /><span style={{ color: 'var(--primary)' }}>Langsung Bekerja</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto 3rem' }}>
              Kurikulum yang dirancang bersama pakar industri untuk memastikan Anda memiliki skill yang paling dibutuhkan pasar kerja saat ini.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Horizontal */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <div className="scroll-x">
            {stats.map((s, i) => (
              <div key={i} className="glass-card" style={{ 
                display: 'flex', alignItems: 'center', gap: '1.2rem', 
                padding: '1.2rem 2rem', minWidth: '220px' 
              }}>
                <div style={{ 
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: `${s.color}15`, color: s.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>{s.icon}</div>
                <div>
                  <div style={{ fontWeight: '800', fontSize: '1.5rem', color: 'var(--text-main)', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700', marginTop: '0.3rem' }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Trainings List */}
      <section className="section">
        <div className="container">
          {/* Segmented Filter */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '2.5rem' }}>Eksplorasi Modul</h2>
            <div className="scroll-x" style={{ justifyContent: 'center', gap: '0.5rem' }}>
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.8rem 1.8rem',
                    borderRadius: '16px',
                    border: 'none',
                    background: activeCategory === cat ? 'var(--primary)' : 'var(--bg-card)',
                    color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    fontSize: '0.9rem',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid supporting Swipe 2-Card on Mobile */}
          <div className="scroll-x">
            {filtered.map((item, i) => (
              <motion.div 
                key={item.id} 
                className="glass-card" 
                initial={{ y: 30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: i * 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem' }}
              >
                <div style={{ 
                  width: '64px', height: '64px', borderRadius: '20px', 
                  background: `${item.color}15`, display: 'flex', 
                  alignItems: 'center', justifyContent: 'center', fontSize: '2rem',
                  marginBottom: '1.5rem', border: `1px solid ${item.color}25`
                }}>
                  {item.icon}
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ 
                    padding: '0.3rem 0.8rem', background: 'var(--bg-dark)', 
                    color: item.color, borderRadius: '100px', fontSize: '0.75rem', 
                    fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px',
                    border: '1px solid var(--glass-border)'
                  }}>{item.category}</span>
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', flexShrink: 0 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem', flex: 1 }}>{item.desc}</p>
                
                <div style={{ 
                  display: 'flex', gap: '1.2rem', marginBottom: '2rem', 
                  padding: '1rem 0', borderTop: '1px solid var(--glass-border)',
                  borderBottom: '1px solid var(--glass-border)' 
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-main)', fontWeight: '700' }}>
                    <Clock size={14} color="var(--primary)" /> {item.duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-main)', fontWeight: '700' }}>
                    <Star size={14} fill="#F59E0B" color="#F59E0B" /> {item.rating}
                  </div>
                </div>

                <button className="btn btn-primary" style={{ width: '100%', borderRadius: '12px' }}>
                  Daftar Kelas <ChevronRight size={18} style={{ marginLeft: '0.5rem' }} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training CTA */}
      <section className="section" style={{ paddingBottom: '10rem' }}>
        <div className="container">
          <div className="glass-card" style={{ 
            padding: '5rem 2rem', textAlign: 'center', 
            background: 'var(--bg-card)', borderRadius: '48px',
            position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ 
              position: 'absolute', top: '-20%', left: '-10%', width: '300px', height: '300px', 
              background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.5 
            }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Sparkles size={40} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Mulai Kariermu Hari Ini</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '500px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
                Jangan biarkan kesempatan berlalu. Bergabunglah dengan ribuan alumni yang telah sukses meniti karier bersama Yo'i.
              </p>
              <button className="btn btn-primary" style={{ padding: '1rem 3.5rem', fontSize: '1.1rem' }}>Mulai Perjalanan Anda</button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Pelatihan
