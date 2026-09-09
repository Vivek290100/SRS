import { useState } from 'react'
import { Grid, Search } from 'lucide-react'

const categories = ['All', 'Campus', 'Labs', 'Library', 'Sports', 'Events', 'Hostel']

const galleryItems = [
  // Campus
  { id: 1, cat: 'Campus', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80', label: 'School Main Building' },
  { id: 2, cat: 'Campus', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80', label: 'Campus Entrance' },
  { id: 3, cat: 'Campus', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80', label: 'Classroom Block' },
  { id: 4, cat: 'Campus', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80', label: 'School Corridor' },
  // Labs
  { id: 5, cat: 'Labs', img: 'https://images.unsplash.com/photo-1532094349884-543559872a21?w=600&q=80', label: 'Science Laboratory' },
  { id: 6, cat: 'Labs', img: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&q=80', label: 'Chemistry Lab' },
  { id: 7, cat: 'Labs', img: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=600&q=80', label: 'Computer Lab' },
  { id: 8, cat: 'Labs', img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80', label: 'Smart Classroom' },
  // Library
  { id: 9, cat: 'Library', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80', label: 'School Library' },
  { id: 10, cat: 'Library', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80', label: 'Reading Hall' },
  { id: 11, cat: 'Library', img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80', label: 'Student Reading Time' },
  { id: 12, cat: 'Library', img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80', label: 'Library Collection' },
  // Sports
  { id: 13, cat: 'Sports', img: 'https://images.unsplash.com/photo-1562088287-bde35a1ea917?w=600&q=80', label: 'Sports Ground' },
  { id: 14, cat: 'Sports', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', label: 'Physical Education' },
  { id: 15, cat: 'Sports', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80', label: 'Basketball Court' },
  { id: 16, cat: 'Sports', img: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&q=80', label: 'Sports Day Events' },
  // Events
  { id: 17, cat: 'Events', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', label: 'Annual Day Celebration' },
  { id: 18, cat: 'Events', img: 'https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=600&q=80', label: 'Science Exhibition' },
  { id: 19, cat: 'Events', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80', label: 'Cultural Programme' },
  { id: 20, cat: 'Events', img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80', label: 'Award Ceremony' },
  // Hostel
  { id: 21, cat: 'Hostel', img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80', label: 'Hostel Building' },
  { id: 22, cat: 'Hostel', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', label: 'Student Dormitory' },
  { id: 23, cat: 'Hostel', img: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80', label: 'Dining Hall' },
  { id: 24, cat: 'Hostel', img: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&q=80', label: 'Recreation Area' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? galleryItems : galleryItems.filter(i => i.cat === active)

  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1400&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-accent/20 text-accent border border-accent/30 mb-4">Gallery</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading mb-4">
            Campus Gallery
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            A visual journey through our campus, facilities, events, and student life at Samsidh Satish Reddy School.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[4.5rem] z-30 bg-white border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? 'bg-[#0196FD] text-white shadow-md shadow-[#0196FD]/30 scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
                <span className={`ml-1.5 text-xs ${active === cat ? 'text-accent' : 'text-gray-400'}`}>
                  ({cat === 'All' ? galleryItems.length : galleryItems.filter(i => i.cat === cat).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-sky-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm mb-6 text-center">
            Showing <strong className="text-primary">{filtered.length}</strong> photos
            {active !== 'All' && <> in <strong className="text-primary">{active}</strong></>}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(item => (
              <div
                key={item.id}
                onClick={() => setLightbox(item)}
                className="group relative overflow-hidden rounded-2xl shadow-card cursor-pointer aspect-square"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Search size={28} className="text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-semibold">{item.label}</p>
                  <span className="text-white/70 text-xs">{item.cat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.img.replace('w=600', 'w=1200')}
              alt={lightbox.label}
              className="rounded-2xl w-full max-h-[80vh] object-contain shadow-2xl"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-5 py-2 rounded-full">
              {lightbox.label} · {lightbox.cat}
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
