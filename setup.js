const fs = require('fs')
const path = require('path')

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, content)
  console.log('wrote: ' + filePath)
}

write('app/layout.tsx', [
"import type { Metadata } from 'next'",
"import './globals.css'",
"export const metadata: Metadata = { title: 'Krithik Raj | Robotics Engineer', description: 'Research Associate at Extreme Robotics Laboratory. ROS 2, SLAM, Computer Vision.' }",
"export default function RootLayout({ children }: { children: React.ReactNode }) {",
"  return (<html lang='en' suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>)",
"}"
].join('\n'))

write('app/globals.css', [
"@tailwind base;",
"@tailwind components;",
"@tailwind utilities;",
"@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@300;400;500&display=swap');",
":root{--bg:#04060F;--bg2:#070B18;--violet:#8B5CF6;--cyan:#06B6D4;--lime:#A3E635;--text:#F1F5F9;--muted:#64748B;--border:rgba(139,92,246,0.2);--surface:rgba(255,255,255,0.03);}",
"*{margin:0;padding:0;box-sizing:border-box;}",
"html{scroll-behavior:smooth;overflow-x:hidden;}",
"body{background:var(--bg);color:var(--text);font-family:sans-serif;overflow-x:hidden;cursor:none;}",
"::-webkit-scrollbar{width:3px;}::-webkit-scrollbar-thumb{background:var(--violet);}",
"::selection{background:rgba(139,92,246,0.3);color:white;}",
".grad-text{background:linear-gradient(135deg,var(--violet),var(--cyan));-webkit-background-clip:text;background-clip:text;color:transparent;}",
".section-label{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:var(--cyan);display:block;margin-bottom:14px;}",
".section-title{font-family:'Orbitron',sans-serif;font-size:clamp(36px,5vw,64px);font-weight:700;line-height:1.05;}",
".card{background:var(--surface);border:1px solid var(--border);border-radius:16px;transition:border-color .3s,transform .3s;}",
".btn-primary{padding:13px 32px;background:linear-gradient(135deg,var(--violet),var(--cyan));border:none;border-radius:8px;color:white;font-weight:800;font-size:13px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;display:inline-block;text-decoration:none;transition:opacity .3s,transform .3s;}",
".btn-ghost{padding:13px 32px;background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.4);border-radius:8px;color:var(--violet);font-weight:700;font-size:13px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;text-decoration:none;display:inline-block;transition:all .3s;}",
".noise{position:fixed;inset:0;pointer-events:none;z-index:1;opacity:0.025;}",
".grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(139,92,246,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.03) 1px,transparent 1px);background-size:80px 80px;pointer-events:none;}",
"@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}",
"@keyframes scanMove{0%{top:0%;opacity:0}10%{opacity:1}90%{opacity:1}100%{top:100%;opacity:0}}",
".animate-blink{animation:blink 1.5s ease infinite;}",
".animate-scan{animation:scanMove 3s ease-in-out infinite;position:absolute;left:0;right:0;height:2px;}"
].join('\n'))

