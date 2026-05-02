import React from 'react'
import { motion } from 'framer-motion'
import { Heart, CreditCard, Smartphone, Banknote, ShieldCheck } from 'lucide-react'

const Donation = () => {
  const donationPlans = [
    {
      title: 'Dukungan Pendidikan',
      amount: 'Rp 50.000',
      desc: 'Membantu penyediaan materi belajar bahasa isyarat digital bagi 1 orang teman Tuli.',
      icon: <Heart size={28} />,
      color: 'var(--primary)'
    },
    {
      title: 'Aksesibilitas+',
      amount: 'Rp 150.000',
      desc: 'Mendukung pengembangan fitur AI untuk penerjemah isyarat real-time di platform Yo\'i.',
      icon: <ShieldCheck size={28} />,
      color: 'var(--secondary)'
    },
    {
      title: 'Pahlawan Inklusi',
      amount: 'Rp 500.000',
      desc: 'Beasiswa penuh untuk satu komunitas disabilitas untuk mengakses pelatihan intensif.',
      icon: <Smartphone size={28} />,
      color: 'var(--primary)'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="section"
      style={{ paddingTop: '8rem' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ 
              display: 'inline-flex', 
              padding: '1.2rem', 
              background: 'var(--primary-glow)', 
              borderRadius: '24px', 
              color: 'var(--primary)',
              marginBottom: '2rem'
            }}
          >
            <Heart size={32} fill="var(--primary)" />
          </motion.div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.2rem)', marginBottom: '1.5rem', fontWeight: '800' }}>
            Jadi Bagian dari <span style={{ color: 'var(--primary)' }} className="glow-text">Perubahan</span>
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Setiap kontribusi Anda membantu kami membangun dunia yang lebih inklusif bagi semua orang. Bersama, kita bisa menghapus batasan komunikasi.
          </p>
        </div>

        <div className="scroll-x" style={{ marginBottom: '6rem' }}>
          {donationPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2rem' }}
            >
              <div style={{ 
                width: '56px', height: '56px', borderRadius: '16px',
                background: `${plan.color}15`, color: plan.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {plan.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.6rem', color: 'var(--text-main)' }}>{plan.title}</h3>
              <p style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.2rem', fontFamily: "'Outfit', sans-serif" }}>{plan.amount}</p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', flex: 1, fontSize: '0.95rem', lineHeight: 1.6 }}>{plan.desc}</p>
              <button className="btn btn-primary" style={{ width: '100%', borderRadius: '14px' }}>Pilih Paket</button>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="glass-card" style={{ padding: '4rem 2rem', textAlign: 'center', background: 'var(--bg-card)' }}>
          <h2 style={{ marginBottom: '1.2rem', fontSize: '1.8rem' }}>Metode Pembayaran</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Kami menerima berbagai metode pembayaran aman dan terverifikasi.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)', fontWeight: '600' }}>
              <CreditCard size={22} color="var(--primary)" /> <span>Transfer Bank</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)', fontWeight: '600' }}>
              <Smartphone size={22} color="var(--primary)" /> <span>E-Wallet</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)', fontWeight: '600' }}>
              <Banknote size={22} color="var(--primary)" /> <span>QRIS & Minimarket</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Donation
