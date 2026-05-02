import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const Privacy = () => {
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
              <Shield size={40} />
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Kebijakan Privasi</h1>
            <p style={{ color: 'var(--text-muted)' }}>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="content-area" style={{ color: 'var(--text-main)', lineHeight: 1.8 }}>
            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Eye size={24} color="var(--primary)" /> 1. Informasi yang Kami Kumpulkan
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Kami mengumpulkan informasi yang Anda berikan langsung kepada kami saat Anda mendaftar program pelatihan, memberikan donasi, atau menghubungi kami untuk informasi lebih lanjut.
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                <li>Nama lengkap dan informasi kontak (email, nomor telepon).</li>
                <li>Informasi demografis untuk keperluan statistik program inklusif.</li>
                <li>Data transaksi saat melakukan donasi melalui mitra pembayaran kami.</li>
              </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Lock size={24} color="var(--primary)" /> 2. Penggunaan Informasi
              </h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Informasi yang kami kumpulkan digunakan semata-mata untuk meningkatkan kualitas layanan pendidikan dan pelatihan kami, memproses dukungan donasi Anda, serta memberikan pembaruan terkait program-program inovasi inklusif Yo'i Foundation.
              </p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <FileText size={24} color="var(--primary)" /> 3. Keamanan Data
              </h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Kami menerapkan standar keamanan teknis dan organisasional yang ketat untuk melindungi data pribadi Anda dari akses yang tidak sah, kehilangan, atau penyalahgunaan.
              </p>
            </section>
          </div>

          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Punya pertanyaan tentang privasi? Hubungi kami di <span style={{ color: 'var(--primary)', fontWeight: '700' }}>privacy@yoi.or.id</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Privacy