write('lib/utils.ts', `
export const PROJECTS = [
  { id:'01', title:'Autonomous Drone + AI Object Detection', desc:'Real-time object detection with YOLOv5 integrated with Pixhawk for fully autonomous navigation, target locking and tracking.', tags:['YOLOv5','Python','Pixhawk','DroneKit'], domain:'Autonomous UAV', year:'2024', color:'0,212,255', link:'https://github.com/KrithikRajofficial' },
  { id:'02', title:'Multi-Agent Quadrotor Formation Framework', desc:'PID stabilization with MQTT communication enabling coordinated multi-agent flight with vision-based hazard detection.', tags:['PID','MQTT','Webots','YOLO'], domain:'Multi-Agent Systems', year:'2025', color:'139,92,246', link:'https://github.com/KrithikRajofficial' },
  { id:'03', title:'Precision Motorized X-Y Stage Assembly', desc:'Robotic work cell design using RoboDK with full motion planning and collision avoidance inside Factory-in-a-Box.', tags:['RoboDK','Python','CAD','Automation'], domain:'Industrial Automation', year:'2025', color:'163,230,53', link:'https://github.com/KrithikRajofficial' },
  { id:'04', title:'Autonomous E-Bike System', desc:'Smart electric bike with motor control, sensor fusion and autonomous safety features using Arduino and custom CAD.', tags:['Arduino','CAD','Motor Control','Embedded'], domain:'Embedded Systems', year:'2023', color:'6,182,212', link:'https://github.com/KrithikRajofficial' },
  { id:'05', title:'Webots Robot Simulation', desc:'Autonomous navigation with LiDAR, camera sensor integration and behaviour trees in ROS 2 and Webots.', tags:['ROS 2','Webots','Python','SLAM'], domain:'Simulation', year:'2025', color:'139,92,246', link:'https://github.com/KrithikRajofficial' },
  { id:'06', title:'AI Pesticide Drone — Published Research', desc:'Published research on AI-based autonomous pesticide spraying combining flight path planning with computer vision.', tags:['AI','Published','AgriTech','ROS'], domain:'Research Publication', year:'2025', color:'245,158,11', link:'https://www.atlantis-press.com/proceedings/icammsd-24/126009184' },
]
export const SKILLS = [
  {icon:'🤖',name:'ROS 2'},{icon:'🌐',name:'Gazebo'},{icon:'🦾',name:'Webots'},{icon:'🗺️',name:'SLAM'},
  {icon:'👁️',name:'OpenCV'},{icon:'🎯',name:'YOLO'},{icon:'🐍',name:'Python'},{icon:'⚙️',name:'C/C++'},
  {icon:'✈️',name:'Pixhawk'},{icon:'⚡',name:'Arduino'},{icon:'📡',name:'ESP32'},{icon:'🍓',name:'RPi'},
  {icon:'✏️',name:'CATIA V5'},{icon:'🔷',name:'Fusion 360'},{icon:'🏭',name:'RoboDK'},{icon:'🐧',name:'Linux'},
  {icon:'🐙',name:'Git'},{icon:'🦿',name:'MuJoCo'},
]
export const EXPERIENCE = [
  { role:'Research Associate', company:'Extreme Robotics Laboratory (NCNR)', date:'Nov 2025 — Present', color:'#8B5CF6', points:['Research-based robotics development and advanced simulation','Experimentation, documentation and technical analysis','Contributing to next-gen autonomous robotic systems'] },
  { role:'Technical Trainee', company:'Schneider Electric', date:'Industrial Placement', color:'#06B6D4', points:['Industrial automation systems and SCADA exposure','Electrical and control system fundamentals in live production'] },
  { role:'Industrial Trainee', company:'Hyundai Motor India', date:'Industrial Placement', color:'#A3E635', points:['Manufacturing systems and automotive production lines','Quality process workflows and industrial automation'] },
]
`)

write('components/ui/Cursor.tsx', `'use client'
import { useEffect, useRef } from 'react'
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let mx=0,my=0,rx=0,ry=0
    const move=(e:MouseEvent)=>{mx=e.clientX;my=e.clientY}
    document.addEventListener('mousemove',move)
    const tick=()=>{
      rx+=(mx-rx)*0.13;ry+=(my-ry)*0.13
      if(dotRef.current){dotRef.current.style.left=mx+'px';dotRef.current.style.top=my+'px'}
      if(ringRef.current){ringRef.current.style.left=rx+'px';ringRef.current.style.top=ry+'px'}
      requestAnimationFrame(tick)
    }
    tick()
    return ()=>document.removeEventListener('mousemove',move)
  },[])
  return(<>
    <div ref={dotRef} style={{position:'fixed',width:10,height:10,background:'var(--violet)',borderRadius:'50%',pointerEvents:'none',zIndex:9999,transform:'translate(-50%,-50%)'}}/>
    <div ref={ringRef} style={{position:'fixed',width:32,height:32,border:'1px solid rgba(139,92,246,0.5)',borderRadius:'50%',pointerEvents:'none',zIndex:9998,transform:'translate(-50%,-50%)'}}/>
  </>)
}
`)

