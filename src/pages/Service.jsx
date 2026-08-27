import { Link, useParams, Navigate } from 'react-router-dom'
import { BUSINESS, SERVICES } from '../data'
import { SERVICE_DETAILS } from '../serviceDetails'
import * as Icons from '../components/Icons'
import { PhoneIcon, PinIcon, CheckIcon } from '../components/Icons'

export default function Service() {
  const { slug } = useParams()
  const svc = SERVICES.find((s) => s.id === slug)

  // Unknown service, send back to the services overview on the home page.
  if (!svc) return <Navigate to="/#services" replace />

  const d = SERVICE_DETAILS[svc.id] || {}
  const Icon = Icons[svc.icon] || CheckIcon
  const overview = d.overview || svc.intro || [svc.blurb]
  const others = SERVICES.filter((s) => s.id !== svc.id)

  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-white">
          <nav className="mb-6 flex items-center gap-2 text-sm text-brand-200">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-white/90">{svc.title}</span>
          </nav>
          <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20">
            <Icon className="h-7 w-7" width="28" height="28" />
          </span>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand-200">
            {svc.title}
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight">
            {svc.tagline || svc.title}
          </h1>
          <p className="mt-4 text-lg text-brand-100/90 max-w-2xl">{svc.blurb}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 font-semibold text-white shadow hover:bg-accent-600 transition-colors"
            >
              <PhoneIcon className="h-5 w-5" width="18" height="18" /> Call {BUSINESS.phone}
            </a>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition-colors"
            >
              <PinIcon className="h-5 w-5" width="18" height="18" /> Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Overview + what we offer */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-slate-900">Overview</h2>
            <div className="mt-5 space-y-5 text-slate-600 leading-relaxed">
              {overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div>
            <div className="sticky top-28 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">What we offer</h3>
              <ul className="mt-4 space-y-3">
                {svc.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-left text-sm text-slate-700">
                    <CheckIcon
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                      width="20"
                      height="20"
                    />
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href={BUSINESS.phoneHref}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-800 transition-colors"
              >
                <PhoneIcon className="h-4 w-4" width="16" height="16" /> {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      {d.benefits && (
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Why choose Maryland Internet Cafe
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {d.benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-700 text-white">
                    <CheckIcon className="h-5 w-5" width="20" height="20" />
                  </div>
                  <h3 className="mt-4 font-bold text-slate-900">{b.title}</h3>
                  <p className="mt-2 text-left text-sm leading-relaxed text-slate-600">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How it works */}
      {d.steps && (
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-900">How it works</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {d.steps.map((s, i) => (
                <div key={s.title} className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 font-bold text-brand-700">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-left text-sm leading-relaxed text-slate-600">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {d.faqs && (
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently asked questions</h2>
            <div className="mt-8 space-y-4">
              {d.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900 list-none">
                    {f.q}
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-left text-sm leading-relaxed text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Come and see us in Stratford</h2>
          <p className="mt-4 text-brand-100/90 leading-relaxed">
            Have a question about our {svc.title.toLowerCase()}? Call us or pop into the shop and our
            friendly team will be happy to help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 font-semibold text-white hover:bg-accent-600 transition-colors"
            >
              <PhoneIcon className="h-5 w-5" width="18" height="18" /> Call {BUSINESS.phone}
            </a>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-brand-800 hover:bg-brand-50 transition-colors"
            >
              <PinIcon className="h-5 w-5" width="18" height="18" /> Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900">Explore our other services</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => {
              const OIcon = Icons[s.icon] || CheckIcon
              return (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md hover:border-brand-100 transition-all"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                    <OIcon className="h-5 w-5" width="20" height="20" />
                  </span>
                  <h3 className="mt-3 font-bold text-slate-900 group-hover:text-brand-700">
                    {s.title}
                  </h3>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
