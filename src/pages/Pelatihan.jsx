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
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
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
              <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: '900', lineHeight: 1.1, marginBottom: '2rem' }}>
                Belajar, Berkarya, <br /><span style={{ color: 'var(--primary)' }}>Langsung Bekerja</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Kurikulum yang dirancang bersama pakar industri untuk memastikan Anda memiliki skill yang paling dibutuhkan pasar kerja saat ini.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {stats.slice(0, 2).map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', background: `${s.color}15`, color: s.color, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {s.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: '900', color: 'var(--text-main)' }}>{s.value}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card" 
              style={{ padding: '0.8rem', borderRadius: '40px', background: 'var(--bg-card)' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="Student Training" 
                style={{ width: '100%', borderRadius: '32px', display: 'block' }} 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Training Grid */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem' }}>Eksplorasi Modul</h2>
            <div className="scroll-x" style={{ justifyContent: 'center', gap: '0.5rem' }}>
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.8rem 1.8rem', borderRadius: '16px', border: 'none',
                    background: activeCategory === cat ? 'var(--primary)' : 'var(--bg-card)',
                    color: activeCategory === cat ? '#fff' : 'var(--text-muted)',
                    fontWeight: '700', cursor: 'pointer', transition: 'all 0.3s',
                    fontSize: '0.9rem', whiteSpace: 'nowrap'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

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

                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>{item.title}</h3>
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

      {/* Why Yo'i Training */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: '4rem', background: 'var(--bg-card)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontWeight: '800' }}>Mengapa Belajar di Yo'i?</h2>
            <div className="grid grid-3" style={{ gap: '2rem' }}>
              {[
                { icon: <ShieldCheck size={32} />, title: 'Sertifikasi Resmi', desc: 'Dapatkan sertifikat yang diakui oleh mitra industri nasional.', color: '#059669' },
                { icon: <Zap size={32} />, title: 'Kurikulum Intensif', desc: 'Materi yang padat dan fokus pada kebutuhan dunia kerja nyata.', color: 'var(--primary)' },
                { icon: <Users size={32} />, title: 'Mentor Eksklusif', desc: 'Bimbingan langsung dari praktisi berpengalaman di bidangnya.', color: 'var(--secondary)' }
              ].map((f, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', background: `${f.color}15`, color: f.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    {f.icon}
                  </div>
                  <h4 style={{ fontWeight: '800', marginBottom: '1rem' }}>{f.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training CTA */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ 
            padding: '5rem 2rem', textAlign: 'center', 
            background: 'var(--primary-glow)', borderRadius: '48px',
            border: '1px dashed var(--primary)'
          }}>
            <Sparkles size={40} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '1rem' }}>Mulai Kariermu Hari Ini</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              Jangan biarkan kesempatan berlalu. Bergabunglah dengan ribuan alumni yang telah sukses meniti karier bersama Yo'i.
            </p>
            <button className="btn btn-primary" style={{ padding: '1rem 3.5rem' }}>Mulai Perjalanan Anda</button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Pelatihan
