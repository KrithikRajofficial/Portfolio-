'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
const contacts=[{icon:'📧',label:'Email',val:'krithikraj@email.com',href:'mailto:krithikraj@email.com'},{icon:'💼',label:'LinkedIn',val:'linkedin.com/in/krithikraj',href:'https://linkedin.com/in/krithikraj'},{icon:'🐙',label:'GitHub',val:'KrithikRajofficial',href:'https://github.com/KrithikRajofficial'}]
export default function Contact() {
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-100px'})
  const inp: React.CSSProperties={background:'rgba(255,255,255,0.03)',border:'1px solid var(--border)',borderRadius:10,padding:'12px 16px',color:'var(--text)',fontSize:14,outline:'none',width:'100%'}
  return(
    <section id="contact" style={{padding:'144px 0',position:'relative',background:'var(--bg2)'}}>
      <div className="grid-bg"/>
      <div ref={ref} style={{maxWidth:1152,margin:'0 auto',padding:'0 64px'}}>
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} style={{marginBottom:64}}>
          <span className="section-label">// Contact</span>
          <h2 className="section-title">Build Something <span className="grad-text">Amazing</span></h2>
        </motion.div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80}}>
          <motion.div initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.8}}>
            <p style={{color:'var(--muted)',fontSize:16,lineHeight:1.9,marginBottom:32}}>Seeking roles in <strong style={{color:'var(--text)'}}>robotics, automation and AI/ML</strong>. Open to global collaborations.</p>
            <div style={{display:'flex',flexDirection:'column',gap:16}}>
              {contacts.map(({icon,label,val,href})=>(
                <a key={label} href={href} target={href.startsWith('http')?'_blank':undefined} rel="noreferrer" style={{display:'flex',alignItems:'center',gap:20,background:'var(--surface)',border:'1px solid var(--border)',borderRadius:16,padding:'20px 24px',textDecoration:'none'}}>
                  <div style={{width:44,height:44,borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,background:'rgba(139,92,246,0.1)',border:'1px solid var(--border)'}}>{icon}</div>
                  <div>
                    <div style={{fontFamily:'monospace',fontSize:10,letterSpacing:2,textTransform:'uppercase',color:'var(--muted)',marginBottom:4}}>{label}</div>
                    <div style={{fontSize:14,fontWeight:700,color:'var(--text)'}}>{val}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,x:30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.8,delay:0.2}} style={{display:'flex',flexDirection:'column',gap:16}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
              <input style={inp} placeholder="Full Name *"/>
              <input style={inp} placeholder="Email *" type="email"/>
            </div>
            <input style={inp} placeholder="Company / Organisation"/>
            <select style={{...inp,background:'var(--bg2)'}}><option>Subject *</option><option>Job Opportunity</option><option>Collaboration</option><option>Technical Consultation</option></select>
            <textarea style={{...inp,minHeight:130,resize:'vertical'}} placeholder="Your Message *" rows={5}/>
            <motion.button whileHover={{opacity:0.85,y:-2}} whileTap={{scale:0.98}} style={{padding:'16px',background:'linear-gradient(135deg,var(--violet),var(--cyan))',border:'none',borderRadius:10,color:'white',fontWeight:800,fontSize:13,letterSpacing:2,textTransform:'uppercase',cursor:'pointer',width:'100%'}}>
              Send Message
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
