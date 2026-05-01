import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Heart, Globe, Users, BookOpen, Star } from 'lucide-react'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="section hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', textAlign: 'center', paddingTop: '10rem' }}>
        <div className="container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ color: 'var(--primary)', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'block' }}>
              REVOLUSI INKLUSIVITAS DIGITAL
            </span>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.1, marginBottom: '2rem', maxWidth: '1000px', margin: '0 auto 2rem' }}>
              Bringing Your Dream Into <span style={{ color: 'var(--primary)' }} className="glow-text">Reality</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
              Yo'i menjembatani kesenjangan komunikasi melalui pendidikan bahasa isyarat tercanggih dan platform kemanusiaan yang transparan.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn btn-primary">Mulai Belajar</button>
              <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Dukung Kami <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Social Proof / Partners */}
          <div style={{ marginTop: '6rem', opacity: 0.4, display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>SIBI.ID</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>BISINDO.ORG</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>INKLUSI+</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>KEMENSOS</span>
          </div>
        </div>
      </section>

      {/* Feature Section (Process) */}
      <section className="section" style={{ background: '#080808' }}>
        <div className="container">
          <div style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Get a dedicated support<br/>beyond the standard</h2>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.8rem' }}>PELAJARI</button>
          </div>

          <div className="grid grid-3">
            {[
              { num: '01', title: 'Aksesibilitas Total', desc: 'Platform yang dirancang khusus untuk memenuhi standar aksesibilitas tinggi.' },
              { num: '02', title: 'Kurikulum Modern', desc: 'Materi SIBI & BISINDO yang diperbarui secara berkala oleh para ahli.' },
              { num: '03', title: 'Komunitas Global', desc: 'Terhubung dengan ribuan relawan dan teman disabilitas di seluruh dunia.' }
            ].map((step, i) => (
              <div key={i} className="glass-card" style={{ background: 'transparent', border: 'none', paddingLeft: 0 }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: 'var(--primary)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#000',
                  fontWeight: 'bold',
                  marginBottom: '2rem'
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3.5rem' }}>Our Impact Gallery</h2>
            <p style={{ color: 'var(--text-muted)' }}>Momen-momen berharga dalam perjalanan inklusivitas kami.</p>
          </div>
          
          <div className="grid grid-3">
            {[
              'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8',
              'https://images.unsplash.com/photo-1516534775068-ba3e84529519',
              'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
              'https://images.unsplash.com/photo-1531545517296-1661c124c3a2',
              'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
              'https://images.unsplash.com/photo-1552664730-d307ca884978'
            ].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                className="glass-card"
                style={{ padding: 0, overflow: 'hidden', height: '100%' }}
              >
                <img src={`${img}?auto=format&fit=crop&q=80&w=400`} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} alt="gallery" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: '10rem' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '6rem 2rem', background: 'linear-gradient(180deg, var(--bg-card) 0%, #000 100%)' }}>
            <h2 style={{ fontSize: '4rem', marginBottom: '2rem' }}>Become part of the<br/><span style={{ color: 'var(--primary)' }}>design revolution</span></h2>
            <button className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}>Bergabung Sekarang</button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
