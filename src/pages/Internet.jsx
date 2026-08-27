import { Link } from 'react-router-dom'
import { BUSINESS } from '../data'
import {
  PhoneIcon,
  PinIcon,
  GlobeIcon,
  PrinterIcon,
  PenIcon,
  CheckIcon,
} from '../components/Icons'

// Feature blocks with their own bullet lists
const FEATURES = [
  {
    icon: GlobeIcon,
    title: 'Internet Surfing',
    intro:
      'Need quick access to the internet? Use our computers to browse websites and access the online services you need, for a few minutes or a longer task.',
    items: [
      'General web browsing',
      'Online research',
      'Travel information',
      'Checking bookings and reservations',
      'Accessing government websites',
      'Searching for jobs',
      'Educational research',
      'Accessing online accounts',
      'Reading news and information',
      'Using web-based services',
    ],
  },
  {
    icon: GlobeIcon,
    title: 'Computer Access',
    intro:
      "Our customer computers are a convenient solution when you don't have access to your own computer or need to complete something while away from home or work.",
    items: [
      'Personal use',
      'Business tasks',
      'Educational work',
      'Job searching',
      'Online applications',
      'Document preparation',
      'Email',
      'Research',
      'Printing-related tasks',
      'General internet use',
    ],
  },
  {
    icon: GlobeIcon,
    title: 'Online Applications',
    intro:
      'Many essential services are now completed online. If you need a computer to complete an application, we provide a convenient place to do it.',
    items: [
      'Job applications',
      'College and university applications',
      'Online registrations',
      'Appointment bookings',
      'Travel-related applications',
      'Housing-related applications',
      'Government online services',
      'Business registrations',
      'General online forms and applications',
    ],
    note: 'You remain responsible for checking that all information entered is correct before submitting any application.',
  },
  {
    icon: GlobeIcon,
    title: 'Email Access',
    intro:
      'Need to check an important email or access an attachment? Use our computers to access your own web-based email account.',
    items: [
      'Read emails',
      'Send emails',
      'Download attachments',
      'Upload documents',
      'Access documents sent by email',
      'Print email attachments',
      'Scan documents for emailing',
      'Respond to important correspondence',
    ],
    note: 'For your security, always sign out of your email and other personal accounts when you have finished using a shared computer.',
  },
  {
    icon: PenIcon,
    title: 'Document Preparation',
    intro:
      'Need to prepare or update a document? Our computer facilities can be used for everyday document-related tasks.',
    items: [
      'Letters',
      'CVs',
      'Cover letters',
      'Applications',
      'Forms',
      'Business documents',
      'Educational documents',
      'Personal correspondence',
      'Basic document editing',
      'Preparing files for printing',
    ],
    note: 'Once your document is ready, you can also use our printing and scanning services without visiting another shop.',
  },
  {
    icon: PrinterIcon,
    title: 'Online Form Assistance',
    intro:
      'Online forms can sometimes be confusing, particularly when documents need to be uploaded, downloaded, scanned or printed. Our team can provide general technical assistance.',
    items: [
      'Accessing online forms',
      'Scanning documents for upload',
      'Uploading files',
      'Downloading documents',
      'Printing completed forms',
      'Accessing websites',
      'Basic computer navigation',
      'Preparing supporting documents for scanning or printing',
    ],
    note: 'Our assistance is administrative and technical only. Customers remain responsible for the information provided and for checking forms carefully before submission.',
  },
]

const RELATED = [
  'Black & white printing',
  'Colour printing',
  'Document scanning',
  'Photocopying',
  'Email-to-print',
  'Download-and-print',
  'Scan-to-email',
  'Document upload assistance',
]

