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
      style={{ paddingTop: '10rem' }}
    >
      <div className="container">
        <Link to="/learning" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 'bold' }}>
          <ArrowLeft size={20} /> Kembali ke Kurikulum
        </Link>

        <div className="grid grid-2" style={{ gap: '4rem' }}>
          {/* Video & Info */}
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{data.title}</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem' }}>
              {data.description}
            </p>

            <div className="glass-card" style={{ padding: 0, overflow: 'hidden', aspectRatio: '16/9', background: '#000', position: 'relative' }}>
              {/* Mock Video Player */}
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(45deg, #111, #222)' }}>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  style={{ width: '80px', height: '80px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 0 30px var(--primary-glow)' }}
                >
                  <Play fill="#000" size={32} />
                </motion.div>
                <p style={{ position: 'absolute', bottom: '2rem', opacity: 0.5 }}>Pratinjau Video Modul</p>
              </div>
            </div>
          </div>

          {/* Lesson List */}
          <div>
            <h2 style={{ marginBottom: '2rem' }}>Daftar Pelajaran</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {data.lessons.map((lesson) => (
                <div 
                  key={lesson.id} 
                  className="glass-card" 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    padding: '1.5rem',
                    opacity: lesson.locked ? 0.5 : 1,
                    borderColor: lesson.completed ? 'var(--primary)' : 'var(--glass-border)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ color: lesson.completed ? 'var(--primary)' : 'var(--text-muted)' }}>
                      {lesson.completed ? <CheckCircle size={24} /> : lesson.locked ? <Lock size={24} /> : <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid' }}></div>}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{lesson.title}</h4>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{lesson.duration}</span>
                    </div>
                  </div>
                  {!lesson.locked && (
                    <button className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem' }}>
                      {lesson.completed ? 'Ulangi' : 'Mulai'}
                    </button>
                  )}
                </div>
              ))}
            </div>
            
            <div className="glass-card" style={{ marginTop: '3rem', background: 'var(--primary)', color: '#000', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>Progres Belajar</h3>
              <div style={{ width: '100%', height: '8px', background: 'rgba(0,0,0,0.1)', borderRadius: '10px', margin: '1rem 0' }}>
                <div style={{ width: '25%', height: '100%', background: '#000', borderRadius: '10px' }}></div>
              </div>
              <p style={{ fontWeight: 'bold' }}>1 / {data.lessons.length} Selesai</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ModuleDetail
