'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS } from '../../lib/utils'
export default function Skills() {
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-100px'})
  return(
    <section id="skills" style={{padding:'144px 0',position:'relative',background:'var(--bg2)'}}>
      <div className="grid-bg"/>
      <div ref={ref} style={{maxWidth:1152,margin:'0 auto',padding:'0 64px'}}>
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} style={{marginBottom:64}}>
          <span className="section-label">// Toolkit</span>
          <h2 className="section-title">Technical <span className="grad-text">Skills</span></h2>
        </motion.div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:14}}>
          {SKILLS.map((sk: {icon:string,name:string},i: number)=>(
            <motion.div key={sk.name} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:i*0.04}} whileHover={{y:-6}} style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:16,display:'flex',flexDirection:'column',alignItems:'center',gap:12,padding:'20px 12px',transition:'border-color .3s'}} onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.borderColor='rgba(139,92,246,0.6)'}} onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.borderColor='var(--border)'}}>
              <span style={{fontSize:30}}>{sk.icon}</span>
              <span style={{fontSize:11,fontWeight:700,color:'var(--muted)',textAlign:'center'}}>{sk.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
