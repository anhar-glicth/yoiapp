import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, Instagram, Globe } from 'lucide-react'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="section"
      style={{ paddingTop: '8rem', background: 'var(--bg-dark)' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ 
              display: 'inline-flex', 
              padding: '0.6rem 1.2rem', 
              background: 'var(--primary-glow)', 
              borderRadius: '100px', 
              color: 'var(--primary)',
              fontSize: '0.85rem',
              fontWeight: '800',
              marginBottom: '1.5rem'
            }}
          >
            HUBUNGI KAMI
          </motion.div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '800', marginBottom: '1.5rem' }}>
            Mari Berdiskusi <br /><span style={{ color: 'var(--primary)' }}>Lebih Dekat</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Punya pertanyaan, ide kolaborasi, atau sekadar ingin menyapa? Kami selalu senang mendengar kabar dari Anda.
          </p>
        </div>

        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start', marginBottom: '8rem' }}>
          {/* Contact Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { 
                icon: <Mail size={24} />, 
                title: 'Email Resmi', 
                value: 'halo@yoi.or.id', 
                desc: 'Respon dalam 1-2 hari kerja.',
                color: 'var(--primary)'
              },
              { 
                icon: <MessageSquare size={24} />, 
                title: 'WhatsApp Layanan', 
                value: '+62 812 3456 7890', 
                desc: 'Tersedia Senin - Jumat (09:00 - 17:00).',
                color: '#25D366'
              },
              { 
                icon: <MapPin size={24} />, 
                title: 'Kantor Operasional', 
                value: 'Gedung Inovasi Lt. 4, Jakarta Selatan', 
                desc: 'Kunjungan dengan janji temu.',
                color: '#ef4444'
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="glass-card" 
                style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem' }}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div style={{ 
                  width: '56px', height: '56px', borderRadius: '16px', 
                  background: `${item.color}15`, color: item.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.4rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-main)', fontWeight: '700', marginBottom: '0.2rem' }}>{item.value}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Connect Card */}
            <div className="glass-card" style={{ padding: '2rem', marginTop: '1rem', background: 'var(--bg-card)' }}>
              <h4 style={{ fontWeight: '800', marginBottom: '1.5rem' }}>Media Sosial</h4>
              <div style={{ display: 'flex', gap: '1.2rem' }}>
                <a href="#" className="social-icon-btn"><Instagram size={22} /></a>
                <a href="#" className="social-icon-btn"><Globe size={22} /></a>
                <a href="#" className="social-icon-btn"><MessageSquare size={22} /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            className="glass-card" 
            style={{ padding: '3rem', background: 'var(--bg-card)' }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem' }}>Kirim Pesan</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="input-group">
                  <label>Nama Lengkap</label>
                  <input type="text" placeholder="Contoh: Budi Santoso" />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input type="email" placeholder="budi@email.com" />
                </div>
              </div>
              <div className="input-group">
                <label>Subjek</label>
                <input type="text" placeholder="Kolaborasi / Pertanyaan / Lainnya" />
              </div>
              <div className="input-group">
                <label>Pesan Anda</label>
                <textarea rows="5" placeholder="Tuliskan pesan Anda di sini..."></textarea>
              </div>
              <button className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', borderRadius: '14px', fontSize: '1rem' }}>
                Kirim Sekarang <Send size={18} style={{ marginLeft: '0.8rem' }} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .input-group label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-main);
          margin-left: 0.5rem;
        }
        .input-group input, .input-group textarea {
          padding: 1rem 1.2rem;
          background: var(--bg-dark);
          border: 1px solid var(--glass-border);
          border-radius: 14px;
          color: var(--text-main);
          font-family: inherit;
          outline: none;
          transition: all 0.3s;
        }
        .input-group input:focus, .input-group textarea:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px var(--primary-glow);
        }
        .social-icon-btn {
          width: 50px; height: 50px; border-radius: 12px;
          background: var(--bg-dark); color: var(--text-muted);
          display: flex; alignItems: center; justifyContent: center;
          text-decoration: none; transition: all 0.3s;
        }
        .social-icon-btn:hover {
          background: var(--primary); color: #fff; transform: translateY(-5px);
        }
        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </motion.div>
  )
}

export default Contact
