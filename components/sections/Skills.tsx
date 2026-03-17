'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILL_CATS, LEARNING } from '../../lib/utils'
export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return(
    <section id="skills" ref={ref} className="sec" style={{background:'var(--bg)',transition:'background .4s'}}>
      <div className="grid-bg"/>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} className="section-label" style={{textAlign:'center'}}>// Toolkit</motion.p>
        <motion.h2 initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.7}} className="section-title-styled">TECHNICAL SKILLS</motion.h2>
        <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:.1}} className="section-subtitle">My Engineering Toolkit</motion.p>

        {SKILL_CATS.map((cat,ci)=>(
          <motion.div key={cat.title} initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.6,delay:ci*.1}} style={{marginBottom:40}}>
            <h3 style={{fontSize:'clamp(1rem,2vw,1.4rem)',color:'var(--text)',marginBottom:20,paddingLeft:14,borderLeft:'4px solid var(--violet)'}}>{cat.title}</h3>
            <div className="skills-cat-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:12}}>
              {cat.skills.map((sk,i)=>(
                <motion.div key={sk} initial={{opacity:0,scale:.9}} animate={inView?{opacity:1,scale:1}:{}} transition={{duration:.4,delay:ci*.08+i*.04}}
                  whileHover={{y:-5,boxShadow:'var(--glow)'}}
                  style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:16,padding:'16px 12px',textAlign:'center',fontSize:'clamp(11px,1.4vw,14px)',fontWeight:500,cursor:'default',transition:'all .3s'}}>
                  {sk}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Currently Learning */}
        <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.7,delay:.4}} style={{marginTop:60}}>
          <h2 className="section-title-styled" style={{marginBottom:12}}>CURRENTLY LEARNING</h2>
          <p className="section-subtitle" style={{marginBottom:32}}>Expanding my expertise every day</p>
          <div className="three-col" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
            {LEARNING.map((item,i)=>(
              <motion.div key={item.title} initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.6,delay:.5+i*.1}}
                style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:20,padding:'clamp(20px,3vw,32px)',transition:'all .3s'}}
                whileHover={{y:-8,boxShadow:'var(--glow)'}}>
                <h3 style={{fontSize:'clamp(1rem,1.8vw,1.3rem)',color:'var(--violet)',marginBottom:10}}>{item.title}</h3>
                <p style={{color:'var(--muted)',fontSize:'clamp(12px,1.5vw,15px)',lineHeight:1.6}}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
