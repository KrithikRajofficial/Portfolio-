'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
const links = ['Hero','About','Projects','Skills','Experience','Contact']
export default function Navbar() {
  const [scrolled,setScrolled]=useState(false)
  const [hidden,setHidden]=useState(false)
  const [active,setActive]=useState('Hero')
  const [lastY,setLastY]=useState(0)
  useEffect(()=>{
    const fn=()=>{
      const y=window.scrollY;setScrolled(y>40);setHidden(y>lastY&&y>80);setLastY(y)
      links.forEach(id=>{const el=document.getElementById(id.toLowerCase());if(!el)return;const t=el.offsetTop-120;if(y>=t&&y<t+el.offsetHeight)setActive(id)})
    }
    window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn)
  },[lastY])
  return(
    <motion.nav animate={{y:hidden?'-100%':0}} transition={{duration:0.3}} style={{position:'fixed',top:0,left:0,right:0,zIndex:50,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px 64px',background:scrolled?'rgba(4,6,15,0.85)':'transparent',backdropFilter:scrolled?'blur(20px)':'none',borderBottom:scrolled?'1px solid var(--border)':'none',transition:'all .3s'}}>
      <span style={{fontFamily:'Orbitron,sans-serif',fontWeight:900,fontSize:20,background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>KR</span>
      <ul style={{display:'flex',gap:40,listStyle:'none'}}>
        {links.map(l=><li key={l}><a href={'#'+l.toLowerCase()} style={{fontSize:11,letterSpacing:3,textTransform:'uppercase',fontWeight:700,color:active===l?'var(--cyan)':'var(--muted)',textDecoration:'none',transition:'color .3s'}}>{l}</a></li>)}
      </ul>
      <a href="mailto:krithikraj@email.com" style={{padding:'10px 24px',background:'rgba(139,92,246,0.08)',border:'1px solid rgba(139,92,246,0.4)',borderRadius:8,color:'var(--violet)',fontSize:12,letterSpacing:2,textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>Hire Me</a>
    </motion.nav>
  )
}
