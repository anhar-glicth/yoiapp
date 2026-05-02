import React from 'react'
import { motion } from 'framer-motion'
import { Heart, CreditCard, Smartphone, Banknote, ShieldCheck, Sparkles, Target, Zap } from 'lucide-react'

const Donation = () => {
  const donationPlans = [
    {
      title: 'Pendidikan Isyarat',
      amount: 'Rp 50.000',
      desc: 'Penyediaan materi belajar isyarat digital untuk 1 orang teman Tuli selama sebulan.',
      icon: <Heart size={28} />,
      color: '#ef4444'
    },
    {
      title: 'Aksesibilitas AI',
      amount: 'Rp 250.000',
      desc: 'Mendukung pengembangan server AI untuk fitur penerjemah isyarat real-time di platform.',
      icon: <Zap size={28} />,
      color: 'var(--primary)'
    },
    {
      title: 'Pahlawan Inklusi',
      amount: 'Rp 1.000.000',
      desc: 'Beasiswa penuh untuk satu komunitas disabilitas daerah terpencil untuk akses pelatihan.',
      icon: <Sparkles size={28} />,
      color: 'var(--secondary)'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'var(--bg-dark)', paddingBottom: '10rem' }}
    >
      {/* Hero Donation */}
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
                display: 'inline-flex', padding: '1rem', background: 'var(--primary-glow)', 
                borderRadius: '24px', color: 'var(--primary)', marginBottom: '2rem'
              }}
            >
              <Heart size={32} fill="currentColor" />
            </motion.div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.2rem)', fontWeight: '900', lineHeight: 1.1, marginBottom: '2rem' }}>
              Ubah Dunia dengan <br /><span style={{ color: 'var(--primary)' }}>Kebaikan Anda</span>
            </h1>
            <p style={{ maxWidth: '650px', margin: '0 auto 3rem', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Donasi Anda bukan sekadar uang, tapi harapan bagi jutaan teman disabilitas untuk mendapatkan pendidikan dan peluang yang setara.
            </p>

            {/* Mock Donation Progress */}
            <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: '800' }}>
                <span style={{ color: 'var(--text-main)' }}>Target Kampanye: Rp 500 Juta</span>
                <span style={{ color: 'var(--primary)' }}>75% Tercapai</span>
              </div>
              <div style={{ width: '100%', height: '12px', background: 'var(--bg-dark)', borderRadius: '10px', overflow: 'hidden' }}>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '75%' }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}
                />
              </div>
              <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', justifyContent: 'center' }}>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--text-main)' }}>1.2K</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Donatur</div>
                </div>
                <div style={{ width: '1px', background: 'var(--glass-border)' }} />
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--text-main)' }}>12 Hari</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tersisa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Packages */}
      <section className="section">
        <div className="container">
          <div className="scroll-x">
            {donationPlans.map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card"
                style={{ display: 'flex', flexDirection: 'column', padding: '3rem 2.5rem' }}
              >
                <div style={{ 
                  width: '64px', height: '64px', borderRadius: '20px',
                  background: `${plan.color}15`, color: plan.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '2rem'
                }}>
                  {plan.icon}
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.8rem' }}>{plan.title}</h3>
                <div style={{ fontSize: '2.2rem', fontWeight: '900', color: plan.color, marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif" }}>{plan.amount}</div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', flex: 1, lineHeight: 1.7, fontSize: '1rem' }}>{plan.desc}</p>
                <button className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', borderRadius: '16px', fontSize: '1rem' }}>Pilih Paket</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badge / Payment */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: '4rem 2rem', background: 'var(--bg-card)', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', color: '#059669', marginBottom: '2rem', fontWeight: '800' }}>
              <ShieldCheck size={24} /> Transaksi Aman & Terverifikasi
            </div>
            <h2 style={{ marginBottom: '3rem', fontWeight: '800' }}>Metode Pembayaran</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CreditCard size={28} color="var(--primary)" />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>Bank Transfer</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Smartphone size={28} color="var(--secondary)" />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>E-Wallet</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Banknote size={28} color="#059669" />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>QRIS / Retail</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Donation CTA */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ 
            padding: '5rem 2rem', textAlign: 'center', 
            background: 'var(--primary-glow)', borderRadius: '48px',
            border: '1px dashed var(--primary)'
          }}>
            <Target size={40} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '1rem' }}>Donasi Rutin Bulanan</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              Berikan dukungan berkelanjutan untuk memastikan program inklusivitas tetap berjalan setiap bulannya.
            </p>
            <button className="btn btn-primary" style={{ padding: '1rem 3.5rem' }}>Jadi Donatur Tetap</button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Donation
