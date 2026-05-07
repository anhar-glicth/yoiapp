import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Sparkles, HelpCircle, ChevronRight } from 'lucide-react'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'var(--bg-dark)', paddingBottom: '10rem' }}
    >
      {/* Hero Contact */}
      <section style={{ 
        paddingTop: '10rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-dark) 100%)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ 
                display: 'inline-flex', padding: '0.6rem 1.2rem', background: 'var(--primary-glow)', 
                borderRadius: '100px', color: 'var(--primary)', fontSize: '0.85rem',
                fontWeight: '800', marginBottom: '2rem'
              }}
            >
              <Sparkles size={16} style={{ marginRight: '0.6rem' }} /> HUBUNGI KAMI
            </motion.div>
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: '900', lineHeight: 1.1, marginBottom: '2rem' }}>
              Mari Berdiskusi <br /><span style={{ color: 'var(--primary)' }}>Lebih Dekat</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
              Punya pertanyaan, ide kolaborasi, atau sekadar ingin menyapa? Kami selalu senang mendengar kabar dari Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start' }} id="contact-layout">
            
            {/* Left: Info & Map */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                {[
                  { icon: <Mail size={24} />, title: 'Email Resmi', value: 'halo@yoi.or.id', color: 'var(--primary)' },
                  { icon: <MessageSquare size={24} />, title: 'WhatsApp', value: '0878-1643-1029', color: '#25D366' }
                ].map((item, i) => (
                  <div key={i} className="glass-card" style={{ padding: '2rem' }}>
                    <div style={{ color: item.color, marginBottom: '1rem' }}>{item.icon}</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{item.title}</div>
                    {item.title === 'WhatsApp' ? (
                      <a href="https://wa.me/6287816431029" target="_blank" rel="noopener noreferrer" style={{ fontWeight: '800', color: 'var(--text-main)', textDecoration: 'none', borderBottom: '2px solid #25D366' }}>
                        0878-1643-1029
                      </a>
                    ) : (
                      <div style={{ fontWeight: '800', color: 'var(--text-main)' }}>{item.value}</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="glass-card" style={{ padding: '1.5rem', background: 'var(--bg-card)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <MapPin size={20} color="var(--primary)" /> Lokasi Kantor
                </h3>
                <div style={{ 
                  width: '100%', height: '300px', background: 'var(--bg-dark)', borderRadius: '20px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
                  position: 'relative', border: '1px solid var(--glass-border)'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                    alt="Map Placeholder" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} 
                  />
                  <div style={{ position: 'absolute', background: 'var(--bg-card)', padding: '1rem 2rem', borderRadius: '100px', fontWeight: '800', color: '#fff', border: '1px solid var(--primary)' }}>
                    Lihat di Google Maps
                  </div>
                </div>
              </div>

              {/* FAQ Brief */}
              <div className="glass-card" style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <HelpCircle size={20} color="var(--secondary)" /> Pertanyaan Populer
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {['Cara mendaftar pelatihan?', 'Biaya donasi minimal?', 'Metode belajar isyarat?'].map((q, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'var(--bg-dark)', borderRadius: '12px', cursor: 'pointer' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: '700' }}>{q}</span>
                      <ChevronRight size={16} color="var(--text-muted)" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="glass-card" style={{ padding: '4rem 3rem', background: 'var(--bg-card)', position: 'sticky', top: '100px' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '1rem' }}>Kirim Pesan</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Tim kami akan membalas pesan Anda dalam waktu maksimal 24 jam.</p>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="input-group-premium">
                    <label>Nama Lengkap</label>
                    <input type="text" placeholder="Budi Santoso" />
                  </div>
                  <div className="input-group-premium">
                    <label>Email</label>
                    <input type="email" placeholder="budi@email.com" />
                  </div>
                </div>
                <div className="input-group-premium">
                  <label>Subjek</label>
                  <input type="text" placeholder="Kerjasama / Pertanyaan" />
                </div>
                <div className="input-group-premium">
                  <label>Pesan Anda</label>
                  <textarea rows="6" placeholder="Tuliskan pesan Anda secara detail..."></textarea>
                </div>
                <button className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', borderRadius: '16px', fontSize: '1.1rem' }}>
                  Kirim Pesan Sekarang <Send size={20} style={{ marginLeft: '0.8rem' }} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          #contact-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        .input-group-premium {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .input-group-premium label {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--text-main);
          margin-left: 0.5rem;
        }
        .input-group-premium input, .input-group-premium textarea {
          padding: 1.2rem;
          background: var(--bg-dark);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          color: #fff;
          font-family: inherit;
          outline: none;
          transition: all 0.3s;
        }
        .input-group-premium input:focus, .input-group-premium textarea:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px var(--primary-glow);
        }
      `}</style>
    </motion.div>
  )
}

export default Contact
