import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play, ChevronLeft, ChevronRight, Heart } from 'lucide-react'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="hero-curve">
          <div className="hero-pattern"></div>
        </div>
        
        {/* Hero blob shape - large rounded rect covering left portion, image floats on right */}
        <div style={{ position: 'relative', width: '100%', minHeight: '88vh', display: 'flex', alignItems: 'center' }}>
          
          {/* THE BLUE BLOB - exactly like screenshot: covers left ~65%, big border-radius on right side */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '65%',
            height: '100%',
            background: 'var(--primary)',
            borderRadius: '0 120px 120px 0',
            zIndex: 0,
          }} />

          {/* Dotted pattern on the right */}
          <div style={{
            position: 'absolute',
            right: '2%',
            top: '10%',
            width: '340px',
            height: '340px',
            backgroundImage: 'radial-gradient(circle, rgba(21,101,192,0.25) 2px, transparent 2px)',
            backgroundSize: '28px 28px',
            zIndex: 0,
            borderRadius: '50%',
          }} />

          {/* Content row */}
          <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center', minHeight: '80vh', paddingTop: '2rem', paddingBottom: '2rem' }}>
              
              {/* Left: text inside the blob */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ color: 'white' }}
              >
                <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.8rem)', marginBottom: '1.5rem', lineHeight: 1.15, fontWeight: '800' }}>
                  Empowering Youth<br />Skills &amp; Opportunities
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginBottom: '2.5rem', maxWidth: '460px', lineHeight: 1.7 }}>
                  Kami mendukung individu muda dalam mendapatkan keterampilan relevan industri yang membuka pintu menuju lapangan kerja berkelanjutan dan kewirausahaan. Program kami berfokus pada pelatihan vokasional yang lebih aksesibel dan inklusif.
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                  <Link to="/donation" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '0.9rem 2.2rem', fontWeight: '700', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    Dukung Kami <Heart size={16} fill="var(--primary)" />
                  </Link>
                  <Link to="/about" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'white', textDecoration: 'none', fontWeight: '600', fontSize: '1rem' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Play size={16} fill="white" color="white" />
                    </div>
                    Proses Kami
                  </Link>
                </div>

                {/* Slider Controls */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button style={{ width: '48px', height: '48px', borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.25)', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ChevronLeft size={22} />
                  </button>
                  <button style={{ width: '48px', height: '48px', borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.4)', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ChevronRight size={22} />
                  </button>
                </div>
              </motion.div>

              {/* Right: image floating OUTSIDE the blob */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
              >
                <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.18)', maxWidth: '480px', width: '100%' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=900" 
                    alt="Empowering Youth" 
                    style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} 
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '6rem', alignItems: 'center' }}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ color: 'var(--secondary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Who We Are</span>
                <div style={{ height: '2px', width: '60px', background: 'var(--secondary)' }}></div>
              </div>
              <h2 style={{ color: 'var(--text-main)', fontSize: '3rem', marginBottom: '2rem' }}>ABOUT US</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                SkillBridge Foundation is a registered not-for-profit organization dedicated to advancing the well-being of children and promoting equality for girls and young women across communities. Through its grassroots social development efforts, SkillBridge Foundation strives to create lasting positive change in the lives of vulnerable children, their families, and their communities by adopting a gender-transformative, child-centered approach. Since its inception in 1996, SkillBridge Foundation has positively impacted the lives of millions of young people by connecting them with protective services, quality education, accessible healthcare, a healthy environment, better livelihood opportunities, and meaningful community participation.
              </p>
              <Link to="/about" className="btn btn-primary" style={{ padding: '1rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}>
                Know More <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '50%', padding: '0.2rem' }}><ArrowRight size={18} /></div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="image-stack"
            >
              <div className="image-stack-top image-stack-item">
                <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" alt="Students" />
              </div>
              <div className="image-stack-bottom image-stack-item">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600" alt="Teamwork" />
              </div>
              <div className="stats-badge float-anim">
                <h4>50 Lakh</h4>
                <p>Lives Impacted</p>
              </div>
              
              {/* Decorative Arrow */}
              <svg style={{ position: 'absolute', bottom: '-40px', right: '120px', width: '150px', height: '150px', zIndex: 0 }} viewBox="0 0 200 200">
                <path d="M20,180 Q100,180 150,50" fill="none" stroke="var(--accent)" strokeWidth="4" strokeDasharray="8 8" />
                <path d="M140,60 L150,50 L160,60" fill="none" stroke="var(--accent)" strokeWidth="4" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--bg-dark)' }}>
        <div className="container">
          <div className="glass-card" style={{ textAlign: 'center', padding: '6rem 2rem', background: 'linear-gradient(135deg, var(--primary) 0%, #0d47a1 100%)', color: 'white', borderRadius: '40px' }}>
            <h2 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '2.5rem' }}>Ready to make a difference?</h2>
            <Link to="/donation" className="btn" style={{ background: 'var(--secondary)', color: 'white', fontSize: '1.2rem', padding: '1.2rem 3.5rem' }}>Join Us Today</Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