const AUDIENCES = [
  {
    title: 'Services for Students',
    intro: 'Use our computer and internet facilities for research, coursework and general educational tasks.',
    items: [
      'Conduct online research',
      'Access educational websites',
      'Prepare coursework',
      'Check student emails',
      'Download study materials',
      'Complete online applications',
      'Print assignments',
      'Scan documents',
      'Prepare CVs and applications',
    ],
  },
  {
    title: 'Services for Job Seekers',
    intro: 'Access the online tools you need during your job search.',
    items: [
      'Search online job websites',
      'Access recruitment portals',
      'Prepare or update your CV',
      'Write cover letters',
      'Complete job applications',
      'Access your email',
      'Download application documents',
      'Upload your CV',
      'Print documents for interviews',
    ],
  },
  {
    title: 'Professionals & Businesses',
    intro: 'Convenient computer facilities for professionals, self-employed customers and local businesses.',
    items: [
      'Access business email',
      'Print documents',
      'Scan paperwork',
      'Prepare correspondence',
      'Download attachments',
      'Upload documents',
      'Access online business services',
      'Complete administrative tasks',
    ],
  },
]

const WHY = [
  {
    title: 'Convenient Local Access',
    text: 'No computer or printer available? Visit our Stratford shop and access the facilities you need.',
  },
  {
    title: 'Multiple Services Under One Roof',
    text: 'Use the computer, browse the internet, prepare your documents, print and scan them without travelling between businesses.',
  },
  {
    title: 'Suitable for Everyday Tasks',
    text: 'Our facilities are available for personal, educational and professional use.',
  },
  {
    title: 'Helpful Local Team',
    text: 'If you need basic assistance using our computer, printing or scanning facilities, speak to our team.',
  },
]

function BulletList({ items }) {
  return (
    <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2 text-sm text-slate-700">
          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" width="16" height="16" />
          {it}
        </li>
      ))}
    </ul>
  )
}

export default function Internet() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-white">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            Internet & Computer Services
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Stay Connected. Get Things Done.
          </h1>
          <p className="mt-4 text-lg text-brand-100/90 max-w-2xl">
            Convenient, easy-to-use computer and internet facilities for personal, professional,
            educational or everyday online tasks, from our convenient Stratford location.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-5 text-slate-600 leading-relaxed">
          <p>
            Whether you need to quickly check your email, complete an online application, prepare a
            document, access an important website or use a computer for a longer session, our
            facilities are available from our convenient Stratford location.
          </p>
          <p>
            Our services are suitable for students, professionals, job seekers, local residents,
            businesses and visitors who need computer and internet access without the need to own a
            computer or printer.
          </p>
        </div>
      </section>

      {/* Feature blocks */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">What You Can Do Here</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {FEATURES.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon className="h-6 w-6" width="24" height="24" />
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">{f.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.intro}</p>
                  <BulletList items={f.items} />
                  {f.note && (
                    <p className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-500">{f.note}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Printing while you work */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Printing &amp; Scanning While You Work</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              One of the biggest advantages of Maryland Internet Cafe is having computer, internet,
              printing and scanning facilities in the same location. Work on your document, download
              it, print it, sign it if necessary, scan it and prepare it for email or online
              submission, all from one convenient location.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {RELATED.map((r) => (
              <li
                key={r}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm text-sm text-slate-700"
              >
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" width="20" height="20" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Who We Help</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {AUDIENCES.map((a) => (
              <div key={a.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{a.intro}</p>
                <ul className="mt-4 space-y-1.5">
                  {a.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" width="16" height="16" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Why Use Maryland Internet Cafe?</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {WHY.map((w) => (
              <div key={w.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-700 text-white">
                  <CheckIcon className="h-5 w-5" width="20" height="20" />
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Need Computer or Internet Access?</h2>
          <p className="mt-4 text-brand-100/90">
            Whether you're completing an application, preparing your CV, checking an important email,
            researching online or simply need temporary access to a computer, we're here to help.
          </p>
          <p className="mt-6 font-semibold text-brand-200">
            Internet • Computers • Email • Online Applications • Documents • Printing • Scanning
          </p>
          <address className="mt-6 not-italic text-brand-100/90">
            {BUSINESS.addressLines.join(', ')}
            <br />
            Telephone: {BUSINESS.phone}
          </address>

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
