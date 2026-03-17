'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS } from '../../lib/utils'
export default function Skills() {
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-100px'})
  return(
    <section id="skills" className="section-pad" style={{padding:'120px 0',position:'relative',background:'var(--bg2)',transition:'background .4s'}}>
      <div className="grid-bg"/>
      <div ref={ref} style={{maxWidth:1100,margin:'0 auto',padding:'0 clamp(20px,5vw,64px)'}}>
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} style={{marginBottom:48}}>
          <span className="section-label">// Toolkit</span>
          <h2 className="section-title">Technical <span className="grad-text">Skills</span></h2>
        </motion.div>
        <div className="skills-grid" style={{display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:10}}>
          {SKILLS.map((sk:{icon:string,name:string},i:number)=>(
            <motion.div key={sk.name} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:i*0.04}} whileHover={{y:-5}}
              style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:14,display:'flex',flexDirection:'column',alignItems:'center',gap:10,padding:'16px 8px',transition:'border-color .3s,background .4s'}}
              onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.borderColor='rgba(139,92,246,0.6)'}}
              onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.borderColor='var(--border)'}}>
              <span style={{fontSize:26}}>{sk.icon}</span>
              <span style={{fontSize:10,fontWeight:700,color:'var(--muted)',textAlign:'center'}}>{sk.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
