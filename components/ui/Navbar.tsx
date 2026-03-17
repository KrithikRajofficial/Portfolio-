'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const links = ['Hero','About','Projects','Skills','Experience','Contact']
export default function Navbar({ theme, toggleTheme }: { theme: string, toggleTheme: ()=>void }) {
  const [scrolled,setScrolled]=useState(false)
  const [hidden,setHidden]=useState(false)
  const [active,setActive]=useState('Hero')
  const [lastY,setLastY]=useState(0)
  const [menuOpen,setMenuOpen]=useState(false)
  useEffect(()=>{
    const fn=()=>{
      const y=window.scrollY;setScrolled(y>40);setHidden(y>lastY&&y>80&&!menuOpen);setLastY(y)
      links.forEach(id=>{const el=document.getElementById(id.toLowerCase());if(!el)return;const t=el.offsetTop-120;if(y>=t&&y<t+el.offsetHeight)setActive(id)})
    }
    window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn)
  },[lastY,menuOpen])

  const isDark = theme === 'dark'

  return(
    <>
      <motion.nav animate={{y:hidden?'-100%':0}} transition={{duration:0.3}}
        style={{position:'fixed',top:0,left:0,right:0,zIndex:50,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px 40px',background:scrolled?'var(--nav-bg)':'transparent',backdropFilter:scrolled?'blur(20px)':'none',borderBottom:scrolled?'1px solid var(--border)':'none',transition:'all .3s'}}>
        {/* Logo */}
        <span style={{fontFamily:'Orbitron,sans-serif',fontWeight:900,fontSize:20,background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>KR</span>

        {/* Desktop links */}
        <ul className="nav-links" style={{display:'flex',gap:32,listStyle:'none'}}>
          {links.map(l=><li key={l}><a href={'#'+l.toLowerCase()} style={{fontSize:11,letterSpacing:3,textTransform:'uppercase',fontWeight:700,color:active===l?'var(--cyan)':'var(--muted)',textDecoration:'none',transition:'color .3s'}}>{l}</a></li>)}
        </ul>

        {/* Right: theme toggle + hire me */}
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          {/* Day/Night toggle */}
          <button onClick={toggleTheme}
            style={{width:44,height:44,borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',background:'var(--surface)',border:'1px solid var(--border)',cursor:'pointer',fontSize:20,transition:'all .3s'}}
            title={isDark?'Switch to light mode':'Switch to dark mode'}>
            {isDark ? '☀️' : '🌙'}
          </button>
          {/* Hire me — desktop only */}
          <a href="mailto:krithikraj@email.com" className="desktop-only"
            style={{padding:'10px 20px',background:'rgba(139,92,246,0.08)',border:'1px solid rgba(139,92,246,0.4)',borderRadius:8,color:'var(--violet)',fontSize:11,letterSpacing:2,textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>
            Hire Me
          </a>
          {/* Mobile hamburger */}
          <button className="mobile-menu-btn"
            onClick={()=>setMenuOpen(p=>!p)}
            style={{width:44,height:44,borderRadius:12,alignItems:'center',justifyContent:'center',background:'var(--surface)',border:'1px solid var(--border)',cursor:'pointer',flexDirection:'column',gap:5,padding:12}}>
            <span style={{display:'block',width:20,height:2,background:'var(--text)',borderRadius:2,transition:'all .3s',transform:menuOpen?'rotate(45deg) translate(5px,5px)':'none'}}/>
            <span style={{display:'block',width:20,height:2,background:'var(--text)',borderRadius:2,transition:'all .3s',opacity:menuOpen?0:1}}/>
            <span style={{display:'block',width:20,height:2,background:'var(--text)',borderRadius:2,transition:'all .3s',transform:menuOpen?'rotate(-45deg) translate(5px,-5px)':'none'}}/>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu"
            initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}
            style={{position:'fixed',top:74,left:16,right:16,zIndex:49,background:'var(--nav-bg)',backdropFilter:'blur(20px)',border:'1px solid var(--border)',borderRadius:16,padding:'20px 24px',display:'flex',flexDirection:'column',gap:4}}>
            {links.map(l=>(
              <a key={l} href={'#'+l.toLowerCase()} onClick={()=>setMenuOpen(false)}
                style={{padding:'12px 16px',borderRadius:10,fontSize:13,letterSpacing:2,textTransform:'uppercase',fontWeight:700,color:active===l?'var(--cyan)':'var(--text)',textDecoration:'none',background:active===l?'rgba(6,182,212,0.08)':'transparent',transition:'all .2s'}}>
                {l}
              </a>
            ))}
            <a href="mailto:krithikraj@email.com"
              style={{marginTop:8,padding:'12px 16px',borderRadius:10,fontSize:12,letterSpacing:2,textTransform:'uppercase',fontWeight:700,color:'white',textDecoration:'none',background:'linear-gradient(135deg,var(--violet),var(--cyan))',textAlign:'center'}}>
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
