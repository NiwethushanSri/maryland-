import { useRef, useState } from 'react'
import { BUSINESS, JOBS } from '../data'
import * as Icons from '../components/Icons'
import { CheckIcon, PinIcon, BriefcaseIcon, MailIcon, PhoneIcon } from '../components/Icons'

export default function Careers() {
  const formRef = useRef(null)
  const [role, setRole] = useState('')

  const applyFor = (title) => {
    setRole(title)
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-white">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Careers</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Join the Maryland Internet Cafe Team
          </h1>
          <p className="mt-4 text-lg text-brand-100/90 max-w-2xl">
            We're a busy local service hub in Stratford. If you're friendly, reliable and want to
            grow with us, we'd love to hear from you. See our current openings below and apply
            online.
          </p>
        </div>
      </section>

      {/* Why we're hiring */}
      <section className="py-14 lg:py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">Where we're heading</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Maryland Internet Cafe is going through an exciting period of restructuring and
              expansion. We are reducing our internet café area and introducing significantly more
              electronics, mobile and accessory stock, researching new products, developing supplier
              relationships and growing our product lines. Alongside this we are improving our
              marketing and looking to expand our repair and technical services.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              These roles are central to that transformation, offering a real opportunity to help
              shape the future direction of the business.
            </p>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Current Openings</h2>
          <p className="mt-3 text-slate-600">
            {(() => {
              const open = JOBS.filter((j) => !j.closed).length
              return `${open} ${open === 1 ? 'role' : 'roles'} currently open at our Stratford shop.`
            })()}
          </p>

          <div className="mt-10 grid gap-8">
            {JOBS.map((job) => {
              const Icon = Icons[job.icon] || BriefcaseIcon
              return (
                <div
                  key={job.id}
                  className={`flex flex-col rounded-2xl border bg-white p-6 sm:p-8 shadow-sm ${
                    job.closed ? 'border-slate-200 opacity-90' : 'border-slate-100'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white ${
                        job.closed ? 'bg-slate-400' : 'bg-brand-700'
                      }`}
                    >
                      <Icon className="h-6 w-6" width="24" height="24" />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                        {job.closed ? (
                          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
                            Closed
                          </span>
                        ) : (
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-700">
                            Now hiring
                          </span>
                        )}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs font-medium">
                        <span className="rounded-full bg-brand-50 px-3 py-1 text-brand-700">
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                          <PinIcon className="h-3.5 w-3.5" width="14" height="14" /> {job.location}
                        </span>
                        {job.posted && (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                            Posted {job.posted}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 text-slate-600 leading-relaxed">{job.summary}</p>

                  <div className="mt-6 grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                      <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                        What you'll do
                      </h4>
                      <ul className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                        {job.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-left text-sm text-slate-700">
                            <CheckIcon
                              className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                              width="16"
                              height="16"
                            />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                        What we're looking for
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {job.requirements.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-left text-sm text-slate-700">
                            <CheckIcon
                              className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                              width="16"
                              height="16"
                            />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto pt-7">
                    {job.closed ? (
                      <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 font-semibold text-slate-500">
                        <BriefcaseIcon className="h-5 w-5" width="18" height="18" /> Applications closed
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => applyFor(job.title)}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 font-semibold text-white shadow hover:bg-accent-600 transition-colors"
                      >
                        <BriefcaseIcon className="h-5 w-5" width="18" height="18" /> Apply for this role
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section ref={formRef} id="apply" className="py-16 lg:py-20 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Apply Now</h2>
          <p className="mt-3 text-slate-600">
            Fill in your details below and click submit. Your email app will open with your
            application ready to send to our team.
          </p>

          <ApplicationForm role={role} setRole={setRole} />
        </div>
      </section>
    </>
  )
}

function ApplicationForm({ role, setRole }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock submission: acknowledge the applicant with a thank-you message.
    setSent(true)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: window.scrollY, behavior: 'instant' in window ? 'instant' : 'auto' })
    }
  }

  const field =
    'mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100'

  if (sent) {
    return (
      <div className="mt-8 rounded-2xl border border-brand-100 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-700">
          <CheckIcon className="h-8 w-8" width="32" height="32" />
        </div>
        <h3 className="mt-5 text-2xl font-extrabold text-slate-900">
          Thank you for your application!
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-slate-600 leading-relaxed">
          {form.name ? `Thanks, ${form.name.split(' ')[0]}. ` : ''}We have received your application
          {role ? ` for the ${role} role` : ''}. Our team will review it and get in touch with you
          soon using the contact details you provided.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-800 transition-colors"
          >
            <PhoneIcon className="h-5 w-5" width="18" height="18" /> Call {BUSINESS.phone}
          </a>
          <button
            type="button"
            onClick={() => {
              setForm({ name: '', email: '', phone: '', message: '' })
              setRole('')
              setSent(false)
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-800 ring-1 ring-slate-200 hover:bg-slate-50 transition-colors"
          >
            Submit another application
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label className="block text-sm font-semibold text-slate-700">Role you're applying for</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} className={field} required>
          <option value="">Select a role…</option>
          {JOBS.filter((j) => !j.closed).map((j) => (
            <option key={j.id} value={j.title}>
              {j.title}
            </option>
          ))}
          <option value="General / Other">General / Other</option>
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-slate-700">Full name</label>
          <input type="text" value={form.name} onChange={update('name')} className={field} required />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700">Phone</label>
          <input type="tel" value={form.phone} onChange={update('phone')} className={field} required />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700">Email</label>
        <input type="email" value={form.email} onChange={update('email')} className={field} required />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700">
          Tell us about yourself &amp; relevant experience
        </label>
        <textarea
          rows={5}
          value={form.message}
          onChange={update('message')}
          className={field}
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-7 py-3 font-semibold text-white shadow hover:bg-brand-800 transition-colors"
        >
          <MailIcon className="h-5 w-5" width="18" height="18" /> Submit Application
        </button>
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-brand-800 ring-1 ring-slate-200 hover:bg-slate-50 transition-colors"
        >
          <PhoneIcon className="h-5 w-5" width="18" height="18" /> Or call {BUSINESS.phone}
        </a>
      </div>
    </form>
  )
}
