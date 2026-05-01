import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, CheckCircle, Lock } from 'lucide-react'

const moduleData = {
  'level-dasar': {
    title: 'Level Dasar: Huruf & Angka',
    description: 'Fondasi utama dalam belajar bahasa isyarat. Di sini Anda akan belajar abjad jari dan sistem penomoran.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    lessons: [
      { id: 1, title: 'Abjad Jari A - J', duration: '10:00', completed: true },
      { id: 2, title: 'Abjad Jari K - Z', duration: '12:00', completed: false },
      { id: 3, title: 'Angka 1 - 10', duration: '08:00', completed: false },
      { id: 4, title: 'Angka 11 - 100', duration: '15:00', locked: true }
    ]
  },
  'level-menengah': {
    title: 'Level Menengah: Percakapan',
    description: 'Mulai membangun kalimat sederhana dan ekspresi wajah untuk komunikasi sehari-hari.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    lessons: [
      { id: 1, title: 'Sapaan & Perkenalan', duration: '15:00', completed: false },
      { id: 2, title: 'Keluarga & Teman', duration: '18:00', completed: false },
      { id: 3, title: 'Warna & Perasaan', duration: '20:00', locked: true }
    ]
  },
  'level-mahir': {
    title: 'Level Mahir: Struktur Kalimat',
    description: 'Menguasai tata bahasa kompleks dan dialek bahasa isyarat regional.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    lessons: [
      { id: 1, title: 'Struktur SPOK Isyarat', duration: '25:00', completed: false },
      { id: 2, title: 'Isyarat Idiom & Kiasan', duration: '30:00', locked: true }
    ]
  },
  'quran-isyarat': {
    title: 'Quran Isyarat: Hijaiyah & Iqro',
    description: 'Pelajari cara membaca Al-Quran menggunakan metode isyarat yang diakui, mulai dari dasar Hijaiyah hingga tingkatan Iqro 1-6.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    lessons: [
      { id: 1, title: 'Hijaiyah Isyarat: Dasar', duration: '15:00', completed: false },
      { id: 2, title: 'Iqro 1: Pengenalan Huruf Tunggal', duration: '20:00', completed: false },
      { id: 3, title: 'Iqro 2: Huruf Sambung Dasar', duration: '20:00', completed: false },
      { id: 4, title: 'Iqro 3: Tanda Baca (Harakat)', duration: '25:00', completed: false },
      { id: 5, title: 'Iqro 4: Tanwin & Sukun', duration: '25:00', locked: true },
      { id: 6, title: 'Iqro 5: Tajwid Dasar', duration: '30:00', locked: true },
      { id: 7, title: 'Iqro 6: Persiapan Tadarus', duration: '30:00', locked: true },
      { id: 8, title: 'Surah Pendek Isyarat (Juz Amma)', duration: '45:00', locked: true }
    ]
  }
}

