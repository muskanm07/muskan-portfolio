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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-[rgba(15,14,23,0.95)] backdrop-blur-md border-b border-[var(--border)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline">
          <span className="w-8 h-8 rounded-full bg-[var(--accent)] text-[var(--bg)] flex items-center justify-center text-[13px] font-bold flex-shrink-0">
            M
          </span>
          <span className="font-semibold tracking-[-0.02em] text-[var(--text)]">
            Muskan
            <span className="text-[var(--accent)]">.</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[var(--muted)] text-sm font-medium no-underline transition-colors duration-200 hover:text-[var(--accent)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA — desktop */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-[var(--accent)] text-[var(--bg)] px-5 py-2 rounded-full text-[13px] font-bold no-underline transition-opacity duration-200 hover:opacity-80"
        >
          Hire Me
        </a>

        {/* Mobile hamburger menu trigger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center bg-transparent border-none text-[var(--text)] cursor-pointer p-1"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <div className="absolute top-full left-0 right-0 w-full box-border bg-[rgba(21,19,31,0.98)] border-b border-[var(--border)] px-6 pt-2 pb-6 flex flex-col gap-1 md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-[var(--muted)] text-[15px] font-medium no-underline py-3 border-b border-[var(--border)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block bg-[var(--accent)] text-[var(--bg)] px-5 py-3 rounded-full text-sm font-bold no-underline text-center mt-4"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}