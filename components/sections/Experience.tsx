'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EXPERIENCE, AWARDS } from '../../lib/utils'
export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return(
    <section id="experience" ref={ref} className="sec" style={{background:'var(--bg)',transition:'background .4s'}}>
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} className="section-label" style={{textAlign:'center'}}>// Career</motion.p>
        <motion.h2 initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.7}} className="section-title-styled">PROFESSIONAL EXPERIENCE</motion.h2>
        <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:.1}} className="section-subtitle">My Career Journey</motion.p>

        {/* Timeline */}
        <div style={{position:'relative',maxWidth:900,margin:'0 auto 80px',paddingLeft:'clamp(32px,5vw,50px)'}}>
          <motion.div initial={{scaleY:0}} animate={inView?{scaleY:1}:{}} transition={{duration:1.4,delay:.3,ease:'easeOut'}}
            style={{position:'absolute',left:0,top:0,bottom:0,width:2,background:'linear-gradient(to bottom,var(--violet),var(--cyan),transparent)',transformOrigin:'top'}}/>
          {EXPERIENCE.map((exp:any,i:number)=>(
            <motion.div key={exp.role} initial={{opacity:0,x:-28}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.7,delay:.3+i*.18}} style={{position:'relative',marginBottom:40}}>
              <div style={{position:'absolute',left:'clamp(-40px,-5vw,-48px)',top:10,width:14,height:14,borderRadius:'50%',background:exp.color,border:'3px solid var(--bg)',boxShadow:'0 0 18px '+exp.color,zIndex:1}}/>
              <div style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:20,padding:'clamp(20px,3vw,28px)',transition:'all .3s'}}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLDivElement;el.style.transform='translateX(8px)';el.style.boxShadow='var(--glow)'}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLDivElement;el.style.transform='';el.style.boxShadow=''}}>
                <div style={{display:'flex',flexWrap:'wrap',alignItems:'flex-start',justifyContent:'space-between',gap:10,marginBottom:6}}>
                  <h3 style={{fontFamily:'Orbitron,sans-serif',fontSize:'clamp(14px,2vw,18px)',fontWeight:600}}>{exp.role}</h3>
                  {exp.date&&<span style={{fontFamily:'JetBrains Mono,monospace',fontSize:10,letterSpacing:2,padding:'4px 12px',borderRadius:100,background:'rgba(0,198,255,0.08)',border:'1px solid rgba(0,198,255,0.2)',color:'var(--cyan)',whiteSpace:'nowrap'}}>{exp.date}</span>}
                </div>
                <p style={{fontSize:'clamp(12px,1.6vw,14px)',fontWeight:700,color:exp.color,marginBottom:14}}>{exp.company}</p>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:6}}>
                  {exp.points.map((pt:string)=><li key={pt} style={{fontSize:'clamp(12px,1.6vw,14px)',color:'var(--muted)',paddingLeft:18,position:'relative',lineHeight:1.7}}><span style={{position:'absolute',left:0,color:'var(--violet)'}}>▹</span>{pt}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <motion.h2 initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.7,delay:.6}} className="section-title-styled" style={{marginBottom:12}}>AWARDS & RECOGNITION</motion.h2>
        <div className="three-col" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,maxWidth:1000,margin:'32px auto 0'}}>
          {AWARDS.map((a:any,i:number)=>(
            <motion.div key={a.title} initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.6,delay:.7+i*.1}}
              style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:20,padding:'clamp(24px,3vw,36px)',textAlign:'center',transition:'all .3s'}}
              whileHover={{y:-8,boxShadow:'var(--glow)'}}>
              <div style={{fontSize:'clamp(2rem,3vw,2.8rem)',marginBottom:16}}>{a.icon}</div>
              <h3 style={{fontSize:'clamp(13px,1.7vw,16px)',color:'var(--text)',marginBottom:10,lineHeight:1.4}}>{a.title}</h3>
              <p style={{color:'var(--muted)',fontSize:'clamp(11px,1.4vw,14px)',lineHeight:1.6}}>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
