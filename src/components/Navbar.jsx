import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Digital Learning', to: '/digital-learning' },
  { label: 'Admission', to: '/admission#admission-form' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleAdmissionClick = () => {
    navigate('/admission')
    setTimeout(() => {
      const el = document.getElementById('admission-form')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 120)
  }

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 hover:text-accent ${isActive ? 'text-accent' : 'text-white/90'
    }`

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-primary shadow-navbar backdrop-blur-md' : 'bg-primary'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-20 md:min-h-24 py-2">

          {/* ── Brand Lockup: Logo (Left) + Text (Right) ── */}
          <Link to="/" className="flex items-center gap-3.5 group py-1" aria-label="Satish Reddy School Home">
            <img
              src="/logo-crest.png"
              alt="Satish Reddy School Crest"
              className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] flex-shrink-0"
            />
            <div className="flex flex-col justify-center select-none">
              <span className="text-white font-black text-sm sm:text-base md:text-[1px] font-heading leading-tight tracking-wider uppercase drop-shadow-sm">
                SATISH REDDY
              </span>
              <span className="text-accent text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase leading-tight">
                — SCHOOL —
              </span>
              <span className="text-white/85 text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase leading-tight">
                VEMPALLI
              </span>
              <span className="text-white/55 text-[8px] sm:text-[9px] tracking-widest font-medium uppercase mt-0.5">
                LEARN · LEAD · SUCCEED
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
                <span className="px-2.5 py-2 rounded-md hover:bg-white/10 block transition-colors">
                  {link.label}
                </span>
              </NavLink>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleAdmissionClick}
              className="hidden sm:flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-white text-sm font-bold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Admissions Open
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-accent transition-colors p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-primary-dark border-t border-white/10 animate-fade-in">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                    ? 'bg-accent/20 text-accent'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={() => { handleAdmissionClick(); setIsOpen(false) }}
              className="mt-2 btn-primary justify-center text-sm"
            >
              Apply for Admission
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
