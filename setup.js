const fs = require('fs')
const path = require('path')
function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, content)
  console.log('wrote: ' + filePath)
}

// ── layout ────────────────────────────────────────────────────────────────────
write('app/layout.tsx', `import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Krithik Raj | Robotics & Automation Engineer', description: 'Research Associate at Extreme Robotics Laboratory. ROS 2, SLAM, Computer Vision, Autonomous Systems.' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang='en' suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>)
}
`)

// ── globals.css ───────────────────────────────────────────────────────────────
write('app/globals.css', `@tailwind base;
@tailwind components;
@tailwind utilities;
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap');

/* ── DARK (default) ── */
:root{
  --bg:#0b0b0f;--bg2:#111118;--bg-card:rgba(255,255,255,0.05);--bg-card-h:rgba(255,255,255,0.08);
  --violet:#b983ff;--cyan:#00c6ff;--lime:#3cff8f;
  --text:#ffffff;--muted:#cfcfd6;--border:rgba(127,0,255,0.35);
  --glow:0 0 45px rgba(127,0,255,0.25);--nav-bg:rgba(10,10,20,0.85);
}
/* ── LIGHT ── */
[data-theme='light']{
  --bg:#f6f7fb;--bg2:#eeeef5;--bg-card:#ffffff;--bg-card-h:#f0f0f5;
  --violet:#5b3df5;--cyan:#0099cc;--lime:#22c55e;
  --text:#0e0e13;--muted:#4a4a60;--border:rgba(91,61,245,0.3);
  --glow:0 0 45px rgba(91,61,245,0.15);--nav-bg:rgba(246,247,251,0.9);
}

*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;overflow-x:hidden;}
body{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;overflow-x:hidden;cursor:none;transition:background .4s,color .4s;}
@media(max-width:768px){body{cursor:auto;}}
::-webkit-scrollbar{width:3px;}::-webkit-scrollbar-thumb{background:var(--violet);}
::selection{background:rgba(185,131,255,0.3);color:white;}

.grad-text{background:linear-gradient(135deg,var(--violet),var(--cyan));-webkit-background-clip:text;background-clip:text;color:transparent;}
.section-title-styled{font-size:clamp(2rem,4vw,2.8rem);font-weight:700;text-align:center;margin-bottom:16px;background:linear-gradient(135deg,var(--violet),var(--cyan));-webkit-background-clip:text;background-clip:text;color:transparent;}
.section-subtitle{text-align:center;font-size:1.05rem;color:var(--muted);margin-bottom:56px;}
.section-label{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:var(--cyan);display:block;margin-bottom:12px;}

.card{background:var(--bg-card);border:1px solid var(--border);border-radius:20px;transition:all .3s;}
.card:hover{transform:translateY(-6px);box-shadow:var(--glow);}

.btn-primary{padding:13px 32px;background:linear-gradient(135deg,var(--violet),var(--cyan));border:none;border-radius:30px;color:white;font-weight:700;font-size:.95rem;cursor:pointer;display:inline-block;text-decoration:none;transition:all .3s;box-shadow:0 4px 20px rgba(185,131,255,0.3);}
.btn-primary:hover{transform:translateY(-3px);box-shadow:0 8px 30px rgba(185,131,255,0.4);}
.btn-ghost{padding:12px 30px;background:transparent;border:2px solid var(--violet);border-radius:30px;color:var(--violet);font-weight:700;font-size:.95rem;cursor:pointer;text-decoration:none;display:inline-block;transition:all .3s;}
.btn-ghost:hover{background:var(--violet);color:#fff;transform:translateY(-3px);}

.noise{position:fixed;inset:0;pointer-events:none;z-index:1;opacity:0.015;}
.grid-bg{position:absolute;inset:0;background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:80px 80px;pointer-events:none;opacity:0.3;}

@keyframes blink{0%,100%{opacity:1}50%{opacity:0.2}}
@keyframes pulse{0%,100%{opacity:.4;transform:scale(1)}50%{opacity:1;transform:scale(1.15)}}
@keyframes scanMove{0%{top:0%;opacity:0}10%{opacity:1}90%{opacity:1}100%{top:100%;opacity:0}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
.animate-blink{animation:blink 1.5s ease infinite;}
.animate-pulse-dot{animation:pulse 1.5s ease infinite;}
.animate-scan{animation:scanMove 3s ease-in-out infinite;position:absolute;left:0;right:0;height:2px;}
.animate-float{animation:float 4s ease-in-out infinite;}

/* section padding */
.sec{padding:clamp(80px,10vw,120px) clamp(20px,8vw,10%);}

/* mobile */
@media(max-width:768px){
  .hide-mobile{display:none!important;}
  .hero-wrap{flex-direction:column-reverse!important;text-align:center;gap:48px!important;}
  .hero-img-wrap{width:clamp(220px,60vw,300px)!important;height:clamp(220px,60vw,300px)!important;}
  .hero-btns,.hero-links{justify-content:center!important;}
  .two-col{grid-template-columns:1fr!important;}
  .three-col{grid-template-columns:1fr!important;}
  .skills-cat-grid{grid-template-columns:repeat(2,1fr)!important;}
  .projects-grid{grid-template-columns:1fr!important;}
  .edu-sidebar{position:static!important;}
  .nav-links-wrap{display:none!important;}
  .mobile-menu-btn{display:flex!important;}
}
@media(min-width:769px){.mobile-menu-btn{display:none!important;}.mobile-menu{display:none!important;}}
`)

