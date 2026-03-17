'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '../../lib/utils'
export default function Projects() {
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-100px'})
  const [open,setOpen]=useState<string|null>(null)
  return(
    <section id="projects" style={{padding:'144px 0',position:'relative',background:'var(--bg)'}}>
      <div className="grid-bg"/>
      <div ref={ref} style={{maxWidth:1152,margin:'0 auto',padding:'0 64px'}}>
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} style={{marginBottom:64}}>
          <span className="section-label">// Projects</span>
          <h2 className="section-title">Selected <span className="grad-text">Work</span></h2>
        </motion.div>
        <div style={{display:'flex',flexDirection:'column',gap:4}}>
          {PROJECTS.map((proj,idx)=>{
            const isOpen=open===proj.id
            return(
              <motion.div key={proj.id} initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.6,delay:idx*0.08}} style={{borderRadius:16,border:'1px solid '+(isOpen?'rgba(139,92,246,0.6)':'var(--border)'),background:'var(--surface)',overflow:'hidden',transition:'border-color .3s'}}>
                <div style={{display:'flex',alignItems:'center',gap:24,padding:'28px 32px'}}>
                  <span style={{fontFamily:'monospace',fontSize:11,letterSpacing:3,color:'var(--muted)',minWidth:36}}>{proj.id}</span>
                  <h3 style={{flex:1,fontSize:18,fontWeight:600,fontFamily:'Orbitron,sans-serif',color:isOpen?'var(--violet)':'var(--text)',transition:'color .3s'}}>{proj.title}</h3>
                  <div style={{display:'flex',gap:8,marginRight:16}}>
                    {proj.tags.slice(0,2).map((tag: string)=><span key={tag} style={{fontFamily:'monospace',fontSize:10,padding:'4px 12px',borderRadius:100,background:'rgba(139,92,246,0.08)',border:'1px solid rgba(139,92,246,0.2)',color:'var(--violet)'}}>{tag}</span>)}
                  </div>
                  <button onClick={()=>setOpen((p: string|null)=>p===proj.id?null:proj.id)} style={{width:44,height:44,borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid '+(isOpen?'var(--violet)':'var(--border)'),background:isOpen?'var(--violet)':'transparent',cursor:'pointer',transition:'all .3s',flexShrink:0}}>
                    <span style={{fontSize:18,transform:isOpen?'rotate(135deg)':'rotate(0)',transition:'transform .3s',color:isOpen?'white':'var(--muted)'}}>&#8599;</span>
                  </button>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen&&(
                    <motion.div key="d" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.4}} style={{overflow:'hidden'}}>
                      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:32,padding:'8px 32px 32px 116px'}}>
                        <p style={{color:'var(--muted)',fontSize:15,lineHeight:1.8}}>{proj.desc}</p>
                        <div style={{display:'flex',flexDirection:'column',gap:12}}>
                          {[{l:'Stack',v:proj.tags.join(' · ')},{l:'Domain',v:proj.domain},{l:'Year',v:proj.year}].map(({l,v})=>(
                            <div key={l} style={{display:'flex',gap:12,alignItems:'center'}}>
                              <span style={{fontFamily:'monospace',fontSize:10,letterSpacing:2,textTransform:'uppercase',color:'var(--muted)',minWidth:55}}>{l}</span>
                              <span style={{fontSize:13,fontWeight:700,color:'var(--text)'}}>{v}</span>
                            </div>
                          ))}
                          <a href={proj.link} target="_blank" rel="noreferrer" style={{marginTop:8,fontWeight:700,fontSize:12,letterSpacing:2,textTransform:'uppercase',color:'var(--cyan)',textDecoration:'none'}}>
                            {proj.id==='06'?'Read Publication':'View on GitHub'} →
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
