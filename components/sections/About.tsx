'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const iv = (d=0) => ({ hidden:{opacity:0,x:-30}, show:{opacity:1,x:0,transition:{duration:.8,delay:d}} })
  const ivR = (d=0) => ({ hidden:{opacity:0,x:30}, show:{opacity:1,x:0,transition:{duration:.8,delay:d}} })
  return(
    <section id="about" ref={ref} className="sec" style={{background:'linear-gradient(135deg,rgba(185,131,255,0.03),rgba(0,198,255,0.03))',transition:'background .4s'}}>
      <motion.div initial="hidden" animate={inView?'show':undefined}>
        <motion.p variants={iv()} style={{textAlign:'center'}} className="section-label">// About Me</motion.p>
        <motion.h2 variants={iv(.05)} className="section-title-styled">ABOUT ME</motion.h2>
        <motion.p variants={iv(.1)} className="section-subtitle">Engineer // Problem-Solver // Innovator</motion.p>
      </motion.div>

      <div className="two-col" style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:'clamp(32px,5vw,60px)',alignItems:'start',maxWidth:1200,margin:'0 auto'}}>
        {/* Left */}
        <motion.div initial="hidden" animate={inView?'show':undefined} variants={iv(.1)}>
          <div style={{display:'flex',flexDirection:'column',gap:16,color:'var(--muted)',fontSize:'clamp(13px,1.8vw,16px)',lineHeight:1.9,marginBottom:40}}>
            <p>I am a robotics and automation engineer with a background in <strong style={{color:'var(--text)'}}>mechanical engineering</strong> and hands-on experience in autonomous systems, robotic simulation, and intelligent perception.</p>
            <p>My work focuses on integrating software, hardware, and control systems to build reliable robotic solutions across <strong style={{color:'var(--text)'}}>ROS-based systems, computer vision, SLAM, embedded platforms</strong>, and simulation environments.</p>
            <p>My current interests include autonomous mobile robots, robotic perception, and research-driven engineering — with a goal of contributing to advanced robotics research and industrial automation.</p>
          </div>
          {/* Stats */}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
            {[{n:'6+',l:'Major Projects Completed'},{n:'2+',l:'Years Experience Robotics R&D'}].map(({n,l})=>(
              <div key={l} style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:20,padding:'clamp(20px,3vw,30px)',textAlign:'center',transition:'all .3s'}}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLDivElement;el.style.transform='translateY(-5px)';el.style.boxShadow='var(--glow)'}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLDivElement;el.style.transform='';el.style.boxShadow=''}}>
                <div style={{fontFamily:'Orbitron,sans-serif',fontSize:'clamp(2rem,4vw,3rem)',color:'var(--violet)',marginBottom:8,fontWeight:700}}>{n}</div>
                <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.5}}>{l}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education sidebar */}
        <motion.div className="edu-sidebar" initial="hidden" animate={inView?'show':undefined} variants={ivR(.15)}
          style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:24,padding:'clamp(24px,3vw,36px)',position:'sticky',top:110,transition:'background .4s'}}>
          <h3 style={{fontFamily:'Orbitron,sans-serif',fontSize:'clamp(1.2rem,2vw,1.6rem)',color:'var(--violet)',marginBottom:28,textAlign:'center'}}>Education</h3>
          {[
            {name:'MSc Robotics',uni:'University of Birmingham, UK',color:'var(--violet)',icon:'🎓'},
            {name:'B.E. Mechanical Engineering',uni:'Sri Venkateswara College of Engineering (SVCE), India',color:'var(--cyan)',icon:'⚙️'},
          ].map(({name,uni,color,icon})=>(
            <div key={name} style={{display:'flex',alignItems:'flex-start',gap:16,marginBottom:24,padding:16,background:'rgba(255,255,255,0.02)',borderRadius:16,transition:'all .3s',cursor:'default'}}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLDivElement;el.style.background='rgba(255,255,255,0.05)';el.style.transform='translateX(5px)'}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLDivElement;el.style.background='rgba(255,255,255,0.02)';el.style.transform=''}}>
              <span style={{fontSize:32,flexShrink:0}}>{icon}</span>
              <div>
                <h4 style={{fontSize:'clamp(13px,1.6vw,15px)',color:'var(--text)',marginBottom:5,fontWeight:700}}>{name}</h4>
                <p style={{fontSize:12,color:'var(--muted)',lineHeight:1.5}}>{uni}</p>
              </div>
            </div>
          ))}
          {/* Contact quick links */}
          <div style={{borderTop:'1px solid var(--border)',paddingTop:20,marginTop:8,display:'flex',flexDirection:'column',gap:10}}>
            {[{l:'📧 Email',h:'mailto:krithikraj@email.com'},{l:'💼 LinkedIn',h:'https://linkedin.com/in/krithikraj'},{l:'🐙 GitHub',h:'https://github.com/KrithikRajofficial'}].map(({l,h})=>(
              <a key={l} href={h} target={h.startsWith('http')?'_blank':undefined} rel="noreferrer"
                style={{fontSize:12,color:'var(--muted)',textDecoration:'none',transition:'color .2s'}}
                onMouseEnter={e=>{(e.target as HTMLAnchorElement).style.color='var(--violet)'}}
                onMouseLeave={e=>{(e.target as HTMLAnchorElement).style.color='var(--muted)'}}>
                {l}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
