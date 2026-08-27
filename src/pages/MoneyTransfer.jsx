import { Link } from 'react-router-dom'
import { BUSINESS } from '../data'
import { PhoneIcon, PinIcon, MoneyIcon, GlobeIcon, CheckIcon } from '../components/Icons'

const PROVIDERS = [
  {
    name: 'Western Union',
    text: "Send money internationally through Western Union, one of the world's established money transfer networks. Depending on the destination and available service, recipients may be able to collect funds through participating Western Union agent locations. Visit us and speak to our team about your transfer requirements.",
  },
  {
    name: 'Ria Money Transfer',
    text: 'We provide access to Ria Money Transfer services, helping customers send money to supported destinations around the world. Whether you regularly support family overseas or need an occasional international transfer, our team can assist with the available Ria transfer options.',
  },
  {
    name: 'MoneyGram',
    text: 'Customers can also access MoneyGram money transfer services from Maryland Internet Cafe. MoneyGram provides international money transfer options across many countries and territories, making it another convenient choice for sending funds abroad.',
  },
]

const ASSIST = [
  'Western Union money transfers',
  'Ria Money Transfer',
  'MoneyGram transfers',
  'International money transfer enquiries',
  'Transfer process assistance',
  'Recipient information requirements',
  'Understanding available collection methods',
  'General assistance with your transaction',
]

const STEPS = [
  {
    title: 'Visit Our Shop',
    text: 'Come to Maryland Internet Cafe, 69 Leytonstone Road, Stratford, London E15 1JA.',
  },
  {
    title: "Tell Us Where You're Sending Money",
    text: 'Let our team know the destination and your preferred money transfer provider.',
  },
  {
    title: 'Provide the Required Details',
    text: 'You will normally need to provide information about yourself and the recipient. Identification and other information may also be required depending on the provider, transaction and applicable regulatory requirements.',
  },
  {
    title: 'Review Your Transfer',
    text: "Before completing your transaction, check the recipient's details, transfer amount, applicable fees, exchange rate and expected delivery or collection method.",
  },
  {
    title: 'Complete Your Transfer',
    text: 'Once the required checks have been completed, your transaction can be processed through the selected money transfer provider.',
  },
]

const WHY = [
  {
    title: 'Three Leading Providers in One Location',
    text: 'With Western Union, Ria and MoneyGram available from one shop, you can discuss the available options without travelling between multiple locations.',
  },
  {
    title: 'Face-to-Face Assistance',
    text: 'Online money transfers are not convenient for everyone. Visit us in person and receive assistance with the transfer process.',
  },
  {
    title: 'Convenient Stratford Location',
    text: 'On Leytonstone Road, conveniently positioned for customers in Maryland, Stratford and surrounding areas of East London.',
  },
  {
    title: 'More Than Money Transfers',
    text: "While you're here, use our other services too: internet access, printing, scanning, DHL parcels, mobile phones, accessories, electronics and stationery.",
  },
]

const BRING = [
  'Valid photographic identification',
  'Your personal details',
  "Recipient's full name",
  "Recipient's country or destination",
  "Recipient's contact or payment details where applicable",
  'Information regarding the purpose of the transaction',
  'Additional documentation where required',
]

export default function MoneyTransfer() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-white">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            Money Transfer Services
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Send Money Worldwide with Confidence
          </h1>
          <p className="mt-4 text-lg text-brand-100/90 max-w-2xl">
            Simple, convenient international money transfers for our local community, from some of
            the world's recognised providers, with friendly in-person assistance.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {['Western Union', 'Ria', 'MoneyGram'].map((b) => (
              <span
                key={b}
                className="rounded-xl bg-white/10 px-5 py-2.5 font-semibold ring-1 ring-white/15"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-5 text-slate-600 leading-relaxed">
          <p>
            At Maryland Internet Cafe, we make international money transfers simple and convenient for
            our local community.
          </p>
          <p>
            Whether you are supporting family overseas, sending money to friends or making an
            international payment, you can visit our Stratford branch and access money transfer
            services from some of the world's recognised providers.
          </p>
          <p>
            Our friendly team is available to guide you through the process and help make your
            transaction as straightforward as possible.
          </p>
        </div>
      </section>

      {/* Providers */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Our Money Transfer Providers</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PROVIDERS.map((p) => (
              <div key={p.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <MoneyIcon className="h-6 w-6" width="24" height="24" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assistance */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              International Money Transfer Assistance
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Not sure which service to use? Visit our shop and tell us where you would like to send
              your money. Our team can explain the transfer services available at our location and
              help you through the transaction process.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {ASSIST.map((a) => (
              <li
                key={a}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm text-sm text-slate-700"
              >
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" width="20" height="20" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">How It Works</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s, i) => (
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

      {/* Why */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Why Send Money Through Maryland Internet Cafe?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {WHY.map((w) => (
              <div key={w.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-700 text-white">
                  <GlobeIcon className="h-5 w-5" width="20" height="20" />
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to bring */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900">What Should I Bring?</h2>
          <p className="mt-4 text-slate-600">
            The exact requirements depend on the money transfer provider and transaction. You may be
            asked to provide:
          </p>
          <ul className="mt-6 space-y-2">
            {BRING.map((b) => (
              <li key={b} className="flex items-start gap-3 text-slate-700">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" width="20" height="20" />
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-500">
            Requirements can vary depending on the amount, destination, provider and applicable
            compliance checks.
          </p>
        </div>
      </section>

      {/* Important information */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-amber-900">Important Information</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-amber-900/90">
              <p>
                Money transfer availability, fees, exchange rates, transaction limits, processing
                times and recipient collection options are determined by the relevant money transfer
                provider and may vary by destination and transaction.
              </p>
              <p>Always check the recipient's name and details carefully before confirming a transfer.</p>
              <p>
                For your security, never send money to someone you do not know or trust. Be
                particularly cautious if someone unexpectedly asks you to transfer money urgently,
                claims you have won a prize, requests payment to release funds, or asks you to send
                money on behalf of another person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Visit Us for International Money Transfers</h2>
          <p className="mt-4 text-brand-100/90">
            Need to send money overseas? Visit Maryland Internet Cafe and speak with our team about
            the money transfer services available.
          </p>
          <address className="mt-6 not-italic text-brand-100/90">
            {BUSINESS.addressLines.join(', ')}
            <br />
            Telephone: {BUSINESS.phone}
          </address>
          <p className="mt-4 font-semibold text-brand-200">Western Union • Ria • MoneyGram</p>

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
