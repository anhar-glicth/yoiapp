import React from 'react'
import { motion } from 'framer-motion'
import { FileText, CheckCircle, Scale, AlertCircle, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const Terms = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="section"
      style={{ paddingTop: '8rem', background: 'var(--bg-dark)' }}
    >
      <div className="container">
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '3rem', fontWeight: '700' }}>
          <ArrowLeft size={16} /> Kembali
        </Link>

        <div className="glass-card" style={{ padding: '4rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ width: '80px', height: '80px', background: 'var(--primary-glow)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', margin: '0 auto 2rem' }}>
              <Scale size={40} />
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Syarat & Ketentuan</h1>
            <p style={{ color: 'var(--text-muted)' }}>Berlaku sejak: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="content-area" style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <CheckCircle size={24} color="var(--primary)" /> 1. Penerimaan Ketentuan
              </h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Dengan mengakses dan menggunakan platform Yo'i Foundation, Anda setuju untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak menyetujui bagian mana pun dari ketentuan ini, Anda tidak diperkenankan menggunakan layanan kami.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <FileText size={24} color="var(--primary)" /> 2. Penggunaan Layanan
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Layanan pendidikan dan pelatihan kami ditujukan untuk pemberdayaan masyarakat. Pengguna dilarang:
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                <li>Menggunakan konten platform untuk tujuan komersial tanpa izin.</li>
                <li>Melakukan tindakan yang dapat mengganggu stabilitas teknis platform.</li>
                <li>Memberikan informasi palsu saat pendaftaran program.</li>
              </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <AlertCircle size={24} color="var(--primary)" /> 3. Batasan Tanggung Jawab
              </h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Yo'i Foundation berupaya memberikan informasi yang akurat, namun kami tidak bertanggung jawab atas kerugian yang timbul dari penggunaan informasi atau keterlambatan akses layanan karena kendala teknis pihak ketiga.
              </p>
            </section>
          </div>

          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Perlu klarifikasi lebih lanjut? Hubungi tim legal kami di <span style={{ color: 'var(--primary)', fontWeight: '700' }}>legal@yoi.or.id</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Terms
