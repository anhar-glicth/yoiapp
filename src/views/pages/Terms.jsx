import React from 'react'
import { motion } from 'framer-motion'
import { FileText, CheckCircle, Scale, AlertCircle, ArrowLeft, ShieldCheck, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const Terms = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'var(--bg-dark)', paddingBottom: '10rem' }}
    >
      {/* Hero Terms */}
      <section style={{ 
        paddingTop: '10rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-dark) 100%)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: '700', marginBottom: '3rem' }}>
              <ArrowLeft size={18} /> Kembali ke Beranda
            </Link>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '900', marginBottom: '1rem' }}>Syarat & Ketentuan</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Peraturan penggunaan platform untuk kenyamanan bersama.</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="glass-card" style={{ padding: '4rem', background: 'var(--bg-card)' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              
              <section>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--primary-glow)', color: 'var(--primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShieldCheck size={24} />
                  </div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>1. Penerimaan Layanan</h2>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  Dengan mengakses dan menggunakan platform Yo'i Foundation, Anda secara otomatis menyetujui seluruh syarat dan ketentuan yang berlaku. Kami berhak melakukan perubahan ketentuan sewaktu-waktu tanpa pemberitahuan sebelumnya demi kenyamanan dan keamanan ekosistem inklusi kami.
                </p>
              </section>

              <section>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'var(--secondary-glow)', color: 'var(--secondary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Globe size={24} />
                  </div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>2. Hak Atas Kekayaan Intelektual</h2>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  Seluruh konten, termasuk namun tidak terbatas pada video pembelajaran, aset grafis, dan kode program, adalah milik sah Yo'i Foundation. Penggunaan konten untuk tujuan komersial di luar platform tanpa izin tertulis adalah pelanggaran serius.
                </p>
                <div style={{ padding: '1.5rem', background: 'rgba(255, 109, 0, 0.05)', borderLeft: '4px solid var(--secondary)', borderRadius: '0 12px 12px 0' }}>
                  <p style={{ color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <AlertCircle size={18} /> Larangan keras penggandaan materi tanpa izin.
                  </p>
                </div>
              </section>

              <section>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '44px', height: '44px', background: 'rgba(5, 150, 105, 0.1)', color: '#059669', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Scale size={24} />
                  </div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>3. Batasan Tanggung Jawab</h2>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                  Yo'i Foundation berupaya semaksimal mungkin untuk menyediakan informasi yang akurat dan tepat waktu. Namun, kami tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan platform atau ketergantungan pada materi yang disediakan oleh pihak ketiga di dalam situs kami.
                </p>
              </section>

            </div>

            <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-muted)' }}>
                Perlu penjelasan lebih detail? Hubungi tim legal kami di <span style={{ color: 'var(--primary)', fontWeight: '800' }}>legal@yoi.or.id</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Terms
