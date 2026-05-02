import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, ArrowLeft, CheckCircle2, Info } from 'lucide-react'
import { Link } from 'react-router-dom'

const Privacy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'var(--bg-dark)', paddingBottom: '10rem' }}
    >
      {/* Hero Legal */}
      <section style={{ 
        paddingTop: '10rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-dark) 100%)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: '700', marginBottom: '3rem' }}>
              <ArrowLeft size={18} /> Kembali ke Beranda
            </Link>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '900', marginBottom: '1rem' }}>Kebijakan Privasi</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Komitmen kami dalam menjaga data dan kepercayaan Anda.</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="glass-card" style={{ padding: '4rem', background: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem', background: 'var(--primary-glow)', borderRadius: '16px', color: 'var(--primary)', marginBottom: '4rem' }}>
              <Info size={20} />
              <span style={{ fontSize: '0.9rem', fontWeight: '800' }}>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              
              <section>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--primary-glow)', color: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Eye size={24} />
                  </div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>1. Informasi yang Dikumpulkan</h2>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '2rem' }}>
                  Kami mengumpulkan informasi yang Anda berikan langsung saat mendaftar program, memberikan donasi, atau berinteraksi dengan platform kami:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="grid-1-mobile">
                  {['Nama Lengkap', 'Alamat Email', 'Nomor Telepon', 'Data Transaksi Donasi'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)', fontWeight: '700', padding: '1rem', background: 'var(--bg-dark)', borderRadius: '12px' }}>
                      <CheckCircle2 size={18} color="var(--primary)" /> {item}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--secondary-glow)', color: 'var(--secondary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Lock size={24} />
                  </div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>2. Penggunaan Data</h2>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  Data Anda digunakan semata-mata untuk meningkatkan kualitas layanan pendidikan, memproses donasi secara aman, dan memberikan informasi relevan mengenai program inklusivitas Yo'i Foundation. Kami tidak akan pernah menjual data Anda kepada pihak ketiga.
                </p>
              </section>

              <section>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'rgba(5, 150, 105, 0.1)', color: '#059669', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Shield size={24} />
                  </div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>3. Keamanan Informasi</h2>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  Kami menerapkan enkripsi SSL/TLS standar industri untuk setiap transmisi data. Server kami dipantau 24/7 untuk mencegah akses tidak sah dan memastikan data pribadi Anda tetap terlindungi di setiap langkah.
                </p>
              </section>

            </div>

            <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-muted)' }}>
                Ada pertanyaan mengenai privasi Anda? Hubungi kami di <span style={{ color: 'var(--primary)', fontWeight: '800' }}>privacy@yoi.or.id</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .grid-1-mobile { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </motion.div>
  )
}

export default Privacy
