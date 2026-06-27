import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const projects = [

    {
  number: '01',
  title: 'Custom CRM Pipeline Prototype',
  problem: 'Founders often struggle to manage leads because existing platforms are either too expensive or overly complex for early-stage teams.',
  solution: 'I built a clean, high-speed CRM interface using React to model how lead-status tracking should look, focusing on intuitive UX for sales teams to manage their pipeline at a glance.',
  impact: 'Created a modular UI framework for lead tracking · Designed for future-proof API integration · Reduced UI clutter for sales staff',
  stack: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
  liveUrl: 'https://personal-brand-lp.netlify.app/',
  githubUrl:'https://github.com/muskanm07/personal-brand-lp',
  accent: '#3b82f6',
  emoji: '📊',
},
  {
  number: '02',
  title: 'Climora: Real-Time Data Visualization Dashboard',
  problem: 'Users often struggle with clunky weather interfaces that are cluttered with ads and slow to update, making it hard to get actionable insights at a glance.',
  solution: 'I built Climora as a high-performance weather dashboard that consumes real-time APIs to provide a clean, hyper-responsive 5-day forecast. Focused on extreme load speed and data readability.',
  impact: 'Processed real-time API streams into an intuitive, card-based UI · Minimized latency for immediate data retrieval · Built for cross-device consistency',
  stack: ['React', 'Tailwind CSS', 'OpenWeatherMap API', 'Fetch','Router'],
  liveUrl: 'https://climora-by-muskan.netlify.app/',
  githubUrl: 'https://github.com/muskanm07/climora-weather-app',
  accent: '#3b82f6', 
  emoji: '🌤️',
},
 
    
]

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg)', padding: '0' }}>
      <div className="section-pad">

        {/* Header */}
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
            Selected Work
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
            Projects built with{' '}
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
              purpose.
            </span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '16px', marginTop: '16px', maxWidth: '480px', lineHeight: 1.7 }}>
            Every project below started with a real problem. Here&apos;s what I built and what it actually changed.
          </p>
        </div>

        {/* Project list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {projects.map((project) => (
            <div
              key={project.number}
              className="card-base"
              style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}
            >
              {/* Accent stripe */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '3px',
                  height: '100%',
                  background: project.accent,
                  borderRadius: '3px 0 0 3px',
                }}
              />

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '24px',
                  alignItems: 'start',
                }}
              >
                <div>
                  {/* Number + emoji + title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '800',
                        color: project.accent,
                        letterSpacing: '0.08em',
                        opacity: 0.7,
                      }}
                    >
                      {project.number}
                    </span>
                    <span style={{ fontSize: '22px' }}>{project.emoji}</span>
                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text)', letterSpacing: '-0.01em' }}>
                      {project.title}
                    </h3>
                  </div>

                  {/* Problem → Solution → Impact */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: '68px', paddingTop: '1px' }}>Problem</span>
                      <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65 }}>{project.problem}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', color: 'var(--accent2)', textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: '68px', paddingTop: '1px' }}>Built</span>
                      <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.65 }}>{project.solution}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', color: project.accent, textTransform: 'uppercase', letterSpacing: '0.08em', minWidth: '68px', paddingTop: '1px' }}>Impact</span>
                      <p style={{ fontSize: '14px', color: 'var(--text)', fontWeight: '500', lineHeight: 1.65 }}>{project.impact}</p>
                    </div>
                  </div>

                  {/* Tech stack pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '12px',
                          color: 'var(--muted)',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid var(--border)',
                          padding: '4px 10px',
                          borderRadius: '999px',
                          fontWeight: '500',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flexShrink: 0 }}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: project.accent,
                      textDecoration: 'none',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      background: `${project.accent}12`,
                      border: `1px solid ${project.accent}25`,
                      whiteSpace: 'nowrap',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = `${project.accent}22` }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = `${project.accent}12` }}
                  >
                    <ExternalLink size={13} />
                    Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--muted)',
                      textDecoration: 'none',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border)',
                      whiteSpace: 'nowrap',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)' }}
                  >
                    <Github size={13} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href="https://github.com/muskanm07"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: '600',
              color: 'var(--muted)',
              textDecoration: 'none',
              border: '1px solid var(--border)',
              padding: '12px 24px',
              borderRadius: '999px',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent2)'; e.currentTarget.style.borderColor = 'var(--accent2)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
          >
            See all projects on GitHub
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
