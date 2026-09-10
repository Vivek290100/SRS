import { useNavigate } from 'react-router-dom'
import { Megaphone, ChevronRight } from 'lucide-react'

const announcements = [
  '🎉 Admissions Open for Nursery to Class IX for the Academic Year 2025–26!',
  '📚 Experience AI-Enabled Smart Classrooms & Microsoft Copilot Integration',
  '🏆 CBSE Curriculum aligned with NEP 2020 — Nurturing Future Leaders',
  '🚌 Safe GPS-Tracked Transport | CCTV Secured Campus | Hostel Available',
  '⭐ Samsidh Group of Schools — Trusted by 10,000+ Families Across India',
]


export default function AnnouncementBar() {
  const navigate = useNavigate()
  const repeated = [...announcements, ...announcements]

  return (
    <div className="bg-primary-dark text-white py-2 relative overflow-hidden z-50">
      <div className="flex items-center">
        {/* Static label */}
        <div className="flex-shrink-0 flex items-center gap-2 bg-accent text-primary-dark font-bold text-xs px-4 py-1 z-10">
          <Megaphone size={14} />
          <span className="uppercase tracking-wider hidden sm:block">Latest</span>
        </div>

        {/* Scrolling ticker */}
        <div className="flex-1 overflow-hidden marquee-container mx-2">
          <div className="marquee-track">
            {repeated.map((msg, i) => (
              <span key={i} className="inline-block text-sm font-medium px-8 text-white/90">
                {msg}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/admission')}
          className="flex-shrink-0 flex items-center gap-1 bg-accent hover:bg-accent-dark text-white text-xs font-bold px-4 py-1.5 rounded-sm transition-colors duration-200 mr-2"
        >
          Apply Now
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  )
}
