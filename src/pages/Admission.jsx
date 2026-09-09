import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  FileText, CheckSquare, ChevronRight, Check, Send,
  User, Phone, Mail, MapPin, BookOpen, Users, ArrowRight
} from 'lucide-react'
import { submitAdmissionToSheet, GOOGLE_SHEET_URL } from '../services/admissionsSheet'

const steps = [
  { num: 1, title: 'Fill Application Form', desc: 'Complete the online or offline application form with student and parent details.' },
  { num: 2, title: 'Document Submission', desc: 'Submit required documents (see checklist below) to the admissions office.' },
  { num: 3, title: 'Student Interaction', desc: 'A brief, informal interaction session to understand the student\'s interests and abilities.' },
  { num: 4, title: 'Admission Confirmation', desc: 'Receive confirmation and pay the admission fee to secure the seat.' },
  { num: 5, title: 'Orientation & Joining', desc: 'Attend the new student orientation and begin your journey at Samsidh!' },
]

const documents = [
  'Completed Application Form',
  'Student\'s Birth Certificate (Original & Photocopy)',
  'Transfer Certificate (TC) from previous school',
  'Medical Certificate from a registered doctor',
  'Passport-size photographs (4 copies each – Student & Parent)',
  'Previous academic year\'s Report Card / Progress Report',
  'Address Proof (Aadhaar Card / Utility Bill / Rental Agreement)',
  'Student\'s Aadhaar Card (if available)',
  'Parent/Guardian ID Proof (Aadhaar / PAN Card / Voter ID)',
]

const grades = [
  'Nursery', 'LKG', 'UKG',
  'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
  'Class VI', 'Class VII', 'Class VIII', 'Class IX',
]

const initialForm = {
  studentName: '',
  dob: '',
  gender: '',
  grade: '',
  parentName: '',
  relationship: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  pincode: '',
  message: '',
}

