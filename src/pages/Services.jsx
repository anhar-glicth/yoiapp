import React from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Users, 
  Monitor, 
  MessageSquare, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Globe2, 
  Ear, 
  Accessibility, 
  HandMetal,
  Hospital
} from 'lucide-react'

const services = [
  {
    icon: <Hospital size={32} />,
    title: 'Layanan Kesehatan',
    desc: 'Informasi rumah sakit mitra dengan fasilitas ramah Tuli, jadwal dokter spesialis, dan panduan pendaftaran inklusif.',
    features: ['Cek Jadwal Dokter', 'Info RS Ramah Tuli', 'Panduan Registrasi'],
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.1)',
    path: '/health-services'
  },
  {
    icon: <HandMetal size={32} />,
    title: 'Interpreter Bisindo/SIBI',
    desc: 'Layanan penerjemah bahasa isyarat profesional untuk seminar, rapat, maupun acara publik baik secara luring maupun daring.',
    features: ['Kualitas Standard Internasional', 'Tersedia 24/7', 'Berpengalaman > 5 tahun'],
    color: 'var(--primary)',
    bg: 'var(--primary-glow)',
    path: '/contact'
  },
  {
    icon: <Accessibility size={32} />,
    title: 'Audit Aksesibilitas',
    desc: 'Evaluasi komprehensif infrastruktur fisik maupun digital untuk memastikan lingkungan yang ramah bagi teman disabilitas.',
    features: ['Audit WCAG 2.1', 'Rekomendasi Teknis', 'Sertifikat Inklusi'],
    color: '#8b5cf6',
    bg: 'rgba(139, 92, 246, 0.1)',
    path: '/contact'
  },
  {
    icon: <Monitor size={32} />,
    title: 'Media Inklusif',
    desc: 'Pembuatan konten kreatif berbasis aksesibilitas, mulai dari video dengan subtitle, voice over, hingga interpretasi isyarat.',
    features: ['Subtitle (CC)', 'Audio Description', 'Sign Language Overlay'],
    color: '#0ea5e9',
    bg: 'rgba(14, 165, 233, 0.1)',
    path: '/contact'
  },
  {
    icon: <BookOpen size={32} />,
    title: 'Corporate Workshop',
    desc: 'Program pelatihan budaya inklusi untuk perusahaan guna menciptakan lingkungan kerja yang suportif bagi karyawan disabilitas.',
    features: ['Etika Berinteraksi', 'Basic Sign Language', 'Inclusive Recruitment'],
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.1)',
    path: '/contact'
  }
]

const Services = () => {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'var(--bg-dark)', minHeight: '100vh' }}
    >
      {/* Hero Section */}
      <section style={{ 
        paddingTop: '10rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-dark) 100%)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ 
                display: 'inline-flex', padding: '0.6rem 1.2rem', background: 'var(--primary-glow)', 
                borderRadius: '100px', color: 'var(--primary)', fontSize: '0.85rem',
                fontWeight: '800', marginBottom: '2rem'
              }}>SOLUSI INKLUSIF KAMI</div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '900', lineHeight: 1.1, marginBottom: '2rem' }}>
                Layanan Profesional untuk <br /><span style={{ color: 'var(--primary)' }}>Dunia yang Setara</span>
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '3rem' }}>
                Yo'i Foundation menyediakan berbagai layanan ahli untuk membantu individu, komunitas, dan korporasi menjadi lebih inklusif dan aksesibel.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div style={{ 
          position: 'absolute', top: '20%', right: '-5%', width: '300px', height: '300px', 
          background: 'var(--primary)', filter: 'blur(150px)', opacity: 0.1, pointerEvents: 'none' 
        }} />
        <div style={{ 
          position: 'absolute', bottom: '0', left: '-5%', width: '300px', height: '300px', 
          background: 'var(--secondary)', filter: 'blur(150px)', opacity: 0.1, pointerEvents: 'none' 
        }} />
      </section>

      {/* Services Grid */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="services-grid">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card service-card"
              >
                <div style={{ 
                  width: '70px', height: '70px', borderRadius: '20px', 
                  background: service.bg, color: service.color, 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  marginBottom: '2rem', boxShadow: `0 10px 20px ${service.color}15`
                }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '1.2rem', color: 'var(--text-main)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {service.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem' }}>
                  {service.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem', color: 'var(--text-main)', fontWeight: '700', fontSize: '0.9rem' }}>
                      <CheckCircle2 size={18} color={service.color} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button 
                  className="service-btn" 
                  style={{ '--scolor': service.color }}
                  onClick={() => navigate(service.path)}
                >
                  {service.title === 'Layanan Kesehatan' ? 'Lihat Jadwal & RS' : 'Konsultasi Sekarang'} <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ paddingBottom: '10rem' }}>
        <div className="container">
          <div className="glass-card cta-banner">
            <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem', color: '#fff' }}>
                  Butuh Layanan Kustom?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                  Kami siap membantu Anda merancang solusi inklusivitas yang paling sesuai dengan kebutuhan spesifik organisasi Anda.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div className="cta-stat">
                    <span className="stat-num">100%</span>
                    <span className="stat-label">Komitmen</span>
                  </div>
                  <div className="cta-stat">
                    <span className="stat-num">50+</span>
                    <span className="stat-label">Mitra Puas</span>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-white"
                  style={{ padding: '1.2rem 3rem', fontSize: '1.1rem', borderRadius: '100px' }}
                >
                  Hubungi Tim Ahli <MessageSquare size={20} style={{ marginLeft: '0.8rem' }} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }
        .service-card {
          padding: 3rem;
          border-radius: 40px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .service-card:hover {
          background: var(--bg-card);
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
        }
        .service-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          width: 100%;
          padding: 1.2rem;
          background: transparent;
          border: 2px solid var(--glass-border);
          border-radius: 16px;
          color: var(--text-main);
          font-weight: 800;
          cursor: pointer;
          transition: 0.3s;
        }
        .service-btn:hover {
          background: var(--scolor);
          border-color: var(--scolor);
          color: white;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .cta-banner {
          background: linear-gradient(135deg, var(--primary) 0%, #1a237e 100%);
          padding: 5rem;
          border-radius: 48px;
          position: relative;
          overflow: hidden;
          border: none;
        }
        .cta-banner::after {
          content: '';
          position: absolute;
          top: -20%; right: -10%;
          width: 400px; height: 400px;
          background: rgba(255,255,255,0.05);
          border-radius: 50%;
        }
        .cta-stat {
          display: flex;
          flex-direction: column;
        }
        .stat-num {
          font-size: 1.8rem;
          font-weight: 900;
          color: #fff;
        }
        .stat-label {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.6);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .btn-white {
          background: #fff;
          color: var(--primary);
          border: none;
          font-weight: 900;
          display: inline-flex;
          align-items: center;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }
        @media (max-width: 768px) {
          .cta-banner { padding: 3rem 2rem; }
          .cta-banner .grid-2 { grid-template-columns: 1fr; text-align: center; }
          .cta-banner .cta-stat { align-items: center; }
          .cta-banner div[style*="display: flex"] { justify-content: center; }
        }
      `}</style>
    </motion.div>
  )
}

export default Services
