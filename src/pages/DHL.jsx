import { Link } from 'react-router-dom'
import { BUSINESS } from '../data'
import { PhoneIcon, PinIcon, BoxIcon, PrinterIcon, CheckIcon } from '../components/Icons'

const DROPOFF = [
  'Pre-booked DHL parcels',
  'Pre-labelled parcels',
  'Online shopping returns',
  'Business parcels',
  'Personal parcels',
  'Documents and packages',
  'Eligible domestic and international shipments',
]

const SENDING_ASSIST = [
  'Understanding the drop-off process',
  'Checking basic parcel preparation',
  'Printing shipping documents where applicable',
  'Printing labels where applicable',
  'General parcel service enquiries',
  'Preparing documents for your shipment',
  'Identifying the information you may need',
]

const RETURN_STEPS = [
  {
    title: 'Prepare Your Return',
    text: 'Pack your item securely and follow the return instructions provided by the retailer.',
  },
  {
    title: 'Get Your Return Label Ready',
    text: 'Where a shipping or returns label is required, make sure it has been generated correctly. Need to print one? Ask us about our printing services.',
  },
  {
    title: 'Bring Your Parcel to Us',
    text: 'Visit Maryland Internet Cafe with your prepared parcel.',
  },
  {
    title: 'Drop It Off',
    text: 'Once the parcel meets the relevant requirements, it can be processed through the available DHL service.',
  },
]

const BUSINESS_USES = [
  'Dropping off eligible business parcels',
  'Sending documents',
  'Processing online returns',
  'Printing shipping paperwork',
  'Printing parcel labels',
  'Scanning documents',
  'Accessing email and online accounts',
  'General computer and printing requirements',
]

const CHECKLIST = [
  'Your item is permitted by the relevant DHL service',
  'The parcel is securely packaged',
  "The recipient's details are correct",
  'Any required shipping label is correct',
  'Old or incorrect shipping labels have been removed or covered',
  'Required customs documentation is completed for applicable international shipments',
  'The parcel meets applicable size and weight restrictions',
]

const WHY = [
  { title: 'Convenient Stratford Location', text: 'Find us at 69 Leytonstone Road, conveniently located for Maryland, Stratford and surrounding areas.' },
  { title: 'Drop-Off & Collection', text: 'Use our location for eligible DHL parcel drop-offs and collections.' },
  { title: 'Printing Available', text: 'Need to print a shipping document or label? Our printing facilities are in the same shop.' },
  { title: 'Computer & Internet Access', text: 'Access an email, download a document or prepare paperwork using our computer and internet facilities.' },
  { title: 'Friendly Local Assistance', text: 'Unfamiliar with the process? Our team can provide general assistance with the services available.' },
  { title: 'Multiple Services in One Place', text: 'Also access money transfers, internet, printing, scanning, mobiles, accessories, electronics and stationery.' },
]

const FAQS = [
  {
    q: 'Can I drop off a DHL parcel at Maryland Internet Cafe?',
    a: 'We provide DHL parcel services at our Stratford location. The parcel must be eligible for the DHL service available at our shop and meet the relevant carrier requirements.',
  },
  {
    q: 'Can I collect my DHL parcel from your shop?',
    a: 'Where your DHL shipment has been directed to our location for collection, you can collect it subject to the applicable collection requirements. Please wait until you receive confirmation that your parcel is ready before travelling.',
  },
  {
    q: 'Do I need identification to collect a parcel?',
    a: 'Identification and/or collection confirmation may be required. Follow the instructions provided with your DHL collection notification.',
  },
  {
    q: 'Can I print my parcel label at your shop?',
    a: 'We provide printing and computer facilities. If you have a printable shipping document or label, speak to our team about the printing options available.',
  },
  {
    q: 'Can you package my parcel for me?',
    a: 'Packaging requirements depend on the item and shipping service. Please contact or visit us to check what assistance is currently available.',
  },
  {
    q: 'Can I send parcels internationally?',
    a: 'International availability depends on the DHL service, destination, parcel contents and applicable restrictions. Please check the relevant service requirements before sending.',
  },
  {
    q: 'Are there restrictions on what I can send?',
    a: 'Yes. DHL and applicable laws have restrictions and prohibitions covering certain goods and materials. Customers should check that their parcel contents are permitted before sending.',
  },
]

