import { useEffect, useRef } from 'react'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/muskanm07', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/muskan-maurya-1344202b2/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:muskanmaurya553@email.com', label: 'Email' },
]

const phrases = [
  'I build UIs that feel alive.',
  'I turn ideas into real products.',
  'I make the web work beautifully.',
  'I care about the people using it.',
]

export default function Hero() {
  const typeRef = useRef(null)
  const stateRef = useRef({ phraseIndex: 0, charIndex: 0, deleting: false, pausing: false })

  useEffect(() => {
    let timer

    const tick = () => {
      if (!typeRef.current) return
      const s = stateRef.current
      const current = phrases[s.phraseIndex]

      if (s.pausing) {
        s.pausing = false
        s.deleting = true
        timer = setTimeout(tick, 60)
        return
      }

      if (!s.deleting) {
        s.charIndex += 1
        typeRef.current.textContent = current.slice(0, s.charIndex)
        if (s.charIndex === current.length) {
          s.pausing = true
          timer = setTimeout(tick, 1800)
        } else {
          timer = setTimeout(tick, 65)
        }
      } else {
        s.charIndex -= 1
        typeRef.current.textContent = current.slice(0, s.charIndex)
        if (s.charIndex === 0) {
          s.deleting = false
          s.phraseIndex = (s.phraseIndex + 1) % phrases.length
          timer = setTimeout(tick, 400)
        } else {
          timer = setTimeout(tick, 35)
        }
      }
    }

    timer = setTimeout(tick, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '100px 24px 64px',
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Ambient glow blob */}
      <div
        style={{
          position: 'absolute',
          top: '120px',
          right: '-80px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.18), rgba(232,197,71,0.08))',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Available badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
          <span style={{ position: 'relative', display: 'inline-flex', width: '10px', height: '10px' }}>
            <span
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: 'var(--green)',
                opacity: 0.75,
                animation: 'ping 1.5s ease-in-out infinite',
              }}
            />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
          </span>
          <span style={{ color: 'var(--green)', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Open to work &amp; freelance projects
          </span>
        </div>

        {/* Main headline */}
        <h1 style={{ lineHeight: 1.1, marginBottom: '16px' }}>
          <span style={{ display: 'block', fontSize: 'clamp(40px, 8vw, 76px)', fontWeight: '900', letterSpacing: '-0.03em', color: 'var(--text)' }}>
            Hi, I&apos;m{' '}
            <span
              className="serif"
              style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #e8c547 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Muskan.
            </span>
          </span>
          <span
            style={{
              display: 'block',
              fontSize: 'clamp(28px, 5vw, 52px)',
              fontWeight: '700',
              letterSpacing: '-0.02em',
              color: 'var(--muted)',
              marginTop: '8px',
            }}
          >
            Frontend Developer
          </span>
        </h1>

        {/* Typewriter line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px', height: '36px' }}>
          <Sparkles size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
          <p style={{ fontSize: '18px', fontWeight: '500', color: 'var(--accent)' }}>
            <span ref={typeRef} />
            <span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
          </p>
        </div>

        {/* Human story */}
        <p
          style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: 'var(--muted)',
            maxWidth: '620px',
            marginBottom: '40px',
          }}
        >
          Fresh BCA grad (2026) with a builder&apos;s mindset — I don&apos;t just write code,
          I care about{' '}
          <span style={{ color: 'var(--text)', fontWeight: '600' }}>whether it actually works for people.</span>
          {' '}My goal isn&apos;t just a job — it&apos;s real experience building real things, so one day I can build my own.
          Right now, I&apos;m your{' '}
          <span style={{ color: 'var(--accent)', fontWeight: '600' }}>most motivated hire or collaborator</span>
          {' '}— I have everything to prove and nothing to phone in.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
          <a
            href="#projects"
            style={{
              background: 'var(--accent)',
              color: 'var(--bg)',
              padding: '13px 28px',
              borderRadius: '999px',
              fontWeight: '700',
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 0 32px rgba(232,197,71,0.25)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
          >
            See My Work
          </a>
          <a
            href="#contact"
            style={{
              background: 'transparent',
              color: 'var(--text)',
              padding: '13px 28px',
              borderRadius: '999px',
              fontWeight: '600',
              fontSize: '14px',
              textDecoration: 'none',
              border: '1px solid var(--border)',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent2)'; e.currentTarget.style.color = 'var(--accent2)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)' }}
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--muted)', fontSize: '13px', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)' }}
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          opacity: 0.35,
        }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)' }}>scroll</span>
        <ArrowDown size={13} style={{ color: 'var(--muted)', animation: 'bounce 2s infinite' }} />
      </div>

      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.75; }
          70% { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
      `}</style>
    </section>
  )
}