write('components/ui/Navbar.tsx', `'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
const links = ['Hero','About','Projects','Skills','Experience','Contact']
export default function Navbar() {
  const [scrolled,setScrolled]=useState(false)
  const [hidden,setHidden]=useState(false)
  const [active,setActive]=useState('Hero')
  const [lastY,setLastY]=useState(0)
  useEffect(()=>{
    const fn=()=>{
      const y=window.scrollY;setScrolled(y>40);setHidden(y>lastY&&y>80);setLastY(y)
      links.forEach(id=>{const el=document.getElementById(id.toLowerCase());if(!el)return;const t=el.offsetTop-120;if(y>=t&&y<t+el.offsetHeight)setActive(id)})
    }
    window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn)
  },[lastY])
  return(
    <motion.nav animate={{y:hidden?'-100%':0}} transition={{duration:0.3}} style={{position:'fixed',top:0,left:0,right:0,zIndex:50,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px 64px',background:scrolled?'rgba(4,6,15,0.85)':'transparent',backdropFilter:scrolled?'blur(20px)':'none',borderBottom:scrolled?'1px solid var(--border)':'none',transition:'all .3s'}}>
      <span style={{fontFamily:'Orbitron,sans-serif',fontWeight:900,fontSize:20,background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>KR</span>
      <ul style={{display:'flex',gap:40,listStyle:'none'}}>
        {links.map(l=><li key={l}><a href={'#'+l.toLowerCase()} style={{fontSize:11,letterSpacing:3,textTransform:'uppercase',fontWeight:700,color:active===l?'var(--cyan)':'var(--muted)',textDecoration:'none',transition:'color .3s'}}>{l}</a></li>)}
      </ul>
      <a href="mailto:krithikraj@email.com" style={{padding:'10px 24px',background:'rgba(139,92,246,0.08)',border:'1px solid rgba(139,92,246,0.4)',borderRadius:8,color:'var(--violet)',fontSize:12,letterSpacing:2,textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>Hire Me</a>
    </motion.nav>
  )
}
`)

