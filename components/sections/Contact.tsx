'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
const contacts=[{icon:'📧',label:'Email',val:'krithikraj@email.com',href:'mailto:krithikraj@email.com'},{icon:'💼',label:'LinkedIn',val:'linkedin.com/in/krithikraj',href:'https://linkedin.com/in/krithikraj'},{icon:'🐙',label:'GitHub',val:'KrithikRajofficial',href:'https://github.com/KrithikRajofficial'}]
export default function Contact() {
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-100px'})
  const inp:React.CSSProperties={background:'rgba(255,255,255,0.03)',border:'1px solid var(--border)',borderRadius:10,padding:'12px 14px',color:'var(--text)',fontSize:14,outline:'none',width:'100%',transition:'border-color .3s,background .4s'}
  return(
    <section id="contact" className="section-pad" style={{padding:'120px 0',position:'relative',background:'var(--bg2)',transition:'background .4s'}}>
      <div className="grid-bg"/>
      <div ref={ref} style={{maxWidth:1100,margin:'0 auto',padding:'0 clamp(20px,5vw,64px)'}}>
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} style={{marginBottom:48}}>
          <span className="section-label">// Contact</span>
          <h2 className="section-title">Build Something <span className="grad-text">Amazing</span></h2>
        </motion.div>
        <div className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'clamp(32px,6vw,80px)'}}>
          <motion.div initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.8}}>
            <p style={{color:'var(--muted)',fontSize:'clamp(13px,2vw,16px)',lineHeight:1.9,marginBottom:28}}>Seeking roles in <strong style={{color:'var(--text)'}}>robotics, automation and AI/ML</strong>. Open to global collaborations.</p>
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              {contacts.map(({icon,label,val,href})=>(
                <a key={label} href={href} target={href.startsWith('http')?'_blank':undefined} rel="noreferrer"
                  style={{display:'flex',alignItems:'center',gap:16,background:'var(--surface)',border:'1px solid var(--border)',borderRadius:14,padding:'16px 20px',textDecoration:'none',transition:'border-color .3s,background .4s'}}
                  onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.borderColor='rgba(139,92,246,0.5)'}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.borderColor='var(--border)'}}>
                  <div style={{width:40,height:40,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,background:'rgba(139,92,246,0.1)',border:'1px solid var(--border)',flexShrink:0}}>{icon}</div>
                  <div>
                    <div style={{fontFamily:'monospace',fontSize:9,letterSpacing:2,textTransform:'uppercase',color:'var(--muted)',marginBottom:3}}>{label}</div>
                    <div style={{fontSize:13,fontWeight:700,color:'var(--text)'}}>{val}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,x:30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.8,delay:0.2}} style={{display:'flex',flexDirection:'column',gap:12}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
              <input style={inp} placeholder="Full Name *"/>
              <input style={inp} placeholder="Email *" type="email"/>
            </div>
            <input style={inp} placeholder="Company / Organisation"/>
            <select style={{...inp,background:'var(--bg2)'}}><option>Subject *</option><option>Job Opportunity</option><option>Collaboration</option><option>Technical Consultation</option></select>
            <textarea style={{...inp,minHeight:120,resize:'vertical'}} placeholder="Your Message *" rows={5}/>
            <motion.button whileHover={{opacity:0.85,y:-2}} whileTap={{scale:0.98}}
              style={{padding:'14px',background:'linear-gradient(135deg,var(--violet),var(--cyan))',border:'none',borderRadius:10,color:'white',fontWeight:800,fontSize:12,letterSpacing:2,textTransform:'uppercase',cursor:'pointer',width:'100%'}}>
              Send Message ✦
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
