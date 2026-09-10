import { useState } from 'react'
import { Briefcase, Users, Monitor, MapPin, Clock, Upload, Check, Send, ChevronRight, Heart, Star } from 'lucide-react'

const whyWork = [
  { icon: Heart, title: 'Purpose-Driven Work', desc: 'Be part of a mission that transforms young lives every single day.' },
  { icon: Monitor, title: 'EdTech Integration', desc: 'Work with Microsoft Copilot, AI tools, and cutting-edge digital platforms.' },
  { icon: Users, title: 'Collaborative Culture', desc: 'Join a vibrant team of educators, technologists, and changemakers.' },
  { icon: Star, title: 'Growth & Development', desc: 'Access continuous professional development, training, and mentorship.' },
]

const openings = [
 
]

const initialForm = { name: '', email: '', phone: '', role: '', experience: '', message: '', resume: null }

export default function Careers() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setForm(prev => ({ ...prev, [name]: files ? files[0] : value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    if (!form.phone || !/^\+?[\d\s-]{10,13}$/.test(form.phone)) e.phone = 'Valid phone number is required'
    if (!form.role.trim()) e.role = 'Please specify the role you are applying for'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setLoading(true)
    setTimeout(() => {
      console.log('=== CAREERS APPLICATION RECEIVED ===')
      console.log({ ...form, resumeName: form.resume?.name || 'No file', submittedAt: new Date().toLocaleString() })
      setLoading(false)
      setSubmitted(true)
    }, 1600)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-accent/20 text-accent border border-accent/30 mb-4">Join Our Team</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading mb-4">
            Careers at Samsidh
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We're building a team of passionate educators and innovators. If you believe in transforming young lives through education, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Culture</span>
            <h2 className="section-title">Why Work at Samsidh?</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              More than a job — a calling to make a lasting difference in the lives of children.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWork.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-7 text-center group">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <Icon size={26} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-primary font-heading mb-2 text-base">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-sky-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge mb-3">Send Your Application To</span>
            <h2 className="section-title"> +91 99645 11122</h2>
            <p className="section-subtitle">We are hiring across teaching, technology, and operations.</p>
          </div>

          <div className="space-y-5">
            {openings.map((job) => (
              <div key={job.title} className="card overflow-hidden">
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setSelectedJob(selectedJob?.title === job.title ? null : job)}
                >
                  <div className="flex flex-wrap gap-4 justify-between items-start">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Briefcase size={22} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary font-heading text-base mb-1">{job.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${job.color}`}>{job.dept}</span>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 flex items-center gap-1">
                            <Clock size={11} /> {job.type}
                          </span>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 flex items-center gap-1">
                            <MapPin size={11} /> {job.location}
                          </span>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600">
                            Exp: {job.experience}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight size={20} className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${selectedJob?.title === job.title ? 'rotate-90' : ''}`} />
                  </div>
                </div>

                {selectedJob?.title === job.title && (
                  <div className="border-t border-gray-100 p-6 bg-gray-50 animate-fade-in">
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{job.desc}</p>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase mb-2">Key Requirements</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map(s => (
                          <span key={s} className="text-xs bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => document.getElementById('apply-form').scrollIntoView({ behavior: 'smooth' })}
                      className="mt-4 btn-primary text-sm"
                    >
                      Apply for This Role <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {/* <section id="apply-form" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="badge mb-3">Apply</span>
            <h2 className="section-title">Send Your Application to</h2>
            <p className="section-subtitle"> +91 99645 11122</p>
          </div>

          {submitted ? (
            <div className="card p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary font-heading mb-3">Application Received!</h3>
              <p className="text-gray-600 mb-2">Thank you, <strong>{form.name}</strong>! We've received your application for <strong>{form.role}</strong>.</p>
              <p className="text-gray-500 text-sm mb-6">Our HR team will review your application and reach out to you at <strong>{form.email}</strong> within 5–7 business days.</p>
              <button onClick={() => { setSubmitted(false); setForm(initialForm) }} className="btn-secondary text-sm">
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card p-8 space-y-5">
              {[
                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name', required: true },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', required: true },
                { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210', required: true },
                { name: 'role', label: 'Role Applying For', type: 'text', placeholder: 'e.g. Primary School Teacher (English)', required: true },
                { name: 'experience', label: 'Years of Experience', type: 'text', placeholder: 'e.g. 4 years', required: false },
              ].map(({ name, label, type, placeholder, required }) => (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {label} {required && <span className="text-rose-500">*</span>}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className={`w-full px-4 py-3 rounded-xl border ${errors[name] ? 'border-rose-400 bg-rose-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm`}
                  />
                  {errors[name] && <p className="text-rose-500 text-xs mt-1">{errors[name]}</p>}
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Cover Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about yourself and why you'd like to join Samsidh..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Upload Resume / CV</label>
                <div className="relative">
                  <label
                    htmlFor="resume-upload"
                    className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-8 cursor-pointer hover:border-primary hover:bg-sky-bg transition-colors"
                  >
                    <Upload size={28} className="text-gray-400 mb-2" />
                    <p className="text-sm font-medium text-gray-600">
                      {form.resume ? (
                        <span className="text-primary font-bold">✓ {form.resume.name}</span>
                      ) : (
                        <>Click to upload or drag & drop</>
                      )}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX — max 5MB</p>
                    <input
                      id="resume-upload"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#0196FD]/25 ${loading ? 'bg-[#0196FD]/60 cursor-not-allowed' : 'bg-[#0196FD] hover:bg-[#0082de] hover:shadow-card-hover hover:-translate-y-0.5'}`}
              >
                {loading ? (
                  <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting...</>
                ) : (
                  <><Send size={20} /> Submit Application</>
                )}
              </button>
            </form>
          )}
        </div>
      </section> */}
    </div>
  )
}
