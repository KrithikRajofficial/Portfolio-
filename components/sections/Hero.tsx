'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
const SphereScene = dynamic(() => import('../three/SphereScene'), { ssr: false })
const roles = ['ROS 2 Developer','Autonomous Systems Engineer','Computer Vision Specialist','SLAM Expert','Research Associate @ NCNR']
export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    let i=0,c=0,del=false
    let t: ReturnType<typeof setTimeout>
    const tick = () => {
      const cur=roles[i]; if(!typedRef.current) return
      if(!del){ typedRef.current.textContent=cur.slice(0,c+1); c++; if(c===cur.length){del=true;t=setTimeout(tick,2000);return} }
      else { typedRef.current.textContent=cur.slice(0,c-1); c--; if(c===0){del=false;i=(i+1)%roles.length} }
      t=setTimeout(tick,del?28:55)
    }
    t=setTimeout(tick,800); return()=>clearTimeout(t)
  },[])
  const cv={hidden:{},show:{transition:{staggerChildren:0.15,delayChildren:0.3}}}
  const iv={hidden:{opacity:0,y:40},show:{opacity:1,y:0,transition:{duration:0.8,ease:[0.16,1,0.3,1] as any}}}
  return (
    <section id="hero" style={{position:'relative',height:'100vh',display:'grid',gridTemplateColumns:'1fr 1fr',alignItems:'center',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,zIndex:0}}><SphereScene /></div>
      <div style={{position:'absolute',inset:0,zIndex:1,pointerEvents:'none',background:'linear-gradient(90deg,rgba(4,6,15,0.95) 40%,rgba(4,6,15,0.3) 70%,transparent)'}} />
      <motion.div variants={cv} initial="hidden" animate="show" style={{position:'relative',zIndex:10,paddingLeft:80,paddingRight:40}}>
        <motion.div variants={iv} style={{display:'inline-flex',alignItems:'center',gap:8,marginBottom:32}}>
          <span style={{display:'flex',alignItems:'center',gap:8,padding:'8px 16px',borderRadius:100,fontSize:11,letterSpacing:3,textTransform:'uppercase',background:'rgba(139,92,246,0.06)',border:'1px solid rgba(139,92,246,0.2)',color:'var(--violet)'}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'var(--lime)',animation:'blink 1.5s ease infinite'}} />
            Seeking Roles
          </span>
        </motion.div>
        <motion.h1 variants={iv} style={{fontFamily:'Orbitron,sans-serif',fontSize:'clamp(52px,7vw,90px)',fontWeight:900,lineHeight:1,marginBottom:24}}>
          KRITHIK<br />
          <span style={{background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>RAJ</span>
        </motion.h1>
        <motion.p variants={iv} style={{fontSize:18,marginBottom:48,minHeight:32,color:'var(--muted)'}}>
          <span ref={typedRef} />
          <span style={{display:'inline-block',width:2,height:20,marginLeft:4,verticalAlign:'middle',background:'var(--cyan)',animation:'blink 1s ease infinite'}} />
        </motion.p>
        <motion.div variants={iv} style={{display:'flex',gap:16,flexWrap:'wrap'}}>
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="/assets/resume/Krithik_Raj_Resume.pdf" className="btn-ghost" target="_blank" rel="noreferrer">Resume</a>
        </motion.div>
      </motion.div>
    </section>
  )
}
