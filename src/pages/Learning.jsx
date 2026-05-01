import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Book, Info, Globe, MessageSquare, Camera, Heart, X } from 'lucide-react'

const Learning = () => {
  const [activeTab, setActiveTab] = useState('sibi')
  const [selectedLetter, setSelectedLetter] = useState(null)

  const content = {
    sibi: {
      title: 'SIBI (Sistem Isyarat Bahasa Indonesia)',
      desc: 'Sistem Isyarat yang digunakan di sekolah formal, mengikuti tata bahasa lisan Indonesia secara baku.',
      features: ['Gramatikal', 'Baku', 'Pendidikan Formal']
    },
    bisindo: {
      title: 'BISINDO (Bahasa Isyarat Indonesia)',
      desc: 'Bahasa Isyarat alami yang digunakan komunitas Tuli sehari-hari. Lebih ekspresif dan fleksibel.',
      features: ['Alami', 'Kultural', 'Komunikasi Sosial']
    },
    quran: {
      title: 'Quran Isyarat',
      desc: 'Metode membaca Al-Quran dengan isyarat yang telah distandarisasi untuk teman-teman Tuli.',
      features: ['Hijaiyah', 'Surah Pendek', 'Spiritual']
    }
  }

  const alphabet = activeTab === 'quran'
    ? ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي']
    : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="section"
      style={{ paddingTop: '10rem' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1rem', color: '#fff' }}
          >
            Pusat Pembelajaran Isyarat
          </motion.h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>Pilih metode belajar yang sesuai dengan kebutuhan Anda.</p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          {['sibi', 'bisindo', 'quran'].map((tab) => (
            <button
              key={tab}
              className={`btn ${activeTab === tab ? 'btn-primary' : 'btn-outline'}`}
              style={{ minWidth: '140px' }}
              onClick={() => {
                setActiveTab(tab)
                setSelectedLetter(null)
              }}
            >
              {tab === 'quran' ? 'QURAN ISYARAT' : tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="learning-layout" style={{ marginBottom: '6rem' }}>
          {/* 1. Description Card */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card"
            style={{ height: 'fit-content' }}
          >
            <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1.8rem' }}>{content[activeTab].title}</h2>
            <p style={{ fontSize: '1rem', marginBottom: '2.5rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>{content[activeTab].desc}</p>

            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              {content[activeTab].features.map((f, i) => (
                <span key={i} style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 'bold', border: '1px solid var(--glass-border)' }}>
                  {f}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Wrap alphabet and preview in a container for mobile side-by-side */}
          <div className="alphabet-container">
            {/* 2. Alphabet Grid */}
            <div className="glass-card alphabet-card" style={{ background: '#080808', height: 'fit-content' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>{activeTab === 'quran' ? 'Hijaiyah' : `Alfabet`}</h3>
              <div className="alphabet-grid">
                {alphabet.map((char) => (
                  <motion.button
                    key={char}
                    whileHover={{ scale: 1.1, borderColor: 'var(--primary)' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedLetter(char)}
                    className={`alphabet-btn ${selectedLetter === char ? 'active' : ''}`}
                    style={{
                      aspectRatio: '1/1',
                      borderRadius: '8px',
                      border: '1px solid var(--glass-border)',
                      background: selectedLetter === char ? 'var(--primary)' : 'rgba(255,255,255,0.03)',
                      color: selectedLetter === char ? '#000' : '#fff',
                      fontSize: activeTab === 'quran' ? '1.2rem' : '0.9rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      width: '100%'
                    }}
                  >
                    {char}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* 3. Preview Panel (Appears to the right) */}
            <AnimatePresence>
              {selectedLetter && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="glass-card preview-panel"
                  style={{
                    textAlign: 'center',
                    border: '1px solid var(--primary)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    padding: '1rem'
                  }}
                >
                  <button
                    onClick={() => setSelectedLetter(null)}
                    style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                  >
                    <X size={16} />
                  </button>
                  <h3 style={{ marginBottom: '1rem', fontSize: '1rem' }}>{selectedLetter}</h3>
                  <div className="preview-box" style={{
                    width: '100%',
                    aspectRatio: '1/1',
                    background: 'rgba(0,0,0,0.3)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--glass-border)',
                    marginBottom: '1rem',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={`/isyarat/${activeTab}/${selectedLetter.toLowerCase()}.png`}
                      alt={`Isyarat ${selectedLetter}`}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'block'
                      }}
                    />
                    <span style={{ fontSize: '3rem', color: 'var(--primary)', opacity: 0.8, display: 'none' }}>
                      {selectedLetter}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>Isyarat untuk huruf {selectedLetter}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '4rem' }}>Kurikulum Pembelajaran</h2>
          <div className="grid grid-4">
            {[
              { id: 'level-dasar', title: 'Level Dasar', sub: 'Huruf & Angka', color: 'var(--primary)' },
              { id: 'level-menengah', title: 'Level Menengah', sub: 'Percakapan Sehari-hari', color: '#fff' },
              { id: 'level-mahir', title: 'Level Mahir', sub: 'Struktur Kalimat Kompleks', color: '#fff' },
              { id: 'quran-isyarat', title: 'Quran Isyarat', sub: 'Hijaiyah & Surah Pendek', color: 'var(--primary)' }
            ].map((course, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'left' }}>
                <div style={{ color: course.color, marginBottom: '1.5rem' }}>
                  <Book size={40} />
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{course.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{course.sub}</p>
                <Link to={`/learning/${course.id}`} className="btn btn-outline" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', fontSize: '0.85rem' }}>Mulai Modul</Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .learning-layout {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
        }

        .alphabet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(45px, 1fr));
          gap: 0.5rem;
        }

        .alphabet-container {
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr;
        }

        /* Mobile Optimization: Strictly Side-by-Side */
        @media (max-width: 767px) {
          ${selectedLetter ? `
            .alphabet-container {
              grid-template-columns: 1.4fr 1fr;
            }
            .alphabet-grid {
              grid-template-columns: repeat(3, 1fr);
            }
            .preview-panel {
              position: sticky;
              top: 80px;
              height: fit-content;
            }
          ` : ''}
        }

        @media (min-width: 768px) {
          .learning-layout {
            grid-template-columns: 1fr 1fr;
          }
          .alphabet-container {
            grid-template-columns: 1fr;
          }
        }

        @media (min-width: 1024px) {
          .learning-layout {
            grid-template-columns: ${selectedLetter ? '1fr 2.5fr' : '1fr 2fr'};
          }
          .alphabet-container {
            grid-template-columns: ${selectedLetter ? '1.5fr 1fr' : '1fr'};
          }
          .alphabet-grid {
            grid-template-columns: repeat(auto-fill, minmax(55px, 1fr));
          }
        }
      `}</style>
    </motion.div>
  )
}

export default Learning
