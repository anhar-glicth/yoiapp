import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Clock, DollarSign, ChevronRight, Search, Building2, Users, TrendingUp } from 'lucide-react'

const jobTypes = ['Semua', 'Full-time', 'Part-time', 'Magang', 'Freelance', 'Remote']

const jobs = [
  {
    id: 1, title: 'Frontend Developer', company: 'PT Teknologi Nusantara', location: 'Jakarta, Indonesia',
    type: 'Full-time', salary: 'Rp 8 - 15 Juta/Bln', posted: '2 hari lalu', color: '#1565C0', icon: '💻',
    tags: ['React', 'TypeScript', 'Tailwind'],
    desc: 'Kami mencari Frontend Developer berpengalaman untuk bergabung dalam tim pengembangan produk digital kami.',
  },
  {
    id: 2, title: 'Graphic Designer', company: 'Kreatif Studio', location: 'Bandung, Indonesia',
    type: 'Full-time', salary: 'Rp 6 - 10 Juta/Bln', posted: '3 hari lalu', color: '#6A1B9A', icon: '🎨',
    tags: ['Figma', 'Adobe XD', 'Illustrator'],
    desc: 'Bergabunglah sebagai Graphic Designer kreatif untuk merancang konten visual yang menarik dan berdampak.',
  },
  {
    id: 3, title: 'Digital Marketing Specialist', company: 'GrowthHack Indonesia', location: 'Remote',
    type: 'Remote', salary: 'Rp 7 - 12 Juta/Bln', posted: '1 hari lalu', color: '#FF6D00', icon: '📱',
    tags: ['SEO', 'Meta Ads', 'Google Analytics'],
    desc: 'Kami membutuhkan spesialis digital marketing yang mampu meningkatkan pertumbuhan bisnis secara online.',
  },
  {
    id: 4, title: 'Content Creator', company: 'MediaKita', location: 'Yogyakarta, Indonesia',
    type: 'Part-time', salary: 'Rp 3 - 5 Juta/Bln', posted: '5 hari lalu', color: '#2E7D32', icon: '📸',
    tags: ['Video Editing', 'Copywriting', 'TikTok'],
    desc: 'Ciptakan konten kreatif dan menarik untuk berbagai platform media sosial dengan audiens jutaan pengguna.',
  },
  {
    id: 5, title: 'Program Magang IT', company: 'Startup Inkubator ID', location: 'Surabaya, Indonesia',
    type: 'Magang', salary: 'Rp 1,5 - 2,5 Juta/Bln', posted: '1 minggu lalu', color: '#00838F', icon: '🎓',
    tags: ['Python', 'Machine Learning', 'Data'],
    desc: 'Program magang 3 bulan di bidang teknologi informasi, cocok untuk mahasiswa tingkat akhir.',
  },
  {
    id: 6, title: 'UI/UX Designer Freelance', company: 'Berbagai Klien', location: 'Remote',
    type: 'Freelance', salary: 'Rp 500K - 2Jt/Proyek', posted: '2 hari lalu', color: '#C62828', icon: '✏️',
    tags: ['Figma', 'Prototyping', 'User Research'],
    desc: 'Proyek desain UI/UX untuk startup dan UMKM yang membutuhkan talenta desain profesional.',
  },
]

const stats = [
  { icon: <Briefcase size={28} />, value: '150+', label: 'Lowongan Aktif', color: '#1565C0' },
  { icon: <Building2 size={28} />, value: '60+', label: 'Perusahaan Mitra', color: '#FF6D00' },
  { icon: <Users size={28} />, value: '500+', label: 'Kandidat Diterima', color: '#2E7D32' },
  { icon: <TrendingUp size={28} />, value: '92%', label: 'Tingkat Penempatan', color: '#6A1B9A' },
]

