import { useLayoutEffect, useState, useCallback, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { BrandMark } from './BrandMark'
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
      { label: 'System Start', to: '/system-start' },
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
      { label: 'Modulkatalog', to: '/katalog' },
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
            <span className="footer-brand-text">
              M³ Performance<span className="footer-trademark">®</span>
            </span>
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
