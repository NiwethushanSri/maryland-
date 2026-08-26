import { Link } from 'react-router-dom'
import { BUSINESS } from '../data'
import {
  PhoneIcon,
  PinIcon,
  PhoneDeviceIcon,
  PlugIcon,
  ChipIcon,
  CheckIcon,
} from '../components/Icons'

const COMM = [
  'Calls and text messages',
  'WhatsApp and messaging',
  'Email',
  'Internet browsing',
  'Social media',
  'Maps and navigation',
  'Online services',
  'Video calls',
  'Photography',
  'Everyday apps',
]

const PHONE_CARDS = [
  {
    title: 'Mobile Phone Handsets',
    text: "We stock a selection of mobile phones to suit different everyday requirements and budgets. Whether you're buying a replacement handset, looking for an additional phone or purchasing a device for a family member, speak to our team about the options currently available.",
  },
  {
    title: 'Everyday Communication Devices',
    text: 'Modern mobile phones are essential for much more than making calls — they help you stay connected for the things that matter. Visit us to explore the devices currently available.',
  },
  {
    title: 'Helpful In-Store Advice',
    text: "Not sure which phone is right for you? Our team can provide general information about the handsets available in store. Tell us what you're looking for and your preferred budget, and we'll show you the suitable options we currently have.",
  },
]

const ACCESSORIES = [
  {
    title: 'Phone Chargers',
    text: "Keep your devices powered with our selection of mobile charging products, suitable for a variety of commonly used devices and connections. Unsure which charger you need? Bring your phone and speak to our team.",
  },
  {
    title: 'Charging Cables',
    text: 'Lost your cable or need a spare? We offer charging and connectivity cables for commonly used mobile devices.',
    items: [
      'USB-C cables',
      'Lightning-compatible cables',
      'Micro-USB cables',
      'USB charging cables',
      'Data and charging cables',
    ],
    note: 'Availability and compatibility vary by product and device.',
  },
  {
    title: 'Earphones',
    text: 'Need earphones for music, calls, videos or everyday use? Explore the earphones and audio accessories available in our store.',
    items: [
      'Music',
      'Phone calls',
      'Video calls',
      'Online meetings',
      'Watching videos',
      'Travelling',
      'Everyday listening',
    ],
  },
  {
    title: 'Phone Cases',
    text: 'Protect your mobile phone from everyday knocks, scratches and general wear. We may carry cases for a selection of popular phone models — bring your device or tell us the exact model and we’ll help check compatibility.',
  },
  {
    title: 'Screen Protectors',
    text: "Help protect your phone's display against everyday scratches and minor damage. Availability depends on your particular phone model, so visit us with your handset and ask about the options currently available.",
  },
  {
    title: 'Adapters & Connectors',
    text: 'Sometimes the smallest accessory is the one you need most. Our selection may include useful adapters and connectors for charging and connecting your devices — ask our team if you’re looking for a particular connection.',
  },
]

const ELECTRONICS = [
  'Charging accessories',
  'Cables',
  'Adapters',
  'Earphones and audio accessories',
  'Mobile accessories',
  'Computer-related accessories',
  'Connectivity products',
  'Replacement accessories',
  'Other everyday electronic essentials',
]

const WHY = [
  { title: 'Convenient Local Shopping', text: 'Pick up everyday mobile and electronic essentials from our Stratford location without travelling to a large shopping centre.' },
  { title: 'Mobile Phones & Accessories Together', text: 'Find handsets and the accessories you need in the same place.' },
  { title: 'Everyday Essentials', text: 'From charging cables and phone cases to adapters and earphones, we focus on useful products for everyday life.' },
  { title: 'In-Store Assistance', text: "If you're unsure what you need, speak to our team and we'll help you identify suitable available products." },
]

const HUB = [
  'Western Union, Ria and MoneyGram money transfer services',
  'DHL parcel services',
  'Internet and computer access',
  'Printing',
  'Scanning',
  'Document services',
  'Stationery',
]