// ── utils.ts ──────────────────────────────────────────────────────────────────
write('lib/utils.ts', `export const PROJECTS = [
  { id:'01', title:'Autonomous Drone + AI Object Detection', desc:'Real-time object detection with YOLOv5 integrated with Pixhawk flight controller for fully autonomous navigation, target locking and tracking.', tags:['YOLOv5','Python','Pixhawk','DroneKit'], domain:'Autonomous UAV', year:'2024', link:'https://github.com/KrithikRajofficial', img:'/assets/images/profile.jpg' },
  { id:'02', title:'Multi-Agent Quadrotor Formation Framework', desc:'PID stabilization with MQTT communication enabling coordinated multi-agent flight with vision-based hazard detection in Webots.', tags:['PID','MQTT','Webots','YOLO'], domain:'Multi-Agent Systems', year:'2025', link:'https://github.com/KrithikRajofficial', img:'/assets/images/profile.jpg' },
  { id:'03', title:'Precision Motorized X-Y Stage Assembly', desc:'Robotic work cell design using RoboDK with full motion planning and collision avoidance inside Factory-in-a-Box framework.', tags:['RoboDK','Python','CAD','Automation'], domain:'Industrial Automation', year:'2025', link:'https://github.com/KrithikRajofficial', img:'/assets/images/profile.jpg' },
  { id:'04', title:'Autonomous E-Bike System', desc:'Smart electric bike with motor control, sensor fusion and autonomous safety features using Arduino and custom CAD.', tags:['Arduino','CAD','Motor Control','Embedded'], domain:'Embedded Systems', year:'2023', link:'https://github.com/KrithikRajofficial', img:'/assets/images/profile.jpg' },
  { id:'05', title:'Webots Robot Simulation', desc:'Autonomous navigation with LiDAR, camera integration and behaviour trees using Webots and ROS 2.', tags:['ROS 2','Webots','Python','SLAM'], domain:'Simulation', year:'2025', link:'https://github.com/KrithikRajofficial', img:'/assets/images/profile.jpg' },
  { id:'06', title:'AI Pesticide Drone — Published Research', desc:'Published research on AI-based autonomous pesticide spraying combining flight path planning with computer vision for crop analysis.', tags:['AI','Published','AgriTech','ROS'], domain:'Research Publication', year:'2025', link:'https://www.atlantis-press.com/proceedings/icammsd-24/126009184', img:'/assets/images/profile.jpg' },
]
export const SKILL_CATS = [
  { title:'🛠️ Robotics & Automation', skills:['ROS 2 (Humble)','Gazebo','RViz','Webots','Arduino','ESP32','Raspberry Pi','Pixhawk','ArduPilot','MuJoCo'] },
  { title:'👁️ Vision & Perception', skills:['SLAM','OpenCV','YOLO','Camera Calibration','Point Clouds','Stereo Vision'] },
  { title:'💻 Programming', skills:['Python','C / C++','SQL','HTML / CSS','JavaScript','Bash / Linux'] },
  { title:'🧩 CAD & Tools', skills:['CATIA V5','Fusion 360','SolidWorks','RoboDK','AutoCAD','Git & GitHub','VS Code','Ubuntu Linux'] },
]
export const LEARNING = [
  { title:'MATLAB & Simulink', desc:'Advanced control systems and simulation modelling' },
  { title:'MuJoCo Physics Simulation', desc:'Physics-based robotic modelling and control' },
  { title:'Advanced Robot Dynamics', desc:'Control theory, optimization, and trajectory planning' },
]
export const EXPERIENCE = [
  { role:'Research Associate', company:'Extreme Robotics Laboratory (NCNR)', date:'Nov 2025 — Present', color:'#b983ff', points:['Research-based robotics development and advanced simulation','Experimentation, documentation and technical analysis','Contributing to next-gen autonomous robotic systems'] },
  { role:'Technical Trainee', company:'Schneider Electric', date:'Industrial Placement', color:'#00c6ff', points:['Industrial automation systems and SCADA exposure','Electrical and control system fundamentals in live production'] },
  { role:'Industrial Trainee', company:'Hyundai Motor India', date:'Industrial Placement', color:'#3cff8f', points:['Manufacturing systems and automotive production lines','Quality process workflows and industrial automation'] },
]
export const AWARDS = [
  { icon:'🏆', title:'Smart India Hackathon', desc:'National-level hackathon participant — problem-driven engineering under competition constraints' },
  { icon:'📄', title:'Research Publications', desc:'Published research in robotics and AI at international conference proceedings (Atlantis Press 2025)' },
  { icon:'🎓', title:'Academic Excellence', desc:'MSc Robotics at University of Birmingham, UK — recognition for advanced project work' },
]
`)