write('components/three/SphereScene.tsx', `'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
const N = 2500
function ParticleSphere() {
  const meshRef = useRef<THREE.Points>(null!)
  const clock = useRef(0)
  const morphT = useRef(0)
  const morphDir = useRef(1)
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const { camera } = useThree()
  const { geometry, spherePos, torusPos, phases, speeds } = useMemo(() => {
    const pos=new Float32Array(N*3),col=new Float32Array(N*3),sp=new Float32Array(N*3),tp=new Float32Array(N*3),ph=new Float32Array(N),spd=new Float32Array(N)
    for(let i=0;i<N;i++){
      const phi=Math.acos(-1+2*Math.random()),theta=Math.random()*Math.PI*2,r=2.2
      sp[i*3]=r*Math.sin(phi)*Math.cos(theta);sp[i*3+1]=r*Math.sin(phi)*Math.sin(theta);sp[i*3+2]=r*Math.cos(phi)
      const u=Math.random()*Math.PI*2,v=Math.random()*Math.PI*2,R=2.2,tube=0.7
      tp[i*3]=(R+tube*Math.cos(v))*Math.cos(u);tp[i*3+1]=(R+tube*Math.cos(v))*Math.sin(u);tp[i*3+2]=tube*Math.sin(v)
      pos[i*3]=sp[i*3];pos[i*3+1]=sp[i*3+1];pos[i*3+2]=sp[i*3+2]
      ph[i]=Math.random()*Math.PI*2;spd[i]=0.4+Math.random()*0.6
      const t=Math.random();col[i*3]=t*0.54+(1-t)*0.02;col[i*3+1]=t*0.36+(1-t)*0.71;col[i*3+2]=1.0
    }
    const geo=new THREE.BufferGeometry()
    geo.setAttribute('position',new THREE.BufferAttribute(pos,3))
    geo.setAttribute('color',new THREE.BufferAttribute(col,3))
    return{geometry:geo,spherePos:sp,torusPos:tp,phases:ph,speeds:spd}
  },[])
  if(typeof window!=='undefined'){window.onmousemove=(e)=>{mouseX.current=(e.clientX/window.innerWidth-0.5)*1.2;mouseY.current=(e.clientY/window.innerHeight-0.5)*1.2}}
  useFrame((_,delta)=>{
    clock.current+=delta*0.8;morphT.current+=delta*0.1*morphDir.current
    if(morphT.current>=1){morphT.current=1;morphDir.current=-1}
    if(morphT.current<=0){morphT.current=0;morphDir.current=1}
    const ease=morphT.current<0.5?2*morphT.current*morphT.current:1-Math.pow(-2*morphT.current+2,2)/2
    const p=geometry.attributes.position.array as Float32Array
    for(let i=0;i<N;i++){const b=1+0.04*Math.sin(clock.current*speeds[i]+phases[i]);p[i*3]=(spherePos[i*3]*(1-ease)+torusPos[i*3]*ease)*b;p[i*3+1]=(spherePos[i*3+1]*(1-ease)+torusPos[i*3+1]*ease)*b;p[i*3+2]=(spherePos[i*3+2]*(1-ease)+torusPos[i*3+2]*ease)*b}
    geometry.attributes.position.needsUpdate=true
    if(meshRef.current){meshRef.current.rotation.y+=0.002;meshRef.current.rotation.x+=0.001}
    camera.position.x+=(mouseX.current*0.5-camera.position.x)*0.02
    camera.position.y+=(-mouseY.current*0.5-camera.position.y)*0.02
  })
  return(<points ref={meshRef} geometry={geometry}><pointsMaterial size={0.028} vertexColors transparent opacity={0.85} blending={THREE.AdditiveBlending} depthWrite={false} sizeAttenuation/></points>)
}
export default function SphereScene(){
  return(<Canvas camera={{position:[0,0,5],fov:60}} style={{position:'absolute',inset:0}} gl={{antialias:true,alpha:true}} dpr={[1,2]}><ParticleSphere/></Canvas>)
}
`)

write('components/sections/Hero.tsx', `'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
const SphereScene = dynamic(() => import('../three/SphereScene'), { ssr: false })
const roles = ['ROS 2 Developer','Autonomous Systems Engineer','Computer Vision Specialist','SLAM Expert','Research Associate @ NCNR']
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
      <div style={{position:'absolute',inset:0,zIndex:1,pointerEvents:'none',background:'linear-gradient(90deg,rgba(4,6,15,0.95) 40%,rgba(4,6,15,0.3) 70%,transparent)'}} />
      <motion.div variants={cv} initial="hidden" animate="show" style={{position:'relative',zIndex:10,paddingLeft:80,paddingRight:40}}>
        <motion.div variants={iv} style={{display:'inline-flex',alignItems:'center',gap:8,marginBottom:32}}>
          <span style={{display:'flex',alignItems:'center',gap:8,padding:'8px 16px',borderRadius:100,fontSize:11,letterSpacing:3,textTransform:'uppercase',background:'rgba(139,92,246,0.06)',border:'1px solid rgba(139,92,246,0.2)',color:'var(--violet)'}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'var(--lime)',animation:'blink 1.5s ease infinite'}} />
            Seeking Roles
          </span>
        </motion.div>
        <motion.h1 variants={iv} style={{fontFamily:'Orbitron,sans-serif',fontSize:'clamp(52px,7vw,90px)',fontWeight:900,lineHeight:1,marginBottom:24}}>
          KRITHIK<br />
          <span style={{background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>RAJ</span>
        </motion.h1>
        <motion.p variants={iv} style={{fontSize:18,marginBottom:48,minHeight:32,color:'var(--muted)'}}>
          <span ref={typedRef} />
          <span style={{display:'inline-block',width:2,height:20,marginLeft:4,verticalAlign:'middle',background:'var(--cyan)',animation:'blink 1s ease infinite'}} />
        </motion.p>
        <motion.div variants={iv} style={{display:'flex',gap:16,flexWrap:'wrap'}}>
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="/assets/resume/Krithik_Raj_Resume.pdf" className="btn-ghost" target="_blank" rel="noreferrer">Resume</a>
        </motion.div>
      </motion.div>
    </section>
  )
}
`)

