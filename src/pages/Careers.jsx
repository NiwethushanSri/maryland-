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

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
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

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                        What you'll do
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {job.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-slate-700">
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
                          <li key={r} className="flex items-start gap-2 text-sm text-slate-700">
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
    const subject = `Job Application: ${role || 'General'}, ${form.name}`
    const body = [
      `Position: ${role || 'General application'}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      '',
      'Message / experience:',
      form.message,
    ].join('\n')
    const href = `mailto:${BUSINESS.careersEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    window.location.href = href
    setSent(true)
  }

  const field =
    'mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100'

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

      <p className="text-xs text-slate-500">
        Please attach your CV in the email that opens after you submit.
      </p>

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

      {sent && (
        <p className="rounded-xl bg-brand-50 px-4 py-3 text-sm font-medium text-brand-800">
          Your email app should have opened with your application. If it didn't, email us directly at{' '}
          <a className="underline" href={`mailto:${BUSINESS.careersEmail}`}>
            {BUSINESS.careersEmail}
          </a>
          .
        </p>
      )}
    </form>
  )
}
