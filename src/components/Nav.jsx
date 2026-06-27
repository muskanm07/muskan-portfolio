import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'all 0.3s ease',
    background: scrolled ? 'rgba(15,14,23,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--border)' : 'none',
  }

  const innerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  const logoCircle = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: 'var(--accent)',
    color: 'var(--bg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    fontWeight: '700',
    flexShrink: 0,
  }

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <span style={logoCircle}>M</span>
          <span style={{ fontWeight: '600', letterSpacing: '-0.02em', color: 'var(--text)' }}>
            Muskan
            <span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="hidden-mobile"
        >
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{ color: 'var(--muted)', fontSize: '14px', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA — desktop */}
        <a
          href="#contact"
          className="hidden-mobile"
          style={{
            background: 'var(--accent)',
            color: 'var(--bg)',
            padding: '8px 20px',
            borderRadius: '999px',
            fontSize: '13px',
            fontWeight: '700',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8' }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="show-mobile"
          style={{ background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', padding: '4px' }}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            background: 'rgba(15,14,23,0.98)',
            borderTop: '1px solid var(--border)',
           padding: '20px 24px 28px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ color: 'var(--muted)', fontSize: '14px', fontWeight: '500', textDecoration: 'none', padding: '4px 0' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              background: 'var(--accent)',
              color: 'var(--bg)',
              padding: '10px 20px',
              borderRadius: '999px',
              fontSize: '13px',
              fontWeight: '700',
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: '8px',
            }}
          >
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