export default function Admission() {
  const navigate = useNavigate()
  const location = useLocation()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submissionResult, setSubmissionResult] = useState(null)

  // Scroll to form if navigated with #admission-form hash
  useEffect(() => {
    if (location.hash === '#admission-form') {
      setTimeout(() => {
        const el = document.getElementById('admission-form')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 200)
    }
  }, [location.hash])

  const validate = () => {
    const e = {}
    if (!form.studentName.trim()) e.studentName = 'Student name is required'
    if (!form.dob) e.dob = 'Date of birth is required'
    if (!form.gender) e.gender = 'Please select gender'
    if (!form.grade) e.grade = 'Please select grade applying for'
    if (!form.parentName.trim()) e.parentName = 'Parent/Guardian name is required'
    if (!form.phone.trim() || !/^\+?[\d\s-]{10,13}$/.test(form.phone)) e.phone = 'Enter a valid phone number'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.address.trim()) e.address = 'Address is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) {
      setErrors(e2)
      return
    }
    setLoading(true)
    try {
      const res = await submitAdmissionToSheet(form)
      setSubmissionResult(res)
    } catch (err) {
      console.error('Error submitting application:', err)
      setSubmissionResult({ success: false, message: err.message })
    } finally {
      setLoading(false)
      setSubmitted(true)
      window.scrollTo({ top: 400, behavior: 'smooth' })
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1400&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-accent/20 text-accent border border-accent/30 mb-4 animate-pulse">
            🎉 Admissions Open 2025–26
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-heading mb-4">
            Begin Your Child's Journey
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Admissions are open for Nursery to Class IX. Join the Samsidh family today and unlock a world of opportunity.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {grades.slice(0, 6).map(g => (
              <span key={g} className="bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-3 py-1 rounded-full">
                {g}
              </span>
            ))}
            <span className="text-white/60 text-xs self-center">+ more</span>
          </div>
        </div>
      </section>

      {/* Admission Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge mb-4">Our Philosophy</span>
          <h2 className="section-title mb-4">We Admit Potential, Not Just Marks</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At Samsidh Satish Reddy School, admissions are guided by a belief in every child's unique potential. We seek students who are curious, enthusiastic, and ready to grow — and we provide the environment, tools, and guidance they need to flourish.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-sky-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Admission Process</h2>
            <p className="section-subtitle">Simple, transparent, and student-friendly.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="relative">
                {num < steps.length && (
                  <div className="hidden md:block absolute top-6 left-[60%] right-[-40%] h-0.5 bg-primary/20 z-0" />
                )}
                <div className="card p-5 text-center relative z-10">
                  <div className="w-12 h-12 bg-primary text-accent font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    {num}
                  </div>
                  <h3 className="font-bold text-primary text-xs font-heading mb-1">{title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="badge mb-3">Documents Required</span>
            <h2 className="section-title">Document Checklist</h2>
            <p className="section-subtitle">Please bring the following documents to the admissions office.</p>
          </div>
          <div className="card p-8">
            <div className="grid md:grid-cols-2 gap-3">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-sky-bg transition-colors">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={13} className="text-green-600" />
                  </div>
                  <span className="text-sm text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-amber-800 text-sm flex items-start gap-2">
                <FileText size={16} className="flex-shrink-0 mt-0.5" />
                <span><strong>Note:</strong> Please carry original documents along with two sets of photocopies. All submitted documents will be verified and returned. Advanced booking is available — call <strong>+91 99645 11122</strong> to reserve your seat.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section className="py-16 bg-sky-bg" id="admission-form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="badge mb-3">Apply Now</span>
            <h2 className="section-title">Online Admission Form</h2>
            <p className="section-subtitle">Fill in the details below and our admissions team will contact you within 24 hours.</p>
          </div>

          {submitted ? (
            <div className="card p-12 text-center animate-slide-up">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-primary font-heading mb-3">Application Submitted!</h3>
              <p className="text-gray-600 mb-2">
                Thank you, <strong>{form.parentName}</strong>! Your admission application for <strong>{form.studentName}</strong> ({form.grade}) has been received.
              </p>
              {submissionResult?.notConfigured ? (
                <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl mb-6 text-left text-xs text-amber-900">
                  <p className="font-bold text-sm text-amber-800 mb-1 flex items-center gap-1.5">
                    ⚠️ Google Sheet Live Webhook Not Connected Yet
                  </p>
                  <p className="mb-2">
                    Your form submission was saved in your local browser backup, but <strong>was NOT sent to Google Sheets</strong> because the Google Apps Script Web App URL has not been pasted into <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">src/services/admissionsSheet.js</code>.
                  </p>
                  <p>
                    Please deploy the <strong>google-apps-script.js</strong> in your Google Sheet (Extensions → Apps Script → Deploy as Web App) and paste the URL.
                  </p>
                </div>
              ) : (
                <p className="text-gray-500 text-sm mb-8">
                  ✅ Your application has been logged into the Official Admissions Register (Google Drive Spreadsheet). Our admissions team will review the details and contact you at <strong>{form.phone}</strong> within 24 business hours.
                </p>
              )}
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl mb-8 text-left">
                <p className="text-green-800 text-sm font-semibold mb-2">Application Summary:</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-green-700">
                  <span><strong>Student:</strong> {form.studentName}</span>
                  <span><strong>Grade:</strong> {form.grade}</span>
                  <span><strong>Parent:</strong> {form.parentName}</span>
                  <span><strong>Phone:</strong> {form.phone}</span>
                </div>
              </div>
              <div className="flex gap-3 justify-center flex-wrap">
                <button onClick={() => { setSubmitted(false); setForm(initialForm) }} className="btn-secondary text-sm">
                  Submit Another Application
                </button>
                <button onClick={() => navigate('/contact')} className="btn-primary text-sm">
                  Contact Admissions Office <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card p-8 space-y-8">
              {/* Student Details */}
              <div>
                <h3 className="font-bold text-primary font-heading mb-5 flex items-center gap-2 pb-2 border-b border-gray-100">
                  <User size={18} className="text-accent" /> Student Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Student's Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={form.studentName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.studentName ? 'border-rose-400 bg-rose-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all`}
                    />
                    {errors.studentName && <p className="text-rose-500 text-xs mt-1">{errors.studentName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Date of Birth <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={form.dob}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.dob ? 'border-rose-400 bg-rose-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all`}
                    />
                    {errors.dob && <p className="text-rose-500 text-xs mt-1">{errors.dob}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Gender <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.gender ? 'border-rose-400 bg-rose-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all`}
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other / Prefer not to say</option>
                    </select>
                    {errors.gender && <p className="text-rose-500 text-xs mt-1">{errors.gender}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Grade Applying For <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="grade"
                      value={form.grade}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.grade ? 'border-rose-400 bg-rose-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-all`}
                    >
                      <option value="">Select grade</option>
                      {grades.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                    {errors.grade && <p className="text-rose-500 text-xs mt-1">{errors.grade}</p>}
                  </div>
                </div>
              </div>

              {/* Parent Details */}
              <div>
                <h3 className="font-bold text-primary font-heading mb-5 flex items-center gap-2 pb-2 border-b border-gray-100">
                  <Users size={18} className="text-accent" /> Parent / Guardian Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Parent/Guardian Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={form.parentName}
                      onChange={handleChange}
                      placeholder="Father's / Mother's name"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.parentName ? 'border-rose-400 bg-rose-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm`}
                    />
                    {errors.parentName && <p className="text-rose-500 text-xs mt-1">{errors.parentName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Relationship to Student</label>
                    <select
                      name="relationship"
                      value={form.relationship}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                    >
                      <option value="">Select relationship</option>
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Guardian">Guardian</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.phone ? 'border-rose-400 bg-rose-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm`}
                      />
                    </div>
                    {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="parent@example.com"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.email ? 'border-rose-400 bg-rose-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm`}
                      />
                    </div>
                    {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="font-bold text-primary font-heading mb-5 flex items-center gap-2 pb-2 border-b border-gray-100">
                  <MapPin size={18} className="text-accent" /> Address Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Residential Address <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      rows={3}
                      placeholder="House/Flat No., Street, Colony/Area"
                      className={`w-full px-4 py-3 rounded-xl border ${errors.address ? 'border-rose-400 bg-rose-50' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm resize-none`}
                    />
                    {errors.address && <p className="text-rose-500 text-xs mt-1">{errors.address}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">City / Town</label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="e.g. Vempalli"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">PIN Code</label>
                    <input
                      type="text"
                      name="pincode"
                      value={form.pincode}
                      onChange={handleChange}
                      placeholder="516329"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Message (Optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any specific queries or requirements you'd like to share..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm resize-none"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-xl font-bold text-white text-base transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#0196FD]/25 ${
                  loading ? 'bg-[#0196FD]/60 cursor-not-allowed' : 'bg-[#0196FD] hover:bg-[#0082de] hover:shadow-card-hover hover:-translate-y-0.5'
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Application
                  </>
                )}
              </button>

              <p className="text-center text-gray-400 text-xs">
                By submitting, you agree to be contacted by our admissions team. Your data is handled securely and will not be shared.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Contact shortcut */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm mb-3">Prefer to speak with our Admissions Team directly?</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="tel:+919964511122" className="btn-primary text-sm">
              <Phone size={16} /> Call +91 99645 11122
            </a>
            <a href="mailto:contact@samsidh.in" className="btn-secondary text-sm">
              <Mail size={16} /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
