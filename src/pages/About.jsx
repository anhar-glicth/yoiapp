import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, ShieldCheck, Heart, Sparkles, Zap, Users, Globe } from 'lucide-react'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'var(--bg-dark)', paddingBottom: '10rem' }}
    >
      {/* Hero About */}
      <section style={{ 
        paddingTop: '10rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden'
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
              }}>Kisah Kami</div>
              <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.2rem)', fontWeight: '900', lineHeight: 1.1, marginBottom: '2rem' }}>
                Membangun Dunia <br /><span style={{ color: 'var(--primary)' }}>Tanpa Hambatan</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Yo'i lahir dari sebuah kegelisahan akan sulitnya akses pendidikan bagi teman-teman disabilitas, terutama dalam hal komunikasi bahasa isyarat. Kami percaya bahwa setiap individu memiliki hak yang sama untuk berkembang.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8 }}>
                Melalui perpaduan teknologi terkini dan metode pendidikan yang empatik, kami berkomitmen untuk menciptakan ekosistem inklusif yang memberdayakan semua orang.
              </p>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card" 
              style={{ padding: '0.8rem', borderRadius: '40px', background: 'var(--bg-card)' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                alt="Empowerment" 
                style={{ width: '100%', borderRadius: '32px', display: 'block' }} 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '2rem' }}>
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-card" 
              style={{ padding: '4rem 3rem', borderTop: '4px solid var(--primary)' }}
            >
              <div style={{ width: '64px', height: '64px', background: 'var(--primary-glow)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '2rem' }}>
                <Eye size={32} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem' }}>Visi Kami</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                Menjadi platform global terdepan dalam mewujudkan masyarakat inklusif di mana perbedaan kemampuan bukan lagi menjadi penghalang untuk kemajuan bersama.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-card" 
              style={{ padding: '4rem 3rem', borderTop: '4px solid var(--secondary)' }}
            >
              <div style={{ width: '64px', height: '64px', background: 'rgba(255,109,0,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', marginBottom: '2rem' }}>
                <Target size={32} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem' }}>Misi Kami</h2>
              <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.2rem', lineHeight: 2, fontSize: '1.1rem' }}>
                <li>Menyediakan akses pendidikan isyarat gratis.</li>
                <li>Membangun teknologi asistif modern.</li>
                <li>Meningkatkan kesadaran inklusivitas digital.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Nilai Inti Kami</h2>
            <p style={{ color: 'var(--text-muted)' }}>Prinsip yang membimbing setiap langkah kami.</p>
          </div>
          
          <div className="scroll-x">
            {[
              { icon: <Heart size={24} />, title: 'Empati', desc: 'Memahami kebutuhan dari perspektif pengguna.', color: '#ef4444' },
              { icon: <Sparkles size={24} />, title: 'Inovasi', desc: 'Terus menciptakan solusi teknologi terbaru.', color: 'var(--primary)' },
              { icon: <ShieldCheck size={24} />, title: 'Integritas', desc: 'Menjaga kepercayaan komunitas dan mitra.', color: '#059669' },
              { icon: <Zap size={24} />, title: 'Aksi Nyata', desc: 'Berfokus pada hasil yang berdampak langsung.', color: 'var(--secondary)' }
            ].map((v, i) => (
              <motion.div key={i} className="glass-card" style={{ padding: '2.5rem', textAlign: 'center', minWidth: '260px' }}>
                <div style={{ 
                  width: '60px', height: '60px', borderRadius: '50%', background: `${v.color}15`, 
                  color: v.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  {v.icon}
                </div>
                <h3 style={{ fontWeight: '800', marginBottom: '1rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners/Stats */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: '5rem 2rem', background: 'var(--bg-card)', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '4rem', fontWeight: '800' }}>Dampak Sosial Yo'i</h2>
            <div className="grid grid-3" style={{ gap: '3rem' }}>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', fontFamily: "'Outfit', sans-serif" }}>10K+</div>
                <div style={{ color: 'var(--text-muted)', fontWeight: '700' }}>Pelajar Aktif</div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', fontFamily: "'Outfit', sans-serif" }}>50+</div>
                <div style={{ color: 'var(--text-muted)', fontWeight: '700' }}>Komunitas Mitra</div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', fontFamily: "'Outfit', sans-serif" }}>100+</div>
                <div style={{ color: 'var(--text-muted)', fontWeight: '700' }}>Proyek Sosial</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