const LowonganKerja = () => {
  const [activeType, setActiveType] = useState('Semua')
  const [search, setSearch] = useState('')

  const filtered = jobs.filter(j => {
    const matchType = activeType === 'Semua' || j.type === activeType
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase())
    return matchType && matchSearch
  })

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--primary)', paddingTop: '60px', paddingBottom: '100px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 2px, transparent 2px)', backgroundSize: '30px 30px', zIndex: 0 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: 'white', padding: '0.4rem 1.2rem', borderRadius: '100px', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '2px', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Karier & Peluang</span>
            <h1 style={{ color: 'white', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: '1.2rem' }}>Temukan Lowongan<br />Karier Impianmu</h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              Ratusan peluang kerja dari perusahaan terpercaya, siap menghubungkan Anda dengan karier yang tepat.
            </p>
            {/* Search Bar */}
            <div style={{ maxWidth: '520px', margin: '0 auto', position: 'relative' }}>
              <Search size={20} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Cari posisi atau perusahaan..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ width: '100%', padding: '1rem 1rem 1rem 3.2rem', borderRadius: '100px', border: 'none', fontSize: '1rem', background: 'white', color: '#333', outline: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              />
            </div>
          </motion.div>
        </div>
        <svg viewBox="0 0 1440 80" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }} preserveAspectRatio="none">
          <path d="M0,80 C360,0 1080,80 1440,0 L1440,80 Z" fill="var(--bg-dark)" />
        </svg>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--bg-dark)', padding: '4rem 0 2rem' }}>
        <div className="container">
          <div className="grid grid-stats grid-4">
            {stats.map((s, i) => (
              <motion.div key={i} className="glass-card" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ textAlign: 'center', padding: '1.2rem 0.8rem' }}>
                <div style={{ color: s.color, marginBottom: '0.8rem', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-main)', fontFamily: "'Outfit', sans-serif" }}>{s.value}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.3rem' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Job Cards */}
      <section className="section" style={{ background: 'var(--bg-dark)', paddingTop: '3rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--text-main)', marginBottom: '2rem' }}>Lowongan Tersedia</h2>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {jobTypes.map(type => (
                <button key={type} onClick={() => setActiveType(type)} style={{ padding: '0.6rem 1.4rem', borderRadius: '100px', border: 'none', cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem', transition: 'all 0.25s', background: activeType === type ? 'var(--primary)' : 'var(--bg-card)', color: activeType === type ? 'white' : 'var(--text-muted)', boxShadow: activeType === type ? '0 4px 14px var(--primary-glow)' : 'none' }}>
                  {type}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
              <Search size={48} style={{ marginBottom: '1rem', opacity: 0.4 }} />
              <p style={{ fontSize: '1.1rem' }}>Tidak ada lowongan yang sesuai pencarian.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {filtered.map((job, i) => (
                <motion.div 
                  key={job.id} 
                  className="glass-card" 
                  initial={{ y: 20, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }} 
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1.5rem', 
                    padding: '1.5rem', 
                    cursor: 'pointer',
                    flexWrap: 'wrap'
                  }}
                >
                  {/* Company Logo Icon */}
                  <div style={{ 
                    width: '64px', height: '64px', borderRadius: '18px', 
                    background: `${job.color}12`, border: `1px solid ${job.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    fontSize: '2rem', flexShrink: 0 
                  }}>
                    {job.icon}
                  </div>

                  {/* Job Info */}
                  <div style={{ flex: 1, minWidth: '240px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', margin: 0, fontWeight: '800' }}>{job.title}</h3>
                      <span style={{ 
                        display: 'inline-block', background: `${job.color}15`, color: job.color, 
                        padding: '0.2rem 0.8rem', borderRadius: '100px', fontSize: '0.7rem', fontWeight: '800',
                        textTransform: 'uppercase', letterSpacing: '0.5px'
                      }}>
                        {job.type}
                      </span>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: '600' }}><Building2 size={15} /> {job.company}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><MapPin size={15} /> {job.location}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: '700' }}><DollarSign size={15} /> {job.salary}</span>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {job.tags.map(tag => (
                        <span key={tag} style={{ 
                          background: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)', 
                          padding: '0.2rem 0.7rem', borderRadius: '8px', fontSize: '0.72rem', 
                          color: 'var(--text-muted)', fontWeight: '600'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: 'auto' }}>
                    <div style={{ textAlign: 'right', display: 'none', md: 'block' }} className="desktop-only">
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Diposting</div>
                      <div style={{ fontSize: '0.85rem', fontWeight: '700' }}>{job.posted}</div>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ 
                        padding: '0.8rem 1.8rem', borderRadius: '14px', border: 'none',
                        background: job.color, color: 'white', fontWeight: '800', 
                        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.6rem',
                        boxShadow: `0 8px 20px ${job.color}30`, fontSize: '0.95rem'
                      }}
                    >
                      Lamar <ChevronRight size={18} />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '5rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--primary) 0%, #0d47a1 100%)', borderRadius: '40px' }}>
            <Briefcase size={48} color="rgba(255,255,255,0.6)" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Posting Lowongan Gratis</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Apakah perusahaan Anda mencari talenta muda berbakat? Posting lowongan Anda secara gratis dan jangkau ribuan kandidat potensial.
            </p>
            <a href="mailto:info@yoi.or.id" className="btn" style={{ background: 'var(--secondary)', color: 'white', padding: '1rem 3rem', fontSize: '1.05rem' }}>Hubungi Kami</a>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default LowonganKerja
