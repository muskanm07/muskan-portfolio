import Nav from './components/Nav'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <WhatIDo />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
