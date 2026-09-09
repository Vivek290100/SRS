import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Monitor, Cpu, BarChart, Users, BookOpen, Leaf, Zap, Heart,
  MessageSquare, Check, ArrowRight, ChevronRight, Globe
} from 'lucide-react'

const connectTabs = [
  {
    id: 'students',
    label: 'Students',
    icon: BookOpen,
    color: 'text-blue-600 bg-blue-50',
    features: [
      'Personalised digital dashboard with today\'s schedule',
      'Access to recorded lessons and study resources via LMS',
      'AI-powered homework help and doubt resolution',
      'Progress reports and performance analytics',
      'Digital assignment submission and feedback',
      'Access to Samsidh Reading Program (SRP) digital library',
    ],
    img: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80',
  },
  {
    id: 'teachers',
    label: 'Teachers',
    icon: Users,
    color: 'text-purple-600 bg-purple-50',
    features: [
      'Class management and attendance tracking tools',
      'AI-assisted lesson plan generation with Microsoft Copilot',
      'Real-time student progress monitoring dashboard',
      'Digital assessment creation and auto-grading',
      'Direct parent communication and notification system',
      'Professional development and training modules',
    ],
    img: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&q=80',
  },
  {
    id: 'parents',
    label: 'Parents',
    icon: MessageSquare,
    color: 'text-green-600 bg-green-50',
    features: [
      'Live attendance notifications and daily updates',
      'Real-time GPS tracking of school bus location',
      'Monthly academic progress reports and grades',
      'Direct messaging with class teachers and school admin',
      'Upcoming event calendar and school circulars',
      'Fee management and payment gateway integration',
    ],
    img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80',
  },
]

const clubs = [
  {
    icon: Leaf,
    name: 'Green Economy Club',
    color: 'bg-green-600',
    bgLight: 'bg-green-50 border-green-200',
    desc: 'Students learn environmental responsibility, sustainable practices, eco-innovation, and how to build green economies for a better planet.',
    activities: ['Tree plantation drives', 'Zero-waste challenges', 'Renewable energy projects', 'Eco-audit of school campus'],
  },
  {
    icon: Cpu,
    name: 'Technology Club',
    color: 'bg-blue-600',
    bgLight: 'bg-blue-50 border-blue-200',
    desc: 'A hub for budding coders, robotics enthusiasts, and digital creators — building real-world tech skills for the AI era.',
    activities: ['Coding & programming workshops', 'Robotics and AI projects', 'App development challenges', 'Tech fairs & hackathons'],
  },
  {
    icon: BookOpen,
    name: 'Reading Club',
    color: 'bg-amber-600',
    bgLight: 'bg-amber-50 border-amber-200',
    desc: 'Extending the Samsidh Reading Program beyond classrooms — fostering a community of passionate readers and storytellers.',
    activities: ['Weekly book discussions', 'Author spotlight sessions', 'Creative writing workshops', 'Storytelling competitions'],
  },
  {
    icon: Globe,
    name: 'Social Structures Club',
    color: 'bg-purple-600',
    bgLight: 'bg-purple-50 border-purple-200',
    desc: 'Developing socially aware, empathetic leaders who understand community dynamics, governance, and civic responsibility.',
    activities: ['Community service projects', 'Mock parliament & debates', 'Cultural exchange programs', 'Social issue awareness campaigns'],
  },
  {
    icon: Heart,
    name: 'Health & Wellness Club',
    color: 'bg-rose-600',
    bgLight: 'bg-rose-50 border-rose-200',
    desc: 'Promoting physical fitness, mental well-being, healthy habits, and emotional intelligence for whole-child development.',
    activities: ['Yoga & meditation sessions', 'Nutrition & diet awareness', 'Mental health workshops', 'Sports days and fitness challenges'],
  },
]

