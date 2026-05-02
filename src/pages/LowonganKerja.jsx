import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Clock, DollarSign, ChevronRight, Search, Building2, Users, TrendingUp, Sparkles, Filter, CheckCircle2 } from 'lucide-react'

const jobTypes = ['Semua', 'Full-time', 'Part-time', 'Magang', 'Freelance', 'Remote']

const jobs = [
  {
    id: 1, title: 'Frontend Developer', company: 'PT Teknologi Nusantara', location: 'Jakarta',
    type: 'Full-time', salary: '8 - 15 Juta', posted: '2 hari lalu', color: 'var(--primary)', icon: '💻',
    tags: ['React', 'TypeScript', 'Tailwind'],
    desc: 'Kami mencari Frontend Developer berpengalaman untuk bergabung dalam tim pengembangan produk digital kami.',
  },
  {
    id: 2, title: 'Graphic Designer', company: 'Kreatif Studio', location: 'Bandung',
    type: 'Full-time', salary: '6 - 10 Juta', posted: '3 hari lalu', color: '#8b5cf6', icon: '🎨',
    tags: ['Figma', 'Adobe XD', 'Illustrator'],
    desc: 'Bergabunglah sebagai Graphic Designer kreatif untuk merancang konten visual yang menarik dan berdampak.',
  },
  {
    id: 3, title: 'Digital Marketing', company: 'GrowthHack ID', location: 'Remote',
    type: 'Remote', salary: '7 - 12 Juta', posted: '1 hari lalu', color: 'var(--secondary)', icon: '📱',
    tags: ['SEO', 'Meta Ads', 'Analytics'],
    desc: 'Kami membutuhkan spesialis digital marketing yang mampu meningkatkan pertumbuhan bisnis secara online.',
  },
  {
    id: 4, title: 'Content Creator', company: 'MediaKita', location: 'Yogyakarta',
    type: 'Part-time', salary: '3 - 5 Juta', posted: '5 hari lalu', color: '#ef4444', icon: '📸',
    tags: ['Video', 'Copywriting', 'TikTok'],
    desc: 'Ciptakan konten kreatif dan menarik untuk berbagai platform media sosial.',
  },
  {
    id: 5, title: 'IT Intern', company: 'Startup Inkubator', location: 'Surabaya',
    type: 'Magang', salary: '1,5 - 2,5 Juta', posted: '1 minggu lalu', color: '#059669', icon: '🎓',
    tags: ['Python', 'Data', 'SQL'],
    desc: 'Program magang 3 bulan di bidang teknologi informasi, cocok untuk mahasiswa.',
  },
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'var(--bg-dark)', paddingBottom: '10rem' }}
    >
      {/* Hero Job Board */}
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
                display: 'inline-flex', padding: '0.6rem 1.2rem', background: 'var(--primary-glow)', 
                borderRadius: '100px', color: 'var(--primary)', fontSize: '0.85rem',
                fontWeight: '800', marginBottom: '2rem'
              }}
            >
              <Sparkles size={16} style={{ marginRight: '0.6rem' }} /> KARIR INKLUSIF
            </motion.div>
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: '900', lineHeight: 1.1, marginBottom: '2rem' }}>
              Temukan <br /><span style={{ color: 'var(--primary)' }}>Karier Impian Anda</span>
            </h1>
            
            {/* Search Bar Premium */}
            <div style={{ 
              maxWidth: '700px', margin: '0 auto', background: 'var(--bg-card)', 
              borderRadius: '24px', padding: '0.8rem', display: 'flex', gap: '0.5rem',
              border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', flex: 1, paddingLeft: '1rem' }}>
                <Search size={22} color="var(--text-muted)" />
                <input 
                  type="text" 
                  placeholder="Cari posisi atau perusahaan..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ 
                    width: '100%', background: 'transparent', border: 'none', 
                    padding: '1rem', color: '#fff', fontSize: '1rem', outline: 'none' 
                  }}
                />
              </div>
              <button className="btn btn-primary" style={{ padding: '0 2.5rem', borderRadius: '16px' }}>Cari</button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="job-layout">
            
            {/* Filter Sidebar */}
            <aside style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
              <div className="glass-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Filter size={18} /> Tipe Pekerjaan
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {jobTypes.map(type => (
                    <button 
                      key={type}
                      onClick={() => setActiveType(type)}
                      style={{
                        padding: '1rem 1.2rem', borderRadius: '12px', border: 'none',
                        background: activeType === type ? 'var(--primary)' : 'transparent',
                        color: activeType === type ? '#fff' : 'var(--text-muted)',
                        fontWeight: '700', textAlign: 'left', cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Job List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {filtered.map((job, i) => (
                <motion.div 
                  key={job.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card job-card-premium"
                  style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div style={{ 
                      width: '64px', height: '64px', borderRadius: '20px', background: `${job.color}15`, 
                      color: job.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' 
                    }}>
                      {job.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.5rem' }}>{job.title}</h3>
                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <Building2 size={16} /> {job.company}
                        </span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <MapPin size={16} /> {job.location}
                        </span>
                        <span style={{ background: 'var(--bg-dark)', padding: '0.3rem 0.8rem', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-muted)' }}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--text-main)' }}>{job.salary}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Gaji Bulanan</div>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>{job.desc}</p>

                  <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                    {job.tags.map(tag => (
                      <span key={tag} style={{ background: 'var(--bg-dark)', padding: '0.4rem 1rem', borderRadius: '10px', fontSize: '0.8rem', color: 'var(--text-muted)', border: '1px solid var(--glass-border)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#059669', fontSize: '0.85rem', fontWeight: '700' }}>
                      <CheckCircle2 size={16} /> Perusahaan Terverifikasi
                    </div>
                    <button className="btn btn-primary" style={{ padding: '0.8rem 2.5rem', borderRadius: '12px' }}>Lamar Sekarang</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: '4rem', background: 'var(--bg-card)', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '3rem', fontWeight: '800' }}>Statistik Karir Yo'i</h2>
            <div className="grid grid-4" style={{ gap: '2rem' }}>
              {[
                { value: '150+', label: 'Lowongan Aktif', color: 'var(--primary)' },
                { value: '60+', label: 'Mitra Perusahaan', color: 'var(--secondary)' },
                { value: '500+', label: 'Talenta Terhubung', color: '#059669' },
                { value: '92%', label: 'Tingkat Penempatan', color: '#8b5cf6' }
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: s.color, fontFamily: "'Outfit', sans-serif" }}>{s.value}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 1024px) {
          .job-layout { grid-template-columns: 280px 1fr !important; }
        }
        .job-card-premium:hover {
          border-color: var(--primary);
          transform: scale(1.01);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
      `}</style>
    </motion.div>
  )
}

export default LowonganKerja