function InfoCard({ title, text, items, note, Icon }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
          <Icon className="h-6 w-6" width="24" height="24" />
        </span>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
      {items && (
        <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" width="16" height="16" />
              {it}
            </li>
          ))}
        </ul>
      )}
      {note && <p className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-500">{note}</p>}
    </div>
  )
}

export default function MobileElectronics() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-white">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            Mobile & Electronics
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Phones, Accessories &amp; Everyday Technology in One Convenient Location
          </h1>
          <p className="mt-4 text-lg text-brand-100/90 max-w-2xl">
            A practical range of mobile phones, phone accessories and everyday electronic products
            for customers across Maryland, Stratford and East London.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-5 text-slate-600 leading-relaxed">
          <p>
            Whether you're looking for a mobile handset, replacing a lost charging cable, need a new
            phone case or simply need an everyday technology accessory, visit our store and speak to
            our team.
          </p>
          <p>
            Our aim is to make it easy to find the technology essentials you need locally — without
            having to travel far.
          </p>
        </div>
      </section>

      {/* Mobile phones */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Mobile Phones</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Find the right phone for your everyday needs. Whether you need a straightforward phone for
            calls and messages or a smartphone for apps, email and internet, our team can help you
            explore the available options. Selection may vary, so visit or call to check current
            availability.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PHONE_CARDS.map((c) => (
              <InfoCard key={c.title} title={c.title} text={c.text} Icon={PhoneDeviceIcon} />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-slate-900">Everyday Communication Devices</h3>
            <p className="mt-2 text-sm text-slate-600">
              Modern mobile phones help you stay connected through:
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1.5">
              {COMM.map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" width="16" height="16" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Mobile Phone Accessories</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            A phone is only useful with the right accessories. Whether you've forgotten your charger,
            damaged your cable, need a new case or want an extra adapter, check our in-store
            selection.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {ACCESSORIES.map((a) => (
              <InfoCard
                key={a.title}
                title={a.title}
                text={a.text}
                items={a.items}
                note={a.note}
                Icon={PlugIcon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Electronics */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Electronics</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Everyday technology essentials, locally available. We focus on practical everyday items
              that customers frequently need, giving you convenient local access when you don't want
              to wait for an online delivery or travel to a larger electronics store. Our product
              range and stock can change regularly, so visit the shop to see what's currently
              available.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {ELECTRONICS.map((e) => (
              <li
                key={e}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm text-sm text-slate-700"
              >
                <ChipIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" width="20" height="20" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Replacement + not sure */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Need a Replacement Accessory Quickly?</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              A broken cable or missing charger can disrupt your entire day. Instead of waiting for an
              online order, visit us and check whether we have the replacement you need. We're
              conveniently located on Leytonstone Road and serve customers throughout Maryland,
              Stratford and East London.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">Not Sure What Accessory You Need?</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Different phones and devices can use different cables, connectors and charging
              standards. If you're unsure, bring your device where possible — our team can help you
              identify the type of accessory you require and show you compatible options. We always
              recommend checking compatibility before purchasing.
            </p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Why Buy from Maryland Internet Cafe?</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="mt-10 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">More Than a Mobile Shop</h3>
            <p className="mt-2 text-sm text-slate-600">
              Maryland Internet Cafe is a complete local service hub. While you're here, you can also
              access:
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1.5">
              {HUB.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" width="16" height="16" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Visit Us Today</h2>
          <p className="mt-4 text-brand-100/90">
            Looking for a mobile phone, charger, cable, case, screen protector, earphones, adapter or
            another everyday electronic accessory? Visit Maryland Internet Cafe and explore what's
            currently available.
          </p>
          <p className="mt-6 font-semibold text-brand-200">
            Mobile Phones • Accessories • Electronics
          </p>
          <p className="mt-1 text-sm text-brand-100/80">
            Everyday technology. Helpful local service. All in one place.
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
