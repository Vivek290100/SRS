import { useNavigate } from 'react-router-dom'
import {
  BookOpen, Cpu, Users, Star, ArrowRight, Award,
  Monitor, Zap, Shield, Clock, ChevronRight, Globe,
  Smile, TrendingUp, Check, Heart, Lightbulb, Quote, Target, Eye
} from 'lucide-react'

const stats = [
  { value: '500+', label: 'Students Enrolled', icon: Users },
  { value: '2024', label: 'Campus Established', icon: Award },
  { value: '5', label: 'Change-Maker Clubs', icon: Star },
  { value: '4+', label: 'States Presence', icon: Globe },
]

const highlights = [
  {
    icon: Monitor,
    color: 'bg-blue-50 text-blue-600',
    title: 'Microsoft Copilot Classrooms',
    desc: 'AI-powered smart classrooms designed for 21st-century learners with cutting-edge digital tools.',
  },
  {
    icon: Cpu,
    color: 'bg-purple-50 text-purple-600',
    title: 'AI-Enabled Learning',
    desc: 'Personalised learning journeys powered by artificial intelligence for every student.',
  },
  {
    icon: Users,
    color: 'bg-green-50 text-green-600',
    title: 'Samsidh Connect',
    desc: 'Seamless ecosystem connecting students, teachers, and parents for transparent progress tracking.',
  },
  {
    icon: Lightbulb,
    color: 'bg-amber-50 text-amber-600',
    title: 'Change-Maker Clubs',
    desc: '5 specialised clubs nurturing innovation, environment, health, technology, and social skills.',
  },
]

const academicCards = [
  { icon: BookOpen, title: 'CBSE Curriculum', desc: 'Nationally accredited board with strong academic foundations.', bg: 'bg-blue-600' },
  { icon: Zap, title: 'NEP 2020 Aligned', desc: 'Holistic, multidisciplinary approach as per National Education Policy.', bg: 'bg-purple-600' },
  { icon: TrendingUp, title: 'Competitive Prep', desc: 'Focused training for Olympiads, entrance exams, and beyond.', bg: 'bg-green-600' },
  { icon: Heart, title: 'Character Building', desc: 'Instilling values, leadership, empathy, and social responsibility.', bg: 'bg-rose-600' },
]

const testimonials = [
  {
    name: 'Ramesh Kumar',
    role: 'Parent of Class VI Student',
    avatar: 'RK',
    text: 'The school has transformed my child\'s approach to learning. The digital tools and personal attention from teachers is remarkable.',
  },
  {
    name: 'Anita Reddy',
    role: 'Parent of Class III Student',
    avatar: 'AR',
    text: 'Samsidh Satish Reddy School truly blends modern technology with traditional values. My daughter loves coming to school every day!',
  },
  {
    name: 'Venkat Srinivas',
    role: 'Parent of Class VIII Student',
    avatar: 'VS',
    text: 'The competitive exam preparation and reading programs are exceptional. My son\'s confidence and academic performance have both improved greatly.',
  },
]

const visionMissions = [
  {
    icon: Eye,
    label: 'Our Vision',
    color: 'from-blue-600 to-blue-800',
    iconBg: 'bg-blue-100 text-blue-700',
    text: 'To be the most trusted and transformative school in Andhra Pradesh — nurturing globally aware, values-driven leaders who Learn, Lead, and Succeed.',
  },
  {
    icon: Target,
    label: 'Our Mission',
    color: 'from-amber-500 to-orange-600',
    iconBg: 'bg-amber-100 text-amber-700',
    text: 'To deliver holistic CBSE education fused with NEP 2020 innovation, AI-enabled classrooms, and character-based mentorship — empowering every child to reach their fullest potential.',
  },
  {
    icon: Heart,
    label: 'Our Values',
    color: 'from-rose-500 to-rose-700',
    iconBg: 'bg-rose-100 text-rose-700',
    text: 'Integrity, Curiosity, Compassion, Excellence and Community. These five pillars guide every decision — from curriculum design to how we welcome each child every morning.',
  },
]

