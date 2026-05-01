import React from 'react'
import { Heart, Camera, MessageSquare, Globe } from 'lucide-react'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#050505', borderTop: '1px solid var(--glass-border)', padding: '6rem 0 3rem' }}>
      <div className="container">
        <div className="grid grid-3" style={{ marginBottom: '4rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ background: 'var(--primary)', padding: '0.4rem', borderRadius: '8px' }}>
                <Heart size={20} fill="#000" color="#000" />
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: "'Outfit', sans-serif" }}>Yo'i</span>
            </div>
            <p style={{ color: 'var(--text-muted)', maxWidth: '300px' }}>
              Membangun jembatan komunikasi dan pendidikan inklusif untuk masa depan yang lebih baik.
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>Tautan Cepat</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}><a href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Beranda</a></li>
              <li style={{ marginBottom: '1rem' }}><a href="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Tentang Kami</a></li>
              <li style={{ marginBottom: '1rem' }}><a href="/learning" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Pendidikan</a></li>
              <li style={{ marginBottom: '1rem' }}><a href="/team" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Tim Kami</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>Hubungi Kami</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>halo@yoi.id</p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Camera size={24} className="cursor-pointer" style={{ color: 'var(--text-muted)' }} />
              <MessageSquare size={24} className="cursor-pointer" style={{ color: 'var(--text-muted)' }} />
              <Globe size={24} className="cursor-pointer" style={{ color: 'var(--text-muted)' }} />
            </div>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Yo'i Platform. All rights reserved. Inklusivitas untuk semua.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