// ── Cursor ────────────────────────────────────────────────────────────────────
write('components/ui/Cursor.tsx', `'use client'
import { useEffect, useRef } from 'react'
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (window.innerWidth < 769) return
    let mx=0,my=0,gx=0,gy=0
    const move=(e:MouseEvent)=>{mx=e.clientX;my=e.clientY}
    document.addEventListener('mousemove',move)
    const tick=()=>{
      gx+=(mx-gx)*0.08;gy+=(my-gy)*0.08
      if(dotRef.current){dotRef.current.style.left=mx+'px';dotRef.current.style.top=my+'px'}
      if(glowRef.current){glowRef.current.style.left=gx+'px';glowRef.current.style.top=gy+'px'}
      requestAnimationFrame(tick)
    }
    tick()
    return ()=>document.removeEventListener('mousemove',move)
  },[])
  return(<>
    <div ref={dotRef} style={{position:'fixed',width:9,height:9,background:'var(--violet)',borderRadius:'50%',pointerEvents:'none',zIndex:9999,transform:'translate(-50%,-50%)',mixBlendMode:'screen' as any}}/>
    <div ref={glowRef} style={{position:'fixed',width:200,height:200,borderRadius:'50%',background:'radial-gradient(circle,rgba(185,131,255,0.18),transparent 70%)',filter:'blur(20px)',transform:'translate(-50%,-50%)',pointerEvents:'none',zIndex:9997}}/>
  </>)
}
`)

