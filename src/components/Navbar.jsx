import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BUSINESS, NAV } from '../data'
import { PhoneIcon } from './Icons'

function NavItem({ item, onClick, className }) {
  const { pathname } = useLocation()
  const isRoute = !item.to.includes('#')
  const active = isRoute && pathname === item.to
  return (
    <Link
      to={item.to}
      onClick={onClick}
      className={`${className} ${active ? 'text-brand-700' : ''}`}
    >
      {item.label}
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Maryland Internet Cafe — home">
            <img
              src="/logo.png"
              alt="Maryland Internet Cafe"
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV.map((n) => (
              <NavItem
                key={n.label}
                item={n}
                className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors"
              />
            ))}
          </nav>

          <a
            href={BUSINESS.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-800 transition-colors"
          >
            <PhoneIcon className="h-4 w-4" width="16" height="16" />
            {BUSINESS.phone}
          </a>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <nav className="px-4 py-3 space-y-1">
            {NAV.map((n) => (
              <NavItem
                key={n.label}
                item={n}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              />
            ))}
            <a
              href={BUSINESS.phoneHref}
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-brand-700 px-3 py-2 text-sm font-semibold text-white"
            >
              <PhoneIcon className="h-4 w-4" width="16" height="16" /> {BUSINESS.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
