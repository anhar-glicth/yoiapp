import React from 'react'
import { motion } from 'framer-motion'
import { Globe, FileText, Mail, Sparkles, Users, Linkedin, Instagram, ShieldCheck, Heart, Zap } from 'lucide-react'

const Team = () => {
  const members = [
    {
      name: 'Muhammad Anhar Solihin',
      role: 'Chief Technology Officer',
      dept: 'Tech & Innovation',
      image: '/anhar.jpeg',
      links: [{ icon: <Instagram size={18} />, url: 'https://www.instagram.com/anhars._/' }, { icon: <Linkedin size={18} />, url: '#' }]
    },
    {
      name: 'Nurul Hasana',
      role: 'Head of Education',
      dept: 'Academic',
      image: '/Nurul Hasana.jpg',
      links: [{ icon: <Mail size={18} />, url: 'mailto:nurul@yoi.com' }, { icon: <Linkedin size={18} />, url: '#' }]
    },
    {
      name: 'Aira Rakmah',
      role: 'Fullstack Developer',
      dept: 'Engineering',
      image: '/aira.jpeg',
      links: [{ icon: <Globe size={18} />, url: '#' }, { icon: <Linkedin size={18} />, url: '#' }]
    },
    {
      name: 'Ghaitsa Shofa Adelya',
      role: 'Community Manager',
      dept: 'Public Relations',
      image: '/ghaitsa.jpg',
      links: [{ icon: <Instagram size={18} />, url: '#' }, { icon: <Mail size={18} />, url: 'mailto:ghaitsa@yoi.com' }]
    },
    {
      name: 'Jabaringin Hasibuan',
      role: 'Strategic Relations',
      dept: 'Partnership',
      image: 'https://i.pravatar.cc/300?img=12',
      links: [{ icon: <Linkedin size={18} />, url: '#' }, { icon: <Mail size={18} />, url: 'mailto:jabar@yoi.com' }]
    },
    {
      name: 'Indi',
      role: 'Creative Designer',
      dept: 'Visual Design',
      image: 'https://i.pravatar.cc/300?img=32',
      links: [{ icon: <Instagram size={18} />, url: '#' }, { icon: <Globe size={18} />, url: '#' }]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'var(--bg-dark)', paddingBottom: '10rem' }}
    >
      {/* Hero Team */}
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
              <Users size={16} style={{ marginRight: '0.6rem' }} /> TALENTA KEMANUSIAAN
            </motion.div>
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: '900', lineHeight: 1.1, marginBottom: '2rem' }}>
              Orang di Balik <br /><span style={{ color: 'var(--primary)' }}>Visi Yo'i Foundation</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.8 }}>
              Kumpulan talenta muda yang berdedikasi tinggi untuk menciptakan masa depan inklusif melalui teknologi dan pendidikan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Team Grid */}
      <section className="section">
        <div className="container">
          <div className="scroll-x">
            {members.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="glass-card"
                style={{ padding: '1rem', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '32px', aspectRatio: '1/1', marginBottom: '1.5rem' }}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=1565C0&color=fff&size=512` }}
                  />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)', padding: '0.4rem 0.8rem', borderRadius: '10px', fontSize: '0.7rem', fontWeight: '800', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {member.dept}
                  </div>
                </div>
                <div style={{ padding: '0.5rem', flex: 1 }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.4rem' }}>{member.name}</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{member.role}</p>
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', paddingTop: '1.2rem', borderTop: '1px solid var(--glass-border)' }}>
                  {member.links.map((link, idx) => (
                    <a key={idx} href={link.url} className="team-social-btn" style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--bg-dark)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                      {link.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Impact Bar */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: '4rem', background: 'var(--bg-card)', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '3.5rem', fontWeight: '800' }}>Budaya Kerja Kami</h2>
            <div className="grid grid-3" style={{ gap: '3rem' }}>
              {[
                { icon: <Heart size={32} color="#ef4444" />, title: 'Empati Tinggi', desc: 'Menempatkan kebutuhan teman disabilitas sebagai prioritas utama.' },
                { icon: <Zap size={32} color="var(--primary)" />, title: 'Inovasi Cepat', desc: 'Terus bereksperimen dengan teknologi terbaru untuk solusi inklusi.' },
                { icon: <ShieldCheck size={32} color="#059669" />, title: 'Integritas Sosial', desc: 'Menjaga transparansi dan dampak nyata dalam setiap program.' }
              ].map((c, i) => (
                <div key={i}>
                  <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{c.icon}</div>
                  <h4 style={{ fontWeight: '800', marginBottom: '1rem' }}>{c.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Mission CTA */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ 
            padding: '5rem 2rem', textAlign: 'center', 
            background: 'var(--primary-glow)', borderRadius: '48px',
            border: '1px dashed var(--primary)'
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem' }}>Ingin Bergabung dalam Misi?</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3.5rem', fontSize: '1.15rem', lineHeight: 1.8 }}>
              Kami selalu membuka pintu bagi talenta yang memiliki semangat tinggi untuk inklusivitas dan kemanusiaan.
            </p>
            <button className="btn btn-primary" style={{ padding: '1.2rem 4rem', fontSize: '1.1rem', borderRadius: '18px' }}>Lihat Posisi Terbuka</button>
          </div>
        </div>
      </section>

      <style>{`
        .team-social-btn:hover {
          background: var(--primary) !important;
          color: #fff !important;
          transform: translateY(-5px);
        }
      `}</style>
    </motion.div>
  )
}

export default Team
