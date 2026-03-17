'use client'
import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
const SphereScene = dynamic(() => import('../three/SphereScene'), { ssr: false })
const roles = ['ROS 2 Developer','Autonomous Systems Engineer','Computer Vision Specialist','SLAM Expert','Research Associate @ NCNR']
function HeroImage() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y,[-0.5,0.5],[15,-15]),{stiffness:300,damping:30})
  const rotateY = useSpring(useTransform(x,[-0.5,0.5],[-15,15]),{stiffness:300,damping:30})
  const onMove=(e:React.MouseEvent<HTMLDivElement>)=>{const r=ref.current?.getBoundingClientRect();if(!r)return;x.set((e.clientX-r.left)/r.width-0.5);y.set((e.clientY-r.top)/r.height-0.5)}
  const onLeave=()=>{x.set(0);y.set(0)}
  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{rotateX,rotateY,transformStyle:'preserve-3d',perspective:1000,width:400,height:500,position:'relative',margin:'0 auto'}}>
      <motion.div animate={{rotate:360}} transition={{duration:8,repeat:Infinity,ease:'linear'}}
        style={{position:'absolute',inset:-4,borderRadius:32,zIndex:0,background:'conic-gradient(from 0deg,#8B5CF6,#06B6D4,#A3E635,#8B5CF6)',filter:'blur(3px)'}}/>
      <motion.div animate={{rotate:-360}} transition={{duration:14,repeat:Infinity,ease:'linear'}}
        style={{position:'absolute',inset:-10,borderRadius:38,zIndex:0,opacity:0.35,background:'conic-gradient(from 180deg,transparent,#8B5CF6,transparent,#06B6D4,transparent)',filter:'blur(6px)'}}/>
      <div style={{position:'relative',width:'100%',height:'100%',borderRadius:28,overflow:'hidden',zIndex:1}}>
        <img src="/assets/images/profile.jpg" alt="Krithik Raj"
          style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(139,92,246,0.08) 0%,transparent 40%,rgba(6,182,212,0.06) 100%)',border:'1px solid rgba(139,92,246,0.35)',borderRadius:28,pointerEvents:'none'}}/>
        <div style={{position:'absolute',bottom:0,left:0,right:0,background:'linear-gradient(to top,rgba(4,6,15,0.92) 0%,rgba(4,6,15,0.6) 60%,transparent 100%)',backdropFilter:'blur(10px)',padding:'40px 24px 24px',borderRadius:'0 0 28px 28px'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div>
              <p style={{fontFamily:'Orbitron,sans-serif',fontWeight:700,fontSize:18,color:'white',marginBottom:4}}>Krithik Raj</p>
              <p style={{fontFamily:'monospace',fontSize:11,letterSpacing:3,textTransform:'uppercase',color:'var(--cyan)'}}>Robotics Engineer</p>
            </div>
            <span style={{fontSize:9,letterSpacing:2,padding:'6px 14px',borderRadius:100,background:'rgba(163,230,53,0.15)',border:'1px solid rgba(163,230,53,0.5)',color:'var(--lime)',textTransform:'uppercase',fontFamily:'monospace'}}>Available</span>
          </div>
        </div>
        <motion.div animate={{y:[-5,5,-5]}} transition={{duration:3,repeat:Infinity,ease:'easeInOut'}}
          style={{position:'absolute',top:20,right:20,zIndex:10,background:'rgba(4,6,15,0.75)',backdropFilter:'blur(12px)',border:'1px solid rgba(139,92,246,0.5)',borderRadius:12,padding:'8px 14px',fontFamily:'monospace',fontSize:10,letterSpacing:2,color:'var(--violet)',textTransform:'uppercase'}}>
          NCNR Lab
        </motion.div>
        <motion.div animate={{y:[5,-5,5]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut',delay:1}}
          style={{position:'absolute',top:68,right:20,zIndex:10,background:'rgba(4,6,15,0.75)',backdropFilter:'blur(12px)',border:'1px solid rgba(6,182,212,0.5)',borderRadius:12,padding:'8px 14px',fontFamily:'monospace',fontSize:10,letterSpacing:2,color:'var(--cyan)',textTransform:'uppercase'}}>
          UoB 2025
        </motion.div>
      </div>
      {[0,1,2,3,4,5].map((i)=>(
        <motion.div key={i} animate={{rotate:360}} transition={{duration:6+i*2,repeat:Infinity,ease:'linear'}}
          style={{position:'absolute',top:'50%',left:'50%',width:6,height:6,borderRadius:'50%',background:i%2===0?'var(--violet)':'var(--cyan)',boxShadow:i%2===0?'0 0 10px var(--violet)':'0 0 10px var(--cyan)',transformOrigin:(210+i*12)+'px 0px',marginTop:-3,marginLeft:-3,zIndex:2}}/>
      ))}
    </motion.div>
  )
}
export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    let i=0,c=0,del=false
    let t: ReturnType<typeof setTimeout>
    const tick = () => {
      const cur=roles[i]; if(!typedRef.current) return
      if(!del){ typedRef.current.textContent=cur.slice(0,c+1); c++; if(c===cur.length){del=true;t=setTimeout(tick,2000);return} }
      else { typedRef.current.textContent=cur.slice(0,c-1); c--; if(c===0){del=false;i=(i+1)%roles.length} }
      t=setTimeout(tick,del?28:55)
    }
    t=setTimeout(tick,800); return()=>clearTimeout(t)
  },[])
  const cv={hidden:{},show:{transition:{staggerChildren:0.15,delayChildren:0.3}}}
  const iv={hidden:{opacity:0,y:40},show:{opacity:1,y:0,transition:{duration:0.8,ease:[0.16,1,0.3,1] as any}}}
  return (
    <section id="hero" style={{position:'relative',height:'100vh',display:'grid',gridTemplateColumns:'1fr 1fr',alignItems:'center',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,zIndex:0}}><SphereScene /></div>
      <div style={{position:'absolute',inset:0,zIndex:1,pointerEvents:'none',background:'linear-gradient(90deg,rgba(4,6,15,0.95) 30%,rgba(4,6,15,0.5) 60%,rgba(4,6,15,0.15) 100%)'}}/>
      <motion.div variants={cv} initial="hidden" animate="show" style={{position:'relative',zIndex:10,paddingLeft:80,paddingRight:40}}>
        <motion.div variants={iv} style={{display:'inline-flex',alignItems:'center',gap:8,marginBottom:32}}>
          <span style={{display:'flex',alignItems:'center',gap:8,padding:'8px 16px',borderRadius:100,fontSize:11,letterSpacing:3,textTransform:'uppercase',background:'rgba(139,92,246,0.06)',border:'1px solid rgba(139,92,246,0.2)',color:'var(--violet)'}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'var(--lime)',animation:'blink 1.5s ease infinite'}}/>
            Seeking Roles
          </span>
        </motion.div>
        <motion.h1 variants={iv} style={{fontFamily:'Orbitron,sans-serif',fontSize:'clamp(48px,6vw,88px)',fontWeight:900,lineHeight:1,marginBottom:24}}>
          KRITHIK<br/>
          <span style={{background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>RAJ</span>
        </motion.h1>
        <motion.p variants={iv} style={{fontSize:18,marginBottom:48,minHeight:32,color:'var(--muted)'}}>
          <span ref={typedRef}/>
          <span style={{display:'inline-block',width:2,height:20,marginLeft:4,verticalAlign:'middle',background:'var(--cyan)',animation:'blink 1s ease infinite'}}/>
        </motion.p>
        <motion.div variants={iv} style={{display:'flex',gap:16,flexWrap:'wrap',marginBottom:48}}>
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="/assets/resume/Krithik_Raj_Resume.pdf" className="btn-ghost" target="_blank" rel="noreferrer">Resume</a>
        </motion.div>
        <motion.div variants={iv} style={{display:'flex',gap:32,paddingTop:32,borderTop:'1px solid var(--border)'}}>
          {[{n:'6+',l:'Projects'},{n:'2+',l:'Years R&D'},{n:'2',l:'Published'}].map(({n,l})=>(
            <div key={l}>
              <div style={{fontFamily:'Orbitron,sans-serif',fontSize:26,fontWeight:900,background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{n}</div>
              <div style={{fontSize:10,letterSpacing:2,textTransform:'uppercase',color:'var(--muted)',marginTop:2}}>{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div initial={{opacity:0,x:60,scale:0.95}} animate={{opacity:1,x:0,scale:1}} transition={{duration:1.2,ease:[0.16,1,0.3,1],delay:0.5}}
        style={{position:'relative',zIndex:10,display:'flex',alignItems:'center',justifyContent:'center'}}>
        <HeroImage/>
      </motion.div>
    </section>
  )
}
