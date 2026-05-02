import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Book, Info, Globe, MessageSquare, Camera, Heart, X, Loader2, Sparkles, GraduationCap } from 'lucide-react'

const Learning = () => {
  const [activeTab, setActiveTab] = useState('sibi')
  const [selectedLetter, setSelectedLetter] = useState(null)
  const [isImageLoading, setIsImageLoading] = useState(false)
  const [imageError, setImageError] = useState(false)

  const content = {
    sibi: {
      title: 'SIBI',
      fullName: 'Sistem Isyarat Bahasa Indonesia',
      desc: 'Standar isyarat formal yang mengikuti tata bahasa lisan Indonesia secara baku. Digunakan secara luas dalam instansi pendidikan.',
      features: ['Gramatikal', 'Baku', 'Formal'],
      color: 'var(--primary)'
    },
    bisindo: {
      title: 'BISINDO',
      fullName: 'Bahasa Isyarat Indonesia',
      desc: 'Bahasa alami komunitas Tuli. Sangat ekspresif, kultural, dan berkembang sesuai dialek daerah masing-masing di Indonesia.',
      features: ['Alami', 'Kultural', 'Ekspresif'],
      color: 'var(--secondary)'
    },
    quran: {
      title: 'QURAN',
      fullName: 'Quran Isyarat Hijaiyah',
      desc: 'Metode isyarat khusus yang mempermudah teman Tuli dalam menghafal dan memahami huruf-huruf Al-Quran secara visual.',
      features: ['Hijaiyah', 'Standar MUI', 'Inklusif'],
      color: '#059669'
    }
  }

  const hijaiyahData = [
    { char: 'ا', id: 'alif' }, { char: 'ب', id: 'ba' }, { char: 'ت', id: 'ta' }, { char: 'ث', id: 'tsa' },
    { char: 'ج', id: 'jim' }, { char: 'ح', id: 'ha' }, { char: 'خ', id: 'kho' }, { char: 'د', id: 'dal' },
    { char: 'ذ', id: 'dzal' }, { char: 'ر', id: 'ra' }, { char: 'ز', id: 'zai' }, { char: 'س', id: 'sin' },
    { char: 'ش', id: 'syin' }, { char: 'ص', id: 'shod' }, { char: 'ض', id: 'dhod' }, { char: 'ط', id: 'tho' },
    { char: 'ظ', id: 'dzho' }, { char: 'ع', id: 'ain' }, { char: 'غ', id: 'ghoin' }, { char: 'ف', id: 'fa' },
    { char: 'ق', id: 'qof' }, { char: 'ك', id: 'kaf' }, { char: 'ل', id: 'lam' }, { char: 'م', id: 'mim' },
    { char: 'ن', id: 'nun' }, { char: 'و', id: 'wau' }, { char: 'ه', id: 'hamzah' }, { char: 'ي', id: 'ya' }
  ]

  const alphabet = activeTab === 'quran'
    ? hijaiyahData
    : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(char => ({ char, id: char.toLowerCase() }))

  useEffect(() => {
    alphabet.forEach(item => {
      const img = new Image()
      img.src = `/isyarat/${activeTab}/${item.id}.jpg`
    })
  }, [activeTab, alphabet])

  useEffect(() => {
    if (selectedLetter) {
      setIsImageLoading(true)
      setImageError(false)
    }
  }, [selectedLetter])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="section"
      style={{ paddingTop: '8rem' }}
    >
      <div className="container">
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.6rem 1.5rem', 
              background: 'var(--primary-glow)', 
              borderRadius: '100px', 
              color: 'var(--primary)',
              fontSize: '0.85rem',
              fontWeight: '700',
              marginBottom: '2rem',
              letterSpacing: '1px'
            }}
          >
            <Sparkles size={16} /> AKADEMI ISYARAT YO'I
          </motion.div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', marginBottom: '1.5rem', fontWeight: '800' }}>
            Pusat Pembelajaran <span style={{ color: 'var(--primary)' }} className="glow-text">Inklusif</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.8 }}>
            Belajar bahasa isyarat kini lebih mudah, seru, dan interaktif. Pilih metode yang paling cocok untuk Anda mulai hari ini.
          </p>
        </div>

        {/* Custom Tab Switcher */}
        <div style={{ 
          background: 'var(--bg-card)', 
          padding: '0.5rem', 
          borderRadius: '20px', 
          display: 'inline-flex', 
          gap: '0.5rem', 
          marginBottom: '4rem',
          left: '50%',
          transform: 'translateX(-50%)',
          position: 'relative',
          boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
          border: '1px solid var(--glass-border)',
          width: 'auto',
          maxWidth: '100%',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {['sibi', 'bisindo', 'quran'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab)
                setSelectedLetter(null)
              }}
              style={{
                padding: '0.8rem 1.8rem',
                borderRadius: '15px',
                border: 'none',
                background: activeTab === tab ? 'var(--primary)' : 'transparent',
                color: activeTab === tab ? '#fff' : 'var(--text-muted)',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {tab === 'quran' && <span style={{ fontSize: '1.2rem' }}>📖</span>}
              {tab === 'quran' ? 'QURAN' : tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Interactive Learning Area */}
        <div className="learning-layout" style={{ marginBottom: '8rem' }}>
          {/* Method Info */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card"
            style={{ height: 'fit-content', padding: '2.5rem' }}
          >
            <span style={{ color: content[activeTab].color, fontSize: '0.85rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
              {content[activeTab].title}
            </span>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem', fontWeight: '800' }}>{content[activeTab].fullName}</h2>
            <p style={{ fontSize: '1rem', marginBottom: '2.5rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>{content[activeTab].desc}</p>

            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              {content[activeTab].features.map((f, i) => (
                <span key={i} style={{ 
                  padding: '0.6rem 1.2rem', 
                  background: 'var(--bg-dark)', 
                  borderRadius: '12px', 
                  fontSize: '0.8rem', 
                  fontWeight: '700', 
                  color: 'var(--text-main)',
                  border: '1px solid var(--glass-border)' 
                }}>
                  {f}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="alphabet-container">
            {/* Alphabet Keyboard */}
            <div className="glass-card" style={{ background: 'var(--bg-card)', height: 'fit-content', padding: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', fontWeight: '800' }}>
                {activeTab === 'quran' ? 'Pilih Huruf Hijaiyah' : `Kamus Huruf`}
              </h3>
              <div className="alphabet-grid">
                {alphabet.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedLetter(item)}
                    className={`alphabet-btn ${selectedLetter?.id === item.id ? 'active' : ''}`}
                    style={{
                      aspectRatio: '1/1',
                      borderRadius: '12px',
                      border: '1px solid var(--glass-border)',
                      background: selectedLetter?.id === item.id ? 'var(--primary)' : 'var(--bg-dark)',
                      color: selectedLetter?.id === item.id ? '#fff' : 'var(--text-main)',
                      fontSize: activeTab === 'quran' ? '1.4rem' : '1rem',
                      fontWeight: '800',
                      cursor: 'pointer',
                      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontFamily: activeTab === 'quran' ? 'inherit' : "'Outfit', sans-serif"
                    }}
                  >
                    {item.char}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Visual Preview */}
            <AnimatePresence>
              {selectedLetter && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="glass-card preview-panel"
                  style={{
                    textAlign: 'center',
                    border: '1px solid var(--primary)',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '1.5rem'
                  }}
                >
                  <button
                    onClick={() => setSelectedLetter(null)}
                    style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--bg-dark)', border: 'none', color: 'var(--text-muted)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}
                  >
                    <X size={14} />
                  </button>
                  
                  <div className="preview-box" style={{
                    width: '100%',
                    aspectRatio: '1/1',
                    background: '#000',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
                  }}>
                    {!imageError && (
                      <img
                        src={`/isyarat/${activeTab}/${selectedLetter.id}.jpg`}
                        alt={`Isyarat ${selectedLetter.char}`}
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'contain',
                          opacity: isImageLoading ? 0 : 1,
                          transition: 'opacity 0.3s ease'
                        }}
                        onLoad={() => setIsImageLoading(false)}
                        onError={() => {
                          setIsImageLoading(false)
                          setImageError(true)
                        }}
                      />
                    )}
                    
                    {isImageLoading && (
                      <div style={{ position: 'absolute' }}>
                        <Loader2 className="animate-spin" size={32} color="var(--primary)" />
                      </div>
                    )}

                    {imageError && (
                      <div style={{ textAlign: 'center', padding: '1rem' }}>
                        <span style={{ fontSize: '4.5rem', color: '#fff', opacity: 0.9, display: 'block', marginBottom: '0.5rem', fontWeight: '800' }}>
                          {selectedLetter.char}
                        </span>
                        <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>Visual belum tersedia</p>
                      </div>
                    )}
                  </div>
                  
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px', marginBottom: '0.4rem' }}>Karakter</h4>
                    <p style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--primary)' }}>{selectedLetter.char}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Curriculum Scroll Section */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
            <GraduationCap size={24} color="var(--primary)" />
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800' }}>Kurikulum Utama</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', marginBottom: '4rem' }}>Program pembelajaran terstruktur dari tingkat pemula hingga mahir.</p>
          
          <div className="scroll-x">
            {[
              { id: 'level-dasar', title: 'Level Dasar', sub: 'Alfabet & Angka', desc: 'Langkah awal mengenal simbol isyarat paling mendasar.', color: 'var(--primary)' },
              { id: 'level-menengah', title: 'Menengah', sub: 'Percakapan', desc: 'Mulai membangun kalimat dan komunikasi dua arah.', color: 'var(--secondary)' },
              { id: 'level-mahir', title: 'Level Mahir', sub: 'Interpretasi', desc: 'Penguasaan struktur bahasa dan kecepatan isyarat.', color: 'var(--primary)' },
              { id: 'quran-isyarat', title: 'Quran Isyarat', sub: 'Spiritual', desc: 'Pembelajaran hijaiyah inklusif berbasis standar MUI.', color: '#059669' }
            ].map((course, i) => (
              <motion.div 
                key={i} 
                className="glass-card" 
                style={{ textAlign: 'left', padding: '2rem', display: 'flex', flexDirection: 'column' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div style={{ 
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: `${course.color}15`, color: course.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <Book size={24} />
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem', fontWeight: '800' }}>{course.title}</h3>
                <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', marginBottom: '1rem' }}>{course.sub}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>{course.desc}</p>
                <Link to={`/learning/${course.id}`} className="btn btn-primary" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', borderRadius: '12px' }}>Mulai Belajar</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .learning-layout {
          display: grid;
          gap: 2rem;
          grid-template-columns: 1fr;
        }

        .alphabet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
          gap: 0.8rem;
        }

        .alphabet-container {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
        }

        @media (max-width: 767px) {
          ${selectedLetter ? `
            .alphabet-container {
              grid-template-columns: 1.4fr 1fr;
              gap: 1rem;
            }
            .alphabet-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 0.6rem;
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
            grid-template-columns: ${selectedLetter ? '1fr 2.4fr' : '1.2fr 2fr'};
            gap: 3rem;
          }
          .alphabet-container {
            grid-template-columns: ${selectedLetter ? '1.5fr 1fr' : '1fr'};
          }
          .alphabet-grid {
            grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
          }
        }
      `}</style>
    </motion.div>
  )
}

export default Learning