// ── Navbar ────────────────────────────────────────────────────────────────────
write('components/ui/Navbar.tsx', `'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const links = ['Home','About','Skills','Projects','Experience','Contact']
export default function Navbar({ theme, toggleTheme }: { theme:string, toggleTheme:()=>void }) {
  const [scrolled,setScrolled]=useState(false)
  const [active,setActive]=useState('Home')
  const [lastY,setLastY]=useState(0)
  const [hidden,setHidden]=useState(false)
  const [menuOpen,setMenuOpen]=useState(false)
  useEffect(()=>{
    const fn=()=>{
      const y=window.scrollY;setScrolled(y>60);setHidden(y>lastY&&y>100&&!menuOpen);setLastY(y)
      links.forEach(id=>{const el=document.getElementById(id.toLowerCase());if(!el)return;const t=el.offsetTop-120;if(y>=t&&y<t+el.offsetHeight)setActive(id)})
    }
    window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn)
  },[lastY,menuOpen])
  const isDark=theme==='dark'
  const navBg = scrolled ? 'rgba(10,10,20,0.95)' : 'rgba(10,10,20,0.75)'
  return(<>
    <motion.nav animate={{y:hidden?'-100%':0}} transition={{duration:0.3}}
      style={{position:'fixed',top:0,left:0,right:0,zIndex:100,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px clamp(20px,8vw,10%)',background:navBg,backdropFilter:'blur(20px)',borderBottom:scrolled?'1px solid var(--border)':'none',transition:'all .3s'}}>
      {/* Logo */}
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <span style={{fontFamily:'Orbitron,sans-serif',fontWeight:900,fontSize:18,color:'var(--violet)',padding:'5px 11px',background:'var(--bg-card)',borderRadius:8,border:'1px solid var(--border)'}}>KR</span>
        <span className="hide-mobile" style={{fontWeight:700,fontSize:13,letterSpacing:1,color:'var(--text)'}}>KRITHIK RAJ</span>
      </div>
      {/* Desktop links */}
      <ul className="nav-links-wrap" style={{display:'flex',gap:28,listStyle:'none'}}>
        {links.map(l=>(
          <li key={l}><a href={'#'+l.toLowerCase()} style={{fontSize:13,fontWeight:500,color:active===l?'var(--violet)':'var(--muted)',textDecoration:'none',transition:'color .3s',position:'relative'}}
            onMouseEnter={e=>{(e.target as HTMLAnchorElement).style.color='var(--violet)'}}
            onMouseLeave={e=>{(e.target as HTMLAnchorElement).style.color=active===l?'var(--violet)':'var(--muted)'}}>
            {l}{active===l&&<span style={{position:'absolute',bottom:-6,left:0,right:0,height:2,background:'var(--violet)',borderRadius:2}}/>}
          </a></li>
        ))}
      </ul>
      {/* Right controls */}
      <div style={{display:'flex',alignItems:'center',gap:10}}>
        <button onClick={toggleTheme} title={isDark?'Light mode':'Dark mode'}
          style={{width:40,height:40,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',background:'var(--bg-card)',border:'1px solid var(--border)',cursor:'pointer',fontSize:18,transition:'all .3s'}}>
          {isDark?'☀️':'🌙'}
        </button>
        <a href="mailto:krithikraj@email.com" className="hide-mobile"
          style={{padding:'9px 20px',background:'linear-gradient(135deg,var(--violet),var(--cyan))',border:'none',borderRadius:24,color:'white',fontSize:12,letterSpacing:1,fontWeight:700,textDecoration:'none',transition:'all .3s'}}>
          Hire Me
        </a>
        <button className="mobile-menu-btn" onClick={()=>setMenuOpen(p=>!p)}
          style={{width:40,height:40,borderRadius:10,alignItems:'center',justifyContent:'center',background:'var(--bg-card)',border:'1px solid var(--border)',cursor:'pointer',flexDirection:'column',gap:5,padding:10}}>
          <span style={{display:'block',width:20,height:2,background:'var(--text)',borderRadius:2,transition:'all .3s',transform:menuOpen?'rotate(45deg) translate(5px,5px)':'none'}}/>
          <span style={{display:'block',width:20,height:2,background:'var(--text)',borderRadius:2,opacity:menuOpen?0:1,transition:'all .3s'}}/>
          <span style={{display:'block',width:20,height:2,background:'var(--text)',borderRadius:2,transition:'all .3s',transform:menuOpen?'rotate(-45deg) translate(5px,-5px)':'none'}}/>
        </button>
      </div>
    </motion.nav>
    <AnimatePresence>
      {menuOpen&&(
        <motion.div className="mobile-menu" initial={{opacity:0,y:-16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}}
          style={{position:'fixed',top:70,left:12,right:12,zIndex:99,background:'rgba(10,10,20,0.97)',backdropFilter:'blur(20px)',border:'1px solid var(--border)',borderRadius:16,padding:'16px 20px',display:'flex',flexDirection:'column',gap:4}}>
          {links.map(l=>(
            <a key={l} href={'#'+l.toLowerCase()} onClick={()=>setMenuOpen(false)}
              style={{padding:'12px 16px',borderRadius:10,fontSize:14,fontWeight:600,color:active===l?'var(--violet)':'var(--text)',textDecoration:'none',background:active===l?'rgba(185,131,255,0.08)':'transparent'}}>
              {l}
            </a>
          ))}
          <a href="mailto:krithikraj@email.com" style={{marginTop:8,padding:'12px 16px',borderRadius:10,background:'linear-gradient(135deg,var(--violet),var(--cyan))',color:'white',textDecoration:'none',fontWeight:700,textAlign:'center',fontSize:13}}>Hire Me</a>
        </motion.div>
      )}
    </AnimatePresence>
  </>)
}
`)

