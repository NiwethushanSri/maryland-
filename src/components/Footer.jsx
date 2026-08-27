import { Link } from 'react-router-dom'
import { BUSINESS, NAV } from '../data'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="inline-flex rounded-lg bg-white p-3">
            <img src="/logo.png" alt="Maryland Internet Cafe" className="h-14 w-auto" />
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Internet, money transfer, mobile, printing &amp; parcel services in Stratford.
          </p>
          <p className="mt-3 text-sm font-medium text-brand-300">Local. Convenient. Connected.</p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) =>
              n.children ? (
                <li key={n.label}>
                  <span className="text-slate-400">{n.label}</span>
                  <ul className="mt-2 space-y-2 pl-3">
                    {n.children.map((c) => (
                      <li key={c.label}>
                        <Link to={c.to} className="hover:text-white transition-colors">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={n.label}>
                  <Link to={n.to} className="hover:text-white transition-colors">
                    {n.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Visit Us</h4>
          <address className="mt-4 not-italic text-sm text-slate-400 space-y-1">
            {BUSINESS.addressLines.map((l) => (
              <div key={l}>{l}</div>
            ))}
            <div className="pt-2">
              <a href={BUSINESS.phoneHref} className="hover:text-white">
                {BUSINESS.phone}
              </a>
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Maryland Internet Cafe Ltd. All rights reserved.</p>
          <p>Company No. {BUSINESS.company.number} · Registered in England &amp; Wales</p>
        </div>
      </div>
    </footer>
  )
}
