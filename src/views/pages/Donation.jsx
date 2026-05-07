import React from 'react'
import { motion } from 'framer-motion'
import { Heart, CreditCard, Smartphone, Banknote, ShieldCheck, Sparkles, Target, Zap } from 'lucide-react'

const Donation = () => {
  const donationPlans = [
    {
      title: 'Pendidikan Isyarat',
      amount: 'Rp 50.000',
      desc: 'Materi belajar isyarat digital untuk 1 orang teman Tuli selama sebulan.',
      icon: <Heart size={24} />,
      color: '#ef4444'
    },
    {
      title: 'Aksesibilitas AI',
      amount: 'Rp 250.000',
      desc: 'Mendukung server AI untuk fitur penerjemah isyarat real-time.',
      icon: <Zap size={24} />,
      color: 'var(--primary)'
    },
    {
      title: 'Pahlawan Inklusi',
      amount: 'Rp 1.000.000',
      desc: 'Beasiswa penuh untuk satu komunitas disabilitas di daerah terpencil.',
      icon: <Sparkles size={24} />,
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
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
            <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Donasi Anda bukan sekadar uang, tapi harapan bagi jutaan teman disabilitas untuk mendapatkan peluang yang setara.
            </p>

            {/* Campaign Progress Card */}
            <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: '900', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-main)' }}>TARGET: RP 500 JT</span>
                <span style={{ color: 'var(--primary)' }}>75% TERCAPAI</span>
              </div>
              <div style={{ width: '100%', height: '10px', background: 'var(--bg-dark)', borderRadius: '10px', overflow: 'hidden' }}>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '75%' }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}
                />
              </div>
              <div className="grid grid-stats" style={{ marginTop: '2rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--text-main)' }}>1.2K</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700' }}>DONATUR</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--text-main)' }}>12 HARI</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700' }}>TERSISA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Packages - RESPONSIVE GRID */}
      <section className="section">
        <div className="container">
          <div className="donation-grid-system">
            {donationPlans.map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card donation-card"
                style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem 2rem', borderRadius: '32px' }}
              >
                <div style={{ 
                  width: '56px', height: '56px', borderRadius: '16px',
                  background: `${plan.color}15`, color: plan.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  {plan.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem' }}>{plan.title}</h3>
                <div style={{ fontSize: '1.8rem', fontWeight: '900', color: plan.color, marginBottom: '1.2rem', fontFamily: "'Outfit', sans-serif" }}>{plan.amount}</div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', flex: 1, lineHeight: 1.6, fontSize: '0.9rem' }}>{plan.desc}</p>
                <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', borderRadius: '14px', fontSize: '0.9rem' }}>Pilih Paket</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Payment - RESPONSIVE GRID */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: '4rem 2rem', background: 'var(--bg-card)', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', color: '#059669', marginBottom: '2rem', fontWeight: '900', fontSize: '0.85rem' }}>
              <ShieldCheck size={20} /> TRANSAKSI AMAN & TERVERIFIKASI
            </div>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem', fontWeight: '900' }}>Metode Pembayaran</h2>
            <div className="grid grid-stats" style={{ gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CreditCard size={24} color="var(--primary)" />
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: '800' }}>TRANSFER</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Smartphone size={24} color="var(--secondary)" />
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: '800' }}>E-WALLET</span>
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
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Donasi Rutin Bulanan</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              Berikan dukungan berkelanjutan untuk memastikan program inklusivitas tetap berjalan setiap bulannya.
            </p>
            <button className="btn btn-primary" style={{ padding: '1rem 3.5rem', borderRadius: '16px' }}>Jadi Donatur Tetap</button>
          </div>
        </div>
      </section>

      <style>{`
        .donation-grid-system {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .donation-grid-system { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .donation-grid-system { grid-template-columns: repeat(3, 1fr); }
        }
        .donation-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }
      `}</style>
    </motion.div>
  )
}

export default Donation
