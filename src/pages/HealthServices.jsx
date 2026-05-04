import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { 
  Hospital, 
  Stethoscope, 
  Calendar, 
  Search, 
  Info, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2, 
  User,
  ChevronRight,
  ChevronLeft,
  Filter,
  RefreshCw,
  PhoneCall,
  ClipboardList,
  Sparkles,
  Users,
  Accessibility,
  Navigation,
  BookOpen,
  Globe2,
  MessageCircle,
  Scale,
  Shield,
  Fingerprint,
  Landmark,
  Palmtree,
  Church
} from 'lucide-react'

const doctorSchedules = [
  {
    day: 'SENIN',
    name: 'Dr. drg. Ida Ayu Arnawati, Sp.Ort.',
    time: '08:00 - 10:00',
    specialty: 'Ortodontist',
    type: 'Umum + BPJS',
    image: 'https://i.pravatar.cc/150?u=1',
    deafFriendly: true,
    hospital: 'RS Medika Utama',
    distance: '1.2 km',
    mapUrl: 'https://goo.gl/maps/example1'
  },
  {
    day: 'SENIN',
    name: 'dr. Akhada Maulana, Sp.U., Mars.',
    time: '08:00 - 10:00',
    specialty: 'Urologi',
    type: 'BPJS',
    image: 'https://i.pravatar.cc/150?u=2',
    deafFriendly: false,
    hospital: 'RS Sehat Sejahtera',
    distance: '2.5 km',
    mapUrl: 'https://goo.gl/maps/example2'
  },
  {
    day: 'SELASA',
    name: 'Dr. drg. Ida Ayu Arnawati, Sp.Ort.',
    time: '08:00 - 10:00',
    specialty: 'Ortodontist',
    type: 'Umum + BPJS',
    image: 'https://i.pravatar.cc/150?u=1',
    deafFriendly: true,
    hospital: 'RS Medika Utama',
    distance: '1.2 km',
    mapUrl: 'https://goo.gl/maps/example1'
  },
  {
    day: 'RABU',
    name: 'dr. Sarah Amelia, Sp.THT',
    time: '09:00 - 12:00',
    specialty: 'THT',
    type: 'Umum + BPJS',
    image: 'https://i.pravatar.cc/150?u=3',
    deafFriendly: true,
    hospital: 'Puskesmas Tebet',
    distance: '0.8 km',
    mapUrl: 'https://goo.gl/maps/example3'
  },
  {
    day: 'KAMIS',
    name: 'dr. Kevin Wijaya, Sp.PD',
    time: '10:00 - 14:00',
    specialty: 'Penyakit Dalam',
    type: 'Umum + BPJS',
    image: 'https://i.pravatar.cc/150?u=4',
    deafFriendly: true,
    hospital: 'RS Pondok Indah',
    distance: '4.1 km',
    mapUrl: 'https://goo.gl/maps/example4'
  },
  {
    day: 'JUMAT',
    name: 'dr. Ahmad Fauzi, Sp.JP',
    time: '08:00 - 11:30',
    specialty: 'Jantung',
    type: 'Umum',
    image: 'https://i.pravatar.cc/150?u=6',
    deafFriendly: true,
    hospital: 'RS Siloam',
    distance: '3.3 km',
    mapUrl: 'https://goo.gl/maps/example5'
  },
  {
    day: 'SABTU',
    name: 'dr. Maria Ulfa, Sp.OG',
    time: '09:00 - 15:00',
    specialty: 'Kandungan',
    type: 'Umum + BPJS',
    image: 'https://i.pravatar.cc/150?u=7',
    deafFriendly: true,
    hospital: 'RSIA Bunda',
    distance: '2.9 km',
    mapUrl: 'https://goo.gl/maps/example6'
  },
  {
    day: 'AHAD',
    name: 'Dokter Jaga IGD',
    time: '24 Jam',
    specialty: 'Umum & Darurat',
    type: 'Semua Layanan',
    image: 'https://i.pravatar.cc/150?u=8',
    deafFriendly: true,
    hospital: 'RS Pelni',
    distance: '5.0 km',
    mapUrl: 'https://goo.gl/maps/example7'
  }
]