// ── SphereScene ───────────────────────────────────────────────────────────────
write('components/three/SphereScene.tsx', `'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
const N = 1800
function Particles() {
  const meshRef = useRef<THREE.Points>(null!)
  const clock = useRef(0)
  const morphT = useRef(0)
  const morphDir = useRef(1)
  const mx = useRef(0), my = useRef(0)
  const { camera } = useThree()
  const { geo, sp, tp, ph, spd } = useMemo(() => {
    const pos=new Float32Array(N*3),col=new Float32Array(N*3),sp=new Float32Array(N*3),tp=new Float32Array(N*3),ph=new Float32Array(N),spd=new Float32Array(N)
    for(let i=0;i<N;i++){
      const phi=Math.acos(-1+2*Math.random()),theta=Math.random()*Math.PI*2,r=2.2
      sp[i*3]=r*Math.sin(phi)*Math.cos(theta);sp[i*3+1]=r*Math.sin(phi)*Math.sin(theta);sp[i*3+2]=r*Math.cos(phi)
      const u=Math.random()*Math.PI*2,v=Math.random()*Math.PI*2,R=2.2,tube=0.75
      tp[i*3]=(R+tube*Math.cos(v))*Math.cos(u);tp[i*3+1]=(R+tube*Math.cos(v))*Math.sin(u);tp[i*3+2]=tube*Math.sin(v)
      pos[i*3]=sp[i*3];pos[i*3+1]=sp[i*3+1];pos[i*3+2]=sp[i*3+2]
      ph[i]=Math.random()*Math.PI*2;spd[i]=0.4+Math.random()*0.6
      const t=Math.random();col[i*3]=t*0.72+(1-t)*0.0;col[i*3+1]=t*0.51+(1-t)*0.78;col[i*3+2]=1.0
    }
    const geo=new THREE.BufferGeometry()
    geo.setAttribute('position',new THREE.BufferAttribute(pos,3))
    geo.setAttribute('color',new THREE.BufferAttribute(col,3))
    return{geo,sp,tp,ph,spd}
  },[])
  if(typeof window!=='undefined'){window.onmousemove=(e)=>{mx.current=(e.clientX/window.innerWidth-0.5);my.current=(e.clientY/window.innerHeight-0.5)}}
  useFrame((_,dt)=>{
    clock.current+=dt*0.7;morphT.current+=dt*0.1*morphDir.current
    if(morphT.current>=1){morphT.current=1;morphDir.current=-1}
    if(morphT.current<=0){morphT.current=0;morphDir.current=1}
    const e=morphT.current<0.5?2*morphT.current*morphT.current:1-Math.pow(-2*morphT.current+2,2)/2
    const p=geo.attributes.position.array as Float32Array
    for(let i=0;i<N;i++){const b=1+0.04*Math.sin(clock.current*spd[i]+ph[i]);p[i*3]=(sp[i*3]*(1-e)+tp[i*3]*e)*b;p[i*3+1]=(sp[i*3+1]*(1-e)+tp[i*3+1]*e)*b;p[i*3+2]=(sp[i*3+2]*(1-e)+tp[i*3+2]*e)*b}
    geo.attributes.position.needsUpdate=true
    if(meshRef.current){meshRef.current.rotation.y+=0.002;meshRef.current.rotation.x+=0.001}
    camera.position.x+=(mx.current*0.6-camera.position.x)*0.025
    camera.position.y+=(-my.current*0.6-camera.position.y)*0.025
  })
  return(<points ref={meshRef} geometry={geo}><pointsMaterial size={0.025} vertexColors transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} sizeAttenuation/></points>)
}
export default function SphereScene(){
  return(<Canvas camera={{position:[0,0,5.5],fov:58}} style={{position:'absolute',inset:0}} gl={{antialias:true,alpha:true}} dpr={[1,1.5]}><Particles/></Canvas>)
}
`)

// ── Hero ──────────────────────────────────────────────────────────────────────
write('components/sections/Hero.tsx', `'use client'
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
`)

// ── About ─────────────────────────────────────────────────────────────────────
write('components/sections/About.tsx', `'use client'
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
`)