function Card({ title, intro, items, note }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
          <BoxIcon className="h-6 w-6" width="24" height="24" />
        </span>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{intro}</p>
      {items && (
        <ul className="mt-4 space-y-1.5">
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

export default function DHL() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-white">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            DHL Parcel Service
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Send &amp; Collect Parcels from Your Local Stratford Service Point
          </h1>
          <p className="mt-4 text-lg text-brand-100/90 max-w-2xl">
            A convenient local option for dropping off or collecting eligible DHL parcels, without
            travelling far. Sending, returning or collecting, our friendly team can help.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-5 text-slate-600 leading-relaxed">
          <p>
            At Maryland Internet Cafe, we make sending and collecting parcels easier with our
            convenient DHL parcel services. Located at 69 Leytonstone Road, Stratford, our shop
            provides a convenient local option for customers who need to drop off or collect eligible
            DHL parcels.
          </p>
          <p>
            Whether you're sending a parcel, returning an online purchase or collecting a delivery,
            visit our friendly team for assistance.
          </p>
        </div>
      </section>

      {/* Core service cards */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Our DHL Parcel Services</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card
              title="DHL Parcel Drop-Off"
              intro="Already have a DHL parcel prepared and ready to go? Bring your eligible parcel to us for convenient drop-off. Our location is ideal for:"
              items={DROPOFF}
              note="Before visiting, make sure your parcel is securely packaged and meets the requirements of the relevant DHL service."
            />
            <Card
              title="DHL Parcel Collection"
              intro="If your eligible DHL parcel has been directed to our location for collection, you can conveniently pick it up during our available opening hours. When collecting, please bring any collection confirmation, reference information and identification required by DHL."
              note="Collection requirements may vary depending on the shipment and service."
            />
            <Card
              title="Parcel Sending Assistance"
              intro="Not sure what you need to do before sending your parcel? Our team can provide general assistance with the parcel process. We can assist with:"
              items={SENDING_ASSIST}
              note="Acceptance, pricing, delivery times, destination availability, prohibited items, size and weight restrictions are determined by DHL and the specific service being used."
            />
            <Card
              title="Parcel Pickup Service"
              intro="Where your DHL service allows collection from our location, we provide a convenient local pickup point for customers in Maryland, Stratford and surrounding East London areas. Once you've received confirmation that your parcel is ready, visit our shop with the required collection information and identification."
              note="For security reasons, parcels can only be released in accordance with the applicable carrier requirements."
            />
          </div>
        </div>
      </section>

      {/* Returns */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Returning an Online Order?</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            If your retailer has provided an eligible DHL return service, you may be able to drop your
            parcel off at Maryland Internet Cafe.
          </p>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {RETURN_STEPS.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-700 font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Print labels here */}
      <section className="py-16 lg:py-20 bg-brand-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[auto,1fr] gap-8 items-center">
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20">
            <PrinterIcon className="h-8 w-8" width="32" height="32" />
          </span>
          <div>
            <h2 className="text-3xl font-extrabold">Print Your Parcel Labels Here</h2>
            <p className="mt-3 text-brand-100/90 max-w-3xl leading-relaxed">
              Don't have a printer at home? That's not a problem. We provide printing, scanning and
              computer services alongside our parcel facilities. Where appropriate, access your
              shipping documents from your email or online account and use our printing facilities to
              prepare them, so you can access your label, print it and deal with your parcel from one
              convenient location.
            </p>
          </div>
        </div>
      </section>

      {/* Business */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Parcel Services for Local Businesses</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our location can also be useful for local businesses, online sellers and professionals
              who regularly need convenient access to parcel and document services. With internet,
              computer, printing, scanning and parcel facilities under one roof, we provide a
              convenient solution for everyday business administration.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {BUSINESS_USES.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm text-sm text-slate-700"
              >
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" width="20" height="20" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Before dropping off + international */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Before Dropping Off Your Parcel</h2>
            <p className="mt-3 text-slate-600">
              To help avoid delays, please make sure your parcel is properly prepared before bringing
              it to us. Check that:
            </p>
            <ul className="mt-5 space-y-2">
              {CHECKLIST.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" width="20" height="20" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              If you're unsure whether a particular item can be sent, check the applicable DHL terms
              and restrictions before preparing your shipment.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8 self-start">
            <h2 className="text-xl font-bold text-amber-900">International Parcels</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-amber-900/90">
              <p>
                International shipping can involve additional requirements compared with domestic
                deliveries. Depending on the destination and contents, you may need additional
                information or customs documentation.
              </p>
              <p>
                Customers are responsible for accurately declaring parcel contents, values and other
                required information.
              </p>
              <p>
                International shipping availability, customs requirements, charges, delivery times and
                restrictions depend on the destination and DHL service selected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Why Use Maryland Internet Cafe for Your DHL Parcel?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  {f.q}
                  <span className="text-brand-600 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Drop Off. Pick Up. Get On With Your Day.</h2>
          <p className="mt-4 text-brand-100/90">
            Make parcel sending and collection more convenient with Maryland Internet Cafe.
          </p>
          <p className="mt-6 font-semibold text-brand-200">
            DHL Parcel Drop-Off • Parcel Collection • Returns • Printing • Parcel Assistance
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
