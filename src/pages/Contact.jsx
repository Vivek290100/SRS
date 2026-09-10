import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Check, MessageSquare, Navigation } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Address',
    color: 'bg-blue-100 text-blue-600',
    content: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Singareddy Nagireddy Colony,<br />
        Pulivendula Road, Vempalli,<br />
        Y.S.R. Kadapa District,<br />
        Andhra Pradesh – 516329
      </p>
    ),
    action: (
      <a
        href="https://maps.google.com/?q=Vempalli,Andhra+Pradesh"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm mt-3 hover:text-accent transition-colors"
      >
        <Navigation size={14} /> Get Directions
      </a>
    ),
  },
  {
    icon: Phone,
    title: 'Phone',
    color: 'bg-green-100 text-green-600',
    content: (
      <div className="space-y-1">
        <a href="tel:+919964511122" className="block text-gray-700 text-sm hover:text-primary transition-colors font-medium">
          +91 99645 11122
        </a>
        <p className="text-gray-500 text-xs">Admissions & General Enquiries</p>
      </div>
    ),
  },
  {
    icon: Mail,
    title: 'Email',
    color: 'bg-purple-100 text-purple-600',
    content: (
      <div className="space-y-1">
        <a href="mailto:satishreddyschool@gmail.com" className="block text-gray-700 text-sm hover:text-primary transition-colors font-medium">
          satishreddyschool@gmail.com
        </a>
        <p className="text-gray-500 text-xs">We respond within 24 hours</p>
      </div>
    ),
  },
  {
    icon: Clock,
    title: 'Office Hours',
    color: 'bg-amber-100 text-amber-600',
    content: (
      <div className="space-y-1">
        <p className="text-gray-700 text-sm font-medium">Mon – Sat: 9:00 AM – 4:30 PM</p>
        <p className="text-gray-500 text-xs">Closed on Sundays & Public Holidays</p>
        <p className="text-gray-500 text-xs">Admissions office open all 6 days</p>
      </div>
    ),
  },
]

const initialForm = { name: '', phone: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone || !/^\+?[\d\s-]{10,13}$/.test(form.phone)) e.phone = 'Valid phone is required'
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    if (!form.message.trim()) e.message = 'Please enter your message'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setLoading(true)
    setTimeout(() => {
      console.log('Contact form submission:', { ...form, time: new Date().toLocaleString() })
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-accent/20 text-accent border border-accent/30 mb-4">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading mb-4">
            Get in Touch
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            We're here to answer your questions and welcome you to the Samsidh family. Reach out anytime during office hours.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map(({ icon: Icon, title, color, content, action }) => (
              <div key={title} className="card p-6">
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-primary font-heading mb-3 text-sm">{title}</h3>
                {content}
                {action}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form */}
      <section className="py-16 bg-sky-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Map */}
            <div>
              <h2 className="section-title mb-6">Find Us on the Map</h2>
              <div className="rounded-2xl overflow-hidden shadow-card-hover h-80 md:h-96 bg-gray-200">
                {/* Google Maps embed placeholder */}
                <iframe
                  title="Samsidh Satish Reddy School Location"
                  src="https://maps.google.com/maps?q=Vempalli,Andhra+Pradesh,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-6 card p-5">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">Samsidh Satish Reddy School</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Singareddy Nagireddy Colony, Pulivendula Road,<br />
                      Vempalli, Y.S.R. Kadapa District,<br />
                      Andhra Pradesh – 516329
                    </p>
                    <a
                      href="https://maps.google.com/?q=Vempalli,Andhra+Pradesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 bg-primary text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-primary-light transition-colors"
                    >
                      <Navigation size={13} /> Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* <div>
              <h2 className="section-title mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="card p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary font-heading mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Thank you, <strong>{form.name}</strong>! We've received your inquiry and will respond to <strong>{form.email}</strong> within 24 hours.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm(initialForm) }} className="btn-secondary text-sm">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-rose-400 bg-rose-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm`}
                      />
                      {errors.name && <p className="text-rose-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-rose-400 bg-rose-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm`}
                      />
                      {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-rose-400 bg-rose-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm`}
                    />
                    {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="Admission Inquiry">Admission Inquiry</option>
                      <option value="Campus Visit">Campus Visit Request</option>
                      <option value="Fee Structure">Fee Structure Query</option>
                      <option value="Transport">Transport / Bus Route</option>
                      <option value="Careers">Career Opportunities</option>
                      <option value="General">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="How can we help you? Please share your query or message here..."
                      className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-rose-400 bg-rose-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm resize-none`}
                    />
                    {errors.message && <p className="text-rose-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#0196FD]/25 ${loading ? 'bg-[#0196FD]/60 cursor-not-allowed' : 'bg-[#0196FD] hover:bg-[#0082de] hover:-translate-y-0.5 hover:shadow-card-hover'}`}
                  >
                    {loading ? (
                      <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={20} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div> */}
          </div>
        </div>
      </section>

      {/* Quick Contacts Strip */}
      <section className="py-12 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white/70 text-sm mb-5">Quick Contact Options</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+919964511122" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              <Phone size={16} /> +91 99645 11122
            </a>
            <a href="mailto:satishreddyschool@gmail.com" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              <Mail size={16} /> satishreddyschool@gmail.com
            </a>
            <a href="https://maps.google.com/?q=Vempalli,AP" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0196FD] hover:bg-[#0082de] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm shadow-md">
              <Navigation size={16} /> Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
