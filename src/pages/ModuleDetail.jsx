import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, CheckCircle, Lock, Clock, BookOpen, Star, Trophy } from 'lucide-react'

const moduleData = {
  'level-dasar': {
    title: 'Level Dasar',
    sub: 'Alfabet & Angka Jari',
    description: 'Fondasi utama dalam belajar bahasa isyarat. Di sini Anda akan belajar abjad jari (SIBI/BISINDO) dan sistem penomoran visual yang intuitif.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '45 Menit',
    rating: '4.9',
    lessons: [
      { id: 1, title: 'Abjad Jari A - J', duration: '10:00', completed: true },
      { id: 2, title: 'Abjad Jari K - Z', duration: '12:00', completed: false },
      { id: 3, title: 'Angka 1 - 10', duration: '08:00', completed: false },
      { id: 4, title: 'Angka 11 - 100', duration: '15:00', locked: true }
    ]
  },
  'level-menengah': {
    title: 'Level Menengah',
    sub: 'Percakapan Sehari-hari',
    description: 'Mulai membangun kalimat sederhana, ekspresi wajah, dan gestur tubuh untuk komunikasi efektif dalam aktivitas sehari-hari.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '60 Menit',
    rating: '4.8',
    lessons: [
      { id: 1, title: 'Sapaan & Perkenalan', duration: '15:00', completed: false },
      { id: 2, title: 'Keluarga & Teman', duration: '18:00', completed: false },
      { id: 3, title: 'Warna & Perasaan', duration: '20:00', locked: true }
    ]
  },
  'level-mahir': {
    title: 'Level Mahir',
    sub: 'Struktur Kalimat Kompleks',
    description: 'Menguasai tata bahasa kompleks, interpretasi cerita, dan dialek bahasa isyarat regional yang kaya akan budaya.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '90 Menit',
    rating: '5.0',
    lessons: [
      { id: 1, title: 'Struktur SPOK Isyarat', duration: '25:00', completed: false },
      { id: 2, title: 'Isyarat Idiom & Kiasan', duration: '30:00', locked: true }
    ]
  },
  'quran-isyarat': {
    title: 'Quran Isyarat',
    sub: 'Hijaiyah & Iqro Inklusif',
    description: 'Metode isyarat khusus yang mempermudah teman Tuli dalam menghafal dan memahami huruf Al-Quran (Hijaiyah) hingga tingkatan Iqro 6.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '120 Menit',
    rating: '5.0',
    lessons: [
      { id: 1, title: 'Hijaiyah Isyarat: Dasar', duration: '15:00', completed: false },
      { id: 2, title: 'Iqro 1: Huruf Tunggal', duration: '20:00', completed: false },
      { id: 3, title: 'Iqro 2: Huruf Sambung', duration: '20:00', completed: false },
      { id: 4, title: 'Iqro 3: Tanda Baca', duration: '25:00', completed: false },
      { id: 5, title: 'Surah Pendek Isyarat', duration: '45:00', locked: true }
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
      style={{ paddingTop: '7rem', background: 'var(--bg-dark)' }}
    >
      <div className="container">
        {/* Back Button */}
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} style={{ marginBottom: '2.5rem' }}>
          <Link to="/learning" style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem', 
            color: 'var(--text-muted)', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem'
          }}>
            <ArrowLeft size={16} /> Kembali ke Akademi
          </Link>
        </motion.div>

        <div className="module-layout">
          {/* Main Content */}
          <div className="module-content">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <span style={{ padding: '0.4rem 1rem', background: 'var(--primary-glow)', color: 'var(--primary)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '1px' }}>
                  MODUL AKTIF
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent)', fontSize: '0.85rem', fontWeight: '700' }}>
                  <Star size={16} fill="var(--accent)" /> {data.rating} Rating
                </div>
              </div>
              <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '0.5rem', fontWeight: '800' }}>{data.title}</h1>
              <p style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '1.5rem' }}>{data.sub}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '3rem', maxWidth: '700px' }}>
                {data.description}
              </p>

              {/* Video Player */}
              <div className="video-player-container">
                <div className="video-mock">
                  <div className="video-overlay">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="play-btn-large">
                      <Play size={32} fill="currentColor" />
                    </motion.div>
                  </div>
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" alt="Video cover" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="module-sidebar">
            <div style={{ position: 'sticky', top: '100px' }}>
              <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <BookOpen size={20} color="var(--primary)" /> Materi Belajar
                </h3>
                
                <div className="lesson-stack">
                  {data.lessons.map((lesson, i) => (
                    <motion.div 
                      key={lesson.id} 
                      className={`lesson-item ${lesson.locked ? 'locked' : ''} ${lesson.completed ? 'completed' : ''}`}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                    >
                      <div className="lesson-indicator">
                        {lesson.completed ? <CheckCircle size={20} color="var(--primary)" /> : lesson.locked ? <Lock size={18} /> : <div className="dot" />}
                      </div>
                      <div className="lesson-text">
                        <p className="lesson-title">{lesson.title}</p>
                        <span className="lesson-time"><Clock size={12} /> {lesson.duration}</span>
                      </div>
                      {!lesson.locked && (
                        <button className="lesson-btn">{lesson.completed ? 'Review' : 'Mulai'}</button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                className="glass-card progress-card"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                  <Trophy size={20} color="var(--accent)" />
                  <span style={{ fontWeight: '800', fontSize: '0.9rem' }}>Sertifikat Progress</span>
                </div>
                <div className="custom-progress">
                  <div className="progress-fill" style={{ width: '20%' }} />
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1rem', textAlign: 'center' }}>
                  <strong>20% Selesai</strong> — 4 materi lagi menuju sertifikat
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .module-layout {
          display: grid;
          gap: 3rem;
          grid-template-columns: 1fr;
        }

        @media (min-width: 1024px) {
          .module-layout {
            grid-template-columns: 1.8fr 1fr;
          }
        }

        .video-player-container {
          background: #000;
          border-radius: 32px;
          overflow: hidden;
          padding: 8px;
          border: 1px solid var(--glass-border);
          box-shadow: 0 30px 60px rgba(0,0,0,0.2);
        }

        .video-mock {
          aspect-ratio: 16/9;
          position: relative;
          background: #0f172a;
          border-radius: 24px;
          overflow: hidden;
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .play-btn-large {
          width: 80px;
          height: 80px;
          background: var(--primary);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 0 30px var(--primary-glow);
        }

        .lesson-stack {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .lesson-item {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          padding: 1rem;
          background: var(--bg-dark);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          transition: all 0.3s;
        }

        .lesson-item:hover:not(.locked) {
          border-color: var(--primary);
          transform: translateX(8px);
        }

        .lesson-item.completed {
          background: var(--primary-glow);
          border-color: var(--primary-glow);
        }

        .lesson-item.locked {
          opacity: 0.5;
          filter: grayscale(1);
        }

        .lesson-indicator {
          width: 24px;
          display: flex;
          justify-content: center;
          color: var(--text-muted);
        }

        .lesson-indicator .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid var(--text-muted);
        }

        .lesson-text {
          flex: 1;
        }

        .lesson-title {
          font-weight: 700;
          font-size: 0.95rem;
          margin-bottom: 0.2rem;
          color: var(--text-main);
        }

        .lesson-time {
          font-size: 0.75rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .lesson-btn {
          background: transparent;
          border: 1px solid var(--glass-border);
          padding: 0.4rem 1rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-main);
          cursor: pointer;
        }

        .lesson-item:hover .lesson-btn {
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
        }

        .custom-progress {
          height: 8px;
          background: var(--bg-dark);
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--primary);
          box-shadow: 0 0 15px var(--primary-glow);
          border-radius: 10px;
        }
      `}</style>
    </motion.div>
  )
}

export default ModuleDetail