// ── Skills ────────────────────────────────────────────────────────────────────
write('components/sections/Skills.tsx', `'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILL_CATS, LEARNING } from '../../lib/utils'
export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return(
    <section id="skills" ref={ref} className="sec" style={{background:'var(--bg)',transition:'background .4s'}}>
      <div className="grid-bg"/>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} className="section-label" style={{textAlign:'center'}}>// Toolkit</motion.p>
        <motion.h2 initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.7}} className="section-title-styled">TECHNICAL SKILLS</motion.h2>
        <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:.1}} className="section-subtitle">My Engineering Toolkit</motion.p>

        {SKILL_CATS.map((cat,ci)=>(
          <motion.div key={cat.title} initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.6,delay:ci*.1}} style={{marginBottom:40}}>
            <h3 style={{fontSize:'clamp(1rem,2vw,1.4rem)',color:'var(--text)',marginBottom:20,paddingLeft:14,borderLeft:'4px solid var(--violet)'}}>{cat.title}</h3>
            <div className="skills-cat-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:12}}>
              {cat.skills.map((sk,i)=>(
                <motion.div key={sk} initial={{opacity:0,scale:.9}} animate={inView?{opacity:1,scale:1}:{}} transition={{duration:.4,delay:ci*.08+i*.04}}
                  whileHover={{y:-5,boxShadow:'var(--glow)'}}
                  style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:16,padding:'16px 12px',textAlign:'center',fontSize:'clamp(11px,1.4vw,14px)',fontWeight:500,cursor:'default',transition:'all .3s'}}>
                  {sk}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Currently Learning */}
        <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.7,delay:.4}} style={{marginTop:60}}>
          <h2 className="section-title-styled" style={{marginBottom:12}}>CURRENTLY LEARNING</h2>
          <p className="section-subtitle" style={{marginBottom:32}}>Expanding my expertise every day</p>
          <div className="three-col" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
            {LEARNING.map((item,i)=>(
              <motion.div key={item.title} initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.6,delay:.5+i*.1}}
                style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:20,padding:'clamp(20px,3vw,32px)',transition:'all .3s'}}
                whileHover={{y:-8,boxShadow:'var(--glow)'}}>
                <h3 style={{fontSize:'clamp(1rem,1.8vw,1.3rem)',color:'var(--violet)',marginBottom:10}}>{item.title}</h3>
                <p style={{color:'var(--muted)',fontSize:'clamp(12px,1.5vw,15px)',lineHeight:1.6}}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
`)

// ── Projects ──────────────────────────────────────────────────────────────────
write('components/sections/Projects.tsx', `'use client'
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
`)

