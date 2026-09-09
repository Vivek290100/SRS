import { useNavigate } from 'react-router-dom'
import { BookOpen, Star, Zap, Users, Monitor, TrendingUp, Check, ArrowRight, FileText, Headphones, Globe, Award } from 'lucide-react'

const focusAreas = [
  {
    icon: Headphones,
    title: 'English Reading & Speaking',
    color: 'border-blue-500 bg-blue-50',
    iconColor: 'text-blue-600',
    desc: 'Structured English language programs including phonics, reading comprehension, spoken English workshops, and debate clubs to build communication mastery from early years.',
    features: ['Phonics-based reading methodology', 'Daily spoken English sessions', 'Inter-school debate competitions', 'Reading fluency assessments'],
  },
  {
    icon: TrendingUp,
    title: 'Math & Science Enrichment',
    color: 'border-green-500 bg-green-50',
    iconColor: 'text-green-600',
    desc: 'Beyond textbooks — hands-on experiments, mathematical problem-solving challenges, and science fairs that transform abstract concepts into exciting discoveries.',
    features: ['Activity-based mathematics', 'Practical science experiments', 'Math Olympiad preparation', 'Science exhibition projects'],
  },
  {
    icon: Award,
    title: 'Competitive Exam Preparation',
    color: 'border-purple-500 bg-purple-50',
    iconColor: 'text-purple-600',
    desc: 'Early and consistent exposure to Olympiad-style thinking, NTSE, KVPY, and other competitive platforms to build both confidence and academic stamina.',
    features: ['Weekly mock tests & analysis', 'Olympiad coaching (Math, Science, English)', 'NTSE & scholarship preparation', 'Previous year paper practice'],
  },
  {
    icon: Users,
    title: 'Individual Attention',
    color: 'border-rose-500 bg-rose-50',
    iconColor: 'text-rose-600',
    desc: 'Low student-to-teacher ratios and AI-assisted progress monitoring ensure that no child is left behind. Every learner\'s unique pace is respected and supported.',
    features: ['AI-powered learning gap analysis', 'Regular parent-teacher conferences', 'Personalised remedial programs', 'Mentorship and counselling'],
  },
]

const grades = [
  { level: 'Nursery & KG', range: 'Age 3–5', desc: 'Play-based, phonics, and foundational numeracy', color: 'bg-yellow-100 text-yellow-800' },
  { level: 'Class I – II', range: 'Age 6–7', desc: 'Literacy, numeracy, and social development', color: 'bg-blue-100 text-blue-800' },
  { level: 'Class III – V', range: 'Age 8–10', desc: 'Subject specialisation begins, SRP intensive', color: 'bg-green-100 text-green-800' },
  { level: 'Class VI – VIII', range: 'Age 11–13', desc: 'Advanced CBSE content + competitive prep', color: 'bg-purple-100 text-purple-800' },
  { level: 'Class IX – X', range: 'Age 14–15', desc: 'Board exam excellence + skill development', color: 'bg-rose-100 text-rose-800' },
]

export default function Academics() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-accent/20 text-accent border border-accent/30 mb-4">Academics</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading mb-4">
            Learning That Transforms
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            CBSE curriculum aligned with NEP 2020, enriched by AI-enabled tools and a culture of deep reading and critical thinking.
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="badge mb-4">Curriculum</span>
              <h2 className="section-title mb-5">
                CBSE Excellence,<br />
                <span className="text-accent-dark">NEP 2020 Vision</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our academic framework is anchored in the CBSE curriculum — one of India's most rigorous and respected educational standards — while fully embracing the transformative spirit of the <strong>National Education Policy 2020</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                NEP 2020 calls for a shift from rote learning to conceptual understanding, from single-subject silos to multidisciplinary exploration, and from passive reception to active creation. At Samsidh Satish Reddy School, this isn't just policy — it's practice.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, label: 'CBSE Board Affiliated' },
                  { icon: Zap, label: 'NEP 2020 Aligned' },
                  { icon: Monitor, label: 'AI-Enabled Learning' },
                  { icon: Globe, label: 'Multilingual Education' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 p-3 bg-sky-bg rounded-xl">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=700&q=80"
                alt="Students in classroom"
                className="rounded-2xl shadow-card-hover w-full object-cover h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grade Structure */}
      <section className="py-20 bg-sky-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Grades</span>
            <h2 className="section-title">Grade Structure</h2>
            <p className="section-subtitle">Structured pathways from Nursery to Class X.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {grades.map(({ level, range, desc, color }) => (
              <div key={level} className="card p-5 text-center">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${color} mb-3 block`}>{range}</span>
                <h3 className="font-bold text-primary font-heading text-sm mb-2">{level}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Core Focus</span>
            <h2 className="section-title">Academic Excellence Areas</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Four pillars of academic enrichment that give our students a decisive edge.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {focusAreas.map(({ icon: Icon, title, color, iconColor, desc, features }) => (
              <div key={title} className={`card p-8 border-l-4 ${color}`}>
                <div className="flex gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-white shadow-card flex items-center justify-center flex-shrink-0`}>
                    <Icon size={22} className={iconColor} />
                  </div>
                  <h3 className="font-bold text-primary font-heading text-lg self-center">{title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Samsidh Reading Program */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1400&q=80')`, backgroundSize: 'cover' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <BookOpen size={16} /> Featured Program
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-5">
                Samsidh Reading Program (SRP)
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Reading is the single most transformative habit a child can develop. The <strong className="text-accent">Samsidh Reading Program (SRP)</strong> is our flagship initiative — a structured, age-appropriate daily reading protocol that builds vocabulary, comprehension, and a lifelong love for literature.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                From picture books for Nursery students to classic novels and academic texts for senior classes, SRP ensures every Samsidh student is a confident, enthusiastic reader.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  '20-minute daily dedicated reading time',
                  'Graded reading level assessments',
                  'School library with 1000+ titles',
                  'Monthly reading challenges & rewards',
                  'Author interaction and storytelling events',
                  'Progress tracked through Samsidh Connect',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-white/80 text-sm">
                    <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=700&q=80"
                alt="Students reading"
                className="rounded-2xl shadow-card-hover w-full object-cover h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid Learning */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Pedagogy</span>
            <h2 className="section-title">Blended & Hybrid Learning</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A seamless fusion of classroom instruction and digital learning tools.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'In-Class Learning', icon: Users, desc: 'Highly engaging classroom sessions led by qualified, trained educators using NEP 2020 pedagogical frameworks and experiential learning techniques.' },
              { title: 'Digital Platform (LMS)', icon: Monitor, desc: 'A robust Learning Management System lets students access lessons, assignments, and assessments anytime — reinforcing classroom learning at home.' },
              { title: 'AI Progress Tracking', icon: TrendingUp, desc: 'AI-powered dashboards give teachers and parents real-time insight into each student\'s academic journey, learning gaps, and achievement milestones.' },
            ].map(({ title, icon: Icon, desc }) => (
              <div key={title} className="card p-7 text-center group">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Icon size={26} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-primary font-heading mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sky-bg">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <FileText size={40} className="mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-bold text-primary font-heading mb-3">
            Enrol in Our Academic Programs
          </h2>
          <p className="text-gray-600 mb-6">Admissions open for Nursery to Class IX. Secure your seat today.</p>
          <button onClick={() => navigate('/admission')} className="btn-primary">
            Apply Now <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  )
}