export default function Home() {
  const navigate = useNavigate()

  const goToAdmissionForm = () => {
    navigate('/admission')
    setTimeout(() => {
      const el = document.getElementById('admission-form')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 120)
  }

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center bg-hero-gradient overflow-hidden">
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-primary-light/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="badge mb-6 bg-accent/20 text-accent border border-accent/30 text-sm font-semibold px-4 py-1.5 rounded-full inline-flex items-center gap-2">
              <Star size={14} fill="currentColor" />
              Part of Samsidh Group of Schools — Est. 2009
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight hero-text-shadow mb-6">
              Shaping
              <span className="text-accent block">Tomorrow's Leaders</span>
              Today in Vempalli
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              CBSE excellence meets NEP 2020 innovation at Samsidh Satish Reddy School — where AI-enabled classrooms, holistic development, and personalised learning converge to unlock every child's potential.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={goToAdmissionForm} className="btn-primary text-base px-8 py-3.5">
                Apply for Admission <ArrowRight size={18} />
              </button>
              <button onClick={() => navigate('/about')} className="btn-outline-white text-base px-8 py-3.5">
                Discover Our Story
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { icon: Check, text: 'CBSE Affiliated' },
                { icon: Check, text: 'NEP 2020 Aligned' },
                { icon: Check, text: 'GPS-Tracked Transport' },
                { icon: Check, text: 'CCTV Secured Campus' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center">
                    <Icon size={12} className="text-accent" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 30C1200 80 960 0 720 30C480 60 240 0 0 30L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center p-6 card group">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold text-primary font-heading">{value}</div>
                <div className="text-sm text-gray-600 mt-1 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER / PRINCIPAL SECTION ──────────────────────── */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative bg */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-50 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Photo card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-accent/40" />
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-primary/5" />

                <div className="relative w-72 sm:w-80 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/satish-reddy-sir.jpg"
                    alt="Sri Satish Reddy Garu — Founder & Correspondent"
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '3/4' }}
                  />
                  {/* Name plate */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark via-primary/80 to-transparent p-5 pt-12">
                    <p className="text-white font-bold font-heading text-lg leading-tight">Sri Satish Reddy Garu</p>
                    <p className="text-accent text-sm font-semibold">Founder & Correspondent</p>
                    <p className="text-white/70 text-xs mt-1">Samsidh Satish Reddy School, Vempalli</p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-accent text-white rounded-full w-16 h-16 flex flex-col items-center justify-center text-center shadow-lg">
                  <span className="font-bold text-lg font-heading leading-none">15+</span>
                  <span className="text-[9px] font-semibold leading-tight">Years<br/>Vision</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="badge mb-4">Founder's Corner</span>
              <h2 className="section-title mb-2">
                A Message from <br />
                <span className="text-accent-dark">Sri Satish Reddy Garu</span>
              </h2>
              <p className="text-primary font-semibold mb-5 text-sm">Founder & Correspondent, Samsidh Satish Reddy School</p>

              {/* Quote */}
              <div className="relative pl-5 border-l-4 border-accent mb-6">
                <Quote size={28} className="text-accent/30 absolute -top-2 -left-1" />
                <p className="text-gray-700 leading-relaxed text-base italic">
                  "Education is not the filling of a pail, but the lighting of a fire. At Samsidh Satish Reddy School, we kindle that fire in every child — guiding them to learn with curiosity, lead with integrity, and succeed with purpose."
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm mb-5">
                With over 15 years of passion for quality education, Sri Satish Reddy Garu founded this institution with a single dream — to bring world-class CBSE education to the children of Vempalli and surrounding areas, ensuring no talent goes unnoticed.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mb-7">
                Under his visionary leadership, the school has grown into a beacon of holistic learning — blending AI-powered classrooms, NEP 2020 pedagogy, and time-honoured values to prepare students for life beyond textbooks.
              </p>

              {/* Achievement pills */}
              <div className="flex flex-wrap gap-2 mb-7">
                {[
                  '🎓 CBSE Affiliated',
                  '🤖 AI-Enabled Campus',
                  '🏆 NEP 2020 Pioneer',
                  '📚 Reading Culture Leader',
                  '🌱 Holistic Development',
                ].map(tag => (
                  <span key={tag} className="tag-pill text-xs px-3 py-1.5">{tag}</span>
                ))}
              </div>

              <button onClick={() => navigate('/about')} className="btn-primary">
                About Our School <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION / MISSION / VALUES ─────────────────────────── */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&q=80')`,
            backgroundSize: 'cover',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge bg-accent/20 text-accent border border-accent/30 mb-4">Our Foundation</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              Vision, Mission & Values
            </h2>
            <p className="text-white/70 mt-3 max-w-xl mx-auto">
              The principles that guide every decision we make, every classroom we design, and every child we nurture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {visionMissions.map(({ icon: Icon, label, color, iconBg, text }) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} />
                </div>
                <h3 className="text-white font-bold font-heading text-xl mb-3">{label}</h3>
                <p className="text-white/75 leading-relaxed text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ──────────────────────────────────────────── */}
      <section className="py-20 bg-sky-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Why Samsidh?</span>
            <h2 className="section-title">A New Standard of Education</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We integrate cutting-edge technology with time-tested pedagogy to deliver a transformative learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="card p-6 text-center group cursor-default">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} />
                </div>
                <h3 className="font-bold text-primary font-heading mb-2 text-base">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACADEMICS PREVIEW ───────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="badge mb-4">Academics</span>
              <h2 className="section-title mb-4">
                Excellence Through<br />
                <span className="text-accent-dark">Holistic Education</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our curriculum seamlessly blends CBSE rigour with NEP 2020's holistic vision — preparing students not just for exams, but for life. Every child receives individual attention through our AI-driven progress monitoring system.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'English Reading & Speaking Excellence Programs',
                  'Mathematics & Science Enrichment Workshops',
                  'Competitive Exam Preparation from Early Years',
                  'Samsidh Reading Program (SRP) — Daily Reading Culture',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-accent-dark" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate('/academics')} className="btn-primary">
                Explore Academics <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {academicCards.map(({ icon: Icon, title, desc, bg }) => (
                <div key={title} className={`${bg} rounded-2xl p-6 text-white group hover:scale-105 transition-transform duration-300`}>
                  <Icon size={28} className="mb-3 opacity-90" />
                  <h4 className="font-bold font-heading text-sm mb-1">{title}</h4>
                  <p className="text-white/80 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-20 bg-sky-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Parent Voice</span>
            <h2 className="section-title">What Families Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, avatar, text }) => (
              <div key={name} className="card p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-accent" fill="#f59e0b" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">"{text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center font-heading">
                    {avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-primary text-sm">{name}</p>
                    <p className="text-gray-500 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────── */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
            Start Your Child's Journey to Excellence
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Admissions are open for Nursery to Class IX. Secure your child's seat at one of Andhra Pradesh's most forward-thinking CBSE schools.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={goToAdmissionForm} className="btn-primary text-base px-10 py-4">
              Apply Now — Admissions Open <ArrowRight size={20} />
            </button>
            <button onClick={() => navigate('/contact')} className="btn-outline-white text-base px-10 py-4">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
