import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Clock, DollarSign, ChevronRight, Search, Building2, Users, TrendingUp, Sparkles, Filter, CheckCircle2 } from 'lucide-react'

const jobTypes = ['Semua', 'Disabilitas', 'Full-time', 'Part-time', 'Magang', 'Freelance']

const jobs = [
  {
    id: 1, title: 'Frontend Developer', company: 'PT Teknologi Nusantara', location: 'Jakarta',
    type: 'Full-time', salary: '8 - 15 Juta', posted: '2 hari lalu', color: 'var(--primary)', icon: '💻',
    tags: ['React', 'TypeScript', 'Tailwind'],
    desc: 'Kami mencari Frontend Developer berpengalaman untuk bergabung dalam tim pengembangan produk digital kami.',
  },
  {
    id: 6, title: 'Data Entry (Inklusi)', company: 'Global Admin Center', location: 'Remote',
    type: 'Disabilitas', salary: '4 - 6 Juta', posted: 'Terbaru', color: '#059669', icon: '⌨️',
    tags: ['Tuli-Friendly', 'Excel', 'Remote'],
    desc: 'Posisi khusus untuk rekan disabilitas. Fokus pada akurasi data dan manajemen dokumen secara digital.',
  },
  {
    id: 2, title: 'Graphic Designer', company: 'Kreatif Studio', location: 'Bandung',
    type: 'Full-time', salary: '6 - 10 Juta', posted: '3 hari lalu', color: '#8b5cf6', icon: '🎨',
    tags: ['Figma', 'Adobe XD', 'Illustrator'],
    desc: 'Bergabunglah sebagai Graphic Designer kreatif untuk merancang konten visual yang menarik dan berdampak.',
  },
  {
    id: 7, title: 'Social Media Admin', company: 'Inclusive Media', location: 'Jakarta',
    type: 'Disabilitas', salary: '5 - 8 Juta', posted: '1 hari lalu', color: '#ec4899', icon: '📱',
    tags: ['Tuli-Friendly', 'Inklusi', 'Creative'],
    desc: 'Mengelola interaksi audiens di media sosial. Lingkungan kerja yang sangat mendukung keberagaman dan inklusi.',
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
        paddingTop: '10rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-dark) 100%)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '900', lineHeight: 1.1, marginBottom: '2rem' }}>
              Temukan <br /><span style={{ color: 'var(--primary)' }}>Karier Impian Anda</span>
            </h1>
            
            {/* Search Bar Premium */}
            <div style={{ 
              maxWidth: '700px', margin: '0 auto', background: 'var(--bg-card)', 
              borderRadius: '24px', padding: '0.6rem', display: 'flex', gap: '0.5rem',
              border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', flex: 1, paddingLeft: '1rem' }}>
                <Search size={20} color="var(--text-muted)" />
                <input 
                  type="text" 
                  placeholder="Cari posisi atau perusahaan..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ 
                    width: '100%', background: 'transparent', border: 'none', 
                    padding: '0.8rem', color: 'var(--text-main)', fontSize: '1rem', outline: 'none' 
                  }}
                />
              </div>
              <button className="btn btn-primary" style={{ padding: '0 2rem', borderRadius: '16px' }}>Cari</button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="job-layout">
            
            {/* Filter Sidebar - IMPROVED SWIPE */}
            <aside className="job-filter-sidebar">
              <div className="filter-header hide-on-mobile">
                <Filter size={18} /> Filter Lowongan
              </div>
              <div className="filter-button-group">
                {jobTypes.map(type => (
                  <button 
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`filter-tab-btn ${activeType === type ? 'active' : ''}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </aside>

            {/* Job List - COMPACT CARDS */}
            <div className="job-grid-system">
              {filtered.map((job, i) => (
                <motion.div 
                  key={job.id}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card job-card-premium"
                  style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
                >
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                    <div style={{ 
                      width: '38px', height: '38px', borderRadius: '10px', background: `${job.color}15`, 
                      color: job.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' 
                    }}>
                      {job.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '0.1rem', color: 'var(--text-main)' }}>{job.title}</h3>
                      <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.7rem' }}>{job.company}</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>• {job.location}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ background: 'var(--bg-dark)', padding: '0.6rem 0.8rem', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '700' }}>GAJI</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '900', color: 'var(--text-main)' }}>{job.salary}</div>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: 1.5, flex: 1 }}>{job.desc}</p>

                  <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                    {job.tags.slice(0, 3).map(tag => (
                      <span key={tag} style={{ background: 'var(--bg-dark)', padding: '0.15rem 0.5rem', borderRadius: '5px', fontSize: '0.6rem', color: 'var(--text-muted)', border: '1px solid var(--glass-border)', fontWeight: '700' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.8rem', borderTop: '1px solid var(--glass-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#059669', fontSize: '0.7rem', fontWeight: '800' }}>
                      <CheckCircle2 size={10} /> VERIFIED
                    </div>
                    <button className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', borderRadius: '8px', fontSize: '0.75rem' }}>Lamar</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '900', marginBottom: '1rem' }}>Statistik Karir Yo'i</h2>
            <p style={{ color: 'var(--text-muted)' }}>Data terkini pertumbuhan talenta inklusif kami.</p>
          </div>
          
          <div className="grid grid-stats" style={{ gap: '1.5rem' }}>
            {[
              { value: '150+', label: 'Lowongan Aktif', color: 'var(--primary)' },
              { value: '60+', label: 'Mitra Bisnis', color: 'var(--secondary)' },
              { value: '500+', label: 'Pencari Kerja', color: '#059669' },
              { value: '92%', label: 'Placement', color: '#8b5cf6' }
            ].map((s, i) => (
              <motion.div 
                key={i} 
                className="glass-card" 
                style={{ padding: '2rem 1rem', textAlign: 'center' }}
                whileHover={{ scale: 1.05 }}
              >
                <div style={{ fontSize: '2.2rem', fontWeight: '900', color: s.color, marginBottom: '0.5rem', fontFamily: "'Outfit', sans-serif" }}>{s.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .job-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 1024px) {
          .job-layout {
            grid-template-columns: 280px 1fr;
          }
        }
        .job-grid-system {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .job-grid-system {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .filter-button-group {
          display: flex;
          flex-direction: row;
          overflow-x: auto;
          overflow-y: hidden;
          gap: 0.6rem;
          padding: 0.5rem 0 1rem;
          width: 100%;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .filter-button-group::-webkit-scrollbar { display: none; }
        
        @media (min-width: 1024px) {
          .filter-button-group {
            flex-direction: column;
            overflow-x: visible;
            padding: 0;
          }
        }
        .filter-tab-btn {
          padding: 0.7rem 1.2rem;
          border-radius: 12px;
          border: 1px solid var(--glass-border);
          background: var(--bg-card);
          color: var(--text-muted);
          font-weight: 700;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        .filter-tab-btn.active {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
          box-shadow: 0 4px 12px var(--primary-glow);
        }
        @media (max-width: 1023px) {
          .hide-on-mobile { display: none; }
          .job-filter-sidebar {
            width: 100%;
            overflow: hidden;
            margin-bottom: 1rem;
          }
        }
        .job-card-premium:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }
      `}</style>
    </motion.div>
  )
}

export default LowonganKerja