export default function CurriculumDigital() {
  const [activeTab, setActiveTab] = useState('students')
  const navigate = useNavigate()
  const currentTab = connectTabs.find(t => t.id === activeTab)

  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-accent/20 text-accent border border-accent/30 mb-4">Digital Learning</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading mb-4">
            Curriculum & Digital Learning
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Where CBSE meets AI — a technology-powered learning ecosystem that keeps every stakeholder connected, informed, and empowered.
          </p>
        </div>
      </section>

      {/* Digital Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Technology in Education</span>
            <h2 className="section-title">Our Digital Learning Ecosystem</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Four integrated technology pillars that transform how students learn, how teachers teach, and how parents engage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cpu,
                color: 'bg-blue-600',
                title: 'AI-Enabled Learning',
                desc: 'Adaptive algorithms personalise content delivery based on each student\'s learning pace, strengths, and gaps — ensuring maximum comprehension and retention.',
              },
              {
                icon: Monitor,
                color: 'bg-purple-600',
                title: 'Microsoft Copilot Classrooms',
                desc: 'Our smart classrooms are powered by Microsoft Copilot — bringing AI-assisted teaching, real-time translations, and interactive digital content to every lesson.',
              },
              {
                icon: BarChart,
                color: 'bg-green-600',
                title: 'Learning Management System',
                desc: 'A comprehensive LMS where students access materials, teachers manage courses, and parents track progress — all in one unified digital platform.',
              },
              {
                icon: Zap,
                color: 'bg-amber-600',
                title: 'Digital Progress Tracking',
                desc: 'Real-time dashboards for teachers and parents display attendance, grades, assignment completion, and behavioural insights — enabling timely interventions.',
              },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="card p-7 text-center group">
                <div className={`w-14 h-14 mx-auto mb-4 ${color} text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} />
                </div>
                <h3 className="font-bold text-primary font-heading mb-3 text-base">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Microsoft Copilot Feature */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <Cpu size={16} />
                Microsoft Copilot Integration
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-5">
                AI-Powered Smart Classrooms
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Samsidh Satish Reddy School is among the pioneering schools in Andhra Pradesh to integrate <strong className="text-accent">Microsoft Copilot</strong> into classroom teaching. This AI assistant helps teachers create engaging lesson plans, generate quizzes, summarise complex topics, and provide multilingual explanations.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                For students, Copilot acts as a 24/7 learning companion — answering questions, explaining concepts differently, and helping with research — all within a safe, school-supervised digital environment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'AI-generated personalised lesson plans',
                  'Multi-language content delivery',
                  'Interactive digital whiteboards',
                  'Real-time Q&A and doubt resolution',
                  'Automated quiz and assessment creation',
                  'Student engagement analytics',
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
                src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=700&q=80"
                alt="Smart classroom"
                className="rounded-2xl shadow-card-hover w-full object-cover h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Samsidh Connect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Samsidh Connect</span>
            <h2 className="section-title">One Platform. Three Communities.</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              The Samsidh Connect ecosystem bridges students, teachers, and parents — creating a unified, transparent, and collaborative school environment.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {connectTabs.map(({ id, label, icon: Icon, color }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  activeTab === id
                    ? 'bg-[#0196FD] text-white shadow-lg shadow-[#0196FD]/30 scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {currentTab && (
            <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
              <div>
                <div className={`w-12 h-12 ${currentTab.color} rounded-xl flex items-center justify-center mb-4`}>
                  <currentTab.icon size={22} />
                </div>
                <h3 className="text-2xl font-bold text-primary font-heading mb-4">
                  For {currentTab.label}
                </h3>
                <ul className="space-y-3">
                  {currentTab.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={11} className="text-primary" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img
                  src={currentTab.img}
                  alt={`Samsidh Connect for ${currentTab.label}`}
                  className="rounded-2xl shadow-card-hover w-full object-cover h-72"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Change-Maker Clubs */}
      <section className="py-20 bg-sky-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Co-Curricular</span>
            <h2 className="section-title">Samsidh Change-Maker Clubs</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Five specialised clubs that nurture real-world skills, leadership, and social awareness — extending learning beyond the classroom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map(({ icon: Icon, name, color, bgLight, desc, activities }) => (
              <div key={name} className={`card p-7 border ${bgLight}`}>
                <div className={`w-13 h-13 ${color} text-white rounded-2xl p-3 inline-flex mb-4 shadow-md`}>
                  <Icon size={26} />
                </div>
                <h3 className="font-bold text-primary font-heading text-base mb-2">{name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="space-y-1.5">
                  {activities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-xs text-gray-600">
                      <ChevronRight size={12} className="text-accent-dark flex-shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Join CTA card */}
            <div className="card p-7 bg-primary text-white flex flex-col justify-center text-center">
              <Zap size={36} className="mx-auto mb-4 text-accent" />
              <h3 className="font-bold font-heading text-lg mb-3">
                Join a Change-Maker Club
              </h3>
              <p className="text-white/80 text-sm mb-5">
                Every student is encouraged to join at least one club and develop skills that complement their academic journey.
              </p>
              <button
                onClick={() => navigate('/admission')}
                className="bg-[#0196FD] hover:bg-[#0082de] text-white font-bold py-2.5 px-5 rounded-xl transition-colors text-sm shadow-md shadow-[#0196FD]/30"
              >
                Enrol Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <Monitor size={40} className="mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-bold text-primary font-heading mb-3">
            Experience Digital Learning at Samsidh
          </h2>
          <p className="text-gray-600 mb-6">
            Visit our campus for a live demonstration of our smart classrooms and Samsidh Connect platform.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => navigate('/contact')} className="btn-primary">
              Schedule a Demo <ArrowRight size={18} />
            </button>
            <button onClick={() => navigate('/admission')} className="btn-secondary">
              Apply for Admission
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
