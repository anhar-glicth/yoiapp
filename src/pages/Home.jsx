import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Heart, Star, Sparkles, Zap, ShieldCheck, GraduationCap, Users } from 'lucide-react'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'var(--bg-dark)' }}
    >
      {/* Hero Section Premium */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '95vh', display: 'flex', alignItems: 'center', background: 'var(--bg-dark)' }}>
        {/* Background Decorative Blobs */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '600px', height: '600px', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.5, zIndex: 0 }} />
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
              <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1, fontWeight: '800', letterSpacing: '-0.04em' }}>
                Wujudkan Potensi <br />
                <span style={{ color: 'var(--primary)' }} className="glow-text">Tanpa Batasan</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '3rem', maxWidth: '540px', lineHeight: 1.8 }}>
                Yo'i Foundation hadir untuk memberdayakan penyandang disabilitas melalui pendidikan isyarat digital, pelatihan siap kerja, dan inovasi teknologi inklusif.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <Link to="/learning" className="btn btn-primary" style={{ padding: '1.1rem 2.8rem', fontSize: '1rem', borderRadius: '16px' }}>
                  Mulai Belajar <ArrowRight size={18} style={{ marginLeft: '0.6rem' }} />
                </Link>
                <Link to="/donation" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)', textDecoration: 'none', fontWeight: '700', fontSize: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-card)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                    <Heart size={20} color="var(--secondary)" fill="var(--secondary)" />
                  </div>
                  Donasi Sekarang
                </Link>
              </div>
            </motion.div>

            {/* Right: Floating Mockup Area */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              <div style={{ 
                background: 'linear-gradient(135deg, var(--primary) 0%, #0d47a1 100%)', 
                borderRadius: '40px', padding: '1rem', position: 'relative', zIndex: 2,
                boxShadow: '0 40px 80px rgba(13, 71, 161, 0.25)'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200" 
                  alt="Inclusion Empowerment" 
                  style={{ width: '100%', borderRadius: '32px', display: 'block', height: '450px', objectFit: 'cover' }} 
                />
              </div>
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -20, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', bottom: '-20px', left: '-20px', zIndex: 3 }}
              >
                <div className="glass-card" style={{ padding: '1.2rem 2rem', background: 'var(--bg-card)', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <div style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--text-main)', lineHeight: 1 }}>10K+</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pelajar Isyarat Aktif</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Quick Links */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-dark)' }}>
        <div className="container">
          <div className="scroll-x">
            {[
              { title: 'Pendidikan', sub: 'Akademi Isyarat', icon: <GraduationCap size={24} />, color: 'var(--primary)', path: '/learning' },
              { title: 'Siap Kerja', sub: 'Pelatihan Vokasional', icon: <Zap size={24} />, color: 'var(--secondary)', path: '/pelatihan' },
              { title: 'Inovasi', sub: 'Teknologi Asistif', icon: <ShieldCheck size={24} />, color: '#059669', path: '/inovasi' },
              { title: 'Lowongan', sub: 'Karir Inklusif', icon: <Users size={24} />, color: '#8b5cf6', path: '/lowongan' },
            ].map((item, i) => (
              <Link key={i} to={item.path} style={{ textDecoration: 'none' }}>
                <motion.div 
                  className="glass-card" 
                  style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', padding: '1.5rem 2rem', minWidth: '240px' }}
                  whileHover={{ y: -5, borderColor: item.color }}
                >
                  <div style={{ width: '48px', height: '48px', background: `${item.color}15`, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: '800', fontSize: '1.05rem', color: 'var(--text-main)' }}>{item.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.sub}</div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section" style={{ background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div style={{ borderRadius: '40px', overflow: 'hidden', border: '8px solid var(--bg-dark)' }}>
                <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" alt="About Yo'i" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
              </div>
            </motion.div>
            <div>
              <span style={{ color: 'var(--secondary)', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', display: 'block' }}>SIAPA KAMI</span>
              <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: 1.2 }}>Membangun Masa Depan yang <span style={{ color: 'var(--primary)' }}>Sama Untuk Semua</span></h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Yo'i Foundation adalah organisasi nirlaba yang berfokus pada pemberdayaan anak-anak dan pemuda disabilitas melalui pendekatan teknologi dan pendidikan yang inklusif. Kami percaya bahwa setiap individu memiliki hak yang sama untuk mendapatkan aksesibilitas dan peluang yang setara.
              </p>
              <div className="grid grid-2-mobile grid-2" style={{ gap: '1.5rem' }}>
                <div className="glass-card" style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>50+</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>Komunitas Mitra</div>
                </div>
                <div className="glass-card" style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>100%</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>Gratis Selamanya</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Testimonials Section */}
      <section className="section" style={{ background: 'var(--bg-dark)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: 'var(--secondary)', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', display: 'block' }}>Kisah Nyata</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Suara Alumni <span style={{ color: 'var(--primary)' }}>Yo'i</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Mereka yang telah melampaui batasan dan meraih impian.</p>
          </div>

          <div className="scroll-x">
            {[
              {
                name: 'Rina Marlina',
                role: 'Alumni Siap Kerja',
                comment: 'Yo\'i benar-benar mengubah hidup saya. Sekarang saya bekerja di perusahaan tech impian.',
                rating: 5,
                color: 'var(--primary)',
                avatar: 'https://i.pravatar.cc/100?img=47'
              },
              {
                name: 'Budi Santoso',
                role: 'Alumni Pendidikan',
                comment: 'Berkat bimbingan Yo\'i, portofolio saya diakui dan langsung diterima kerja 2 minggu setelah lulus!',
                rating: 5,
                color: 'var(--secondary)',
                avatar: 'https://i.pravatar.cc/100?img=12'
              },
              {
                name: 'Dewi Kusuma',
                role: 'Alumni Bisindo',
                comment: 'Belajar isyarat di Yo\'i sangat mudah dan interaktif. Sekarang saya bisa berkomunikasi dengan teman Tuli.',
                rating: 5,
                color: '#059669',
                avatar: 'https://i.pravatar.cc/100?img=32'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', minWidth: '300px' }}
              >
                <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '1.5rem' }}>
                  {[...Array(item.rating)].map((_, s) => <Star key={s} size={14} fill="#F59E0B" color="#F59E0B" />)}
                </div>
                <p style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: 1.7, fontStyle: 'italic', flex: 1, marginBottom: '2rem' }}>
                  "{item.comment}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                  <img src={item.avatar} alt={item.name} style={{ width: '44px', height: '44px', borderRadius: '50%', border: `2px solid ${item.color}` }} />
                  <div>
                    <div style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--text-main)' }}>{item.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>{item.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="glass-card" 
            style={{ 
              textAlign: 'center', padding: '6rem 2rem', 
              background: 'linear-gradient(135deg, var(--primary) 0%, #0d47a1 100%)', 
              color: '#fff', borderRadius: '48px', position: 'relative', overflow: 'hidden' 
            }}
            whileHover={{ scale: 1.01 }}
          >
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(50px)' }} />
            <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: '800' }}>Siap Bergabung Bersama Kami?</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Dukungan Anda adalah bahan bakar bagi kami untuk terus berinovasi dan memberikan yang terbaik bagi komunitas.
            </p>
            <Link to="/donation" className="btn" style={{ background: 'var(--secondary)', color: '#fff', fontSize: '1.1rem', padding: '1.2rem 3.5rem', borderRadius: '16px', fontWeight: '800' }}>Dukung Sekarang</Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
