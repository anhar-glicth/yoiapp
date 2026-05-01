import React from 'react'
import { motion } from 'framer-motion'
import { Heart, CreditCard, Smartphone, Banknote, ShieldCheck } from 'lucide-react'

const Donation = () => {
  const donationPlans = [
    {
      title: 'Dukungan Pendidikan',
      amount: 'Rp 50.000',
      desc: 'Membantu penyediaan materi belajar bahasa isyarat digital bagi 1 orang teman Tuli.',
      icon: <Heart size={32} />,
      color: 'var(--primary)'
    },
    {
      title: 'Aksesibilitas+,',
      amount: 'Rp 150.000',
      desc: 'Mendukung pengembangan fitur AI untuk penerjemah isyarat real-time di platform Yo\'i.',
      icon: <ShieldCheck size={32} />,
      color: '#fff'
    },
    {
      title: 'Pahlawan Inklusi',
      amount: 'Rp 500.000',
      desc: 'Beasiswa penuh untuk satu komunitas disabilitas untuk mengakses pelatihan intensif.',
      icon: <Smartphone size={32} />,
      color: 'var(--primary)'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="section"
      style={{ paddingTop: '10rem' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ 
              display: 'inline-flex', 
              padding: '1rem', 
              background: 'rgba(193, 255, 0, 0.1)', 
              borderRadius: '20px', 
              color: 'var(--primary)',
              marginBottom: '2rem'
            }}
          >
            <Heart fill="var(--primary)" />
          </motion.div>
          <h1 style={{ fontSize: 'clamp(3rem, 7vw, 4.5rem)', marginBottom: '1.5rem' }}>
            Jadi Bagian dari <span style={{ color: 'var(--primary)' }}>Perubahan</span>
          </h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Setiap kontribusi Anda membantu kami membangun dunia yang lebih inklusif bagi semua orang.
          </p>
        </div>

        <div className="grid grid-3" style={{ gap: '2rem', marginBottom: '8rem' }}>
          {donationPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15, borderColor: 'var(--primary)' }}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ color: plan.color, marginBottom: '2rem' }}>
                {plan.icon}
              </div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{plan.title}</h3>
              <p style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.5rem' }}>{plan.amount}</p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', flex: 1 }}>{plan.desc}</p>
              <button className="btn btn-primary" style={{ width: '100%' }}>Pilih Paket</button>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="glass-card" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '3rem' }}>Metode Pembayaran</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CreditCard size={24} /> <span>Transfer Bank</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Smartphone size={24} /> <span>E-Wallet (Gopay/OVO)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Banknote size={24} /> <span>QRIS</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Donation
