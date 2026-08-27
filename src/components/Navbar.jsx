import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BUSINESS, NAV } from '../data'
import * as Icons from './Icons'
import { PhoneIcon } from './Icons'

function NavItem({ item, onClick, className }) {
  const { pathname } = useLocation()
  const isRoute = !item.to.includes('#')
  const active = isRoute && pathname === item.to
  return (
    <Link
      to={item.to}
      onClick={onClick}
      className={`${className} ${active ? 'text-brand-700 is-active' : ''}`}
    >
      {item.label}
    </Link>
  )
}

function NavDropdown({ item }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const anyActive = item.children.some((c) => pathname === c.to)
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`nav-underline inline-flex items-center gap-1 text-lg font-semibold transition-colors hover:text-brand-700 ${
          anyActive ? 'text-brand-700 is-active' : 'text-slate-700'
        }`}
      >
        {item.label}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
          <div className="grid w-[600px] max-w-[90vw] grid-cols-2 gap-1 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl">
            {item.children.map((c) => {
              const Icon = Icons[c.icon] || Icons.CheckIcon
              return (
                <Link
                  key={c.label}
                  to={c.to}
                  className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover/item:bg-brand-700 group-hover/item:text-white">
                    <Icon className="h-5 w-5" width="20" height="20" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-900 group-hover/item:text-brand-700">
                      {c.label}
                    </span>
                    {c.desc && (
                      <span className="mt-0.5 block text-xs leading-snug text-slate-500">
                        {c.desc}
                      </span>
                    )}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 sm:h-24 items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Maryland Internet Cafe, home">
            <img
              src="/logo.png"
              alt="Maryland Internet Cafe"
              className="h-14 sm:h-16 lg:h-20 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) =>
              n.children ? (
                <NavDropdown key={n.label} item={n} />
              ) : (
                <NavItem
                  key={n.label}
                  item={n}
                  className="nav-underline text-lg font-semibold text-slate-700 hover:text-brand-700 transition-colors"
                />
              ),
            )}
          </nav>

          <a
            href={BUSINESS.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-brand-800 transition-colors"
          >
            <PhoneIcon className="h-4 w-4" width="16" height="16" />
            {BUSINESS.phone}
          </a>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2.5 text-slate-600 hover:bg-slate-100"
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
            {NAV.map((n) =>
              n.children ? (
                <div key={n.label} className="pt-1">
                  <p className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {n.label}
                  </p>
                  {n.children.map((c) => (
                    <NavItem
                      key={c.label}
                      item={c}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                    />
                  ))}
                </div>
              ) : (
                <NavItem
                  key={n.label}
                  item={n}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                />
              ),
            )}
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
