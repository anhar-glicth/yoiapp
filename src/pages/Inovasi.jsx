import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Rocket, Cpu, Leaf, Globe, Zap, Sparkles, ArrowRight, Code, Database, Layers, CheckCircle2, Milestone } from 'lucide-react'

const innovations = [
  {
    icon: <Lightbulb size={28} />,
    title: 'Edu-Access AI',
    tag: 'Pendidikan',
    desc: 'Platform pembelajaran cerdas yang mengonversi video ceramah menjadi teks dan isyarat secara real-time.',
    color: '#FFD600',
    tech: 'TensorFlow, Python'
  },
  {
    icon: <Rocket size={28} />,
    title: 'Yo\'i Connect',
    tag: 'Teknologi',
    desc: 'Alat bantu komunikasi wearable yang menerjemahkan gerakan tangan menjadi suara melalui Bluetooth.',
    color: 'var(--primary)',
    tech: 'IoT, Arduino, BLE'
  },
  {
    icon: <Cpu size={28} />,
    title: 'Smart-Deaf Hub',
    tag: 'Digital',
    desc: 'Sistem manajemen rumah pintar yang terintegrasi dengan notifikasi visual untuk teman-teman Tuli.',
    color: 'var(--secondary)',
    tech: 'Raspberry Pi, MQTT'
  },
  {
    icon: <Leaf size={28} />,
    title: 'Eco-Inclusion',
    tag: 'Lingkungan',
    desc: 'Program pengolahan limbah ramah disabilitas yang menciptakan lapangan kerja inklusif dan berkelanjutan.',
    color: '#10b981',
    tech: 'Green Tech, Logistics'
  },
  {
    icon: <Globe size={28} />,
    title: 'Global Sign Kit',
    tag: 'Komunitas',
    desc: 'Standardisasi isyarat internasional untuk mempermudah kolaborasi disabilitas antar negara.',
    color: '#8b5cf6',
    tech: 'Wiki, NLP'
  },
]

const Inovasi = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'var(--bg-dark)', paddingBottom: '10rem' }}
    >
      {/* Hero Innovation */}
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
                fontWeight: '800', marginBottom: '2rem'
              }}>LABORATORIUM INOVASI</div>
              <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: '900', lineHeight: 1, marginBottom: '2rem' }}>
                Masa Depan <br /><span style={{ color: 'var(--primary)' }}>Tanpa Batas</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Kami mengembangkan teknologi asisitif tercanggih untuk meruntuhkan hambatan komunikasi dan menciptakan kesetaraan bagi semua.
              </p>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#fff', fontWeight: '700' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> 12+ Proyek Aktif
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#fff', fontWeight: '700' }}>
                  <Zap size={18} color="var(--secondary)" /> Riset Berbasis AI
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card" 
              style={{ padding: '0.8rem', borderRadius: '48px', background: 'var(--bg-card)', position: 'relative' }}
            >
              <div style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 3, background: 'rgba(0,0,0,0.6)', padding: '0.6rem 1.2rem', borderRadius: '100px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.75rem', fontWeight: '800', color: '#fff' }}>
                LIVE FROM YO'I LAB 🔬
              </div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Innovation" 
                style={{ width: '100%', borderRadius: '40px', display: 'block', height: '450px', objectFit: 'cover' }} 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Innovation Grid */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1.5rem' }}>Eksplorasi Proyek</h2>
            <p style={{ color: 'var(--text-muted)' }}>Solusi masa depan yang sedang kami inkubasi di Yo'i Lab.</p>
          </div>

          <div className="scroll-x">
            {innovations.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="glass-card"
                style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '20px', background: `${item.color}15`, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  {item.icon}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ padding: '0.3rem 0.9rem', background: 'var(--bg-dark)', color: item.color, borderRadius: '100px', fontSize: '0.7rem', fontWeight: '900', letterSpacing: '1px' }}>{item.tag}</span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, flex: 1, marginBottom: '2.5rem' }}>{item.desc}</p>
                <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700' }}>Stack: {item.tech}</span>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color, boxShadow: `0 0 10px ${item.color}` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Roadmap */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: '4rem', background: 'var(--bg-card)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontWeight: '800' }}>Roadmap Inovasi</h2>
            <div className="grid grid-3" style={{ gap: '3rem' }}>
              {[
                { phase: 'Phase 01', title: 'Data Gathering', desc: 'Pengumpulan dataset isyarat masif untuk pelatihan model AI.', status: 'Selesai', color: '#059669' },
                { phase: 'Phase 02', title: 'Beta Testing', desc: 'Implementasi model AI ke dalam platform web dan mobile Yo\'i.', status: 'Berjalan', color: 'var(--primary)' },
                { phase: 'Phase 03', title: 'Global Launch', desc: 'Peluncuran alat bantu komunikasi wearable Yo\'i Connect.', status: 'Mendatang', color: 'var(--secondary)' }
              ].map((r, i) => (
                <div key={i} style={{ position: 'relative', paddingLeft: '2rem', borderLeft: `2px solid ${r.color}30` }}>
                  <div style={{ position: 'absolute', left: '-9px', top: '0', width: '16px', height: '16px', borderRadius: '50%', background: r.color, boxShadow: `0 0 15px ${r.color}` }} />
                  <div style={{ fontSize: '0.75rem', fontWeight: '900', color: r.color, marginBottom: '0.5rem' }}>{r.phase}</div>
                  <h4 style={{ fontWeight: '800', marginBottom: '1rem', fontSize: '1.2rem' }}>{r.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{r.desc}</p>
                  <span style={{ padding: '0.3rem 0.8rem', background: `${r.color}15`, color: r.color, borderRadius: '8px', fontSize: '0.75rem', fontWeight: '800' }}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation CTA */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ 
            padding: '6rem 2rem', textAlign: 'center', 
            background: 'var(--primary-glow)', borderRadius: '56px',
            border: '1px dashed var(--primary)', position: 'relative', overflow: 'hidden'
          }}>
            <Milestone size={48} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem' }}>Punya Ide Inovatif?</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.15rem', lineHeight: 1.8 }}>
              Bawa ide teknologi inklusif Anda ke Yo'i Lab dan mari kita wujudkan perubahan nyata bersama-sama.
            </p>
            <button className="btn btn-primary" style={{ padding: '1.2rem 4rem', fontSize: '1.1rem', borderRadius: '18px' }}>Kirim Proposal Inovasi</button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Inovasi
