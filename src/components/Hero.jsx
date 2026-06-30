import { useEffect, useRef } from 'react'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import profileImg from '../../public/profile.png'

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
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-[100px] pb-16 max-w-[1100px] mx-auto relative"
    >
      {/* Ambient glow blob */}
      <div className="absolute top-[120px] -right-20 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.18), rgba(232,197,71,0.08))', filter: 'blur(60px)' }}
      />

      {/* Two column layout */}
      <div className="relative z-10 flex items-center gap-10 sm:gap-14 lg:gap-[60px] flex-wrap">

        {/* LEFT - all original content */}
        <div className="flex-1 min-w-0 basis-[300px]">

          {/* Available badge */}
          <div className="flex items-center gap-2 mb-8">
            <span className="relative inline-flex w-2.5 h-2.5">
              <span className="absolute inset-0 rounded-full bg-[var(--green)] opacity-75 animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--green)] inline-block" />
            </span>
            <span className="text-[var(--green)] text-xs font-semibold tracking-[0.08em] uppercase">
              Open to work &amp; freelance projects
            </span>
          </div>

          {/* Main headline */}
          <h1 className="leading-[1.1] mb-4">
            <span className="block text-[clamp(34px,8vw,76px)] font-black tracking-[-0.03em] text-[var(--text)]">
              Hi, I&apos;m{' '}
              <span
                className="serif italic"
                style={{
                  background: 'linear-gradient(135deg, #e8c547 0%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Muskan.
              </span>
            </span>
            <span className="block text-[clamp(24px,5vw,52px)] font-bold tracking-[-0.02em] text-[var(--muted)] mt-2">
              Frontend Developer
            </span>
          </h1>

          {/* Typewriter */}
          <div className="flex items-center gap-2 mb-7 h-9">
            <Sparkles size={16} className="text-[var(--accent)] flex-shrink-0" />
            <p className="text-lg font-medium text-[var(--accent)]">
              <span ref={typeRef} />
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Human story */}
          <p className="text-base leading-[1.8] text-[var(--muted)] max-w-[620px] mb-10">
            Fresh BCA grad (2026) with a builder&apos;s mindset — I don&apos;t just write code,
            I care about{' '}
            <span className="text-[var(--text)] font-semibold">whether it actually works for people.</span>
            {' '}My goal isn&apos;t just a job — it&apos;s real experience building real things, so one day I can build my own.
            Right now, I&apos;m your{' '}
            <span className="text-[var(--accent)] font-semibold">most motivated hire or collaborator</span>
            {' '}— I have everything to prove and nothing to phone in.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              className="bg-[var(--accent)] text-[var(--bg)] px-7 py-3 rounded-full font-bold text-sm no-underline transition-transform duration-200 hover:scale-105"
              style={{ boxShadow: '0 0 32px rgba(232,197,71,0.25)' }}
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="bg-transparent text-[var(--text)] px-7 py-3 rounded-full font-semibold text-sm no-underline border border-[var(--border)] transition-colors duration-200 hover:border-[var(--accent2)] hover:text-[var(--accent2)]"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[var(--muted)] text-[13px] font-medium no-underline transition-colors duration-200 hover:text-[var(--accent)]"
              >
                <Icon size={15} />
                {label}
              </a>
            ))}
          </div>

        </div>

        {/* RIGHT - profile image */}
        <div className="hidden lg:block">
          <div className="relative w-[320px] h-[320px]">
            <div
              className="absolute -inset-5 rounded-full z-0"
              style={{ background: 'radial-gradient(circle, rgba(232,197,71,0.15), rgba(167,139,250,0.08), transparent 70%)', filter: 'blur(20px)' }}
            />
            <div
              className="absolute -inset-0.5 rounded-full z-10"
              style={{ background: 'linear-gradient(135deg, #e8c547 0%, #a78bfa 60%, transparent 100%)' }}
            />
            <img
              src={profileImg}
              alt="Muskan Maura — Frontend Developer"
              className="absolute rounded-full object-cover z-20 border-[3px] border-[var(--bg)]"
              style={{
                inset: '3px',
                width: 'calc(100% - 6px)',
                height: 'calc(100% - 10px)',
                objectPosition: 'center',
              }}
            />
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-35">
        <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--muted)]">scroll</span>
        <ArrowDown size={13} className="text-[var(--muted)] animate-bounce" />
      </div>
    </section>
  )
}