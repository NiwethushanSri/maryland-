import { Link } from 'react-router-dom'
import { BUSINESS } from '../data'
import { PhoneIcon, PinIcon, CheckIcon } from '../components/Icons'

const REASONS = [
  {
    title: 'Convenient Location',
    text: 'Visit us at 69 Leytonstone Road, Stratford, London E15 1JA, conveniently located for Maryland and Stratford customers.',
  },
  {
    title: 'Wide Range of Services',
    text: 'From international money transfers and DHL parcels to printing, internet access and mobile accessories, you can take care of multiple tasks in one visit.',
  },
  {
    title: 'Serving the Community Since 2018',
    text: 'We are proud to have been part of the local East London community for several years and continue to welcome both new and returning customers.',
  },
  {
    title: 'Friendly, Personal Service',
    text: 'We believe good local businesses are built on helpful service. Our team is available to assist customers and make everyday tasks as straightforward as possible.',
  },
]

const OFFERINGS = [
  'Western Union, Ria & MoneyGram money transfers',
  'DHL parcel drop-off and collection',
  'Internet access',
  'Printing and scanning',
  'Mobile phones and accessories',
  'Electronic products',
  'Stationery',
]

export default function About() {
  const c = BUSINESS.company
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-white">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">About Us</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            About Maryland Internet Cafe
          </h1>
          <p className="mt-4 text-lg text-brand-100/90 max-w-2xl">
            Your trusted local service hub in Stratford, everyday essential services made simple,
            convenient and accessible.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-5 text-slate-600 leading-relaxed">
          <p>
            At Maryland Internet Cafe, we believe everyday essential services should be simple,
            convenient and accessible.
          </p>
          <p>
            Since 2018, we have been serving the local community from our shop on Leytonstone Road,
            bringing a wide range of useful services together under one roof. Whether you need to
            send money overseas, access the internet, print or scan documents, send a parcel,
            purchase a mobile phone or pick up everyday electronics and stationery, our team is here
            to help.
          </p>
          <p>
            Located close to Maryland Station and Stratford, we proudly serve residents, students,
            professionals, local businesses and visitors from across Maryland, Stratford and East
            London.
          </p>
        </div>
      </section>

      {/* Everything in one place */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Everything You Need in One Place</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We understand that our customers are busy. That is why Maryland Internet Cafe offers
              more than a traditional internet café. Our aim is simple: to provide convenient,
              reliable and friendly local service whenever you need us.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {OFFERINGS.map((o) => (
              <li
                key={o}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm text-sm text-slate-700"
              >
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" width="20" height="20" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Why Choose Maryland Internet Cafe?</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {REASONS.map((r) => (
              <div key={r.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-700 text-white">
                  <CheckIcon className="h-5 w-5" width="20" height="20" />
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company details */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Our Company</h2>
          <dl className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm text-sm divide-y divide-slate-100">
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-slate-500">Registered Company</dt>
              <dd className="font-semibold text-slate-800 text-right">{c.legalName}</dd>
            </div>
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-slate-500">Company Number</dt>
              <dd className="font-semibold text-slate-800">{c.number}</dd>
            </div>
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-slate-500">Incorporated</dt>
              <dd className="font-semibold text-slate-800">{c.incorporated}</dd>
            </div>
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-slate-500">Registered Office</dt>
              <dd className="font-semibold text-slate-800 text-right">{BUSINESS.address}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* More than an internet cafe / CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">More Than an Internet Cafe</h2>
          <p className="mt-4 text-brand-100/90 leading-relaxed">
            Maryland Internet Cafe has grown into a one-stop local service hub for the Stratford and
            Maryland community. Whatever brings you through our door, sending money to family abroad,
            printing an important document, collecting a parcel or finding the right mobile accessory
           , you can expect convenient and welcoming service.
          </p>
          <p className="mt-6 text-lg font-semibold text-brand-200">Local. Convenient. Connected.</p>

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
    </>
  )
}
