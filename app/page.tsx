'use client'
import { useState, useEffect } from 'react'
import Cursor from '../components/ui/Cursor'
import Navbar from '../components/ui/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
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
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
      </main>
      <footer style={{padding:'clamp(32px,5vw,56px) clamp(20px,8vw,10%)',background:'rgba(10,10,20,0.5)',borderTop:'1px solid var(--border)',transition:'background .4s'}}>
        <div style={{maxWidth:1400,margin:'0 auto',display:'flex',flexDirection:'column',alignItems:'center',gap:16}}>
          <div style={{display:'flex',gap:24}}>
            {[{l:'LinkedIn',h:'https://linkedin.com/in/krithikraj'},{l:'GitHub',h:'https://github.com/KrithikRajofficial'}].map(({l,h})=>(
              <a key={l} href={h} target="_blank" rel="noreferrer" style={{color:'var(--muted)',textDecoration:'none',fontSize:14,transition:'color .3s'}}
                onMouseEnter={e=>{(e.target as HTMLAnchorElement).style.color='var(--violet)'}}
                onMouseLeave={e=>{(e.target as HTMLAnchorElement).style.color='var(--muted)'}}>
                {l}
              </a>
            ))}
          </div>
          <p style={{fontSize:13,color:'var(--muted)'}}>Made with ❤️ using Next.js + Three.js + Framer Motion</p>
          <p style={{fontSize:12,color:'var(--muted)',opacity:.6}}>© 2026 Krithik Raj. All Rights Reserved.</p>
          <p style={{fontSize:11,color:'var(--muted)',opacity:.5}}>Designed & Built with Passion • Robotics Engineer • AI Enthusiast</p>
        </div>
      </footer>
    </>
  )
}
