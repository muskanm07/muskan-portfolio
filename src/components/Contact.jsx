import { Mail, Linkedin, Github, MessageSquare, Briefcase, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const contactOptions = [
  {
    icon: Briefcase,
    title: 'Hiring me full-time?',
    body: 'I\'m actively looking for a frontend developer role where I can learn, grow, and ship real things. Freshers welcome environments — I\'ll outwork anyone.',
    cta: 'Send me a job offer',
    href: 'mailto:muskanmaurya553@email.com?subject=Job Opportunity for Muskan',
    color: '#e8c547',
  },
  {
    icon: MessageSquare,
    title: 'Got a freelance project?',
    body: 'Need a landing page, MVP, or a React app built fast and right? Tell me what you\'re building and let\'s talk scope, timeline, and budget.',
    cta: 'Let\'s discuss your project',
    href: 'mailto:muskanmaurya553@email.com?subject=Freelance Project Inquiry',
    color: '#a78bfa',
  },
]

const links = [
  { icon: Mail, label: 'muskanmaurya553@email.com', href: 'mailto:muskanmaurya553@email.com', copyText: 'muskanmaurya553@email.com' },
  { icon: Linkedin, label: 'linkedin.com/muskan', href: 'https://www.linkedin.com/in/muskan-maurya-1344202b2', copyText: null },
  { icon: Github, label: 'github.com/muskan', href: 'https://github.com/muskanm07', copyText: null },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('muskan@email.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" style={{ background: 'var(--bg)', padding: '0' }}>
      <div className="section-pad">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            Let&apos;s Work Together
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 5vw, 52px)',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            I&apos;m one message{' '}
            <span
              className="serif"
              style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #e8c547, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              away.
            </span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '16px', maxWidth: '460px', margin: '0 auto', lineHeight: 1.7 }}>
            Whether you want to hire me or build something together — I reply fast and I show up prepared.
          </p>
        </div>

        {/* Two contact cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          {contactOptions.map((opt) => {
            const Icon = opt.icon
            return (
              <div key={opt.title} className="card-base" style={{ padding: '32px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `${opt.color}18`,
                    border: `1px solid ${opt.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Icon size={20} style={{ color: opt.color }} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)', marginBottom: '12px', lineHeight: 1.3 }}>
                  {opt.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '24px' }}>
                  {opt.body}
                </p>
                <a
                  href={opt.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: opt.color,
                    color: 'var(--bg)',
                    padding: '11px 22px',
                    borderRadius: '999px',
                    fontSize: '13px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(1.03)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)' }}
                >
                  {opt.cta}
                </a>
              </div>
            )
          })}
        </div>

        {/* Quick links row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border)',
          }}
        >
          {links.map(({ icon: Icon, label, href, copyText }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <a
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  padding: '10px 16px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(232,197,71,0.3)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                <Icon size={15} />
                {label}
              </a>
              {copyText && (
                <button
                  onClick={handleCopy}
                  title="Copy email"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    padding: '10px 12px',
                    cursor: 'pointer',
                    color: copied ? 'var(--green)' : 'var(--muted)',
                    transition: 'color 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '13px', marginTop: '48px', opacity: 0.6 }}>
          Built by Muskan Maurya with React &amp; Tailwind · 2026
        </p>
      </div>
    </section>
  )
}
