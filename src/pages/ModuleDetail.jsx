import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, CheckCircle, Lock, Clock, BookOpen, Star, Trophy, Download, User, MessageCircle } from 'lucide-react'

const moduleData = {
  'level-dasar': {
    title: 'Level Dasar',
    sub: 'Alfabet & Angka Jari',
    description: 'Fondasi utama dalam belajar bahasa isyarat. Di sini Anda akan belajar abjad jari (SIBI/BISINDO) dan sistem penomoran visual yang intuitif.',
    instructor: { name: 'Aira Rakmah', role: 'Ahli Isyarat Digital', avatar: '/aira.jpeg' },
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '45 Menit',
    rating: '4.9',
    outcomes: ['Abjad Jari SIBI & BISINDO', 'Angka 1-100 secara Visual', 'Sapaan & Perkenalan Diri', 'Ekspresi Wajah & Gestur', 'Dasar Komunikasi Non-Verbal', 'Tips Berinteraksi dengan Tuli'],
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
    instructor: { name: 'Siti Aminah', role: 'Aktivis BISINDO', avatar: 'https://i.pravatar.cc/100?img=44' },
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '60 Menit',
    rating: '4.8',
    outcomes: ['Perkenalan diri', 'Topik Keluarga', 'Ekspresi Emosi'],
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
    instructor: { name: 'Rizky Fauzi', role: 'Interpreter Senior', avatar: 'https://i.pravatar.cc/100?img=12' },
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '90 Menit',
    rating: '5.0',
    outcomes: ['Interpretasi Berita', 'Dialek Regional', 'Kecepatan Isyarat'],
    lessons: [
      { id: 1, title: 'Struktur SPOK Isyarat', duration: '25:00', completed: false },
      { id: 2, title: 'Isyarat Idiom & Kiasan', duration: '30:00', locked: true }
    ]
  },
  'quran-isyarat': {
    title: 'Quran Isyarat',
    sub: 'Hijaiyah & Iqro Inklusif',
    description: 'Metode isyarat khusus yang mempermudah teman Tuli dalam menghafal dan memahami huruf Al-Quran (Hijaiyah) hingga tingkatan Iqro 6.',
    instructor: { name: 'Ustadz Hilman', role: 'Pengajar Quran Inklusif', avatar: 'https://i.pravatar.cc/100?img=33' },
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '120 Menit',
    rating: '5.0',
    outcomes: ['Hijaiyah Lengkap', 'Iqro 1-6', 'Surah Pendek'],
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
      style={{ background: 'var(--bg-dark)', paddingBottom: '10rem' }}
    >
      <section style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
        <div className="container">
          {/* Header & Back */}
          <Link to="/learning" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: '700', marginBottom: '2.5rem', fontSize: '0.9rem' }}>
            <ArrowLeft size={18} /> Kembali ke Akademi
          </Link>

          <div className="grid grid-2" style={{ gridTemplateColumns: '1.8fr 1fr', gap: '4rem' }} id="module-layout">
            {/* Left: Content */}
            <div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ padding: '0.4rem 1.2rem', background: 'var(--primary-glow)', color: 'var(--primary)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '800' }}>MODUL AKTIF</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#F59E0B', fontWeight: '800', fontSize: '0.85rem' }}><Star size={16} fill="#F59E0B" /> {data.rating}</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', lineHeight: 1.1, marginBottom: '1rem' }}>{data.title}</h1>
              <p style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: '800', marginBottom: '2rem' }}>{data.sub}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '3rem' }}>{data.description}</p>

              {/* Video Player */}
              <div style={{ background: '#000', borderRadius: '32px', overflow: 'hidden', padding: '10px', border: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
                <div style={{ aspectRatio: '16/9', background: '#0f172a', borderRadius: '24px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ width: '80px', height: '80px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer', zIndex: 10, boxShadow: '0 0 30px var(--primary-glow)' }}>
                    <Play size={32} fill="#fff" />
                  </motion.div>
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} alt="Video Cover" />
                </div>
              </div>

              {/* Learning Outcomes - COMPACT VERSION */}
              <div className="glass-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>Yang Akan Anda Pelajari</h3>
                <div className="grid grid-2" style={{ gap: '1rem 2rem' }}>
                  {data.outcomes.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)', fontWeight: '600', fontSize: '0.95rem' }}>
                      <CheckCircle size={18} color="var(--primary)" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <aside>
              <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Instructor */}
                <div className="glass-card" style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: '800' }}>Instruktur</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={data.instructor.avatar} style={{ width: '56px', height: '56px', borderRadius: '16px' }} alt={data.instructor.name} />
                    <div>
                      <div style={{ fontWeight: '800', color: 'var(--text-main)' }}>{data.instructor.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{data.instructor.role}</div>
                    </div>
                  </div>
                  <a 
                    href="https://wa.me/6287816431029" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline" 
                    style={{ 
                      width: '100%', 
                      marginTop: '1.5rem', 
                      padding: '0.8rem', 
                      borderRadius: '12px', 
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    <MessageCircle size={16} style={{ marginRight: '0.6rem' }} /> Kirim Pesan
                  </a>
                </div>

                {/* Lesson List */}
                <div className="glass-card" style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: '800' }}>Materi Pembelajaran</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {data.lessons.map((lesson, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--bg-dark)', borderRadius: '16px', opacity: lesson.locked ? 0.5 : 1 }}>
                        <div style={{ color: 'var(--text-muted)' }}>
                          {lesson.completed ? <CheckCircle size={20} color="var(--primary)" /> : lesson.locked ? <Lock size={18} /> : <div style={{ width: '10px', height: '10px', borderRadius: '50%', border: '2px solid var(--text-muted)' }} />}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>{lesson.title}</div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={12} /> {lesson.duration}</div>
                        </div>
                        {!lesson.locked && <button style={{ background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-main)', padding: '0.3rem 0.8rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: '800' }}>Mulai</button>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div className="glass-card" style={{ padding: '2rem', background: 'var(--primary-glow)', border: '1px dashed var(--primary)' }}>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: '800' }}>Resource Tambahan</h4>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)', background: 'transparent', border: 'none', fontWeight: '700', cursor: 'pointer', padding: 0 }}>
                    <Download size={18} color="var(--primary)" /> Download Panduan PDF
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          #module-layout { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </motion.div>
  )
}

export default ModuleDetail