write('components/sections/About.tsx', `'use client'
import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
function IDCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const card = cardRef.current; if(!card) return
    const onMove=(e:MouseEvent)=>{const r=card.getBoundingClientRect();const dx=(e.clientX-r.left-r.width/2)/r.width*2;const dy=(e.clientY-r.top-r.height/2)/r.height*2;card.style.transform='perspective(1000px) rotateY('+dx*14+'deg) rotateX('+(-dy*10)+'deg) scale(1.02)'}
    const onLeave=()=>{card.style.transition='transform .6s ease';card.style.transform='perspective(1000px) rotateY(0) rotateX(0) scale(1)'}
    const onEnter=()=>{card.style.transition='transform .08s'}
    card.addEventListener('mousemove',onMove);card.addEventListener('mouseleave',onLeave);card.addEventListener('mouseenter',onEnter)
    return()=>{card.removeEventListener('mousemove',onMove);card.removeEventListener('mouseleave',onLeave);card.removeEventListener('mouseenter',onEnter)}
  },[])
  const fields=[{l:'Status',v:'Research Associate',c:'var(--violet)'},{l:'Location',v:'Birmingham, UK',c:'var(--text)'},{l:'Education',v:'MSc Robotics · UoB',c:'var(--cyan)'},{l:'Speciality',v:'ROS 2 · SLAM · CV',c:'var(--text)'},{l:'Projects',v:'6+ Completed',c:'var(--violet)'}]
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <div ref={cardRef} style={{position:'relative',width:360,height:520,borderRadius:24,overflow:'hidden',background:'linear-gradient(135deg,#0F0B2A,#1A0A3B,#0A1628)',boxShadow:'0 40px 100px rgba(139,92,246,0.2)'}}>
        <div className="animate-scan" style={{background:'linear-gradient(90deg,transparent,rgba(6,182,212,0.6),transparent)',zIndex:20}} />
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'28px 28px 20px',borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
          <span style={{fontFamily:'monospace',fontWeight:700,fontSize:14,letterSpacing:3,background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>KR·ID</span>
          <span style={{fontFamily:'monospace',fontSize:9,letterSpacing:2,textTransform:'uppercase',color:'var(--muted)'}}>Research // Engineer</span>
        </div>
        <div style={{display:'flex',gap:20,alignItems:'flex-start',padding:'28px 28px 0'}}>
          <div style={{width:88,height:88,borderRadius:16,display:'flex',alignItems:'center',justifyContent:'center',fontSize:36,background:'linear-gradient(135deg,rgba(139,92,246,0.3),rgba(6,182,212,0.3))',border:'1px solid rgba(139,92,246,0.4)'}}>🤖</div>
          <div>
            <h3 style={{fontSize:18,fontWeight:700,marginBottom:4,fontFamily:'Orbitron,sans-serif'}}>Krithik Raj</h3>
            <p style={{fontFamily:'monospace',fontSize:11,color:'var(--cyan)',letterSpacing:1,marginBottom:10}}>ROBOTICS_ENG.v2</p>
            <span style={{fontSize:9,letterSpacing:2,textTransform:'uppercase',padding:'4px 10px',borderRadius:100,background:'rgba(163,230,53,0.1)',border:'1px solid rgba(163,230,53,0.3)',color:'var(--lime)'}}>● AVAILABLE</span>
          </div>
        </div>
        <div style={{margin:'24px 28px 0',height:1,background:'rgba(255,255,255,0.05)'}} />
        <div style={{padding:'20px 28px',display:'flex',flexDirection:'column',gap:14}}>
          {fields.map(({l,v,c})=>(
            <div key={l} style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <span style={{fontFamily:'monospace',fontSize:10,letterSpacing:2,textTransform:'uppercase',color:'var(--muted)'}}>{l}</span>
              <span style={{fontSize:13,fontWeight:700,color:c}}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'16px 28px',display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
          <div style={{display:'flex',alignItems:'flex-end',gap:2,height:32}}>
            {[60,100,40,80,55,100,35,75,50,90,45,70].map((h,i)=>(
              <span key={i} className="animate-blink" style={{width:2,height:h+'%',background:'rgba(139,92,246,0.5)',borderRadius:2,display:'block',animationDelay:i*0.1+'s'}} />
            ))}
          </div>
          <span style={{fontFamily:'monospace',fontSize:10,letterSpacing:2,color:'var(--muted)'}}>ID·2025·NCNR·001</span>
        </div>
      </div>
    </div>
  )
}
export default function About() {
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-100px'})
  return(
    <section id="about" style={{padding:'144px 0',position:'relative',overflow:'hidden',background:'var(--bg2)'}}>
      <div ref={ref} style={{maxWidth:1152,margin:'0 auto',padding:'0 64px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:96,alignItems:'center'}}>
        <motion.div initial={{opacity:0,x:-40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.9}}>
          <span className="section-label">// Who I Am</span>
          <h2 className="section-title" style={{marginBottom:32}}>Engineer &<br/><span className="grad-text">Innovator</span></h2>
          <div style={{color:'var(--muted)',lineHeight:1.9,fontSize:16,display:'flex',flexDirection:'column',gap:16}}>
            <p>Robotics engineer with a background in <strong style={{color:'var(--text)'}}>mechanical engineering</strong>, specialising in autonomous systems and intelligent perception.</p>
            <p>Currently a <strong style={{color:'var(--text)'}}>Research Associate</strong> at the Extreme Robotics Laboratory (NCNR), bridging theory and real-world autonomous applications.</p>
            <p>Interests: <strong style={{color:'var(--text)'}}>ROS 2, SLAM, Computer Vision, Autonomous Mobile Robots</strong>.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:40}}>
            {[{n:'6+',l:'Projects'},{n:'2+',l:'Years R&D'},{n:'2',l:'Published'}].map(({n,l})=>(
              <div key={l} style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:16,padding:20,textAlign:'center'}}>
                <div style={{fontSize:32,fontWeight:700,marginBottom:4,background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',fontFamily:'Orbitron,sans-serif'}}>{n}</div>
                <div style={{fontSize:11,letterSpacing:2,textTransform:'uppercase',color:'var(--muted)'}}>{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,x:40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.9,delay:0.2}}>
          <IDCard/>
        </motion.div>
      </div>
    </section>
  )
}
`)

