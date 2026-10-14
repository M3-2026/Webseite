import { useLayoutEffect, useState, useCallback, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { BrandMark } from './BrandMark'
import { contact } from '../content'
import { useUi } from '../copy'

function scrollToPageStart() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target) {
        target.scrollIntoView({ block: 'start', behavior: 'auto' })
        return
      }
    }

    const main = document.querySelector('main')
    if (main instanceof HTMLElement) {
      if (!main.hasAttribute('tabindex')) main.tabIndex = -1
      main.focus({ preventScroll: true })
    }

    scrollToPageStart()
    const frame = window.requestAnimationFrame(() => scrollToPageStart())
    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

/* ─── Menu Data ─── */
interface MenuItem {
  label: string
  to: string
}
interface MenuCategory {
  title: string
  items: MenuItem[]
}

const menuCategories: MenuCategory[] = [
  {
    title: 'System',
    items: [
      { label: 'Startseite', to: '/' },
    ],
  },
  {
    title: 'Säulen',
    items: [
      { label: 'M¹ Food – Metabolismus', to: '/metabolism' },
      { label: 'M² Move – Biomechanik', to: '/biomechanics' },
      { label: 'M³ Repeat – Mindset', to: '/mental' },
    ],
  },
  {
    title: 'Services',
    items: [
      { label: 'Booking', to: '/buchen' },
      { label: 'Über Michel', to: '/ueber-mich' },
      { label: 'Kontakt', to: '/kontakt' },
      { label: 'Blog', to: '/blog' },
    ],
  },
  {
    title: 'Rechtliches',
    items: [
      { label: 'Impressum', to: '/impressum' },
      { label: 'Datenschutz', to: '/datenschutz' },
    ],
  },
]

/* ─── Burger Menu Component ─── */
function BurgerMenu() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const toggle = useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
  }, [])

  // Close on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, close])

  return (
    <>
      <button
        type="button"
        className={`nav-burger${open ? ' nav-burger--open' : ''}`}
        onClick={toggle}
        aria-expanded={open}
        aria-controls="nav-drawer"
        aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
      >
        <span className="nav-burger-line" />
        <span className="nav-burger-line" />
        <span className="nav-burger-line" />
      </button>

      {/* Backdrop */}
      <div
        className={`nav-backdrop${open ? ' nav-backdrop--visible' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Off-Canvas Drawer */}
      <nav
        id="nav-drawer"
        className={`nav-drawer${open ? ' nav-drawer--open' : ''}`}
        aria-label="Hauptnavigation"
      >
        <div className="nav-drawer-inner">
          {menuCategories.map((cat) => (
            <div className="nav-drawer-group" key={cat.title}>
              <span className="nav-drawer-cat">{cat.title}</span>
              <ul className="nav-drawer-list">
                {cat.items.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={`nav-drawer-link${location.pathname === item.to ? ' nav-drawer-link--active' : ''}`}
                      onClick={close}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </>
  )
}

export function Layout() {
  const t = useUi()

  return (
    <>
      <ScrollToTop />
      <header className="nav">
        <div className="nav-controls">
          <BurgerMenu />
        </div>
        <Link className="brand" to="/" aria-label="M³ Performance">
          <BrandMark />
        </Link>
        <div className="nav-actions">
          <Link
            className="nav-secondary-link"
            to="/ueber-mich"
          >
            About
          </Link>
          <Link className="btn btn-gold nav-btn-booking" to="/buchen">
            <span className="nav-btn-booking-full">{t.bookMichel}</span>
            <span className="nav-btn-booking-short">{t.bookMichelShort}</span>
          </Link>
        </div>
      </header>
      <Outlet />
      <footer className="footer footer--minimal">
        <div className="wrap footer-minimal-wrap">
          <div className="footer-side footer-side--left">
            <Link to="/impressum" onClick={scrollToPageStart} className="footer-corner-link">
              {t.imprint}
            </Link>
          </div>
          <div className="footer-center">
            <nav className="footer-social" aria-label="Social Media">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={contact.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </nav>
          </div>
          <div className="footer-side footer-side--right">
            <Link to="/datenschutz" onClick={scrollToPageStart} className="footer-corner-link">
              {t.privacy}
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
