'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EXPERIENCE } from '../../lib/utils'
export default function Experience() {
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-100px'})
  return(
    <section id="experience" className="section-pad" style={{padding:'120px 0',position:'relative',background:'var(--bg)',transition:'background .4s'}}>
      <div ref={ref} style={{maxWidth:1100,margin:'0 auto',padding:'0 clamp(20px,5vw,64px)'}}>
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} style={{marginBottom:48}}>
          <span className="section-label">// Career</span>
          <h2 className="section-title">Professional <span className="grad-text">Journey</span></h2>
        </motion.div>
        <div style={{position:'relative',paddingLeft:'clamp(24px,5vw,40px)'}}>
          <motion.div initial={{scaleY:0}} animate={inView?{scaleY:1}:{}} transition={{duration:1.5,ease:'easeOut',delay:0.3}}
            style={{position:'absolute',left:0,top:0,bottom:0,width:1,background:'linear-gradient(to bottom,var(--violet),var(--cyan),transparent)',transformOrigin:'top'}}/>
          <div style={{display:'flex',flexDirection:'column',gap:32}}>
            {EXPERIENCE.map((exp:any,i:number)=>(
              <motion.div key={exp.role} initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.3+i*0.2}} style={{position:'relative'}}>
                <div style={{position:'absolute',left:'clamp(-34px,-5vw,-40px)',top:8,width:12,height:12,borderRadius:'50%',background:exp.color,boxShadow:'0 0 16px '+exp.color}}/>
                <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:14,padding:'clamp(20px,3vw,28px)',transition:'background .4s'}}>
                  <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:12,flexWrap:'wrap',marginBottom:6}}>
                    <h3 style={{fontSize:'clamp(15px,2.5vw,18px)',fontWeight:600,fontFamily:'Orbitron,sans-serif'}}>{exp.role}</h3>
                    <span style={{fontFamily:'monospace',fontSize:10,letterSpacing:2,padding:'4px 12px',borderRadius:100,background:'rgba(6,182,212,0.08)',border:'1px solid rgba(6,182,212,0.2)',color:'var(--cyan)',whiteSpace:'nowrap'}}>{exp.date}</span>
                  </div>
                  <p style={{fontSize:13,fontWeight:700,color:exp.color,marginBottom:12}}>{exp.company}</p>
                  <ul style={{display:'flex',flexDirection:'column',gap:6,listStyle:'none'}}>
                    {exp.points.map((pt:string)=><li key={pt} style={{fontSize:'clamp(12px,2vw,14px)',paddingLeft:16,position:'relative',color:'var(--muted)',lineHeight:1.7}}><span style={{position:'absolute',left:0,color:'var(--violet)'}}>&#9657;</span>{pt}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
