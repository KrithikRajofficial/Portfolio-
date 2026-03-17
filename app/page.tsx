'use client'
import Cursor from '../components/ui/Cursor'
import Navbar from '../components/ui/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Experience from '../components/sections/Experience'
import Contact from '../components/sections/Contact'
export default function Home() {
  return (
    <>
      <div className="noise"/>
      <Cursor/>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Contact/>
      </main>
      <footer style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16,padding:'36px 64px',background:'var(--bg)',borderTop:'1px solid var(--border)'}}>
        <span style={{fontFamily:'Orbitron,sans-serif',fontWeight:900,fontSize:18,background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',letterSpacing:4}}>KRITHIK RAJ</span>
        <p style={{fontSize:14,color:'var(--muted)'}}>2026 · Robotics Engineer · Next.js + Three.js</p>
        <div style={{display:'flex',gap:12}}>
          {[{l:'in',h:'https://linkedin.com/in/krithikraj'},{l:'gh',h:'https://github.com/KrithikRajofficial'},{l:'@',h:'mailto:krithikraj@email.com'}].map(({l,h})=>(
            <a key={l} href={h} target={h.startsWith('http')?'_blank':undefined} rel="noreferrer" style={{width:36,height:36,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:10,border:'1px solid var(--border)',fontSize:12,fontWeight:700,color:'var(--muted)',textDecoration:'none'}}>{l}</a>
          ))}
        </div>
      </footer>
    </>
  )
}