write('components/sections/Projects.tsx', `'use client'
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
`)

write('components/sections/Skills.tsx', `'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS } from '../../lib/utils'
export default function Skills() {
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-100px'})
  return(
    <section id="skills" style={{padding:'144px 0',position:'relative',background:'var(--bg2)'}}>
      <div className="grid-bg"/>
      <div ref={ref} style={{maxWidth:1152,margin:'0 auto',padding:'0 64px'}}>
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} style={{marginBottom:64}}>
          <span className="section-label">// Toolkit</span>
          <h2 className="section-title">Technical <span className="grad-text">Skills</span></h2>
        </motion.div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:14}}>
          {SKILLS.map((sk: {icon:string,name:string},i: number)=>(
            <motion.div key={sk.name} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:i*0.04}} whileHover={{y:-6}} style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:16,display:'flex',flexDirection:'column',alignItems:'center',gap:12,padding:'20px 12px',transition:'border-color .3s'}} onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.borderColor='rgba(139,92,246,0.6)'}} onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.borderColor='var(--border)'}}>
              <span style={{fontSize:30}}>{sk.icon}</span>
              <span style={{fontSize:11,fontWeight:700,color:'var(--muted)',textAlign:'center'}}>{sk.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
`)

write('components/sections/Experience.tsx', `'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EXPERIENCE } from '../../lib/utils'
export default function Experience() {
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-100px'})
  return(
    <section id="experience" style={{padding:'144px 0',position:'relative',background:'var(--bg)'}}>
      <div ref={ref} style={{maxWidth:1152,margin:'0 auto',padding:'0 64px'}}>
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} style={{marginBottom:64}}>
          <span className="section-label">// Career</span>
          <h2 className="section-title">Professional <span className="grad-text">Journey</span></h2>
        </motion.div>
        <div style={{position:'relative',paddingLeft:40}}>
          <motion.div initial={{scaleY:0}} animate={inView?{scaleY:1}:{}} transition={{duration:1.5,ease:'easeOut',delay:0.3}} style={{position:'absolute',left:0,top:0,bottom:0,width:1,background:'linear-gradient(to bottom,var(--violet),var(--cyan),transparent)',transformOrigin:'top'}}/>
          <div style={{display:'flex',flexDirection:'column',gap:48}}>
            {EXPERIENCE.map((exp: any,i: number)=>(
              <motion.div key={exp.role} initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.3+i*0.2}} style={{position:'relative'}}>
                <div style={{position:'absolute',left:-46,top:8,width:12,height:12,borderRadius:'50%',background:exp.color,boxShadow:'0 0 20px '+exp.color}}/>
                <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:16,padding:32}}>
                  <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:16,flexWrap:'wrap',marginBottom:8}}>
                    <h3 style={{fontSize:18,fontWeight:600,fontFamily:'Orbitron,sans-serif'}}>{exp.role}</h3>
                    <span style={{fontFamily:'monospace',fontSize:10,letterSpacing:2,padding:'4px 12px',borderRadius:100,background:'rgba(6,182,212,0.08)',border:'1px solid rgba(6,182,212,0.2)',color:'var(--cyan)'}}>{exp.date}</span>
                  </div>
                  <p style={{fontSize:14,fontWeight:700,color:exp.color,marginBottom:16}}>{exp.company}</p>
                  <ul style={{display:'flex',flexDirection:'column',gap:8,listStyle:'none'}}>
                    {exp.points.map((pt: string)=><li key={pt} style={{fontSize:14,paddingLeft:16,position:'relative',color:'var(--muted)',lineHeight:1.7}}><span style={{position:'absolute',left:0,color:'var(--violet)'}}>&#9657;</span>{pt}</li>)}
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
`)

