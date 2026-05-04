import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Star, Sparkles, Zap, ShieldCheck, GraduationCap, Users, Play, CheckCircle2 } from 'lucide-react'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'var(--bg-dark)' }}
    >
      {/* Hero Section Premium */}
      <section style={{
        position: 'relative', overflow: 'hidden', minHeight: '100vh',
        display: 'flex', alignItems: 'center', background: 'var(--bg-dark)',
        paddingTop: '80px'
      }}>
        {/* Decorative Blobs */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '600px', height: '600px', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.6, zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '400px', height: '400px', background: 'rgba(255, 109, 0, 0.15)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }} id="home-hero-grid">
            {/* Left: Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
                padding: '0.6rem 1.2rem', background: 'var(--primary-glow)',
                borderRadius: '100px', color: 'var(--primary)', fontSize: '0.85rem',
                fontWeight: '800', marginBottom: '2rem', letterSpacing: '1px'
              }}>
                <Sparkles size={16} /> PLATFORM INKLUSIF MASA DEPAN
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1, fontWeight: '900', letterSpacing: '-0.04em' }}>
                Wujudkan Potensi <br />
                <span style={{ color: 'var(--primary)' }} className="glow-text">Tanpa Batasan</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '3rem', maxWidth: '540px', lineHeight: 1.8 }}>
                Yo'i Foundation memberdayakan pemuda disabilitas melalui teknologi inklusif, pendidikan isyarat digital, dan peluang karir global.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
                <Link to="/learning" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem', borderRadius: '16px' }}>
                  Mulai Belajar <ArrowRight size={18} style={{ marginLeft: '0.6rem' }} />
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)', fontWeight: '800', cursor: 'pointer' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Play size={18} fill="currentColor" />
                  </div>
                  Tonton Video
                </div>
              </div>

              {/* Trust Badges */}
              <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem', alignItems: 'center', opacity: 0.5 }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" style={{ height: '20px', filter: 'grayscale(1)' }} alt="Partner" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" style={{ height: '20px', filter: 'grayscale(1)' }} alt="Partner" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" style={{ height: '14px', filter: 'grayscale(1)' }} alt="Partner" />
              </div>
            </motion.div>

            {/* Right: Premium Visual */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              <div style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, #0d47a1 100%)',
                borderRadius: '48px', padding: '0.8rem', position: 'relative', zIndex: 2,
                boxShadow: '0 40px 100px rgba(13, 71, 161, 0.2)'
              }}>
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200"
                  alt="Inclusion"
                  style={{ width: '100%', borderRadius: '40px', display: 'block', height: '450px', objectFit: 'cover' }}
                />
              </div>

              {/* Floating Success Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', top: '15%', right: '-1rem', zIndex: 3 }}
                className="hide-on-mobile"
              >
                <div className="glass-card" style={{ padding: '1rem 1.5rem', background: 'rgba(255, 255, 255, 0.9)', borderRadius: '20px', backdropFilter: 'blur(10px)', border: '1px solid var(--primary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle2 size={20} color="#fff" />
                    </div>
                    <div>
                      <div style={{ fontWeight: '900', fontSize: '1rem', color: 'var(--primary)' }}>85% Penempatan</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700' }}>Alumni Siap Kerja</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar - FIXED GRID */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-card)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="grid grid-4 grid-stats" style={{ gap: '2rem', textAlign: 'center' }}>
            {[
              { label: 'Pelajar Aktif', value: '10K+', color: 'var(--primary)' },
              { label: 'Modul Belajar', value: '150+', color: 'var(--secondary)' },
              { label: 'Komunitas', value: '50+', color: '#059669' },
              { label: 'Placement', value: '92%', color: '#8b5cf6' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: s.color, fontFamily: "'Outfit', sans-serif", marginBottom: '0.2rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem' }}>Ekosistem Inklusi Kami</h2>
            <p style={{ color: 'var(--text-muted)' }}>Tiga pilar utama Yo'i untuk membangun kemandirian.</p>
          </div>

          <div className="ecosystem-grid">
            {[
              {
                title: 'Yo\'i Academy',
                img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
                link: '/learning',
                desc: 'Akses ribuan materi pendidikan isyarat digital dan teknologi yang inklusif untuk semua.',
                color: 'var(--primary)'
              },
              {
                title: 'Yo\'i Career',
                img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600',
                link: '/lowongan',
                desc: 'Hubungkan potensi Anda dengan perusahaan mitra yang menjunjung tinggi nilai inklusi.',
                color: 'var(--secondary)'
              },
              {
                title: 'Yo\'i Services',
                img: 'https://images.unsplash.com/photo-1573163231162-8011be30cc4a?auto=format&fit=crop&q=80&w=600',
                link: '/services',
                desc: 'Layanan profesional mulai dari interpreter isyarat hingga audit aksesibilitas digital.',
                color: '#0ea5e9'
              },
              {
                title: 'Yo\'i Inovasi',
                img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
                link: '/inovasi',
                desc: 'Temukan berbagai riset alat bantu dan teknologi AI terbaru untuk kemandirian disabilitas.',
                color: '#8b5cf6'
              },
            ].map((p, i) => (
              <Link key={i} to={p.link} style={{ textDecoration: 'none' }}>
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-card ecosystem-card"
                  style={{
                    padding: '1rem',
                    borderRadius: '32px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.05)'
                  }}
                >
                  <div style={{
                    height: '220px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    marginBottom: '1.5rem',
                    position: 'relative'
                  }}>
                    <img src={p.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={p.title} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `linear-gradient(to bottom, transparent 0%, ${p.color}30 100%)`
                    }} />
                  </div>
                  <div style={{ padding: '0.5rem 1rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '0.8rem', color: 'var(--text-main)' }}>{p.title}</h3>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2rem', flex: 1, lineHeight: 1.6 }}>{p.desc}</p>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '0.8rem',
                      color: p.color, fontWeight: '900', fontSize: '0.95rem',
                      textTransform: 'uppercase', letterSpacing: '1px'
                    }}>
                      Mulai Eksplorasi <ArrowRight size={18} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ paddingBottom: '12rem' }}>
        <div className="container">
          <motion.div
            whileHover={{ scale: 1.01 }}
            style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, #0d47a1 100%)',
              padding: '6rem 2rem', borderRadius: '56px', textAlign: 'center',
              position: 'relative', overflow: 'hidden', boxShadow: '0 30px 60px rgba(13, 71, 161, 0.2)'
            }}
          >
            <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#fff', marginBottom: '1.5rem' }}>Mari Berkolaborasi!</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3.5rem', lineHeight: 1.8 }}>
              Setiap bantuan Anda membantu kami membangun ekosistem yang lebih adil dan inklusif bagi semua orang.
            </p>
            <Link to="/donation" className="btn" style={{ background: '#fff', color: 'var(--primary)', padding: '1.2rem 4rem', fontSize: '1.1rem', fontWeight: '900', borderRadius: '18px' }}>Dukung Misi Kami</Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          #home-hero-grid { grid-template-columns: 1fr; gap: 3rem; }
          .hide-on-mobile { display: none; }
        }
        .ecosystem-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }
        @media (min-width: 640px) {
          .ecosystem-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .ecosystem-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </motion.div>
  )
}

export default Home
