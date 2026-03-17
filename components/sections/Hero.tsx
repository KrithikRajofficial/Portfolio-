'use client'
import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
const SphereScene = dynamic(() => import('../three/SphereScene'), { ssr: false })
const roles = ['Robotics & Automation Engineer','ROS 2 • Computer Vision • SLAM','Building Intelligent Machines','Autonomous Systems Specialist','Research Associate @ NCNR']

function CircularPhoto() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0), y = useMotionValue(0)
  const rX = useSpring(useTransform(y,[-0.5,0.5],[8,-8]),{stiffness:180,damping:30})
  const rY = useSpring(useTransform(x,[-0.5,0.5],[-8,8]),{stiffness:180,damping:30})
  const onMove=(e:React.MouseEvent)=>{const r=ref.current?.getBoundingClientRect();if(!r)return;x.set((e.clientX-r.left)/r.width-0.5);y.set((e.clientY-r.top)/r.height-0.5)}
  const onLeave=()=>{x.set(0);y.set(0)}
  const sz = 'clamp(220px,35vw,400px)'
  return(
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className="hero-img-wrap animate-float"
      style={{width:sz,height:sz,position:'relative',margin:'0 auto',rotateX:rX,rotateY:rY,transformStyle:'preserve-3d',perspective:800}}>
      {/* ambient glow */}
      <div style={{position:'absolute',inset:-40,borderRadius:'50%',background:'radial-gradient(circle,rgba(185,131,255,0.3) 0%,transparent 70%)',filter:'blur(24px)',pointerEvents:'none'}}/>
      {/* spinning ring */}
      <motion.div animate={{rotate:360}} transition={{duration:7,repeat:Infinity,ease:'linear'}}
        style={{position:'absolute',inset:-5,borderRadius:'50%',background:'conic-gradient(from 0deg,#b983ff,#00c6ff,#3cff8f,transparent,#b983ff)',filter:'blur(2.5px)',zIndex:0}}/>
      {/* crisp border */}
      <div style={{position:'absolute',inset:-1,borderRadius:'50%',border:'3px solid rgba(185,131,255,0.55)',boxShadow:'0 0 28px rgba(185,131,255,0.35)',zIndex:1}}/>
      {/* photo */}
      <div style={{position:'absolute',inset:5,borderRadius:'50%',overflow:'hidden',zIndex:2,boxShadow:'0 16px 48px rgba(0,0,0,0.5)'}}>
        <img src="/assets/images/profile.jpg" alt="Krithik Raj"
          style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 8%'}}/>
      </div>
      {/* seeking badge */}
      <motion.div animate={{y:[-5,5,-5]}} transition={{duration:3.5,repeat:Infinity,ease:'easeInOut'}}
        style={{position:'absolute',bottom:'-6%',left:'50%',transform:'translateX(-50%)',zIndex:10,
          background:'rgba(10,10,20,0.85)',backdropFilter:'blur(14px)',
          border:'1px solid rgba(60,255,143,0.5)',borderRadius:100,
          padding:'7px 18px',whiteSpace:'nowrap',display:'flex',alignItems:'center',gap:8}}>
        <span style={{width:8,height:8,borderRadius:'50%',background:'var(--lime)',display:'inline-block',animation:'pulse 1.5s infinite'}}/>
        <span style={{fontSize:10,letterSpacing:2,color:'var(--lime)',textTransform:'uppercase',fontFamily:'JetBrains Mono,monospace',fontWeight:700}}>Seeking Roles</span>
      </motion.div>
      {/* NCNR badge */}
      <motion.div animate={{y:[-6,6,-6]}} transition={{duration:3,repeat:Infinity,ease:'easeInOut',delay:0.5}}
        style={{position:'absolute',top:'8%',right:'-12%',zIndex:10,
          background:'rgba(10,10,20,0.85)',backdropFilter:'blur(14px)',
          border:'1px solid rgba(185,131,255,0.55)',borderRadius:14,padding:'8px 14px'}}>
        <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:9,letterSpacing:2,color:'var(--muted)',textTransform:'uppercase',marginBottom:2}}>Position</div>
        <div style={{fontFamily:'Orbitron,sans-serif',fontSize:11,fontWeight:700,color:'var(--violet)'}}>NCNR Lab</div>
      </motion.div>
      {/* UoB badge */}
      <motion.div animate={{y:[6,-6,6]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut',delay:1}}
        style={{position:'absolute',bottom:'18%',left:'-14%',zIndex:10,
          background:'rgba(10,10,20,0.85)',backdropFilter:'blur(14px)',
          border:'1px solid rgba(0,198,255,0.55)',borderRadius:14,padding:'8px 14px'}}>
        <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:9,letterSpacing:2,color:'var(--muted)',textTransform:'uppercase',marginBottom:2}}>University</div>
        <div style={{fontFamily:'Orbitron,sans-serif',fontSize:11,fontWeight:700,color:'var(--cyan)'}}>UoB 2025</div>
      </motion.div>
      {/* orbiting dots */}
      {[0,1,2,3].map(i=>(
        <motion.div key={i} animate={{rotate:360}} transition={{duration:8+i*3,repeat:Infinity,ease:'linear'}}
          style={{position:'absolute',top:'50%',left:'50%',width:i%2?5:7,height:i%2?5:7,borderRadius:'50%',
            background:i%2===0?'var(--violet)':'var(--cyan)',
            boxShadow:i%2===0?'0 0 10px var(--violet)':'0 0 10px var(--cyan)',
            transformOrigin:('clamp(120px,18vw,210px)') as any,
            marginTop:i%2?-2.5:-3.5,marginLeft:i%2?-2.5:-3.5,zIndex:3}}/>
      ))}
    </motion.div>
  )
}

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)
  useEffect(()=>{
    let i=0,c=0,del=false,t:ReturnType<typeof setTimeout>
    const tick=()=>{const cur=roles[i];if(!typedRef.current)return;if(!del){typedRef.current.textContent=cur.slice(0,c+1);c++;if(c===cur.length){del=true;t=setTimeout(tick,2200);return}}else{typedRef.current.textContent=cur.slice(0,c-1);c--;if(c===0){del=false;i=(i+1)%roles.length}}t=setTimeout(tick,del?30:60)}
    t=setTimeout(tick,800);return()=>clearTimeout(t)
  },[])
  const cv={hidden:{},show:{transition:{staggerChildren:0.12,delayChildren:0.2}}}
  const iv={hidden:{opacity:0,y:40},show:{opacity:1,y:0,transition:{duration:0.8,ease:[0.16,1,0.3,1] as any}}}
  return(
    <section id="home" style={{position:'relative',minHeight:'100vh',display:'flex',alignItems:'center',padding:'clamp(100px,14vw,140px) clamp(20px,8vw,10%) clamp(60px,8vw,80px)'}}>
      <div style={{position:'absolute',inset:0,zIndex:0}}><SphereScene/></div>
      <div style={{position:'absolute',inset:0,zIndex:1,pointerEvents:'none',background:'linear-gradient(90deg,rgba(11,11,15,0.96) 35%,rgba(11,11,15,0.55) 65%,rgba(11,11,15,0.12) 100%)'}}/>
      <div className="hero-wrap" style={{position:'relative',zIndex:10,width:'100%',maxWidth:1400,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'clamp(40px,6vw,100px)'}}>
        {/* LEFT */}
        <motion.div variants={cv} initial="hidden" animate="show" style={{flex:1,minWidth:0}}>
          <motion.p variants={iv} style={{fontSize:'clamp(13px,1.5vw,16px)',color:'var(--muted)',marginBottom:8}}>Hello, I&apos;m</motion.p>
          <motion.h1 variants={iv} style={{fontFamily:'Orbitron,sans-serif',fontSize:'clamp(36px,5.5vw,80px)',fontWeight:900,lineHeight:1.05,marginBottom:16}}>
            <span style={{background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>Krithik Raj</span>
          </motion.h1>
          <motion.h2 variants={iv} style={{fontSize:'clamp(14px,2vw,22px)',color:'var(--violet)',fontWeight:600,marginBottom:20,minHeight:32}}>
            <span ref={typedRef}/>
            <span style={{display:'inline-block',width:2,height:'1em',marginLeft:3,verticalAlign:'middle',background:'var(--cyan)',animation:'blink 1s ease infinite'}}/>
          </motion.h2>
          <motion.p variants={iv} style={{fontSize:'clamp(13px,1.6vw,16px)',color:'var(--muted)',lineHeight:1.8,marginBottom:32,maxWidth:560}}>
            Designing intelligent robotic systems that bridge theory, simulation, and real-world autonomous applications.
          </motion.p>
          <motion.div variants={iv} className="hero-btns" style={{display:'flex',gap:16,marginBottom:28,flexWrap:'wrap'}}>
            <a href="/assets/resume/Krithik_Raj_Resume.pdf" className="btn-primary" download>Download Resume</a>
            <a href="#projects" className="btn-ghost">Explore My Work</a>
          </motion.div>
          <motion.div variants={iv} className="hero-links" style={{display:'flex',gap:20,marginBottom:20,flexWrap:'wrap'}}>
            {[{l:'krithikraj@email.com',h:'mailto:krithikraj@email.com'},{l:'LinkedIn',h:'https://linkedin.com/in/krithikraj'},{l:'GitHub',h:'https://github.com/KrithikRajofficial'}].map(({l,h})=>(
              <a key={l} href={h} target={h.startsWith('http')?'_blank':undefined} rel="noreferrer"
                style={{color:'var(--muted)',textDecoration:'none',fontSize:'clamp(11px,1.4vw,14px)',transition:'color .3s'}}
                onMouseEnter={e=>{(e.target as HTMLAnchorElement).style.color='var(--violet)'}}
                onMouseLeave={e=>{(e.target as HTMLAnchorElement).style.color='var(--muted)'}}>
                {l}
              </a>
            ))}
          </motion.div>
          <motion.p variants={iv} style={{fontSize:12,color:'var(--muted)',opacity:.6}}>Last updated: March 2026</motion.p>
        </motion.div>
        {/* RIGHT */}
        <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:1.1,ease:[0.16,1,0.3,1],delay:0.4}}
          style={{flexShrink:0}}>
          <CircularPhoto/>
        </motion.div>
      </div>
    </section>
  )
}