write('components/sections/Contact.tsx', `'use client'
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
`)

write('app/page.tsx', `'use client'
import Cursor from '../components/ui/Cursor'
import Navbar from '../components/ui/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Experience from '../components/sections/Experience'
import Contact from '../components/sections/Contact'
export default function Home() {
  return (
    <>
      <div className="noise"/>
      <Cursor/>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Contact/>
      </main>
      <footer style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16,padding:'36px 64px',background:'var(--bg)',borderTop:'1px solid var(--border)'}}>
        <span style={{fontFamily:'Orbitron,sans-serif',fontWeight:900,fontSize:18,background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',letterSpacing:4}}>KRITHIK RAJ</span>
        <p style={{fontSize:14,color:'var(--muted)'}}>2026 · Robotics Engineer · Next.js + Three.js</p>
        <div style={{display:'flex',gap:12}}>
          {[{l:'in',h:'https://linkedin.com/in/krithikraj'},{l:'gh',h:'https://github.com/KrithikRajofficial'},{l:'@',h:'mailto:krithikraj@email.com'}].map(({l,h})=>(
            <a key={l} href={h} target={h.startsWith('http')?'_blank':undefined} rel="noreferrer" style={{width:36,height:36,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:10,border:'1px solid var(--border)',fontSize:12,fontWeight:700,color:'var(--muted)',textDecoration:'none'}}>{l}</a>
          ))}
        </div>
      </footer>
    </>
  )
}
`)

console.log('\n✅ ALL FILES WRITTEN SUCCESSFULLY!')
console.log('Now run: npm run dev')