// ── Experience ────────────────────────────────────────────────────────────────
write('components/sections/Experience.tsx', `'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EXPERIENCE, AWARDS } from '../../lib/utils'
export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return(
    <section id="experience" ref={ref} className="sec" style={{background:'var(--bg)',transition:'background .4s'}}>
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} className="section-label" style={{textAlign:'center'}}>// Career</motion.p>
        <motion.h2 initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.7}} className="section-title-styled">PROFESSIONAL EXPERIENCE</motion.h2>
        <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:.1}} className="section-subtitle">My Career Journey</motion.p>

        {/* Timeline */}
        <div style={{position:'relative',maxWidth:900,margin:'0 auto 80px',paddingLeft:'clamp(32px,5vw,50px)'}}>
          <motion.div initial={{scaleY:0}} animate={inView?{scaleY:1}:{}} transition={{duration:1.4,delay:.3,ease:'easeOut'}}
            style={{position:'absolute',left:0,top:0,bottom:0,width:2,background:'linear-gradient(to bottom,var(--violet),var(--cyan),transparent)',transformOrigin:'top'}}/>
          {EXPERIENCE.map((exp:any,i:number)=>(
            <motion.div key={exp.role} initial={{opacity:0,x:-28}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:.7,delay:.3+i*.18}} style={{position:'relative',marginBottom:40}}>
              <div style={{position:'absolute',left:'clamp(-40px,-5vw,-48px)',top:10,width:14,height:14,borderRadius:'50%',background:exp.color,border:'3px solid var(--bg)',boxShadow:'0 0 18px '+exp.color,zIndex:1}}/>
              <div style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:20,padding:'clamp(20px,3vw,28px)',transition:'all .3s'}}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLDivElement;el.style.transform='translateX(8px)';el.style.boxShadow='var(--glow)'}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLDivElement;el.style.transform='';el.style.boxShadow=''}}>
                <div style={{display:'flex',flexWrap:'wrap',alignItems:'flex-start',justifyContent:'space-between',gap:10,marginBottom:6}}>
                  <h3 style={{fontFamily:'Orbitron,sans-serif',fontSize:'clamp(14px,2vw,18px)',fontWeight:600}}>{exp.role}</h3>
                  {exp.date&&<span style={{fontFamily:'JetBrains Mono,monospace',fontSize:10,letterSpacing:2,padding:'4px 12px',borderRadius:100,background:'rgba(0,198,255,0.08)',border:'1px solid rgba(0,198,255,0.2)',color:'var(--cyan)',whiteSpace:'nowrap'}}>{exp.date}</span>}
                </div>
                <p style={{fontSize:'clamp(12px,1.6vw,14px)',fontWeight:700,color:exp.color,marginBottom:14}}>{exp.company}</p>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:6}}>
                  {exp.points.map((pt:string)=><li key={pt} style={{fontSize:'clamp(12px,1.6vw,14px)',color:'var(--muted)',paddingLeft:18,position:'relative',lineHeight:1.7}}><span style={{position:'absolute',left:0,color:'var(--violet)'}}>▹</span>{pt}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <motion.h2 initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.7,delay:.6}} className="section-title-styled" style={{marginBottom:12}}>AWARDS & RECOGNITION</motion.h2>
        <div className="three-col" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,maxWidth:1000,margin:'32px auto 0'}}>
          {AWARDS.map((a:any,i:number)=>(
            <motion.div key={a.title} initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:.6,delay:.7+i*.1}}
              style={{background:'var(--bg-card)',border:'1px solid var(--border)',borderRadius:20,padding:'clamp(24px,3vw,36px)',textAlign:'center',transition:'all .3s'}}
              whileHover={{y:-8,boxShadow:'var(--glow)'}}>
              <div style={{fontSize:'clamp(2rem,3vw,2.8rem)',marginBottom:16}}>{a.icon}</div>
              <h3 style={{fontSize:'clamp(13px,1.7vw,16px)',color:'var(--text)',marginBottom:10,lineHeight:1.4}}>{a.title}</h3>
              <p style={{color:'var(--muted)',fontSize:'clamp(11px,1.4vw,14px)',lineHeight:1.6}}>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
`)

// ── Contact ───────────────────────────────────────────────────────────────────
write('components/sections/Contact.tsx', `'use client'
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
`)

// ── page.tsx ──────────────────────────────────────────────────────────────────
write('app/page.tsx', `'use client'
import { useState, useEffect } from 'react'
import Cursor from '../components/ui/Cursor'
import Navbar from '../components/ui/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import Contact from '../components/sections/Contact'

export default function Home() {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }
  return (
    <>
      <div className="noise"/>
      <Cursor/>
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
      </main>
      <footer style={{padding:'clamp(32px,5vw,56px) clamp(20px,8vw,10%)',background:'rgba(10,10,20,0.5)',borderTop:'1px solid var(--border)',transition:'background .4s'}}>
        <div style={{maxWidth:1400,margin:'0 auto',display:'flex',flexDirection:'column',alignItems:'center',gap:16}}>
          <div style={{display:'flex',gap:24}}>
            {[{l:'LinkedIn',h:'https://linkedin.com/in/krithikraj'},{l:'GitHub',h:'https://github.com/KrithikRajofficial'}].map(({l,h})=>(
              <a key={l} href={h} target="_blank" rel="noreferrer" style={{color:'var(--muted)',textDecoration:'none',fontSize:14,transition:'color .3s'}}
                onMouseEnter={e=>{(e.target as HTMLAnchorElement).style.color='var(--violet)'}}
                onMouseLeave={e=>{(e.target as HTMLAnchorElement).style.color='var(--muted)'}}>
                {l}
              </a>
            ))}
          </div>
          <p style={{fontSize:13,color:'var(--muted)'}}>Made with ❤️ using Next.js + Three.js + Framer Motion</p>
          <p style={{fontSize:12,color:'var(--muted)',opacity:.6}}>© 2026 Krithik Raj. All Rights Reserved.</p>
          <p style={{fontSize:11,color:'var(--muted)',opacity:.5}}>Designed & Built with Passion • Robotics Engineer • AI Enthusiast</p>
        </div>
      </footer>
    </>
  )
}
`)

console.log('\n✅ ALL FILES WRITTEN SUCCESSFULLY!')
console.log('Run: npm run dev')
