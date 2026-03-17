'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PROJECTS } from '../../lib/utils'
export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return(
    <section id="projects" ref={ref} className="sec" style={{background:'linear-gradient(135deg,rgba(0,198,255,0.03),rgba(185,131,255,0.03))',transition:'background .4s'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} className="section-label" style={{textAlign:'center'}}>// Work</motion.p>
        <motion.h2 initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.7}} className="section-title-styled">RESEARCH & PROJECTS</motion.h2>
        <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:.1}} className="section-subtitle">Applying theory to practice</motion.p>

        {/* Project cards grid */}
        <div className="projects-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:28,marginBottom:72}}>
          {PROJECTS.map((proj,i)=>(
            <motion.div key={proj.id} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.6,delay:i*.08}}
              style={{height:400,background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:20,overflow:'hidden',position:'relative',cursor:'pointer',transition:'all .3s'}}
              whileHover={{y:-10,boxShadow:'var(--glow)'}}>
              {/* Background image */}
              <img src={proj.img} alt={proj.title} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top',filter:'brightness(.35)'}}/>
              {/* Gradient */}
              <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,rgba(10,10,20,0.5),rgba(10,10,20,0.97))'}}/>
              {/* Content — always visible bottom */}
              <div style={{position:'absolute',bottom:0,left:0,right:0,padding:24}}>
                <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
                  <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:10,color:'var(--cyan)',letterSpacing:2}}>{proj.id}</span>
                  <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:9,color:'var(--muted)',letterSpacing:1,textTransform:'uppercase'}}>{proj.year}</span>
                </div>
                <h3 style={{fontSize:'clamp(14px,2vw,17px)',color:'white',fontWeight:700,marginBottom:10,lineHeight:1.4}}>{proj.title}</h3>
                <p style={{fontSize:'clamp(11px,1.4vw,13px)',color:'rgba(207,207,214,0.8)',lineHeight:1.6,marginBottom:14,display:'-webkit-box',WebkitLineClamp:3,WebkitBoxOrient:'vertical' as any,overflow:'hidden'}}>{proj.desc}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:6,marginBottom:14}}>
                  {proj.tags.map((t:string)=><span key={t} style={{background:'rgba(185,131,255,0.18)',color:'var(--violet)',padding:'4px 10px',borderRadius:20,fontSize:10,border:'1px solid var(--border)'}}>{t}</span>)}
                </div>
                <a href={proj.link} target="_blank" rel="noreferrer"
                  style={{color:'var(--violet)',textDecoration:'none',fontWeight:700,fontSize:12,letterSpacing:1,transition:'all .3s',display:'inline-flex',alignItems:'center',gap:6}}>
                  {proj.id==='06'?'Read Publication':'View Project'} →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publications */}
        <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.7,delay:.5}}
          style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:24,padding:'clamp(28px,4vw,48px)'}}>
          <h3 style={{fontFamily:'Orbitron,sans-serif',fontSize:'clamp(1.2rem,2vw,1.8rem)',color:'var(--violet)',marginBottom:28,textAlign:'center'}}>📄 Research Publications</h3>
          <div style={{display:'flex',flexDirection:'column',gap:20}}>
            {[
              {title:'AI-based Autonomous Pesticide Spraying Drone Management for Sustainable Agriculture',meta:'Krithik Raj A., Arulkumar M., Saravanan S., Muthukumar V. (2025)',link:'https://www.atlantis-press.com/proceedings/icammsd-24/126009184'},
              {title:'Conference paper on intelligent systems, robotics and engineering automation',meta:'Conference proceedings — intelligent systems and automation',link:'https://github.com/KrithikRajofficial'},
            ].map((pub,i)=>(
              <div key={i} style={{padding:'clamp(16px,3vw,24px)',background:'rgba(255,255,255,0.02)',borderRadius:16,borderLeft:'4px solid var(--violet)',transition:'all .3s',cursor:'default'}}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLDivElement;el.style.background='rgba(255,255,255,0.05)';el.style.transform='translateX(8px)'}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLDivElement;el.style.background='rgba(255,255,255,0.02)';el.style.transform=''}}>
                <h4 style={{fontSize:'clamp(13px,1.8vw,16px)',color:'var(--text)',marginBottom:8,lineHeight:1.5}}>{pub.title}</h4>
                <p style={{fontSize:12,color:'var(--muted)',marginBottom:10}}>{pub.meta}</p>
                <a href={pub.link} target="_blank" rel="noreferrer" style={{color:'var(--violet)',textDecoration:'none',fontSize:12,fontWeight:700,transition:'color .3s'}}>View Publication →</a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
