import { Link } from 'react-router-dom'
import { BUSINESS, SERVICES, WHY } from '../data'
import * as Icons from '../components/Icons'
import { PhoneIcon, PinIcon, ClockIcon, CheckIcon } from '../components/Icons'
import Reviews from '../components/Reviews'

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BUSINESS.mapsQuery,
)}`

function Hero() {
  const chips = [
    'Money Transfer',
    'Internet',
    'Printing',
    'Scanning',
    'DHL Parcels',
    'Mobile Phones',
    'Electronics',
    'Stationery',
  ]
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-white">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
            <PinIcon className="h-4 w-4" width="16" height="16" /> Stratford · Maryland · East London
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Everything You Need,
            <span className="block text-brand-200">All in One Place</span>
          </h1>
          <p className="mt-5 text-lg text-brand-100/90 max-w-2xl">
            Your local internet, technology &amp; parcel service in Stratford. Send money abroad,
            print documents, browse the internet, grab a charger or drop off a DHL parcel, our team
            is here to help.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium ring-1 ring-white/15"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-brand-800 shadow hover:bg-brand-50 transition-colors"
            >
              Explore Our Services
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 font-semibold text-white shadow hover:bg-accent-600 transition-colors"
            >
              <PhoneIcon className="h-5 w-5" width="18" height="18" /> Call {BUSINESS.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

function ServicesBanner() {
  const alt =
    'Our services, electronic items, mobile phones, mobile phone accessories, internet surfing, printing & scanning, stationery, DHL parcel service, Western Union, Ria and MoneyGram'
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="marquee overflow-hidden">
        <div className="marquee-track items-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <img
              key={i}
              src="/banner.jpg"
              alt={i === 0 ? alt : ''}
              aria-hidden={i === 0 ? undefined : 'true'}
              className="mx-10 h-40 w-auto max-w-none shrink-0 sm:h-56 lg:h-72"
              loading="eager"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ svc }) {
  const Icon = Icons[svc.icon]
  return (
    <div
      id={svc.id}
      className="group scroll-mt-28 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-100 transition-all"
    >
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition-colors">
        <Icon className="h-6 w-6" width="24" height="24" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">{svc.title}</h3>
      <p className="mt-2 text-left text-sm leading-relaxed text-slate-600">{svc.blurb}</p>
      <ul className="mt-4 space-y-1.5">
        {svc.items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-slate-700">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" width="16" height="16" />
            {it}
          </li>
        ))}
      </ul>
      <Link
        to={`/services/${svc.id}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
      >
        Learn more
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </Link>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="py-20 lg:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Our Services</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Multiple essential services, one convenient shop
          </h2>
          <p className="mt-3 text-slate-600">
            Instead of visiting several different businesses, access everything you need from one
            local Stratford location.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.id} svc={svc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MoneyTransfer() {
  return (
    <section
      id="money-transfer-highlight"
      className="py-20 lg:py-24 bg-gradient-to-br from-brand-800 to-brand-900 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            Money Transfer Made Simple
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">
            Send money overseas with confidence
          </h2>
          <p className="mt-4 text-brand-100/90">
            Visit Maryland Internet Cafe for access to established international money transfer
            services. Our convenient Stratford location makes it easier to send money internationally
            while receiving in-person assistance when required.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Western Union', 'Ria', 'MoneyGram'].map((b) => (
              <span
                key={b}
                className="rounded-xl bg-white/10 px-5 py-3 font-semibold ring-1 ring-white/15"
              >
                {b}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/money-transfer"
              className="inline-flex items-center justify-center rounded-full bg-accent-500 px-6 py-3 font-semibold text-white hover:bg-accent-600 transition-colors"
            >
              Money transfer details
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition-colors"
            >
              Visit us today
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-8">
          <h3 className="text-xl font-bold">Print. Scan. Browse. Send.</h3>
          <p className="mt-2 text-brand-100/80 text-sm">
            Everything you need from your local internet café.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Printing travel documents',
              'Scanning important paperwork',
              'Completing an online application',
              'Accessing your email',
              'Sending an international money transfer',
              'Purchasing a charger',
              'Dropping off a DHL parcel',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" width="20" height="20" />
                <span className="text-brand-50/95">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function AboutPreview() {
  const whyIcons = [Icons.PinIcon, Icons.GlobeIcon, Icons.CheckIcon, Icons.ClockIcon]
  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered intro */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">About Us</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Your trusted local service hub in Stratford
          </h2>
          <p className="mt-4 text-slate-600">
            Since 2018, we have served the local community from our shop on Leytonstone Road,
            bringing a wide range of useful everyday services together under one roof for residents,
            students, professionals, businesses and visitors across Maryland, Stratford and East
            London.
          </p>
          <Link
            to="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-800 transition-colors"
          >
            More about us →
          </Link>
        </div>

        {/* Feature cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => {
            const Icon = whyIcons[i % whyIcons.length]
            return (
              <div
                key={w.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 to-accent-500" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" width="24" height="24" />
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Contact Us</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">Visit us today</h2>
          <p className="mt-3 text-slate-600">
            Need information about one of our services? Call or visit and speak with our team.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:border-brand-100 transition-colors"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <PinIcon className="h-6 w-6" width="24" height="24" />
              </span>
              <span>
                <span className="block font-bold text-slate-900">Address</span>
                <span className="mt-1 block text-slate-600">{BUSINESS.address}</span>
                <span className="mt-1 block text-sm font-medium text-brand-700">Open in Google Maps →</span>
              </span>
            </a>

            <a
              href={BUSINESS.phoneHref}
              className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:border-brand-100 transition-colors"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <PhoneIcon className="h-6 w-6" width="24" height="24" />
              </span>
              <span>
                <span className="block font-bold text-slate-900">Telephone</span>
                <span className="mt-1 block text-slate-600">{BUSINESS.phone}</span>
              </span>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <ClockIcon className="h-6 w-6" width="24" height="24" />
              </span>
              <span>
                <span className="block font-bold text-slate-900">Opening Hours</span>
                <span className="mt-1 block text-slate-600">
                  Please contact the shop or check our latest Google Business listing for current
                  opening hours.
                </span>
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm min-h-[320px]">
            <iframe
              title="Maryland Internet Cafe location"
              className="h-full w-full"
              style={{ minHeight: 320, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                BUSINESS.mapsQuery,
              )}&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesBanner />
      <Services />
      <MoneyTransfer />
      <AboutPreview />
      <Reviews />
      <Contact />
    </>
  )
}