const ModuleDetail = () => {
  const { moduleId } = useParams()
  const data = moduleData[moduleId]

  if (!data) return <div className="section container">Module not found</div>

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="section"
      style={{ paddingTop: '8rem' }}
    >
      <div className="container">
        {/* Breadcrumb / Back Link */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/learning" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            color: 'var(--text-muted)', 
            textDecoration: 'none', 
            marginBottom: '3rem', 
            fontSize: '0.9rem',
            transition: 'color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
          >
            <ArrowLeft size={16} /> Kembali ke Kurikulum
          </Link>
        </motion.div>

        <div className="module-grid">
          {/* Main Content Area */}
          <div className="module-main">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                {data.title.split(':').map((part, i) => (
                  <span key={i} style={i === 1 ? { color: 'var(--primary)', display: 'block' } : {}}>
                    {part}{i === 0 && ':'}
                  </span>
                ))}
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '4rem', maxWidth: '600px' }}>
                {data.description}
              </p>
            </motion.div>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="video-container"
            >
              <div className="video-player-mock">
                <div className="video-overlay">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="play-button"
                  >
                    <Play fill="#000" size={32} />
                  </motion.div>
                  <div className="video-info-tag">
                    Pratinjau Modul: {data.title}
                  </div>
                </div>
                {/* Background gradient for mock video */}
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  background: 'radial-gradient(circle at center, #1a1a1a 0%, #050505 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div className="neon-ring"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Area (Lessons & Progress) */}
          <div className="module-sidebar">
            <div style={{ position: 'sticky', top: '10rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                Daftar Pelajaran 
                <span style={{ fontSize: '0.8rem', background: 'var(--glass)', padding: '0.2rem 0.6rem', borderRadius: '4px', color: 'var(--text-muted)' }}>
                  {data.lessons.length} Materi
                </span>
              </h2>

              <div className="lesson-list">
                {data.lessons.map((lesson, i) => (
                  <motion.div 
                    key={lesson.id}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className={`lesson-card ${lesson.locked ? 'locked' : ''} ${lesson.completed ? 'completed' : ''}`}
                  >
                    <div className="lesson-status">
                      {lesson.completed ? <CheckCircle size={20} color="var(--primary)" /> : lesson.locked ? <Lock size={18} opacity={0.4} /> : <div className="status-dot"></div>}
                    </div>
                    
                    <div className="lesson-info">
                      <h4>{lesson.title}</h4>
                      <span>{lesson.duration}</span>
                    </div>

                    {!lesson.locked && (
                      <button className="lesson-action">
                        {lesson.completed ? 'Ulangi' : 'Mulai'}
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="progress-card"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Progres Belajar</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--primary)' }}>25%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: '25%' }}></div>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1rem', textAlign: 'center' }}>
                  Selesaikan 3 materi lagi untuk sertifikat
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .module-grid {
          display: grid;
          gap: 4rem;
          grid-template-columns: 1fr;
        }

        @media (min-width: 1024px) {
          .module-grid {
            grid-template-columns: 1.8fr 1fr;
          }
        }

        .video-container {
          width: 100%;
          border-radius: 32px;
          padding: 8px;
          background: linear-gradient(135deg, var(--glass-border) 0%, transparent 100%);
          border: 1px solid var(--glass-border);
          box-shadow: 0 40px 100px rgba(0,0,0,0.5);
        }

        .video-player-mock {
          aspect-ratio: 16/9;
          background: #000;
          border-radius: 26px;
          overflow: hidden;
          position: relative;
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          background: rgba(0,0,0,0.2);
        }

        .play-button {
          width: 90px;
          height: 90px;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 0 40px var(--primary-glow);
          color: #000;
        }

        .video-info-tag {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(10px);
          padding: 0.6rem 1.2rem;
          border-radius: 100px;
          font-size: 0.8rem;
          border: 1px solid var(--glass-border);
          color: var(--text-muted);
        }

        .lesson-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .lesson-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.25rem;
          background: var(--bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .lesson-card:hover {
          border-color: rgba(255,255,255,0.2);
          transform: translateX(10px);
        }

        .lesson-card.completed {
          border-color: var(--primary-glow);
          background: rgba(193, 255, 0, 0.03);
        }

        .lesson-card.locked {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .status-dot {
          width: 12px;
          height: 12px;
          border: 2px solid var(--text-muted);
          border-radius: 50%;
        }

        .lesson-info h4 {
          font-size: 1.05rem;
          margin-bottom: 0.2rem;
        }

        .lesson-info span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .lesson-action {
          margin-left: auto;
          background: transparent;
          border: 1px solid var(--glass-border);
          color: var(--text-main);
          padding: 0.5rem 1.2rem;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
        }

        .lesson-action:hover {
          background: var(--primary);
          color: #000;
          border-color: var(--primary);
        }

        .progress-card {
          margin-top: 3rem;
          padding: 2rem;
          background: var(--bg-card);
          border-radius: 24px;
          border: 1px solid var(--glass-border);
        }

        .progress-bar-bg {
          height: 8px;
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: var(--primary);
          box-shadow: 0 0 15px var(--primary-glow);
          border-radius: 10px;
        }

        .neon-ring {
          width: 150px;
          height: 150px;
          border: 2px solid var(--primary-glow);
          border-radius: 50%;
          filter: blur(20px);
          animation: pulse 4s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
      `}</style>
    </motion.div>
  )
}

export default ModuleDetail
