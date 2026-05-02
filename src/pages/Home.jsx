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
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
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
              <h1 style={{ fontSize: 'clamp(3rem, 7vw, 4.8rem)', marginBottom: '1.5rem', lineHeight: 1, fontWeight: '900', letterSpacing: '-0.04em' }}>
                Wujudkan Potensi <br />
                <span style={{ color: 'var(--primary)' }} className="glow-text">Tanpa Batasan</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '540px', lineHeight: 1.8 }}>
                Yo'i Foundation memberdayakan pemuda disabilitas melalui teknologi inklusif, pendidikan isyarat digital, dan peluang karir global.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <Link to="/learning" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', borderRadius: '18px' }}>
                  Mulai Belajar <ArrowRight size={20} style={{ marginLeft: '0.8rem' }} />
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#fff', fontWeight: '700', cursor: 'pointer' }}>
                  <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Play size={20} fill="#fff" />
                  </div>
                  Tonton Video
                </div>
              </div>

              {/* Trust Badges */}
              <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem', alignItems: 'center', opacity: 0.6 }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" style={{ height: '24px', filter: 'grayscale(100%) invert(1)' }} alt="Partner" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" style={{ height: '24px', filter: 'grayscale(100%) invert(1)' }} alt="Partner" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" style={{ height: '18px', filter: 'grayscale(100%) invert(1)' }} alt="Partner" />
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
                borderRadius: '48px', padding: '1rem', position: 'relative', zIndex: 2,
                boxShadow: '0 40px 100px rgba(13, 71, 161, 0.3)'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200" 
                  alt="Inclusion" 
                  style={{ width: '100%', borderRadius: '40px', display: 'block', height: '500px', objectFit: 'cover' }} 
                />
                {/* Overlay Glow */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,71,161,0.4), transparent)', borderRadius: '40px' }} />
              </div>
              
              {/* Floating Success Card */}
              <motion.div 
                animate={{ y: [0, -20, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', top: '15%', right: '-2rem', zIndex: 3 }}
              >
                <div className="glass-card" style={{ padding: '1.2rem 1.8rem', background: 'rgba(15, 23, 42, 0.9)', borderRadius: '24px', backdropFilter: 'blur(20px)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '44px', height: '44px', background: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle2 size={24} color="#fff" />
                    </div>
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>Penempatan Kerja</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>85% Alumni Terserap Industri</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-card)', borderY: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="grid grid-4 grid-2-mobile" style={{ gap: '3rem', textAlign: 'center' }}>
            {[
              { label: 'Pelajar Aktif', value: '10K+', color: 'var(--primary)' },
              { label: 'Modul Belajar', value: '150+', color: 'var(--secondary)' },
              { label: 'Komunitas Mitra', value: '50+', color: '#059669' },
              { label: 'Donasi Terkumpul', value: 'Rp 500M+', color: '#8b5cf6' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '2.8rem', fontWeight: '900', color: s.color, fontFamily: "'Outfit', sans-serif" }}>{s.value}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1.5rem' }}>Ekosistem Inklusi Kami</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Tiga pilar utama Yo'i untuk membangun kemandirian teman disabilitas.</p>
          </div>

          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {[
              { title: 'Yo\'i Academy', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600', link: '/learning', icon: <GraduationCap /> },
              { title: 'Yo\'i Career', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600', link: '/lowongan', icon: <Users /> },
              { title: 'Yo\'i Lab', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600', link: '/inovasi', icon: <Zap /> },
            ].map((p, i) => (
              <Link key={i} to={p.link} style={{ textDecoration: 'none' }}>
                <motion.div 
                  whileHover={{ y: -15 }}
                  className="glass-card" 
                  style={{ padding: '0.8rem', borderRadius: '32px', overflow: 'hidden', height: '420px', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ height: '240px', borderRadius: '24px', overflow: 'hidden', position: 'relative' }}>
                    <img src={p.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={p.title} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
                  </div>
                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem', color: '#fff' }}>{p.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Pelajari lebih lanjut tentang program pemberdayaan kami.</p>
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: '800' }}>
                      Eksplorasi <ArrowRight size={16} />
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
              position: 'relative', overflow: 'hidden', boxShadow: '0 30px 60px rgba(13, 71, 161, 0.3)'
            }}
          >
            <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '400px', height: '400px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(80px)' }} />
            <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#fff', marginBottom: '1.5rem' }}>Mari Berkolaborasi!</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3.5rem', lineHeight: 1.8 }}>
              Setiap bantuan Anda membantu kami membangun ekosistem yang lebih adil dan inklusif bagi semua orang.
            </p>
            <Link to="/donation" className="btn" style={{ background: '#fff', color: 'var(--primary)', padding: '1.2rem 4rem', fontSize: '1.1rem', fontWeight: '900', borderRadius: '18px' }}>Dukung Misi Kami</Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
