import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Clock, Users, Star, ChevronRight, Award, TrendingUp, Target, Sparkles, GraduationCap, ShieldCheck, Zap } from 'lucide-react'

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
      style={{ background: 'var(--bg-dark)', paddingBottom: '10rem' }}
    >
      {/* Hero Training */}
      <section style={{ 
        paddingTop: '10rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-dark) 100%)'
      }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }} id="pelatihan-hero">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ 
                display: 'inline-flex', padding: '0.6rem 1.2rem', background: 'var(--primary-glow)',
                borderRadius: '100px', color: 'var(--primary)', fontSize: '0.85rem',
                fontWeight: '800', marginBottom: '1.5rem'
              }}>PROGRAM SIAP KERJA</div>
              <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: '900', lineHeight: 1, marginBottom: '2rem' }}>
                Belajar, Berkarya, <br /><span style={{ color: 'var(--primary)' }}>Langsung Bekerja</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Kurikulum yang dirancang bersama pakar industri untuk memastikan Anda memiliki skill yang paling dibutuhkan pasar kerja saat ini.
              </p>
              
              {/* Hero Mini Stats - 2 Columns on Mobile */}
              <div className="grid grid-stats" style={{ gap: '1.5rem' }}>
                {stats.slice(0, 2).map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', background: `${s.color}15`, color: s.color, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {s.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: '900', color: 'var(--text-main)', fontSize: '1.2rem' }}>{s.value}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700' }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card" 
              style={{ padding: '0.8rem', borderRadius: '48px', background: 'var(--bg-card)' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="Student Training" 
                style={{ width: '100%', borderRadius: '40px', display: 'block', height: '400px', objectFit: 'cover' }} 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Training Grid */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '2.5rem' }}>Eksplorasi Modul</h2>
            
            {/* Filter Tabs - Horizontal Scroll on Mobile */}
            <div className="filter-scroll-wrapper">
              <div className="filter-tabs">
                {categories.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setActiveCategory(cat)}
                    className={`filter-tab-item ${activeCategory === cat ? 'active' : ''}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Training Cards - 2 Columns on Mobile via grid-2-mobile OR scroll-x */}
          <div className="scroll-x">
            {filtered.map((item, i) => (
              <motion.div 
                key={item.id} 
                className="glass-card pelatihan-card" 
                initial={{ y: 30, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: i * 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}
              >
                <div style={{ 
                  width: '60px', height: '60px', borderRadius: '18px', 
                  background: `${item.color}15`, display: 'flex', 
                  alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem',
                  marginBottom: '1.5rem', border: `1px solid ${item.color}25`
                }}>
                  {item.icon}
                </div>
                
                <div style={{ marginBottom: '0.8rem' }}>
                  <span style={{ 
                    padding: '0.3rem 0.8rem', background: 'var(--bg-dark)', 
                    color: item.color, borderRadius: '100px', fontSize: '0.7rem', 
                    fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px'
                  }}>{item.category}</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1rem', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem', flex: 1 }}>{item.desc}</p>
                
                <div style={{ 
                  display: 'flex', gap: '1rem', marginBottom: '2rem', 
                  padding: '1rem 0', borderTop: '1px solid var(--glass-border)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-main)', fontWeight: '800' }}>
                    <Clock size={14} color="var(--primary)" /> {item.duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-main)', fontWeight: '800' }}>
                    <Star size={14} fill="#F59E0B" color="#F59E0B" /> {item.rating}
                  </div>
                </div>

                <button className="btn btn-primary" style={{ width: '100%', borderRadius: '12px', padding: '0.8rem' }}>
                  Daftar Kelas
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Yo'i Training - Fixed Grid */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: '4rem 2rem', background: 'var(--bg-card)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontWeight: '900' }}>Mengapa Belajar di Yo'i?</h2>
            <div className="grid grid-3 grid-stats" style={{ gap: '2.5rem' }}>
              {[
                { icon: <ShieldCheck size={32} />, title: 'Sertifikasi', desc: 'Diakui oleh mitra industri nasional.', color: '#059669' },
                { icon: <Zap size={32} />, title: 'Intensif', desc: 'Materi padat sesuai kebutuhan kerja.', color: 'var(--primary)' },
                { icon: <Users size={32} />, title: 'Mentor', desc: 'Bimbingan langsung dari praktisi.', color: 'var(--secondary)' }
              ].map((f, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ width: '64px', height: '64px', background: `${f.color}15`, color: f.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    {f.icon}
                  </div>
                  <h4 style={{ fontWeight: '800', marginBottom: '0.8rem' }}>{f.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        #pelatihan-hero {
          grid-template-columns: 1.2fr 0.8fr;
        }
        @media (max-width: 1024px) {
          #pelatihan-hero { grid-template-columns: 1fr; gap: 3rem; }
        }
        .filter-scroll-wrapper {
          overflow-x: auto;
          margin: 0 -1.25rem;
          padding: 0 1.25rem 1rem;
        }
        .filter-scroll-wrapper::-webkit-scrollbar { display: none; }
        .filter-tabs {
          display: flex;
          gap: 0.6rem;
          justify-content: flex-start;
        }
        @media (min-width: 768px) {
          .filter-tabs { justify-content: center; }
        }
        .filter-tab-item {
          padding: 0.8rem 1.8rem;
          border-radius: 14px;
          border: 1px solid var(--glass-border);
          background: var(--bg-card);
          color: var(--text-muted);
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
          white-space: nowrap;
          font-size: 0.9rem;
        }
        .filter-tab-item.active {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
          box-shadow: 0 4px 12px var(--primary-glow);
        }
        .pelatihan-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
        }
      `}</style>
    </motion.div>
  )
}

export default Pelatihan
