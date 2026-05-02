import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, Instagram, Mail, Globe, MapPin, ArrowRight, Send } from 'lucide-react'

const Footer = () => {
  return (
    <footer style={{ 
      background: 'var(--bg-card)', 
      borderTop: '1px solid var(--glass-border)', 
      padding: '8rem 0 4rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle Glow in Footer */}
      <div style={{ 
        position: 'absolute', bottom: '-10%', left: '50%', width: '500px', height: '500px', 
        background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0, opacity: 0.5
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-footer" style={{ gap: '4rem', marginBottom: '6rem' }}>
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '12px', boxShadow: '0 5px 15px var(--primary-glow)' }}>
                <Heart size={24} fill="#fff" color="#fff" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-main)', fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>Yo'i</span>
                <span style={{ fontSize: '0.7rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px' }}>Foundation</span>
              </div>
            </Link>
            <p style={{ color: 'var(--text-muted)', maxWidth: '350px', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2.5rem' }}>
              Membangun jembatan komunikasi dan pendidikan inklusif melalui teknologi inovatif untuk masa depan yang lebih baik bagi semua individu.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[
                { icon: <Instagram size={20} />, url: '#' },
                { icon: <Globe size={20} />, url: '#' },
                { icon: <Mail size={20} />, url: 'mailto:halo@yoi.id' }
              ].map((social, i) => (
                <a key={i} href={social.url} style={{ 
                  width: '44px', height: '44px', borderRadius: '12px', 
                  background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', 
                  justifyContent: 'center', color: 'var(--text-muted)', transition: 'all 0.3s'
                }} className="social-icon">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links 1 */}
          <div>
            <h4 style={{ marginBottom: '2rem', fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)' }}>Platform</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1.2rem' }}><Link to="/learning" className="footer-link">Akademi Isyarat</Link></li>
              <li style={{ marginBottom: '1.2rem' }}><Link to="/pelatihan" className="footer-link">Program Siap Kerja</Link></li>
              <li style={{ marginBottom: '1.2rem' }}><Link to="/inovasi" className="footer-link">Laboratorium Inovasi</Link></li>
              <li style={{ marginBottom: '1.2rem' }}><Link to="/lowongan" className="footer-link">Lowongan Kerja</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 style={{ marginBottom: '2rem', fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)' }}>Organisasi</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1.2rem' }}><Link to="/about" className="footer-link">Tentang Kami</Link></li>
              <li style={{ marginBottom: '1.2rem' }}><Link to="/team" className="footer-link">Tim Kami</Link></li>
              <li style={{ marginBottom: '1.2rem' }}><Link to="/donation" className="footer-link">Donasi & Dukungan</Link></li>
              <li style={{ marginBottom: '1.2rem' }}><Link to="/contact" className="footer-link">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div style={{ gridColumn: 'span 2' }}>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)' }}>Berlangganan Kabar</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Dapatkan info terbaru tentang program dan inovasi inklusif kami.</p>
            <div style={{ 
              display: 'flex', 
              background: 'var(--bg-dark)', 
              borderRadius: '16px', 
              padding: '0.4rem',
              border: '1px solid var(--glass-border)'
            }}>
              <input 
                type="email" 
                placeholder="Alamat email Anda" 
                style={{ 
                  background: 'transparent', border: 'none', padding: '0.8rem 1.2rem', 
                  flex: 1, color: 'var(--text-main)', fontSize: '0.9rem', outline: 'none'
                }} 
              />
              <button style={{ 
                background: 'var(--primary)', color: '#fff', border: 'none', 
                borderRadius: '12px', padding: '0 1.5rem', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700'
              }}>
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid var(--glass-border)', 
          paddingTop: '3rem', 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '600' }}>
            &copy; {new Date().getFullYear()} Yo'i Platform. Membangun Dunia Tanpa Hambatan.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link to="/privacy" className="footer-link" style={{ fontSize: '0.85rem' }}>Kebijakan Privasi</Link>
            <Link to="/terms" className="footer-link" style={{ fontSize: '0.85rem' }}>Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>

      <style>{`
        .grid-footer {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 768px) {
          .grid-footer {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .grid-footer {
            grid-template-columns: repeat(6, 1fr);
          }
        }
        .footer-link {
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .footer-link:hover {
          color: var(--primary);
          transform: translateX(5px);
        }
        .social-icon:hover {
          background: var(--primary) !important;
          color: #fff !important;
          transform: translateY(-5px);
          box-shadow: 0 5px 15px var(--primary-glow);
        }
      `}</style>
    </footer>
  )
}

export default Footer