const publicServicesData = {
  'Layanan Hukum': [
    { name: 'LBH Jakarta Inklusif', type: 'Bantuan Hukum', location: 'Jakarta Pusat', access: 'Interpreter Bisindo Tersedia', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=200' },
    { name: 'Kantor Advokat Ramah Disabilitas', type: 'Konsultasi', location: 'Jakarta Selatan', access: 'Ramah Kursi Roda', image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=200' }
  ],
  'Layanan Kepolisian': [
    { name: 'Polres Metro Jakarta Selatan', type: 'Pelayanan Publik', location: 'Jakarta Selatan', access: 'Loket Prioritas Disabilitas', image: 'https://images.unsplash.com/photo-1596753108945-230f65351241?auto=format&fit=crop&q=80&w=200' },
    { name: 'Polres Metro Jakarta Pusat', type: 'Pelayanan Publik', location: 'Jakarta Pusat', access: 'Petugas Paham Isyarat', image: 'https://images.unsplash.com/photo-1594132470783-66f8e7753696?auto=format&fit=crop&q=80&w=200' }
  ],
  'Dukcapil': [
    { name: 'Sudin Dukcapil Jakarta Barat', type: 'Pencatatan Sipil', location: 'Jakarta Barat', access: 'Layanan Jemput Bola (VDS)', image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=200' },
    { name: 'Kantor Camat Tebet (Dukcapil)', type: 'Layanan Adminduk', location: 'Jakarta Selatan', access: 'Antrian Prioritas', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=200' }
  ],
  'Perbankan': [
    { name: 'Bank Mandiri KC Jakarta', type: 'Perbankan', location: 'Jakarta Pusat', access: 'ATM Braille & Kursi Roda', image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=200' },
    { name: 'BNI Kantor Wilayah', type: 'Perbankan', location: 'Jakarta Selatan', access: 'Customer Service Bisindo', image: 'https://images.unsplash.com/photo-1620714223084-8dfacc6dfd1d?auto=format&fit=crop&q=80&w=200' }
  ],
  'Transportasi': [
    { name: 'MRT Jakarta (Bundaran HI)', type: 'Transportasi Umum', location: 'Jakarta Pusat', access: 'Tactile Paving & Lift', image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&q=80&w=200' },
    { name: 'Transjakarta Koridor 1', type: 'Transportasi Umum', location: 'Jakarta Selatan', access: 'Bus Low Entry', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=200' }
  ],
  'Pariwisata': [
    { name: 'Monumen Nasional (Monas)', type: 'Wisata Budaya', location: 'Jakarta Pusat', access: 'Lift & Jalur Ramah Kursi Roda', image: 'https://images.unsplash.com/photo-1596753108945-230f65351241?auto=format&fit=crop&q=80&w=200' },
    { name: 'Ancol Taman Impian', type: 'Wisata Alam', location: 'Jakarta Utara', access: 'Toilet Aksesibel', image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=200' }
  ],
  'Keagamaan': [
    { name: 'Masjid Istiqlal', type: 'Tempat Ibadah', location: 'Jakarta Pusat', access: 'Lift Disabilitas & Wudhu Aksesibel', image: 'https://images.unsplash.com/photo-1590076215667-873d15444365?auto=format&fit=crop&q=80&w=200' },
    { name: 'Katedral Jakarta', type: 'Tempat Ibadah', location: 'Jakarta Pusat', access: 'Jalur Landai & Area Prioritas', image: 'https://images.unsplash.com/photo-1548202983-10c750e031ee?auto=format&fit=crop&q=80&w=200' }
  ],
  'Pendidikan': [
    { name: 'SLB Negeri 01 Jakarta', type: 'Sekolah Khusus', location: 'Jakarta Selatan', access: 'Kurikulum Inklusif Lengkap', image: 'https://images.unsplash.com/photo-1509062522246-373b1d74294a?auto=format&fit=crop&q=80&w=200' },
    { name: 'Universitas Inklusif Indonesia', type: 'Pendidikan Tinggi', location: 'Jakarta Barat', access: 'Pusat Layanan Disabilitas', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=200' }
  ]
}

const HealthServices = () => {
  const location = useLocation()
  const [mainCategory, setMainCategory] = useState('Kesehatan')
  
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const category = params.get('cat')
    if (category) {
      setMainCategory(decodeURIComponent(category))
    }
  }, [location.search])
  const [searchTerm, setSearchTerm] = useState('')
  const [faskesType, setFaskesType] = useState('Semua Faskes')
  const [selectedDay, setSelectedDay] = useState('Semua Hari')
  const [selectedLocation, setSelectedLocation] = useState('Semua Lokasi')
  const [selectedPoli, setSelectedPoli] = useState('Semua Poli Spesialis')
  const [sortByDistance, setSortByDistance] = useState(false)
  
  const [filteredDoctors, setFilteredDoctors] = useState(doctorSchedules)

  const handleApplyFilters = () => {
    let filtered = [...doctorSchedules].filter(doc => {
      const matchSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      const matchDay = selectedDay === 'Semua Hari' || doc.day === selectedDay.toUpperCase()
      
      return matchSearch && matchDay
    })

    if (sortByDistance) {
      filtered.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance))
    }

    setFilteredDoctors(filtered)
  }

  const handleReset = () => {
    setSearchTerm('')
    setFaskesType('Semua Faskes')
    setSelectedDay('Semua Hari')
    setSelectedLocation('Semua Lokasi')
    setSelectedPoli('Semua Poli Spesialis')
    setSortByDistance(false)
    setFilteredDoctors(doctorSchedules)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'var(--bg-dark)', minHeight: '100vh', paddingBottom: '10rem' }}
    >
      {/* Premium Yo'i Header */}
      <header style={{ 
        background: 'var(--primary)', 
        color: '#fff', 
        padding: '2.5rem 5%', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', top: '-50%', right: '-10%', width: '400px', height: '400px', 
          background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(80px)' 
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ 
              background: '#fff', padding: '0.8rem', borderRadius: '20px', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
            }}>
              <Hospital color="var(--primary)" size={32} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <Sparkles size={16} color="var(--secondary)" />
                <span style={{ fontSize: '0.75rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>Portal Inklusif</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <h1 style={{ fontSize: '2.4rem', fontWeight: '900', margin: 0, color: '#fff', lineHeight: 1 }}>{mainCategory === 'Kesehatan' ? 'Jadwal Dokter' : mainCategory}</h1>
              </div>
            </div>
          </div>
          
          <div className="header-contacts-yoi">
            <div className="category-dropdown-yoi">
              <select 
                value={mainCategory} 
                onChange={(e) => setMainCategory(e.target.value)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  padding: '0.6rem 1rem',
                  borderRadius: '16px',
                  fontWeight: '800',
                  outline: 'none',
                  cursor: 'pointer',
                  height: '52px',
                  width: '100%',
                  backdropFilter: 'blur(10px)',
                  appearance: 'none',
                  WebkitAppearance: 'none'
                }}
              >
                <option style={{color: '#000'}}>Kesehatan</option>
                <option style={{color: '#000'}}>Layanan Hukum</option>
                <option style={{color: '#000'}}>Layanan Kepolisian</option>
                <option style={{color: '#000'}}>Dukcapil</option>
                <option style={{color: '#000'}}>Perbankan</option>
                <option style={{color: '#000'}}>Transportasi</option>
                <option style={{color: '#000'}}>Pariwisata</option>
                <option style={{color: '#000'}}>Keagamaan</option>
                <option style={{color: '#000'}}>Pendidikan</option>
              </select>
            </div>
            <a 
              href="https://wa.me/6287816431029?text=Halo%20Admin%20Yo'i%20Foundation,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Portal%20Inklusif..." 
              target="_blank" 
              rel="noreferrer" 
              className="contact-card-yoi wa"
            >
              <div className="contact-icon-bg-yoi wa">
                <MessageCircle size={18} fill="currentColor" />
              </div>
              <div className="contact-text-yoi">
                <p>Admin WA</p>
                <strong>0878-1643-1029</strong>
              </div>
            </a>
            <a href="tel:08113864443" className="contact-card-yoi emergency">
              <div className="contact-icon-bg-yoi emergency">
                <PhoneCall size={18} fill="currentColor" />
              </div>
              <div className="contact-text-yoi">
                <p>Emergency 24h</p>
                <strong>0811-3864-443</strong>
              </div>
            </a>
          </div>
        </div>
      </header>

      <div className="container" style={{ marginTop: '-2.5rem', position: 'relative', zIndex: 10 }}>

        {mainCategory === 'Kesehatan' ? (
          <>
            {/* Filter Bar - Modernized */}
            <div className="glass-card filter-panel-yoi">
              <div className="filter-grid-yoi">
                <div className="filter-item-yoi">
                  <label>Jenis Faskes</label>
                  <div className="select-wrap-yoi">
                    <Hospital size={16} />
                    <select value={faskesType} onChange={(e) => setFaskesType(e.target.value)}>
                      <option>Semua Faskes</option>
                      <option>Rumah Sakit</option>
                      <option>Puskesmas</option>
                    </select>
                  </div>
                </div>
                <div className="filter-item-yoi">
                  <label>Filter Hari</label>
                  <div className="select-wrap-yoi">
                    <Calendar size={16} />
                    <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
                      <option>Semua Hari</option>
                      <option>Senin</option>
                      <option>Selasa</option>
                      <option>Rabu</option>
                      <option>Kamis</option>
                      <option>Jumat</option>
                      <option>Sabtu</option>
                      <option>Ahad</option>
                    </select>
                  </div>
                </div>
                <div className="filter-item-yoi">
                  <label>Lokasi Faskes</label>
                  <div className="select-wrap-yoi">
                    <MapPin size={16} />
                    <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                      <option>Semua Lokasi</option>
                      <option>Jakarta Selatan</option>
                      <option>Jakarta Pusat</option>
                      <option>Jakarta Barat</option>
                      <option>Jakarta Timur</option>
                      <option>Jakarta Utara</option>
                    </select>
                  </div>
                </div>
                <div className="filter-item-yoi">
                  <label>Urutan Lokasi</label>
                  <div className="select-wrap-yoi">
                    <Navigation size={16} />
                    <select value={sortByDistance ? 'Terdekat' : 'Default'} onChange={(e) => setSortByDistance(e.target.value === 'Terdekat')}>
                      <option value="Default">Urutan Default</option>
                      <option value="Terdekat">Jarak Terdekat</option>
                    </select>
                  </div>
                </div>
                <div className="filter-item-yoi search-main">
                  <label>Cari Nama Dokter</label>
                  <div className="input-wrap-yoi">
                    <Search size={18} />
                    <input 
                      type="text" 
                      placeholder="Nama dokter..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="filter-btns-yoi">
                  <button className="btn-yoi-primary" onClick={handleApplyFilters}>Terapkan</button>
                  <button className="btn-yoi-ghost" onClick={handleReset}><RefreshCw size={18} /></button>
                </div>
              </div>
            </div>

            {/* Accessibility Features Section */}
            <div className="accessibility-info-yoi">
              <div className="info-header-yoi">
                <Sparkles size={24} color="var(--secondary)" />
                <h3>Fitur Inklusi Yo'i Foundation</h3>
              </div>
              <div className="info-grid-yoi">
                <div className="info-card-yoi">
                  <div className="info-icon-yoi"><Users size={20} /></div>
                  <h4>Pendamping Bisindo</h4>
                  <p>Faskes bertanda khusus menyediakan interpreter bahasa isyarat di lokasi.</p>
                </div>
                <div className="info-card-yoi">
                  <div className="info-icon-yoi"><Clock size={20} /></div>
                  <h4>Antrian Prioritas</h4>
                  <p>Layanan khusus untuk penyandang disabilitas tanpa antrian panjang.</p>
                </div>
                <div className="info-card-yoi">
                  <div className="info-icon-yoi"><Accessibility size={20} /></div>
                  <h4>Fasilitas Aksesibel</h4>
                  <p>Ramah kursi roda dan panduan taktil tersedia di area rumah sakit.</p>
                </div>
              </div>
            </div>

            {/* Schedule Display - Grid Layout */}
            <div className="doctor-grid-yoi">
              <AnimatePresence mode="popLayout">
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doc, idx) => (
                    <motion.div 
                      key={`${doc.name}-${doc.day}-${idx}`}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      whileHover={{ scale: 1.02 }}
                      className="doc-card-yoi"
                    >
                      <div className="doc-top-yoi">
                        <div className="doc-img-yoi">
                          <img src={doc.image} alt={doc.name} />
                          <div className="distance-badge-yoi">
                            <MapPin size={10} /> {doc.distance}
                          </div>
                        </div>
                        <div className="doc-title-box">
                          <div className="day-badge-yoi">{doc.day}</div>
                          <h4 className="doc-name-yoi">{doc.name}</h4>
                          <div className="doc-hosp-info">
                            <Hospital size={14} /> <span>{doc.hospital}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="doc-meta-yoi">
                        <div className="meta-item-yoi">
                          <Clock size={14} />
                          <span>{doc.time}</span>
                        </div>
                        <div className="meta-item-yoi accent">
                          <ClipboardList size={14} />
                          <span>{doc.type}</span>
                        </div>
                      </div>

                      <div className="doc-actions-yoi">
                        <a href={doc.mapUrl} target="_blank" rel="noreferrer" className="action-btn-yoi map">
                          <Navigation size={14} /> Cek Lokasi
                        </a>
                        <button className="action-btn-yoi interpreter">
                          <Users size={14} /> Request Interpreter
                        </button>
                      </div>

                      {doc.deafFriendly && (
                        <div className="deaf-friendly-footer">
                          <Sparkles size={14} /> Layanan Inklusif Terverifikasi
                        </div>
                      )}
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ gridColumn: '1/-1', textAlign: 'center', padding: '5rem', color: 'var(--text-muted)' }}
                  >
                    <div style={{ marginBottom: '1rem' }}><Search size={48} opacity={0.2} /></div>
                    <h3>Tidak ada jadwal dokter yang sesuai</h3>
                    <p>Coba ubah filter atau kata kunci pencarian Anda.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <div className="public-services-grid-yoi">
            {publicServicesData[mainCategory] ? (
              publicServicesData[mainCategory].map((svc, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card svc-card-yoi"
                  style={{ padding: '1.5rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
                >
                  <div style={{ height: '140px', borderRadius: '16px', overflow: 'hidden', marginBottom: '1.2rem' }}>
                    <img src={svc.image} alt={svc.name} style={{ width: '100%', height: '100%', objectFit: 'crop' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: '800', background: 'var(--primary-glow)', color: 'var(--primary)', padding: '0.3rem 0.8rem', borderRadius: '100px' }}>
                      {svc.type}
                    </span>
                    <div style={{ color: 'var(--secondary)' }}>
                      {mainCategory === 'Layanan Hukum' && <Scale size={20} />}
                      {mainCategory === 'Layanan Kepolisian' && <Shield size={20} />}
                      {mainCategory === 'Dukcapil' && <Fingerprint size={20} />}
                      {mainCategory === 'Perbankan' && <Landmark size={20} />}
                      {mainCategory === 'Transportasi' && <Navigation size={20} />}
                      {mainCategory === 'Pariwisata' && <Palmtree size={20} />}
                      {mainCategory === 'Keagamaan' && <Church size={20} />}
                      {mainCategory === 'Pendidikan' && <BookOpen size={20} />}
                    </div>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '900', marginBottom: '0.5rem' }}>{svc.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                    <MapPin size={14} /> {svc.location}
                  </div>
                  <div className="svc-access-badge-yoi">
                    <Sparkles size={14} /> {svc.access}
                  </div>
                  <button className="btn-yoi-primary" style={{ width: '100%', marginTop: '1.5rem', borderRadius: '12px', padding: '0.8rem' }}>
                    Lihat Detail Layanan
                  </button>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="glass-card" 
                style={{ padding: '5rem', textAlign: 'center', borderRadius: '40px', gridColumn: '1/-1' }}
              >
                <div style={{ 
                  width: '100px', height: '100px', background: 'var(--primary-glow)', 
                  borderRadius: '50%', display: 'flex', alignItems: 'center', 
                  justifyContent: 'center', margin: '0 auto 2rem' 
                }}>
                  <Globe2 size={48} color="var(--primary)" />
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem' }}>{mainCategory} Inklusif</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                  Kami sedang memetakan fasilitas dan layanan {mainCategory.toLowerCase()} yang ramah disabilitas. Segera hadir akses informasi yang setara untuk semua!
                </p>
                <button 
                  className="btn-yoi-primary" 
                  style={{ marginTop: '3rem' }}
                  onClick={() => setMainCategory('Kesehatan')}
                >
                  Kembali ke Layanan Kesehatan
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .public-services-grid-yoi {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        .svc-card-yoi {
          transition: 0.3s;
          border: 1px solid rgba(0,0,0,0.05);
        }
        .svc-card-yoi:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: var(--primary-glow);
        }
        .svc-access-badge-yoi {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem;
          background: rgba(255, 152, 0, 0.08);
          color: #E65100;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 800;
        }
        .back-link-yoi {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          margin-bottom: 1.5rem;
          opacity: 0.8;
          transition: 0.3s;
        }
        .back-link-yoi:hover { opacity: 1; transform: translateX(-5px); }

        .filter-panel-yoi {
          padding: 2rem;
          border-radius: 30px;
          margin-bottom: 4rem;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 30px 60px rgba(0,0,0,0.08);
        }
        .filter-grid-yoi {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem 2rem;
          align-items: flex-start;
        }
        .filter-btns-yoi { 
          display: flex; 
          gap: 1rem; 
          grid-column: 1 / -1; 
          justify-content: flex-end; 
          margin-top: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--bg-dark);
        }
        .filter-item-yoi label {
          display: block;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-muted);
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .select-wrap-yoi, .input-wrap-yoi {
          position: relative;
          display: flex;
          align-items: center;
        }
        .select-wrap-yoi svg, .input-wrap-yoi svg {
          position: absolute;
          left: 1.2rem;
          color: var(--primary);
        }
        .select-wrap-yoi select, .input-wrap-yoi input {
          width: 100%;
          padding: 1rem 1.2rem 1rem 3.2rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          font-weight: 700;
          color: var(--text-main);
          outline: none;
          transition: 0.3s;
        }
        .btn-yoi-primary {
          background: var(--primary);
          color: #fff;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 14px;
          font-weight: 800;
          cursor: pointer;
        }
        .btn-yoi-ghost {
          background: #f8fafc;
          color: var(--primary);
          border: 1px solid #e2e8f0;
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        /* Accessibility Info */
        .accessibility-info-yoi {
          background: #fff;
          padding: 2.5rem;
          border-radius: 30px;
          margin-bottom: 4rem;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
        }
        .info-header-yoi { display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; }
        .info-header-yoi h3 { margin: 0; font-size: 1.4rem; font-weight: 900; color: var(--primary); }
        .info-grid-yoi { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
        .info-card-yoi { display: flex; flex-direction: column; gap: 0.8rem; }
        .info-icon-yoi {
          width: 44px;
          height: 44px;
          background: var(--primary-glow);
          color: var(--primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .info-card-yoi h4 { margin: 0; font-size: 1.1rem; font-weight: 800; color: var(--text-main); }
        .info-card-yoi p { margin: 0; font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; font-weight: 600; }

        .header-contacts-yoi { 
          display: flex; 
          gap: 0.8rem; 
          justify-content: flex-end;
          flex-wrap: wrap;
        }
        .contact-card-yoi {
          flex: 0 1 220px; /* Limit stretching on desktop */
          background: rgba(255,255,255,0.08);
          padding: 0.6rem 1rem;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          border: 1px solid rgba(255,255,255,0.1);
          text-decoration: none;
          color: #fff;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }
        .contact-card-yoi:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.3);
        }
        
        .contact-icon-bg-yoi {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-icon-bg-yoi.wa { background: #25D366; }
        .contact-icon-bg-yoi.emergency { background: #FF3D00; }
        
        .contact-text-yoi { overflow: hidden; }
        .contact-card-yoi p { margin: 0; font-size: 0.6rem; opacity: 0.8; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; }
        .contact-card-yoi strong { font-size: 0.85rem; font-weight: 900; display: block; white-space: nowrap; }

        @media (max-width: 900px) {
          .header-contacts-yoi { justify-content: center; width: 100%; margin-top: 1rem; }
          .contact-card-yoi { flex: 1; min-width: 160px; }
        }

        @media (max-width: 500px) {
          .contact-card-yoi { min-width: 100%; } /* Stack on very small phones for cleanliness */
        }

        .doctor-grid-yoi {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 2rem;
        }

        .day-badge-yoi {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          background: var(--primary-glow);
          color: var(--primary);
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 800;
          margin-bottom: 0.6rem;
          letter-spacing: 1px;
        }

        .doc-card-yoi {
          background: #fff;
          border-radius: 28px;
          padding: 1.8rem;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          display: flex;
          flex-direction: column;
        }
        .doc-top-yoi { display: flex; gap: 1.5rem; align-items: center; margin-bottom: 1.5rem; }
        .doc-img-yoi { position: relative; }
        .doc-img-yoi img { width: 75px; height: 75px; border-radius: 22px; object-fit: cover; }
        .deaf-status-icon {
          position: absolute;
          bottom: -5px;
          right: -5px;
          background: var(--secondary);
          color: #fff;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid #fff;
          box-shadow: 0 5px 10px rgba(255, 109, 0, 0.3);
        }
        .doc-title-box { flex: 1; }
        .doc-name-yoi { margin: 0 0 0.3rem 0; font-size: 1.15rem; font-weight: 900; color: #1e293b; line-height: 1.3; }
        .doc-hosp-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary);
        }

        .distance-badge-yoi {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          padding: 0.2rem 0.6rem;
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 0.3rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          white-space: nowrap;
          border: 1px solid #e2e8f0;
        }

        .doc-actions-yoi {
          display: flex;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }
        .action-btn-yoi {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.8rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 800;
          text-decoration: none;
          transition: 0.3s;
          cursor: pointer;
        }
        .action-btn-yoi.map {
          background: var(--primary-glow);
          color: var(--primary);
          border: 1px solid var(--primary);
        }
        .action-btn-yoi.map:hover { background: var(--primary); color: #fff; }
        
        .action-btn-yoi.interpreter {
          background: rgba(255, 109, 0, 0.1);
          color: var(--secondary);
          border: 1px solid var(--secondary);
        }
        .action-btn-yoi.interpreter:hover { background: var(--secondary); color: #fff; }

        .doc-meta-yoi { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
        .meta-item-yoi {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.7rem;
          background: #f8fafc;
          border-radius: 14px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #475569;
        }
        .meta-item-yoi.accent { background: var(--primary-glow); color: var(--primary); }

        .deaf-friendly-footer {
          padding-top: 1.2rem;
          border-top: 1px dashed #e2e8f0;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--secondary);
        }

        @media (max-width: 900px) {
          .header-content-yoi { flex-direction: column; text-align: center; gap: 2rem; }
          .header-contacts-yoi { width: 100%; justify-content: center; }
          .category-dropdown-yoi { margin-top: 1rem; width: 100%; }
          .category-dropdown-yoi select { width: 100%; }
        }

        @media (max-width: 768px) {
          .doctor-grid-yoi { grid-template-columns: 1fr; }
          .public-services-grid-yoi { grid-template-columns: 1fr; }
          .filter-grid-yoi { grid-template-columns: 1fr; }
          .filter-btns-yoi { flex-direction: column; }
          .btn-yoi-primary { width: 100%; }
          .accessibility-info-yoi { padding: 1.5rem; }
          .info-grid-yoi { grid-template-columns: 1fr; }
          .doc-top-yoi { flex-direction: column; text-align: center; }
          .doc-actions-yoi { flex-direction: column; }
          .meta-item-yoi { padding: 0.5rem; font-size: 0.75rem; }
        }
      `}</style>
    </motion.div>
  )
}

export default HealthServices
