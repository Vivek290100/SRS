import { useNavigate } from 'react-router-dom'
import { Target, Eye, Heart, Globe, Users, Award, ChevronRight, MapPin, Calendar, Star } from 'lucide-react'

const values = [
  { icon: Eye, title: 'Our Vision', color: 'bg-blue-600', desc: 'To be a leading institution that fosters holistic development, academic excellence, and ethical leadership — empowering every student to become a confident, compassionate changemaker in the 21st century.' },
  { icon: Target, title: 'Our Mission', color: 'bg-purple-600', desc: 'To provide world-class CBSE education aligned with NEP 2020, leveraging technology and personalised learning to unlock each child\'s unique potential, while nurturing character, creativity, and critical thinking.' },
  { icon: Heart, title: 'Our Values', color: 'bg-rose-600', desc: 'Integrity, innovation, inclusivity, and excellence — these are the four pillars that guide our teaching philosophy and shape the school culture at every level of our institution.' },
]

const management = [
  {
    name: 'Sri Satish Reddy',
    role: 'Founder & Managing Director, Vempalli Campus',
    avatar: 'SR',
    bio: 'A visionary educationist committed to transforming the landscape of rural education in Andhra Pradesh. Sri Satish Reddy established the Vempalli campus in 2024 in partnership with the Samsidh Group, driven by a mission to provide world-class education to students in the Kadapa district.',
  },
  {
    name: 'Vasa Srinivasa Rao',
    role: 'Founder, Samsidh Group of Schools (Est. 2009)',
    avatar: 'VR',
    bio: 'Founded Samsidh Group of Schools in 2009 with a bold vision for modern, technology-integrated education across India. Under his leadership, Samsidh has expanded across Andhra Pradesh, Karnataka, Tamil Nadu, and Haryana, impacting over 10,000 families.',
  },
]

const timeline = [
  { year: '2009', event: 'Samsidh Group of Schools founded by Vasa Srinivasa Rao' },
  { year: '2014', event: 'Expansion into Karnataka and Tamil Nadu' },
  { year: '2018', event: 'Launch of Samsidh Connect digital ecosystem' },
  { year: '2020', event: 'AI-enabled learning platforms introduced, pandemic-proof hybrid model' },
  { year: '2022', event: 'Microsoft Copilot smart classroom partnership formalised' },
  { year: '2024', event: 'Samsidh Satish Reddy School, Vempalli — campus established' },
]

const states = [
  { state: 'Andhra Pradesh', schools: '12+ Schools', color: 'bg-blue-100 text-blue-700' },
  { state: 'Karnataka', schools: '8+ Schools', color: 'bg-purple-100 text-purple-700' },
  { state: 'Tamil Nadu', schools: '6+ Schools', color: 'bg-green-100 text-green-700' },
  { state: 'Haryana', schools: '4+ Schools', color: 'bg-orange-100 text-orange-700' },
]

export default function About() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1400&q=80')`,
            backgroundSize: 'cover', backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-accent/20 text-accent border border-accent/30 mb-4">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading mb-4">
            Our Story & Purpose
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Rooted in tradition, driven by innovation — discover the mission, people, and values behind Samsidh Satish Reddy School, Vempalli.
          </p>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="badge mb-4">Who We Are</span>
              <h2 className="section-title mb-5">
                Shaping Futures in<br />
                <span className="text-accent-dark">the Heart of Kadapa</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Samsidh Satish Reddy School, Vempalli is a proud member of the <strong>Samsidh Group of Schools</strong> — a pioneering educational network founded in 2009 by Vasa Srinivasa Rao, with a strong presence across Andhra Pradesh, Karnataka, Tamil Nadu, and Haryana.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Established in 2024 under the leadership of <strong>Sri Satish Reddy</strong>, the Vempalli campus was born from a shared vision: to bring world-class, CBSE-aligned education — infused with technology and holistic values — to students in Y.S.R. Kadapa District.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Our school stands at the intersection of <strong>academic rigour</strong>, <strong>NEP 2020 innovation</strong>, and <strong>character education</strong> — ensuring every student graduates not just with knowledge, but with purpose.
              </p>
              <div className="flex gap-8">
                {[
                  { label: 'Founded', value: '2024', icon: Calendar },
                  { label: 'Curriculum', value: 'CBSE', icon: Award },
                  { label: 'Location', value: 'Vempalli, AP', icon: MapPin },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="text-center">
                    <Icon size={20} className="mx-auto mb-1 text-accent" />
                    <div className="font-bold text-primary font-heading">{value}</div>
                    <div className="text-xs text-gray-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
                alt="School campus"
                className="rounded-2xl shadow-card-hover w-full object-cover h-96"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-5 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold font-heading">15+</div>
                <div className="text-sm font-medium">Years of Samsidh Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-sky-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Vision, Mission & Values</h2>
            <p className="section-subtitle">The guiding principles that shape everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, color, desc }) => (
              <div key={title} className="card p-8 text-center group">
                <div className={`w-16 h-16 mx-auto mb-5 ${color} text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={30} />
                </div>
                <h3 className="section-title text-xl mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Leadership</span>
            <h2 className="section-title">Our Management</h2>
            <p className="section-subtitle">Visionary leaders committed to transformative education.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {management.map(({ name, role, avatar, bio }) => (
              <div key={name} className="card p-8 flex gap-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl font-heading flex-shrink-0">
                  {avatar}
                </div>
                <div>
                  <h3 className="font-bold text-primary font-heading text-lg mb-1">{name}</h3>
                  <p className="text-accent-dark text-sm font-semibold mb-3">{role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-sky-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Our Journey</span>
            <h2 className="section-title">Milestones That Matter</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20" />
            <div className="space-y-8">
              {timeline.map(({ year, event }, i) => (
                <div key={year} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-accent font-bold text-xs z-10 flex-shrink-0 shadow-lg">
                    {year.slice(2)}
                  </div>
                  <div className="card p-5 flex-1 mt-1">
                    <span className="tag-pill mb-2 inline-block">{year}</span>
                    <p className="text-gray-700 text-sm font-medium">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Samsidh Group Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">National Presence</span>
            <h2 className="section-title">Samsidh Across India</h2>
            <p className="section-subtitle">
              Over 30+ schools operating across 4 states, serving 10,000+ families nationwide.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {states.map(({ state, schools, color }) => (
              <div key={state} className="card p-6 text-center">
                <Globe size={32} className="mx-auto mb-3 text-primary" />
                <h3 className="font-bold font-heading text-primary mb-1">{state}</h3>
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${color}`}>{schools}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mb-4">
            Ready to Be Part of Our Story?
          </h2>
          <p className="text-white/80 mb-8">
            Join the Samsidh family and give your child the education they deserve.
          </p>
          <button onClick={() => navigate('/admission')} className="btn-primary">
            Apply for Admission <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </div>
  )
}
