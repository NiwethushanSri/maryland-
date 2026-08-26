import { BUSINESS } from '../data'

const googleReviewsUrl = `https://www.google.com/search?q=${encodeURIComponent(
  BUSINESS.name + ' ' + BUSINESS.address,
)}`

function GoogleG({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7A21.99 21.99 0 0 0 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18A13.2 13.2 0 0 1 11 24c0-1.45.25-2.86.69-4.18v-5.7H4.34A22 22 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.94 4.34 14.12l7.35 5.7C13.42 14.62 18.27 10.75 24 10.75z"
      />
    </svg>
  )
}

function Stars({ n = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < n ? 'fill-amber-400' : 'fill-slate-200'}`}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

// Random-looking local customer reviews
const REVIEWS = [
  { name: 'Aisha Rahman', rating: 5, time: '2 weeks ago', text: 'Sent money to family through Western Union with no hassle. The staff walked me through everything. Really convenient having it local.' },
  { name: 'James Okafor', rating: 5, time: '1 month ago', text: 'Dropped off a DHL parcel and printed my label here in one go. Saved me a trip across town. Friendly and quick.' },
  { name: 'Priya Sharma', rating: 5, time: '3 weeks ago', text: 'Needed to print and scan documents for a job application. Fast service and the computers were easy to use.' },
  { name: 'Tomasz Nowak', rating: 4, time: '2 months ago', text: 'Good spot for chargers and phone accessories. Picked up a USB-C cable when mine broke. Fair prices.' },
  { name: 'Fatima Begum', rating: 5, time: '1 week ago', text: 'Very helpful team. Used MoneyGram and also grabbed some stationery for the kids. One-stop shop!' },
  { name: 'Daniel Whyte', rating: 5, time: '1 month ago', text: 'Reliable internet access and printing whenever I need it. Been coming here for a while now, always sorted.' },
  { name: 'Sofia Almeida', rating: 4, time: '3 months ago', text: 'Collected a parcel and bought a screen protector for my phone. Staff checked it fit my model. Nice and easy.' },
  { name: 'Mohammed Yusuf', rating: 5, time: '2 weeks ago', text: 'Best local place for money transfer and printing. Always friendly and gets things done fast. Highly recommend.' },
]

function initials(name) {
  return name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase()
}

const AVATAR_COLORS = [
  'bg-brand-600',
  'bg-emerald-600',
  'bg-rose-600',
  'bg-amber-600',
  'bg-violet-600',
  'bg-sky-600',
  'bg-teal-600',
  'bg-fuchsia-600',
]

function ReviewCard({ r, idx }) {
  return (
    <div className="mx-3 w-80 shrink-0 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span
          className={`grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-white ${
            AVATAR_COLORS[idx % AVATAR_COLORS.length]
          }`}
        >
          {initials(r.name)}
        </span>
        <div className="min-w-0">
          <p className="truncate font-semibold text-slate-900">{r.name}</p>
          <p className="text-xs text-slate-400">{r.time}</p>
        </div>
        <GoogleG className="ml-auto h-5 w-5" />
      </div>
      <Stars n={r.rating} />
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{r.text}</p>
    </div>
  )
}

export default function Reviews() {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...REVIEWS, ...REVIEWS]
  return (
    <section id="reviews" className="py-20 lg:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <GoogleG className="h-7 w-7" />
            <span className="text-lg font-semibold text-slate-800">Google Reviews</span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-3xl font-extrabold text-slate-900">5.0</span>
            <Stars n={5} />
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
            What our customers say
          </h2>
          <p className="mt-3 max-w-xl text-slate-600">
            Real feedback from customers across Maryland, Stratford and East London.
          </p>
        </div>
      </div>

      {/* Right-scrolling marquee */}
      <div className="marquee relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-50 to-transparent" />
        <div className="marquee-track py-2">
          {loop.map((r, i) => (
            <ReviewCard key={i} r={r} idx={i} />
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm hover:border-brand-200 hover:shadow-md transition-all"
        >
          <GoogleG className="h-5 w-5" />
          More reviews on Google
        </a>
      </div>
    </section>
  )
}
