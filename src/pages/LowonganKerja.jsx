import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Briefcase, Clock, DollarSign, ChevronRight, Search, Building2, Users, TrendingUp, Sparkles, Filter } from 'lucide-react'

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
    type: 'Full-time', salary: '6 - 10 Juta', posted: '3 hari lalu', color: '#6A1B9A', icon: '🎨',
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
    type: 'Part-time', salary: '3 - 5 Juta', posted: '5 hari lalu', color: '#2E7D32', icon: '📸',
    tags: ['Video', 'Copywriting', 'TikTok'],
    desc: 'Ciptakan konten kreatif dan menarik untuk berbagai platform media sosial.',
  },
  {
    id: 5, title: 'IT Intern', company: 'Startup Inkubator', location: 'Surabaya',
    type: 'Magang', salary: '1,5 - 2,5 Juta', posted: '1 minggu lalu', color: '#00838F', icon: '🎓',
    tags: ['Python', 'Data', 'SQL'],
    desc: 'Program magang 3 bulan di bidang teknologi informasi, cocok untuk mahasiswa.',
  },
  {
    id: 6, title: 'UI/UX Designer', company: 'Freelance Hub', location: 'Remote',
    type: 'Freelance', salary: 'Proyekan', posted: '2 hari lalu', color: '#C62828', icon: '✏️',
    tags: ['Figma', 'Prototyping', 'Research'],
    desc: 'Proyek desain UI/UX untuk startup dan UMKM yang membutuhkan talenta desain.',
  },
]

