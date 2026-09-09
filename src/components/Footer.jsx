import { Link } from 'react-router-dom'
import {
  GraduationCap, MapPin, Phone, Mail, Clock,
  ChevronRight, Heart, Share2, MessageCircle, Video, AtSign, Users
} from 'lucide-react'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Digital Learning', to: '/digital-learning' },
  { label: 'Admission', to: '/admission' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
]

const programs = [
  'Nursery & Pre-Primary',
  'Primary (I–V)',
  'Middle School (VI–VIII)',
  'Secondary (IX–X)',
  'CBSE Curriculum',
  'NEP 2020 Aligned',
  'Samsidh Reading Program',
  'AI-Enabled Learning',
]

const socials = [
  { icon: Share2, label: 'Facebook', href: '#' },
  { icon: MessageCircle, label: 'Twitter / X', href: '#' },
  { icon: AtSign, label: 'Instagram', href: '#' },
  { icon: Video, label: 'YouTube', href: '#' },
  { icon: Users, label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-end gap-3.5 mb-4 group h-16 sm:h-18" aria-label="Satish Reddy School Home">
              <img
                src="/logo-crest.png"
                alt="Satish Reddy School Crest"
                className="h-full w-auto object-contain group-hover:scale-105 transition-transform flex-shrink-0"
              />
              <div className="h-[72.5%] flex flex-col justify-between items-center text-center select-none">
                <span className="font-black text-sm sm:text-base font-heading leading-none text-[#0196FD] uppercase tracking-wider text-center">
                  SATISH REDDY
                </span>
                <span className="text-accent text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase leading-none text-center">
                  — SCHOOL —
                </span>
                <span className="text-white/85 text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] uppercase leading-none text-center">
                  — VEMPALLI —
                </span>
                <span className="text-white/55 text-[8px] sm:text-[8.5px] tracking-wider uppercase leading-none text-center">
                  LEARN · LEAD · SUCCEED
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Empowering young minds through CBSE excellence, NEP 2020 alignment, and technology-driven education. Part of the Samsidh Group of Schools.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-4 font-heading border-b border-white/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-1.5 text-sm text-white/70 hover:text-accent transition-colors duration-200"
                  >
                    <ChevronRight size={14} className="flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-base mb-4 font-heading border-b border-white/20 pb-2">
              Our Programs
            </h3>
            <ul className="space-y-2">
              {programs.map((prog) => (
                <li key={prog} className="flex items-center gap-1.5 text-sm text-white/70">
                  <ChevronRight size={14} className="flex-shrink-0 text-accent" />
                  {prog}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base mb-4 font-heading border-b border-white/20 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/70 leading-relaxed">
                  Singareddy Nagireddy Colony, Pulivendula Road, Vempalli,<br />
                  Y.S.R. Kadapa District,<br />
                  Andhra Pradesh – 516329
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:+919964511122" className="text-sm text-white/70 hover:text-accent transition-colors">
                  +91 99645 11122
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:contact@samsidh.in" className="text-sm text-white/70 hover:text-accent transition-colors">
                  contact@samsidh.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-accent flex-shrink-0" />
                <p className="text-sm text-white/70">
                  Mon–Sat: 9:00 AM – 4:30 PM
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/50 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Samsidh Satish Reddy School, Vempalli. All rights reserved. | Part of Samsidh Group of Schools.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-accent" /> for education
          </p>
        </div>
      </div>
    </footer>
  )
}
