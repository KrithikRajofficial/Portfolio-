'use client'
import { useState, useEffect } from 'react'
import Cursor from '../components/ui/Cursor'
import Navbar from '../components/ui/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Experience from '../components/sections/Experience'
import Contact from '../components/sections/Contact'

export default function Home() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  return (
    <>
      <div className="noise"/>
      <Cursor/>
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Contact/>
      </main>
      <footer style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16,padding:'clamp(20px,4vw,36px) clamp(20px,5vw,64px)',background:'var(--bg)',borderTop:'1px solid var(--border)',transition:'background .4s'}}>
        <span style={{fontFamily:'Orbitron,sans-serif',fontWeight:900,fontSize:'clamp(14px,2vw,18px)',background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',letterSpacing:4}}>KRITHIK RAJ</span>
        <p style={{fontSize:13,color:'var(--muted)'}}>2026 · Robotics Engineer · Next.js + Three.js</p>
        <div style={{display:'flex',gap:10}}>
          {[{l:'in',h:'https://linkedin.com/in/krithikraj'},{l:'gh',h:'https://github.com/KrithikRajofficial'},{l:'@',h:'mailto:krithikraj@email.com'}].map(({l,h})=>(
            <a key={l} href={h} target={h.startsWith('http')?'_blank':undefined} rel="noreferrer"
              style={{width:36,height:36,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:10,border:'1px solid var(--border)',fontSize:12,fontWeight:700,color:'var(--muted)',textDecoration:'none',transition:'all .3s'}}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLAnchorElement;el.style.borderColor='var(--violet)';el.style.color='var(--violet)'}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLAnchorElement;el.style.borderColor='var(--border)';el.style.color='var(--muted)'}}>
              {l}
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}
