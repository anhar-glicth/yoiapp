import React from 'react'
import { motion } from 'framer-motion'
import { Globe, FileText, Mail, Sparkles, Users, Linkedin, Instagram } from 'lucide-react'

// Custom Instagram Icon for branding
const InstagramIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const Team = () => {
  const members = [
    {
      name: 'Muhammad Anhar Solihin',
      role: 'Chief Technology Officer',
      desc: 'Pengembang teknologi inklusif dengan dedikasi tinggi pada aksesibilitas digital.',
      image: '/anhar.jpeg',
      links: [
        { icon: <InstagramIcon />, url: 'https://www.instagram.com/anhars._/' },
        { icon: <FileText size={18} />, url: '#' },
        { icon: <Mail size={18} />, url: 'mailto:muhammadanharsolihin@gmail.com' }
      ]
    },
    {
      name: 'Nurul Hasana',
      role: 'Head of Education',
      desc: 'Pakar Bahasa Isyarat yang merancang kurikulum adaptif untuk teman Tuli.',
      image: '/Nurul Hasana.jpg',
      links: [
        { icon: <InstagramIcon />, url: '#' },
        { icon: <Linkedin size={18} />, url: '#' },
        { icon: <Mail size={18} />, url: 'mailto:nurul@yoi.com' }
      ]
    },
    {
      name: 'Aira Rakmah',
      role: 'Fullstack Developer',
      desc: 'Fokus pada performa sistem dan antarmuka yang ramah pengguna.',
      image: '/aira.jpeg',
      links: [
        { icon: <Globe size={18} />, url: '#' },
        { icon: <Linkedin size={18} />, url: '#' },
        { icon: <Mail size={18} />, url: 'mailto:aira@yoi.com' }
      ]
    },
    {
      name: 'Ghaitsa Shofa Adelya',
      role: 'Community Manager',
      desc: 'Membangun jembatan antara teknologi dan komunitas disabilitas.',
      image: '/ghaitsa.jpg',
      links: [
        { icon: <InstagramIcon />, url: '#' },
        { icon: <Mail size={18} />, url: 'mailto:ghaitsa@yoi.com' }
      ]
    },
    {
      name: 'Jabaringin Hasibuan',
      role: 'Strategic Relations',
      desc: 'Mengelola kemitraan strategis untuk perluasan dampak sosial.',
      image: 'https://i.pravatar.cc/300?img=12',
      links: [
        { icon: <Linkedin size={18} />, url: '#' },
        { icon: <Mail size={18} />, url: 'mailto:jabar@yoi.com' }
      ]
    },
    {
      name: 'Indi',
      role: 'Creative Designer',
      desc: 'Memastikan seluruh aset visual Yo\'i inklusif dan mudah dipahami.',
      image: 'https://i.pravatar.cc/300?img=32',
      links: [
        { icon: <InstagramIcon />, url: '#' },
        { icon: <Globe size={18} />, url: '#' }
      ]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="section"
      style={{ paddingTop: '8rem', background: 'var(--bg-dark)' }}
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
              padding: '0.6rem 1.2rem', 
              background: 'var(--primary-glow)', 
              borderRadius: '100px', 
              color: 'var(--primary)',
              fontSize: '0.8rem',
              fontWeight: '800',
              marginBottom: '2rem',
              letterSpacing: '1px'
            }}
          >
            <Users size={16} /> TALENTA KEMANUSIAAN
          </motion.div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', marginBottom: '1.5rem', fontWeight: '800' }}>
            Orang di Balik <span style={{ color: 'var(--primary)' }} className="glow-text">Yo'i</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.8 }}>
            Kami adalah kolaborasi antara pengembang, pendidik, dan aktivis yang percaya bahwa teknologi adalah kunci kesetaraan.
          </p>
        </div>

        {/* Team Grid with Swipe on Mobile */}
        <div className="scroll-x" style={{ marginBottom: '6rem' }}>
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card"
              style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              {/* Image Container */}
              <div style={{
                width: '100%',
                aspectRatio: '1/1',
                borderRadius: '24px',
                overflow: 'hidden',
                marginBottom: '1.5rem',
                position: 'relative',
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=1565C0&color=fff&size=512` }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(13, 71, 161, 0.4))'
                }} />
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.4rem', fontWeight: '800', color: 'var(--text-main)' }}>{member.name}</h3>
                <p style={{ 
                  color: 'var(--primary)', 
                  fontWeight: '700', 
                  marginBottom: '1rem', 
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>{member.role}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>{member.desc}</p>
              </div>

              {/* Social Links */}
              <div style={{ 
                display: 'flex', gap: '1rem', 
                paddingTop: '1.2rem', borderTop: '1px solid var(--glass-border)' 
              }}>
                {member.links.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="team-icon-btn"
                    style={{
                      width: '36px', height: '36px', borderRadius: '10px',
                      background: 'var(--bg-dark)', color: 'var(--text-muted)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s ease', textDecoration: 'none'
                    }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Callout */}
        <div className="glass-card" style={{ 
          background: 'var(--bg-card)', 
          padding: '4rem 2rem', 
          textAlign: 'center',
          borderRadius: '40px'
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem' }}>Ingin Bergabung dalam Misi?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Kami selalu membuka pintu bagi talenta yang memiliki semangat tinggi untuk inklusivitas dan kemanusiaan.
          </p>
          <button className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Lihat Posisi Terbuka</button>
        </div>
      </div>

      <style>{`
        .team-icon-btn:hover {
          background: var(--primary) !important;
          color: #fff !important;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px var(--primary-glow);
        }
      `}</style>
    </motion.div>
  )
}

export default Team
