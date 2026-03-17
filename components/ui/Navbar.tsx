'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const links = ['Home','About','Skills','Projects','Experience','Contact']
export default function Navbar({ theme, toggleTheme }: { theme:string, toggleTheme:()=>void }) {
  const [scrolled,setScrolled]=useState(false)
  const [active,setActive]=useState('Home')
  const [lastY,setLastY]=useState(0)
  const [hidden,setHidden]=useState(false)
  const [menuOpen,setMenuOpen]=useState(false)
  useEffect(()=>{
    const fn=()=>{
      const y=window.scrollY;setScrolled(y>60);setHidden(y>lastY&&y>100&&!menuOpen);setLastY(y)
      links.forEach(id=>{const el=document.getElementById(id.toLowerCase());if(!el)return;const t=el.offsetTop-120;if(y>=t&&y<t+el.offsetHeight)setActive(id)})
    }
    window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn)
  },[lastY,menuOpen])
  const isDark=theme==='dark'
  const navBg = scrolled ? 'rgba(10,10,20,0.95)' : 'rgba(10,10,20,0.75)'
  return(<>
    <motion.nav animate={{y:hidden?'-100%':0}} transition={{duration:0.3}}
      style={{position:'fixed',top:0,left:0,right:0,zIndex:100,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px clamp(20px,8vw,10%)',background:navBg,backdropFilter:'blur(20px)',borderBottom:scrolled?'1px solid var(--border)':'none',transition:'all .3s'}}>
      {/* Logo */}
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <span style={{fontFamily:'Orbitron,sans-serif',fontWeight:900,fontSize:18,color:'var(--violet)',padding:'5px 11px',background:'var(--bg-card)',borderRadius:8,border:'1px solid var(--border)'}}>KR</span>
        <span className="hide-mobile" style={{fontWeight:700,fontSize:13,letterSpacing:1,color:'var(--text)'}}>KRITHIK RAJ</span>
      </div>
      {/* Desktop links */}
      <ul className="nav-links-wrap" style={{display:'flex',gap:28,listStyle:'none'}}>
        {links.map(l=>(
          <li key={l}><a href={'#'+l.toLowerCase()} style={{fontSize:13,fontWeight:500,color:active===l?'var(--violet)':'var(--muted)',textDecoration:'none',transition:'color .3s',position:'relative'}}
            onMouseEnter={e=>{(e.target as HTMLAnchorElement).style.color='var(--violet)'}}
            onMouseLeave={e=>{(e.target as HTMLAnchorElement).style.color=active===l?'var(--violet)':'var(--muted)'}}>
            {l}{active===l&&<span style={{position:'absolute',bottom:-6,left:0,right:0,height:2,background:'var(--violet)',borderRadius:2}}/>}
          </a></li>
        ))}
      </ul>
      {/* Right controls */}
      <div style={{display:'flex',alignItems:'center',gap:10}}>
        <button onClick={toggleTheme} title={isDark?'Light mode':'Dark mode'}
          style={{width:40,height:40,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',background:'var(--bg-card)',border:'1px solid var(--border)',cursor:'pointer',fontSize:18,transition:'all .3s'}}>
          {isDark?'☀️':'🌙'}
        </button>
        <a href="mailto:krithikraj@email.com" className="hide-mobile"
          style={{padding:'9px 20px',background:'linear-gradient(135deg,var(--violet),var(--cyan))',border:'none',borderRadius:24,color:'white',fontSize:12,letterSpacing:1,fontWeight:700,textDecoration:'none',transition:'all .3s'}}>
          Hire Me
        </a>
        <button className="mobile-menu-btn" onClick={()=>setMenuOpen(p=>!p)}
          style={{width:40,height:40,borderRadius:10,alignItems:'center',justifyContent:'center',background:'var(--bg-card)',border:'1px solid var(--border)',cursor:'pointer',flexDirection:'column',gap:5,padding:10}}>
          <span style={{display:'block',width:20,height:2,background:'var(--text)',borderRadius:2,transition:'all .3s',transform:menuOpen?'rotate(45deg) translate(5px,5px)':'none'}}/>
          <span style={{display:'block',width:20,height:2,background:'var(--text)',borderRadius:2,opacity:menuOpen?0:1,transition:'all .3s'}}/>
          <span style={{display:'block',width:20,height:2,background:'var(--text)',borderRadius:2,transition:'all .3s',transform:menuOpen?'rotate(-45deg) translate(5px,-5px)':'none'}}/>
        </button>
      </div>
    </motion.nav>
    <AnimatePresence>
      {menuOpen&&(
        <motion.div className="mobile-menu" initial={{opacity:0,y:-16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}}
          style={{position:'fixed',top:70,left:12,right:12,zIndex:99,background:'rgba(10,10,20,0.97)',backdropFilter:'blur(20px)',border:'1px solid var(--border)',borderRadius:16,padding:'16px 20px',display:'flex',flexDirection:'column',gap:4}}>
          {links.map(l=>(
            <a key={l} href={'#'+l.toLowerCase()} onClick={()=>setMenuOpen(false)}
              style={{padding:'12px 16px',borderRadius:10,fontSize:14,fontWeight:600,color:active===l?'var(--violet)':'var(--text)',textDecoration:'none',background:active===l?'rgba(185,131,255,0.08)':'transparent'}}>
              {l}
            </a>
          ))}
          <a href="mailto:krithikraj@email.com" style={{marginTop:8,padding:'12px 16px',borderRadius:10,background:'linear-gradient(135deg,var(--violet),var(--cyan))',color:'white',textDecoration:'none',fontWeight:700,textAlign:'center',fontSize:13}}>Hire Me</a>
        </motion.div>
      )}
    </AnimatePresence>
  </>)
}
