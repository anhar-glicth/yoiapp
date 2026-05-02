import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Book, Globe, Sparkles, GraduationCap, Clock, Star, Zap, CheckCircle2, ChevronRight, X, Loader2 } from 'lucide-react'

const Learning = () => {
  const [activeTab, setActiveTab] = useState('sibi')
  const [selectedLetter, setSelectedLetter] = useState(null)
  const [isImageLoading, setIsImageLoading] = useState(false)
  const [imageError, setImageError] = useState(false)

  const content = {
    sibi: {
      title: 'SIBI',
      fullName: 'Sistem Isyarat Bahasa Indonesia',
      desc: 'Standar isyarat formal yang mengikuti tata bahasa lisan Indonesia secara baku.',
      color: 'var(--primary)',
      icon: '🏛️'
    },
    bisindo: {
      title: 'BISINDO',
      fullName: 'Bahasa Isyarat Indonesia',
      desc: 'Bahasa alami komunitas Tuli yang ekspresif, kultural, dan berkembang secara sosial.',
      color: 'var(--secondary)',
      icon: '🤝'
    },
    quran: {
      title: 'QURAN',
      fullName: 'Isyarat Hijaiyah',
      desc: 'Metode isyarat khusus untuk mempermudah penghafalan huruf Al-Quran secara visual.',
      color: '#059669',
      icon: '📖'
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
      style={{ background: 'var(--bg-dark)', paddingBottom: '10rem' }}
    >
      {/* Hero Academy */}
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
              <GraduationCap size={16} style={{ marginRight: '0.6rem' }} /> AKADEMI ISYARAT YO'I
            </motion.div>
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: '900', lineHeight: 1.1, marginBottom: '2rem' }}>
              Pusat Pembelajaran <br /><span style={{ color: 'var(--primary)' }}>Inklusif Terpercaya</span>
            </h1>
            
            {/* Methodology Tab Switcher */}
            <div style={{ 
              display: 'inline-flex', background: 'var(--bg-card)', padding: '0.5rem', 
              borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
            }}>
              {['sibi', 'bisindo', 'quran'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setSelectedLetter(null); }}
                  style={{
                    padding: '1rem 2rem', borderRadius: '18px', border: 'none',
                    background: activeTab === tab ? 'var(--primary)' : 'transparent',
                    color: activeTab === tab ? '#fff' : 'var(--text-muted)',
                    fontWeight: '800', cursor: 'pointer', transition: 'all 0.3s',
                    fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.6rem'
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{content[tab].icon}</span>
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Academy Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="learning-layout">
            
            {/* Left: Methodology Info */}
            <aside style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card" 
                style={{ padding: '3rem 2rem', borderTop: `4px solid ${content[activeTab].color}` }}
              >
                <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem' }}>{content[activeTab].fullName}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>{content[activeTab].desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#fff', fontSize: '0.9rem', fontWeight: '700' }}>
                    <CheckCircle2 size={18} color="var(--primary)" /> Kurikulum Terverifikasi
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#fff', fontSize: '0.9rem', fontWeight: '700' }}>
                    <Zap size={18} color="var(--secondary)" /> Interaktif & Real-time
                  </div>
                </div>
              </motion.div>

              {/* Quick Academy Stats */}
              <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary)' }}>150+</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700' }}>MODUL</div>
                </div>
                <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary)' }}>10K+</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '700' }}>SISWA</div>
                </div>
              </div>
            </aside>

            {/* Right: Alphabet & Preview */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Alphabet Keyboard */}
              <div className="glass-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '2rem' }}>Daftar Huruf & Isyarat</h3>
                <div className="alphabet-grid">
                  {alphabet.map((item) => (
                    <motion.button
                      key={item.id}
                      whileHover={{ scale: 1.1, borderColor: 'var(--primary)' }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedLetter(item)}
                      style={{
                        aspectRatio: '1/1', borderRadius: '14px', border: '1px solid var(--glass-border)',
                        background: selectedLetter?.id === item.id ? 'var(--primary)' : 'var(--bg-dark)',
                        color: selectedLetter?.id === item.id ? '#fff' : 'var(--text-main)',
                        fontSize: activeTab === 'quran' ? '1.5rem' : '1.1rem',
                        fontWeight: '800', cursor: 'pointer', transition: 'all 0.2s',
                        fontFamily: activeTab === 'quran' ? 'inherit' : "'Outfit', sans-serif"
                      }}
                    >
                      {item.char}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Visual Preview Section */}
              <AnimatePresence>
                {selectedLetter && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    className="glass-card"
                    style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', border: '1px solid var(--primary)' }}
                  >
                    <div style={{ 
                      width: '100%', aspectRatio: '16/9', background: '#000', borderRadius: '24px', 
                      overflow: 'hidden', position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' 
                    }}>
                      <button 
                        onClick={() => setSelectedLetter(null)}
                        style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', padding: '0.5rem', borderRadius: '50%', cursor: 'pointer', zIndex: 10 }}
                      >
                        <X size={20} />
                      </button>
                      <img 
                        src={`/isyarat/${activeTab}/${selectedLetter.id}.jpg`} 
                        alt={selectedLetter.char}
                        style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: isImageLoading ? 0 : 1 }}
                        onLoad={() => setIsImageLoading(false)}
                        onError={() => { setIsImageLoading(false); setImageError(true); }}
                      />
                      {isImageLoading && (
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Loader2 className="animate-spin" size={40} color="var(--primary)" />
                        </div>
                      )}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700' }}>KARAKTER TERPILIH</div>
                        <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)' }}>{selectedLetter.char}</div>
                      </div>
                      <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '14px' }}>Pelajari Lebih Lanjut</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Levels */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Jenjang Pendidikan</h2>
            <p style={{ color: 'var(--text-muted)' }}>Mulai dari dasar hingga penguasaan penuh.</p>
          </div>

          <div className="scroll-x">
            {[
              { title: 'Level Dasar', level: 'Level 1', desc: 'Pengenalan alfabet, angka, dan salam dasar.', color: 'var(--primary)' },
              { title: 'Percakapan', level: 'Level 2', desc: 'Membangun kalimat dan interaksi harian.', color: 'var(--secondary)' },
              { title: 'Struktur Bahasa', level: 'Level 3', desc: 'Pendalaman tata bahasa dan ekspresi.', color: '#059669' },
              { title: 'Interpretasi', level: 'Level 4', desc: 'Kecepatan dan akurasi penerjemahan.', color: '#8b5cf6' }
            ].map((l, i) => (
              <motion.div key={i} className="glass-card" style={{ padding: '2.5rem', minWidth: '280px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: '800', color: l.color, marginBottom: '0.5rem' }}>{l.level}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>{l.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>{l.desc}</p>
                <Link to="/learning/level-dasar" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', textDecoration: 'none', fontWeight: '700', fontSize: '0.9rem' }}>
                  Lihat Modul <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <style>{`
        @media (min-width: 1024px) {
          .learning-layout { grid-template-columns: 320px 1fr !important; gap: 4rem !important; }
        }
        .alphabet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
          gap: 1rem;
        }
      `}</style>
    </motion.div>
  )
}

export default Learning
