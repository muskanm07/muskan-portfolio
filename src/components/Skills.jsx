const skillGroups = [
  {
    label: 'I build with',
    color: '#e8c547',
    skills: [
      { name: 'React', level: 85, note: 'Components, hooks, state management' },
      { name: 'JavaScript (ES6+)', level: 82, note: 'Async, DOM, modern patterns' },
      { name: 'Tailwind CSS', level: 90, note: 'My go-to styling system' },
      { name: 'HTML & CSS', level: 92, note: 'Semantic, accessible, responsive' },
    ],
  },
  {
    label: 'I work with',
    color: '#a78bfa',
    skills: [
      { name: 'Git & GitHub', level: 78, note: 'Branches, PRs, collaboration' },
      { name: 'Vite', level: 80, note: 'Fast dev builds and bundling' },
      { name: 'Figma', level: 70, note: 'Can read & translate any design' },
      { name: 'REST APIs', level: 72, note: 'Fetch, axios, async data' },
    ],
  },
  {
    label: 'I bring',
    color: '#4ade80',
    skills: [
      { name: 'Attention to Detail', level: 95, note: 'Pixel-perfect & UX-aware' },
      { name: 'Fast Learning', level: 93, note: 'New stack? Give me a week' },
      { name: 'Communication', level: 88, note: 'I explain what I\'m doing' },
      { name: 'Ownership', level: 90, note: 'I see tasks through to done' },
    ],
  },
]

function SkillBar({ name, level, note, color }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
        <div>
          <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text)' }}>{name}</span>
          <span style={{ fontSize: '12px', color: 'var(--muted)', marginLeft: '10px' }}>{note}</span>
        </div>
        <span style={{ fontSize: '12px', fontWeight: '700', color: color }}>{level}%</span>
      </div>
      <div
        style={{
          height: '4px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '999px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            borderRadius: '999px',
            transition: 'width 1s ease',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--surface)', padding: '0' }}>
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
            Skills &amp; Tools
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              lineHeight: 1.15,
              maxWidth: '500px',
            }}
          >
            Honest about{' '}
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
              where I am.
            </span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '16px', marginTop: '16px', maxWidth: '480px', lineHeight: 1.7 }}>
            No inflated buzzwords. Here&apos;s a real picture of my skills — what I&apos;m strong in and what I&apos;m actively growing.
          </p>
        </div>

        {/* Skill groups */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {skillGroups.map((group) => (
            <div key={group.label} className="card-base" style={{ padding: '28px' }}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: '700',
                  color: group.color,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: group.color,
                    display: 'inline-block',
                  }}
                />
                {group.label}
              </div>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} color={group.color} />
              ))}
            </div>
          ))}
        </div>

        {/* Currently learning banner */}
        <div
          style={{
            marginTop: '32px',
            padding: '20px 28px',
            borderRadius: '14px',
            background: 'rgba(232,197,71,0.06)',
            border: '1px solid rgba(232,197,71,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: '20px' }}>📚</span>
          <div>
            <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--accent)', marginBottom: '2px' }}>Currently learning</p>
            <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
              TypeScript · Next.js · Node.js basics · Framer Motion — because standing still isn&apos;t an option.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