const stats = [
  { icon: <Briefcase size={22} />, value: '150+', label: 'Lowongan', color: 'var(--primary)' },
  { icon: <Building2 size={22} />, value: '60+', label: 'Mitra', color: 'var(--secondary)' },
  { icon: <Users size={22} />, value: '500+', label: 'Kandidat', color: '#059669' },
  { icon: <TrendingUp size={22} />, value: '92%', label: 'Penempatan', color: '#8b5cf6' },
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
      style={{ background: 'var(--bg-dark)' }}
    >
      {/* Hero Header */}
      <section style={{ 
        position: 'relative', 
        paddingTop: '100px', 
        paddingBottom: '60px', 
        textAlign: 'center',
        background: 'linear-gradient(180deg, var(--bg-card) 0%, var(--bg-dark) 100%)'
      }}>
        <div className="container">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.6rem 1.2rem', background: 'var(--primary-glow)',
              borderRadius: '100px', color: 'var(--primary)', fontSize: '0.8rem',
              fontWeight: '800', marginBottom: '2rem', letterSpacing: '1px'
            }}>
              <Sparkles size={16} /> KARIR INKLUSIF
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '800', marginBottom: '1.5rem' }}>
              Temukan <span style={{ color: 'var(--primary)' }}>Karier Impian</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
              Platform karir khusus untuk talenta muda dan penyandang disabilitas di seluruh Indonesia.
            </p>

            {/* Premium Search */}
            <div style={{ 
              maxWidth: '600px', margin: '0 auto', background: 'var(--bg-card)', 
              borderRadius: '20px', padding: '0.5rem', display: 'flex', 
              alignItems: 'center', border: '1px solid var(--glass-border)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
              <div style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)' }}>
                <Search size={22} />
              </div>
              <input
                type="text"
                placeholder="Cari posisi, skill, atau perusahaan..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ 
                  flex: 1, padding: '1rem', background: 'transparent', 
                  border: 'none', color: 'var(--text-main)', fontSize: '1rem', outline: 'none' 
                }}
              />
              <button className="btn btn-primary" style={{ borderRadius: '15px', padding: '0.8rem 1.5rem' }}>Cari</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mini Stats Horizontal */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <div className="scroll-x">
            {stats.map((s, i) => (
              <div key={i} className="glass-card" style={{ 
                display: 'flex', alignItems: 'center', gap: '1rem', 
                padding: '1rem 1.5rem', minWidth: '180px' 
              }}>
                <div style={{ color: s.color }}>{s.icon}</div>
                <div>
                  <div style={{ fontWeight: '800', fontSize: '1.2rem', color: 'var(--text-main)' }}>{s.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Jobs Section */}
      <section className="section">
        <div className="container">
          <div className="job-layout">
            {/* Sidebar Filter (Desktop) / Top Bar (Mobile) */}
            <div className="filter-sidebar">
              <div className="glass-card" style={{ padding: '1.5rem', position: 'sticky', top: '100px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Filter size={18} /> Tipe Pekerjaan
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {jobTypes.map(type => (
                    <button 
                      key={type} 
                      onClick={() => setActiveType(type)}
                      style={{
                        padding: '0.8rem 1.2rem', borderRadius: '12px', border: 'none',
                        textAlign: 'left', cursor: 'pointer', fontWeight: '700',
                        background: activeType === type ? 'var(--primary)' : 'transparent',
                        color: activeType === type ? '#fff' : 'var(--text-muted)',
                        transition: 'all 0.3s'
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Job List */}
            <div className="job-list">
              {filtered.length === 0 ? (
                <div className="glass-card" style={{ textAlign: 'center', padding: '4rem' }}>
                  <Search size={48} style={{ opacity: 0.2, marginBottom: '1.5rem' }} />
                  <p style={{ color: 'var(--text-muted)' }}>Tidak ditemukan lowongan yang cocok.</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {filtered.map((job, i) => (
                    <motion.div 
                      key={job.id} 
                      className="glass-card job-card"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <div className="job-card-header">
                        <div style={{ 
                          width: '56px', height: '56px', borderRadius: '16px', 
                          background: `${job.color}15`, display: 'flex', 
                          alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem'
                        }}>
                          {job.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                          <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.2rem' }}>{job.title}</h3>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700' }}>{job.company}</span>
                            <span style={{ width: '4px', height: '4px', background: 'var(--glass-border)', borderRadius: '50%' }} />
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><MapPin size={14} /> {job.location}</span>
                          </div>
                        </div>
                        <div className="job-tag">{job.type}</div>
                      </div>

                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '1.5rem 0' }}>{job.desc}</p>

                      <div className="job-card-footer">
                        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                          {job.tags.map(tag => (
                            <span key={tag} className="tag-pill">{tag}</span>
                          ))}
                        </div>
                        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Gaji Est.</div>
                            <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-main)' }}>{job.salary}</div>
                          </div>
                          <button className="btn btn-primary" style={{ padding: '0.7rem 1.5rem', borderRadius: '12px' }}>Lamar</button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Post Job CTA */}
      <section className="section" style={{ paddingBottom: '10rem' }}>
        <div className="container">
          <div className="glass-card" style={{ 
            padding: '4rem 2rem', textAlign: 'center', 
            background: 'var(--bg-card)', borderRadius: '40px',
            border: '1px dashed var(--primary)'
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>Mencari Talenta Muda?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
              Pasang lowongan kerja Anda secara gratis dan temukan ribuan kandidat terbaik dari komunitas Yo'i.
            </p>
            <button className="btn btn-outline" style={{ padding: '1rem 3rem' }}>Posting Lowongan</button>
          </div>
        </div>
      </section>

      <style>{`
        .job-layout {
          display: grid;
          gap: 2.5rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .job-layout {
            grid-template-columns: 280px 1fr;
          }
        }
        .job-card {
          padding: 1.8rem;
          transition: all 0.3s;
        }
        .job-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        .job-card-header {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }
        .job-tag {
          padding: 0.4rem 1rem;
          background: var(--bg-dark);
          border: 1px solid var(--glass-border);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .job-card-footer {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--glass-border);
          flex-wrap: wrap;
        }
        .tag-pill {
          padding: 0.3rem 0.8rem;
          background: var(--bg-dark);
          border-radius: 8px;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .filter-sidebar {
            overflow-x: auto;
            margin-bottom: 2rem;
          }
          .filter-sidebar > div {
            display: flex;
            flex-direction: row !important;
            gap: 0.8rem;
            background: transparent !important;
            border: none !important;
            padding: 0 !important;
          }
          .filter-sidebar button {
            white-space: nowrap;
            background: var(--bg-card) !important;
            border: 1px solid var(--glass-border) !important;
          }
          .job-card-footer {
            flex-direction: column;
            align-items: flex-start;
          }
          .job-card-footer > div:last-child {
            margin-left: 0 !important;
            width: 100%;
            justify-content: space-between;
            margin-top: 1.5rem;
          }
        }
      `}</style>
    </motion.div>
  )
}

export default LowonganKerja
