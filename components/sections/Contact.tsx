'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const inp: React.CSSProperties = { background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:12,padding:'13px 16px',color:'var(--text)',fontSize:14,outline:'none',width:'100%',fontFamily:'Inter,sans-serif',transition:'border-color .3s,background .4s' }
  return(
    <section id="contact" ref={ref} className="sec" style={{background:'linear-gradient(135deg,rgba(0,198,255,0.03),rgba(185,131,255,0.03))',transition:'background .4s'}}>
      <div className="grid-bg"/>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} className="section-label" style={{textAlign:'center'}}>// Contact</motion.p>
        <motion.h2 initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.7}} className="section-title-styled">LET&apos;S BUILD SOMETHING AMAZING</motion.h2>
        <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:.1}} className="section-subtitle" style={{maxWidth:700,margin:'0 auto 48px'}}>
          I&apos;m actively seeking roles in robotics, automation, and AI/ML. If you have an exciting opportunity or project in mind, let&apos;s connect.
        </motion.p>

        <div className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1.5fr',gap:'clamp(32px,5vw,60px)'}}>
          {/* Info */}
          <motion.div initial={{opacity:0,x:-28}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.8,delay:.1}}>
            <h3 style={{fontFamily:'Orbitron,sans-serif',fontSize:'clamp(1.2rem,2vw,1.8rem)',color:'var(--violet)',marginBottom:16}}>Get In Touch</h3>
            <p style={{color:'var(--muted)',fontSize:'clamp(13px,1.6vw,16px)',lineHeight:1.8,marginBottom:32}}>Ready to discuss robotics, AI, or potential collaborations? I&apos;d love to hear from you!</p>
            <div style={{display:'flex',flexDirection:'column',gap:20,marginBottom:32}}>
              {[{icon:'📧',label:'Email',val:'krithikraj@email.com',href:'mailto:krithikraj@email.com'},{icon:'💼',label:'LinkedIn',val:'linkedin.com/in/krithikraj',href:'https://linkedin.com/in/krithikraj'},{icon:'🐙',label:'GitHub',val:'KrithikRajofficial',href:'https://github.com/KrithikRajofficial'}].map(({icon,label,val,href})=>(
                <a key={label} href={href} target={href.startsWith('http')?'_blank':undefined} rel="noreferrer"
                  style={{display:'flex',alignItems:'center',gap:16,background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:16,padding:'16px 20px',textDecoration:'none',transition:'all .3s'}}
                  onMouseEnter={e=>{const el=e.currentTarget as HTMLAnchorElement;el.style.borderColor='var(--violet)';el.style.transform='translateX(6px)'}}
                  onMouseLeave={e=>{const el=e.currentTarget as HTMLAnchorElement;el.style.borderColor='var(--border)';el.style.transform=''}}>
                  <span style={{fontSize:22,flexShrink:0}}>{icon}</span>
                  <div>
                    <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:9,letterSpacing:2,textTransform:'uppercase',color:'var(--muted)',marginBottom:3}}>{label}</div>
                    <div style={{fontSize:13,fontWeight:700,color:'var(--text)'}}>{val}</div>
                  </div>
                </a>
              ))}
            </div>
            <a href="mailto:krithikraj@email.com" className="btn-primary" style={{display:'block',textAlign:'center'}}>Send Email</a>
          </motion.div>

          {/* Form */}
          <motion.div initial={{opacity:0,x:28}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.8,delay:.2}}>
            <h3 style={{fontFamily:'Orbitron,sans-serif',fontSize:'clamp(1.2rem,2vw,1.8rem)',color:'var(--violet)',marginBottom:24}}>Send a Message</h3>
            <div style={{display:'flex',flexDirection:'column',gap:16}}>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
                <div><label style={{fontSize:12,color:'var(--text)',fontWeight:600,display:'block',marginBottom:6}}>Full Name *</label><input style={inp} placeholder="Your name" onFocus={e=>{(e.target as HTMLInputElement).style.borderColor='var(--violet)'}} onBlur={e=>{(e.target as HTMLInputElement).style.borderColor='var(--border)'}}/></div>
                <div><label style={{fontSize:12,color:'var(--text)',fontWeight:600,display:'block',marginBottom:6}}>Email Address *</label><input style={inp} type="email" placeholder="your@email.com" onFocus={e=>{(e.target as HTMLInputElement).style.borderColor='var(--violet)'}} onBlur={e=>{(e.target as HTMLInputElement).style.borderColor='var(--border)'}}/></div>
              </div>
              <div><label style={{fontSize:12,color:'var(--text)',fontWeight:600,display:'block',marginBottom:6}}>Company / Organization</label><input style={inp} placeholder="Where you work" onFocus={e=>{(e.target as HTMLInputElement).style.borderColor='var(--violet)'}} onBlur={e=>{(e.target as HTMLInputElement).style.borderColor='var(--border)'}}/></div>
              <div><label style={{fontSize:12,color:'var(--text)',fontWeight:600,display:'block',marginBottom:6}}>Subject *</label>
                <select style={{...inp,background:'var(--bg2)'}} onFocus={e=>{(e.target as HTMLSelectElement).style.borderColor='var(--violet)'}} onBlur={e=>{(e.target as HTMLSelectElement).style.borderColor='var(--border)'}}>
                  <option>Select a subject</option><option>Job Opportunity</option><option>Collaboration</option><option>Technical Consultation</option><option>Other</option>
                </select>
              </div>
              <div><label style={{fontSize:12,color:'var(--text)',fontWeight:600,display:'block',marginBottom:6}}>Message *</label><textarea style={{...inp,minHeight:120,resize:'vertical'}} placeholder="Tell me about your project or opportunity..." onFocus={e=>{(e.target as HTMLTextAreaElement).style.borderColor='var(--violet)'}} onBlur={e=>{(e.target as HTMLTextAreaElement).style.borderColor='var(--border)'}}/></div>
              <button className="btn-primary" style={{width:'100%',padding:'14px',fontSize:13,letterSpacing:2}}>Send Message ✦</button>
              <p style={{fontSize:11,color:'var(--muted)',textAlign:'center'}}>* Required fields. I&apos;ll get back to you within 24 hours.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
