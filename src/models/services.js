export const doctorSchedules = [
  { 
    id: 1, 
    name: 'dr. Sarah Wijaya, Sp.A', 
    specialty: 'Spesialis Anak', 
    hospital: 'RS Inklusi Medika', 
    location: 'Jakarta Selatan', 
    day: 'SENIN', 
    time: '09:00 - 12:00',
    distance: '1.2 km',
    isDeafFriendly: true,
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71f15367ef?auto=format&fit=crop&q=80&w=200'
  },
  { 
    id: 2, 
    name: 'dr. Ahmad Zulkarnain, Sp.PD', 
    specialty: 'Penyakit Dalam', 
    hospital: 'Puskesmas Ramah Isyarat', 
    location: 'Jakarta Pusat', 
    day: 'SELASA', 
    time: '13:00 - 16:00',
    distance: '3.5 km',
    isDeafFriendly: true,
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200'
  },
  { 
    id: 3, 
    name: 'dr. Linda Kusuma, Sp.OG', 
    specialty: 'Kandungan', 
    hospital: 'Klinik Harapan Inklusif', 
    location: 'Jakarta Barat', 
    day: 'RABU', 
    time: '08:00 - 11:00',
    distance: '5.1 km',
    isDeafFriendly: false,
    avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200'
  }
]

export const publicServicesData = {
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
