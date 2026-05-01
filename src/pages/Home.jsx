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
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid grid-2" style={{ alignItems: 'center', minHeight: '80vh' }}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ color: 'white', paddingRight: '2rem' }}
            >
              <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Empowering Youth<br />Skills & Opportunities
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '500px', lineHeight: 1.6 }}>
                We support young individuals in gaining industry-relevant skills that open doors to sustainable employment and entrepreneurship. Our programs focus on making vocational training more accessible and inclusive.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <Link to="/donation" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '1rem 2.5rem' }}>
                  Donate Now <Heart size={18} fill="var(--primary)" style={{ marginLeft: '0.5rem' }} />
                </Link>
                <Link to="/about" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'white', textDecoration: 'none', fontWeight: '600' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Play size={16} fill="white" />
                  </div>
                  Our process
                </Link>
              </div>

              {/* Slider Controls */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '4rem' }}>
                <button style={{ width: '50px', height: '50px', borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.2)', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ChevronLeft size={24} />
                </button>
                <button style={{ width: '50px', height: '50px', borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.3)', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: 'relative' }}
            >
              <div className="hero-image-container" style={{ borderRadius: '40px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200" 
                  alt="Empowering Youth" 
                  style={{ width: '100%', height: 'auto', display: 'block' }} 
                />
              </div>
            </motion.div>
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
