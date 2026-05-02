import React from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Rocket, Cpu, Leaf, Globe, Zap, Sparkles, ArrowRight } from 'lucide-react'

const innovations = [
  {
    icon: <Lightbulb size={28} />,
    title: 'Edu-Access AI',
    tag: 'Pendidikan',
    desc: 'Platform pembelajaran cerdas yang mengonversi video ceramah menjadi teks dan isyarat secara real-time.',
    color: '#FFD600',
  },
  {
    icon: <Rocket size={28} />,
    title: 'Yo\'i Connect',
    tag: 'Teknologi',
    desc: 'Alat bantu komunikasi wearable yang menerjemahkan gerakan tangan menjadi suara melalui Bluetooth.',
    color: '#3b82f6',
  },
  {
    icon: <Cpu size={28} />,
    title: 'Smart-Deaf Hub',
    tag: 'Digital',
    desc: 'Sistem manajemen rumah pintar yang terintegrasi dengan notifikasi visual untuk teman-teman Tuli.',
    color: '#FF6D00',
  },
  {
    icon: <Leaf size={28} />,
    title: 'Eco-Inclusion',
    tag: 'Lingkungan',
    desc: 'Program pengolahan limbah ramah disabilitas yang menciptakan lapangan kerja inklusif dan berkelanjutan.',
    color: '#10b981',
  },
  {
    icon: <Globe size={28} />,
    title: 'Global Sign Kit',
    tag: 'Komunitas',
    desc: 'Standardisasi isyarat internasional untuk mempermudah kolaborasi disabilitas antar negara.',
    color: '#8b5cf6',
  },
  {
    icon: <Zap size={28} />,
    title: 'Social Impact Lab',
    tag: 'Sosial',
    desc: 'Inkubator ide bisnis untuk wirausahawan disabilitas yang ingin menciptakan perubahan sosial.',
    color: '#ef4444',
  },
]

const Inovasi = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'var(--bg-dark)' }}
    >
      {/* Hero Banner Premium */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--primary) 0%, #0d47a1 100%)',
        paddingTop: '100px',
        paddingBottom: '120px',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
          zIndex: 0,
        }} />
        
        <div style={{
          position: 'absolute', top: '10%', left: '-5%', width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%', zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.6rem 1.2rem', background: 'rgba(255,255,255,0.15)',
              borderRadius: '100px', color: '#fff', fontSize: '0.8rem',
              fontWeight: '700', marginBottom: '2rem', letterSpacing: '1px',
              backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <Sparkles size={16} /> LABORATORIUM INOVASI
            </div>
            <h1 style={{ color: 'white', fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', marginBottom: '1.5rem', fontWeight: '800' }}>
              Masa Depan <br /><span style={{ color: 'var(--accent)' }}>Tanpa Batas</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.8 }}>
              Kami mengembangkan teknologi dan solusi kreatif untuk meruntuhkan hambatan komunikasi dan menciptakan kesetaraan bagi semua.
            </p>
          </motion.div>
        </div>

        {/* Wave decoration */}
        <svg viewBox="0 0 1440 100" style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: 'auto' }} preserveAspectRatio="none">
          <path d="M0,100 C240,0 480,100 720,50 C960,0 1200,100 1440,50 L1440,100 L0,100 Z" fill="var(--bg-dark)" />
        </svg>
      </section>

      {/* Innovation Cards Section */}
      <section className="section" style={{ background: 'var(--bg-dark)', padding: '4rem 0 8rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Eksperimen & Proyek</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Eksplorasi solusi masa depan yang sedang kami inkubasi.</p>
          </div>

          <div className="scroll-x">
            {innovations.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem' }}
              >
                {/* Icon Circle */}
                <div style={{
                  width: '64px', height: '64px', borderRadius: '20px',
                  background: `${item.color}15`, color: item.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.8rem', border: `1px solid ${item.color}25`
                }}>
                  {item.icon}
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <span style={{
                    display: 'inline-block', background: 'var(--bg-dark)',
                    color: item.color, padding: '0.3rem 0.9rem', borderRadius: '100px',
                    fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase',
                    letterSpacing: '1px', border: '1px solid var(--glass-border)'
                  }}>
                    {item.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: '800' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem', flex: 1, marginBottom: '2rem' }}>
                  {item.desc}
                </p>

                <div style={{ 
                  display: 'flex', alignItems: 'center', gap: '0.8rem', 
                  paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)'
                }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color, boxShadow: `0 0 10px ${item.color}` }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)' }}>Tahap Inkubasi</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Call to Action */}
      <section className="section" style={{ paddingBottom: '10rem' }}>
        <div className="container">
          <div className="glass-card" style={{
            padding: '6rem 2rem',
            background: 'var(--bg-card)',
            borderRadius: '48px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative background shape */}
            <div style={{ 
              position: 'absolute', top: '-50%', left: '-10%', width: '400px', height: '400px',
              background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(60px)', zIndex: 0
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ 
                width: '60px', height: '60px', background: 'var(--accent)', 
                borderRadius: '50%', display: 'flex', alignItems: 'center', 
                justifyContent: 'center', margin: '0 auto 2rem', color: 'var(--primary)'
              }}>
                <Rocket size={30} />
              </div>
              <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1.5rem' }}>Kolaborasi Inovasi</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
                Punya ide brilian untuk memajukan komunitas disabilitas? Kami siap mendukung dan mewujudkannya bersama Anda.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:info@yoi.or.id" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                  Kirim Proposal Ide <ArrowRight size={20} style={{ marginLeft: '0.8rem' }} />
                </a>
                <button className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                  Pelajari Kemitraan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Inovasi
