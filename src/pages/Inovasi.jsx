import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Rocket, Cpu, Leaf, Globe, Zap, Sparkles, ArrowRight, Code, Database, Layers, CheckCircle2, Milestone } from 'lucide-react'

const innovations = [
  {
    icon: <Lightbulb size={24} />,
    title: 'Edu-Access AI',
    tag: 'Pendidikan',
    desc: 'Konversi video ceramah menjadi teks dan isyarat secara real-time.',
    color: '#FFD600',
    tech: 'TensorFlow, Python'
  },
  {
    icon: <Rocket size={24} />,
    title: 'Yo\'i Connect',
    tag: 'Teknologi',
    desc: 'Wearable translator menerjemahkan gerakan tangan menjadi suara.',
    color: 'var(--primary)',
    tech: 'IoT, Arduino, BLE'
  },
  {
    icon: <Cpu size={24} />,
    title: 'Smart-Deaf Hub',
    tag: 'Digital',
    desc: 'Sistem rumah pintar dengan notifikasi visual untuk teman Tuli.',
    color: 'var(--secondary)',
    tech: 'Raspberry Pi, MQTT'
  },
  {
    icon: <Leaf size={24} />,
    title: 'Eco-Inclusion',
    tag: 'Lingkungan',
    desc: 'Pengolahan limbah ramah disabilitas yang berkelanjutan.',
    color: '#10b981',
    tech: 'Green Tech, Logistics'
  },
  {
    icon: <Globe size={24} />,
    title: 'Global Sign Kit',
    tag: 'Komunitas',
    desc: 'Standardisasi isyarat internasional untuk kolaborasi lintas negara.',
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
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }} id="inovasi-hero">
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
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: '900', lineHeight: 1, marginBottom: '2rem' }}>
                Masa Depan <br /><span style={{ color: 'var(--primary)' }}>Tanpa Batas</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Kami mengembangkan teknologi asisitif tercanggih untuk meruntuhkan hambatan komunikasi dan menciptakan kesetaraan bagi semua.
              </p>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)', fontWeight: '800' }}>
                  <CheckCircle2 size={18} color="var(--primary)" /> 12+ Proyek
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)', fontWeight: '800' }}>
                  <Zap size={18} color="var(--secondary)" /> Riset AI
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card" 
              style={{ padding: '0.8rem', borderRadius: '48px', background: 'var(--bg-card)', position: 'relative' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Innovation" 
                style={{ width: '100%', borderRadius: '40px', display: 'block', height: '400px', objectFit: 'cover' }} 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Innovation Grid - RESPONSIVE GRID TO PREVENT STACKING */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem' }}>Eksplorasi Proyek</h2>
            <p style={{ color: 'var(--text-muted)' }}>Solusi masa depan yang sedang kami inkubasi di Yo'i Lab.</p>
          </div>

          <div className="innovation-grid-system">
            {innovations.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card innovation-card"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: `${item.color}15`, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  {item.icon}
                </div>
                <div style={{ marginBottom: '0.8rem' }}>
                  <span style={{ padding: '0.3rem 0.8rem', background: 'var(--bg-dark)', color: item.color, borderRadius: '100px', fontSize: '0.7rem', fontWeight: '900', letterSpacing: '1px' }}>{item.tag}</span>
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.8rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, flex: 1, marginBottom: '2rem' }}>{item.desc}</p>
                <div style={{ paddingTop: '1.2rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '800' }}>{item.tech}</span>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color, boxShadow: `0 0 10px ${item.color}` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Roadmap - RESPONSIVE GRID */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: '4rem 2rem', background: 'var(--bg-card)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontWeight: '900' }}>Roadmap Inovasi</h2>
            <div className="grid grid-stats" style={{ gap: '2.5rem' }}>
              {[
                { phase: 'Phase 01', title: 'Data Gathering', desc: 'Dataset isyarat masif untuk AI.', status: 'Selesai', color: '#059669' },
                { phase: 'Phase 02', title: 'Beta Testing', desc: 'Implementasi model AI ke platform.', status: 'Berjalan', color: 'var(--primary)' },
                { phase: 'Phase 03', title: 'Global Launch', desc: 'Peluncuran alat bantu wearable.', status: 'Mendatang', color: 'var(--secondary)' },
                { phase: 'Phase 04', title: 'AI Expansion', desc: 'Fitur multibahasa internasional.', status: 'Perencanaan', color: '#8b5cf6' }
              ].map((r, i) => (
                <div key={i} style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: `2px solid ${r.color}30`, textAlign: 'left' }}>
                  <div style={{ position: 'absolute', left: '-9px', top: '0', width: '16px', height: '16px', borderRadius: '50%', background: r.color, boxShadow: `0 0 10px ${r.color}` }} />
                  <div style={{ fontSize: '0.7rem', fontWeight: '900', color: r.color, marginBottom: '0.4rem' }}>{r.phase}</div>
                  <h4 style={{ fontWeight: '800', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{r.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.2rem' }}>{r.desc}</p>
                  <span style={{ padding: '0.2rem 0.6rem', background: `${r.color}15`, color: r.color, borderRadius: '6px', fontSize: '0.65rem', fontWeight: '900' }}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        #inovasi-hero {
          grid-template-columns: 1.2fr 0.8fr;
        }
        @media (max-width: 1024px) {
          #inovasi-hero { grid-template-columns: 1fr; gap: 3rem; }
        }
        .innovation-grid-system {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .innovation-grid-system { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .innovation-grid-system { grid-template-columns: repeat(3, 1fr); }
        }
        .innovation-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }
      `}</style>
    </motion.div>
  )
}

export default Inovasi
