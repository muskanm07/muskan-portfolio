import { Zap, Paintbrush, TrendingUp, Code2 } from 'lucide-react'

const values = [
  {
    icon: Paintbrush,
    eyebrow: 'For Founders & Startups',
    title: 'Your idea deserves a UI that sells itself',
    body: 'You have a product vision but your MVP looks like it was built in 2010. I translate your idea into a fast, modern interface that makes investors and users say "wow" before you say a word.',
    tag: 'Landing pages · MVPs · Dashboards',
    color: '#e8c547',
  },
  {
    icon: Zap,
    eyebrow: 'For Businesses',
    title: 'Slow or ugly websites lose real money',
    body: 'A site that loads slow or looks amateurish sends customers straight to your competitor. I build clean, performant React frontends that keep people engaged and convert them into leads.',
    tag: 'React Apps · Redesigns · Speed fixes',
    color: '#a78bfa',
  },
  {
    icon: TrendingUp,
    eyebrow: 'For Employers',
    title: 'You get a junior dev with a senior mindset',
    body: 'I don\'t clock out at the "good enough" line. I ask why, I read docs properly, I care about the user experience — not just the ticket. You\'ll spend less time fixing my work and more time shipping.',
    tag: 'Full attention · Fast learner · Ownership',
    color: '#4ade80',
  },
  {
    icon: Code2,
    eyebrow: 'My Craft',
    title: 'Pixel-perfect code that actually runs clean',
    body: 'React + Tailwind + JavaScript is my stack. I write readable, reusable components — not spaghetti that only I can understand. Your codebase will be better for having me in it.',
    tag: 'React · Tailwind · JS · Git',
    color: '#fb923c',
  },
]

export default function WhatIDo() {
  return (
    <section
      id="work"
      style={{ background: 'var(--surface)', padding: '0' }}
    >
      <div className="section-pad">

        {/* Section header */}
        <div style={{ marginBottom: '64px' }}>
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
            What I Actually Do
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              lineHeight: 1.15,
              maxWidth: '560px',
            }}
          >
            I don&apos;t just write code.{' '}
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
              I solve problems.
            </span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '16px', marginTop: '16px', maxWidth: '500px', lineHeight: 1.7 }}>
            Here&apos;s how I create real value — not a list of technologies, but the actual impact I bring to the table.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {values.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="card-base"
                style={{ padding: '28px' }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <Icon size={20} style={{ color: item.color }} />
                </div>

                {/* Eyebrow */}
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: item.color,
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  {item.eyebrow}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: '700',
                    color: 'var(--text)',
                    lineHeight: 1.35,
                    marginBottom: '12px',
                  }}
                >
                  {item.title}
                </h3>

                {/* Body */}
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px' }}>
                  {item.body}
                </p>

                {/* Tag pill */}
                <span
                  style={{
                    fontSize: '12px',
                    color: item.color,
                    background: `${item.color}12`,
                    padding: '4px 10px',
                    borderRadius: '999px',
                    fontWeight: '500',
                  }}
                >
                  {item.tag}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
