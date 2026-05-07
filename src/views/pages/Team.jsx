import React from 'react'
import { motion } from 'framer-motion'
import { Globe, FileText, Mail, Sparkles, Users, ShieldCheck, Heart, Zap } from 'lucide-react'

const Team = () => {
  const members = [
    {
      name: 'Muhammad Anhar Solihin',
      role: 'Chief Technology Officer',
      dept: 'Tech & Innovation',
      image: '/anhar.jpeg',
      links: [{ icon: <Globe size={18} />, url: 'https://www.instagram.com/anhars._/' }]
    },
    {
      name: 'Nurul Hasana',
      role: 'Head of Education',
      dept: 'Academic',
      image: '/Nurul Hasana.jpg',
      links: [{ icon: <Mail size={18} />, url: 'mailto:nurul@yoi.com' }]
    },
    {
      name: 'Aira Rakmah',
      role: 'Fullstack Developer',
      dept: 'Engineering',
      image: '/aira.jpeg',
      links: [{ icon: <Globe size={18} />, url: '#' }]
    },
    {
      name: 'Ghaitsa Shofa Adelya',
      role: 'Community Manager',
      dept: 'Public Relations',
      image: '/ghaitsa.jpg',
      links: [{ icon: <Mail size={18} />, url: 'mailto:ghaitsa@yoi.com' }]
    },
    {
      name: 'Jabaringin Hasibuan',
      role: 'Strategic Relations',
      dept: 'Partnership',
      image: 'https://i.pravatar.cc/300?img=12',
      links: [{ icon: <Globe size={18} />, url: 'mailto:jabar@yoi.com' }]
    },
    {
      name: 'Indi',
      role: 'Creative Designer',
      dept: 'Visual Design',
      image: 'https://i.pravatar.cc/300?img=32',
      links: [{ icon: <Globe size={18} />, url: '#' }]
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
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: '900', lineHeight: 1, marginBottom: '2rem' }}>
              Orang di Balik <br /><span style={{ color: 'var(--primary)' }}>Visi Yo'i Foundation</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.8 }}>
              Kumpulan talenta muda yang berdedikasi tinggi untuk menciptakan masa depan inklusif melalui teknologi dan pendidikan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Team Marquee - MOVING AUTOMATICALLY */}
      <section className="section" style={{ padding: '0' }}>
        <div className="marquee-container" style={{ padding: '2rem 0 5rem' }}>
          <div className="marquee-content">
            {/* Double the members for seamless loop */}
            {[...members, ...members].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card team-card"
                style={{ 
                  width: '300px', 
                  flexShrink: 0, 
                  padding: '0.8rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  borderRadius: '32px' 
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '24px', aspectRatio: '1/1', marginBottom: '1.2rem' }}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=1565C0&color=fff&size=512` }}
                  />
                  <div style={{ position: 'absolute', top: '0.8rem', right: '0.8rem', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', padding: '0.4rem 0.8rem', borderRadius: '10px', fontSize: '0.65rem', fontWeight: '900', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', textTransform: 'uppercase' }}>
                    {member.dept}
                  </div>
                </div>
                <div style={{ padding: '0.5rem 1rem', flex: 1 }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.3rem' }}>{member.name}</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: '900', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '1.2rem', letterSpacing: '1px' }}>{member.role}</p>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem', padding: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                  {member.links.map((link, idx) => (
                    <a key={idx} href={link.url} className="team-social-btn" style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--bg-dark)', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                      {link.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Culture - RESPONSIVE GRID */}
      <section className="section">
        <div className="container">
          <div className="glass-card" style={{ padding: '4rem 2rem', background: 'var(--bg-card)', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', fontWeight: '900' }}>Budaya Kerja Kami</h2>
            <div className="grid grid-stats" style={{ gap: '2.5rem' }}>
              {[
                { icon: <Heart size={32} color="#ef4444" />, title: 'Empati Tinggi', desc: 'Prioritas pada teman disabilitas.' },
                { icon: <Zap size={32} color="var(--primary)" />, title: 'Inovasi Cepat', desc: 'Eksperimen teknologi inklusi terbaru.' },
                { icon: <ShieldCheck size={32} color="#059669" />, title: 'Integritas', desc: 'Transparansi dan dampak nyata.' },
                { icon: <Sparkles size={32} color="var(--secondary)" />, title: 'Kreativitas', desc: 'Solusi out of the box.' }
              ].map((c, i) => (
                <div key={i}>
                  <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{c.icon}</div>
                  <h4 style={{ fontWeight: '800', marginBottom: '0.8rem' }}>{c.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{c.desc}</p>
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
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
              Kami selalu membuka pintu bagi talenta yang memiliki semangat tinggi untuk inklusivitas dan kemanusiaan.
            </p>
            <button className="btn btn-primary" style={{ padding: '1rem 3.5rem', borderRadius: '16px' }}>Lihat Karir</button>
          </div>
        </div>
      </section>

      <style>{`
        .team-social-btn:hover {
          background: var(--primary) !important;
          color: #fff !important;
          transform: translateY(-3px);
        }
      `}</style>
    </motion.div>
  )
}

export default Team
