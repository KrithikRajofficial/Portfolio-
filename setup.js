const fs = require('fs')
const path = require('path')

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, content)
  console.log('wrote: ' + filePath)
}

// ── layout ──────────────────────────────────────────────────────────────────
write('app/layout.tsx', `import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Krithik Raj | Robotics Engineer', description: 'Research Associate at Extreme Robotics Laboratory. ROS 2, SLAM, Computer Vision.' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang='en' suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>)
}
`)

// ── globals.css ──────────────────────────────────────────────────────────────
write('app/globals.css', `@tailwind base;
@tailwind components;
@tailwind utilities;
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@300;400;500&display=swap');

/* ── DARK MODE (default) ── */
:root{
  --bg:#04060F;--bg2:#070B18;--violet:#8B5CF6;--cyan:#06B6D4;--lime:#A3E635;
  --text:#F1F5F9;--muted:#64748B;--border:rgba(139,92,246,0.2);
  --surface:rgba(255,255,255,0.03);--card-bg:rgba(255,255,255,0.03);
  --nav-bg:rgba(4,6,15,0.85);
}
/* ── LIGHT MODE ── */
[data-theme='light']{
  --bg:#F8F6FF;--bg2:#EEF0FF;--violet:#7C3AED;--cyan:#0891B2;--lime:#65A30D;
  --text:#0F0A1E;--muted:#6B7280;--border:rgba(124,58,237,0.2);
  --surface:rgba(124,58,237,0.04);--card-bg:rgba(255,255,255,0.8);
  --nav-bg:rgba(248,246,255,0.9);
}

*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;overflow-x:hidden;}
body{background:var(--bg);color:var(--text);font-family:sans-serif;overflow-x:hidden;cursor:none;transition:background .4s,color .4s;}
@media(max-width:768px){body{cursor:auto;}}
::-webkit-scrollbar{width:3px;}
::-webkit-scrollbar-thumb{background:var(--violet);}
::selection{background:rgba(139,92,246,0.3);color:white;}
.grad-text{background:linear-gradient(135deg,var(--violet),var(--cyan));-webkit-background-clip:text;background-clip:text;color:transparent;}
.section-label{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:var(--cyan);display:block;margin-bottom:14px;}
.section-title{font-family:'Orbitron',sans-serif;font-size:clamp(32px,5vw,64px);font-weight:700;line-height:1.05;}
.card{background:var(--card-bg);border:1px solid var(--border);border-radius:16px;transition:border-color .3s,transform .3s,background .4s;}
.btn-primary{padding:13px 32px;background:linear-gradient(135deg,var(--violet),var(--cyan));border:none;border-radius:8px;color:white;font-weight:800;font-size:13px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;display:inline-block;text-decoration:none;transition:opacity .3s,transform .3s;}
.btn-ghost{padding:13px 32px;background:rgba(139,92,246,0.08);border:1px solid rgba(139,92,246,0.4);border-radius:8px;color:var(--violet);font-weight:700;font-size:13px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;text-decoration:none;display:inline-block;transition:all .3s;}
.noise{position:fixed;inset:0;pointer-events:none;z-index:1;opacity:0.025;}
.grid-bg{position:absolute;inset:0;background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:80px 80px;pointer-events:none;opacity:0.4;}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
@keyframes scanMove{0%{top:0%;opacity:0}10%{opacity:1}90%{opacity:1}100%{top:100%;opacity:0}}
.animate-blink{animation:blink 1.5s ease infinite;}
.animate-scan{animation:scanMove 3s ease-in-out infinite;position:absolute;left:0;right:0;height:2px;}

/* ── MOBILE ── */
@media(max-width:768px){
  .desktop-only{display:none!important;}
  .section-pad{padding:80px 20px!important;}
  .hero-grid{grid-template-columns:1fr!important;text-align:center;}
  .hero-btns{justify-content:center!important;}
  .hero-stats{justify-content:center!important;}
  .two-col{grid-template-columns:1fr!important;}
  .skills-grid{grid-template-columns:repeat(3,1fr)!important;}
  .nav-links{display:none!important;}
  .mobile-menu-btn{display:flex!important;}
}
@media(min-width:769px){
  .mobile-menu-btn{display:none!important;}
  .mobile-menu{display:none!important;}
}
`)

// ── utils.ts ─────────────────────────────────────────────────────────────────
write('lib/utils.ts', `export const PROJECTS = [
  { id:'01', title:'Autonomous Drone + AI Object Detection', desc:'Real-time object detection with YOLOv5 integrated with Pixhawk for fully autonomous navigation, target locking and tracking.', tags:['YOLOv5','Python','Pixhawk','DroneKit'], domain:'Autonomous UAV', year:'2024', color:'0,212,255', link:'https://github.com/KrithikRajofficial' },
  { id:'02', title:'Multi-Agent Quadrotor Formation Framework', desc:'PID stabilization with MQTT communication enabling coordinated multi-agent flight with vision-based hazard detection.', tags:['PID','MQTT','Webots','YOLO'], domain:'Multi-Agent Systems', year:'2025', color:'139,92,246', link:'https://github.com/KrithikRajofficial' },
  { id:'03', title:'Precision Motorized X-Y Stage Assembly', desc:'Robotic work cell design using RoboDK with full motion planning and collision avoidance inside Factory-in-a-Box.', tags:['RoboDK','Python','CAD','Automation'], domain:'Industrial Automation', year:'2025', color:'163,230,53', link:'https://github.com/KrithikRajofficial' },
  { id:'04', title:'Autonomous E-Bike System', desc:'Smart electric bike with motor control, sensor fusion and autonomous safety features using Arduino and custom CAD.', tags:['Arduino','CAD','Motor Control','Embedded'], domain:'Embedded Systems', year:'2023', color:'6,182,212', link:'https://github.com/KrithikRajofficial' },
  { id:'05', title:'Webots Robot Simulation', desc:'Autonomous navigation with LiDAR, camera sensor integration and behaviour trees in ROS 2 and Webots.', tags:['ROS 2','Webots','Python','SLAM'], domain:'Simulation', year:'2025', color:'139,92,246', link:'https://github.com/KrithikRajofficial' },
  { id:'06', title:'AI Pesticide Drone — Published Research', desc:'Published research on AI-based autonomous pesticide spraying combining precision flight path planning with computer vision.', tags:['AI','Published','AgriTech','ROS'], domain:'Research Publication', year:'2025', color:'245,158,11', link:'https://www.atlantis-press.com/proceedings/icammsd-24/126009184' },
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

// ── Cursor ────────────────────────────────────────────────────────────────────
write('components/ui/Cursor.tsx', `'use client'
import { useEffect, useRef } from 'react'
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (window.innerWidth < 769) return
    let mx=0,my=0,rx=0,ry=0
    const move=(e:MouseEvent)=>{mx=e.clientX;my=e.clientY}
    document.addEventListener('mousemove',move)
    const tick=()=>{rx+=(mx-rx)*0.13;ry+=(my-ry)*0.13;if(dotRef.current){dotRef.current.style.left=mx+'px';dotRef.current.style.top=my+'px'}if(ringRef.current){ringRef.current.style.left=rx+'px';ringRef.current.style.top=ry+'px'}requestAnimationFrame(tick)}
    tick()
    return ()=>document.removeEventListener('mousemove',move)
  },[])
  return(<>
    <div ref={dotRef} style={{position:'fixed',width:10,height:10,background:'var(--violet)',borderRadius:'50%',pointerEvents:'none',zIndex:9999,transform:'translate(-50%,-50%)'}}/>
    <div ref={ringRef} style={{position:'fixed',width:32,height:32,border:'1px solid rgba(139,92,246,0.5)',borderRadius:'50%',pointerEvents:'none',zIndex:9998,transform:'translate(-50%,-50%)'}}/>
  </>)
}
`)

// ── Navbar with theme toggle + mobile hamburger ───────────────────────────────
write('components/ui/Navbar.tsx', `'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const links = ['Hero','About','Projects','Skills','Experience','Contact']
export default function Navbar({ theme, toggleTheme }: { theme: string, toggleTheme: ()=>void }) {
  const [scrolled,setScrolled]=useState(false)
  const [hidden,setHidden]=useState(false)
  const [active,setActive]=useState('Hero')
  const [lastY,setLastY]=useState(0)
  const [menuOpen,setMenuOpen]=useState(false)
  useEffect(()=>{
    const fn=()=>{
      const y=window.scrollY;setScrolled(y>40);setHidden(y>lastY&&y>80&&!menuOpen);setLastY(y)
      links.forEach(id=>{const el=document.getElementById(id.toLowerCase());if(!el)return;const t=el.offsetTop-120;if(y>=t&&y<t+el.offsetHeight)setActive(id)})
    }
    window.addEventListener('scroll',fn,{passive:true});return()=>window.removeEventListener('scroll',fn)
  },[lastY,menuOpen])

  const isDark = theme === 'dark'

  return(
    <>
      <motion.nav animate={{y:hidden?'-100%':0}} transition={{duration:0.3}}
        style={{position:'fixed',top:0,left:0,right:0,zIndex:50,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px 40px',background:scrolled?'var(--nav-bg)':'transparent',backdropFilter:scrolled?'blur(20px)':'none',borderBottom:scrolled?'1px solid var(--border)':'none',transition:'all .3s'}}>
        {/* Logo */}
        <span style={{fontFamily:'Orbitron,sans-serif',fontWeight:900,fontSize:20,background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>KR</span>

        {/* Desktop links */}
        <ul className="nav-links" style={{display:'flex',gap:32,listStyle:'none'}}>
          {links.map(l=><li key={l}><a href={'#'+l.toLowerCase()} style={{fontSize:11,letterSpacing:3,textTransform:'uppercase',fontWeight:700,color:active===l?'var(--cyan)':'var(--muted)',textDecoration:'none',transition:'color .3s'}}>{l}</a></li>)}
        </ul>

        {/* Right: theme toggle + hire me */}
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          {/* Day/Night toggle */}
          <button onClick={toggleTheme}
            style={{width:44,height:44,borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',background:'var(--surface)',border:'1px solid var(--border)',cursor:'pointer',fontSize:20,transition:'all .3s'}}
            title={isDark?'Switch to light mode':'Switch to dark mode'}>
            {isDark ? '☀️' : '🌙'}
          </button>
          {/* Hire me — desktop only */}
          <a href="mailto:krithikraj@email.com" className="desktop-only"
            style={{padding:'10px 20px',background:'rgba(139,92,246,0.08)',border:'1px solid rgba(139,92,246,0.4)',borderRadius:8,color:'var(--violet)',fontSize:11,letterSpacing:2,textTransform:'uppercase',fontWeight:700,textDecoration:'none'}}>
            Hire Me
          </a>
          {/* Mobile hamburger */}
          <button className="mobile-menu-btn"
            onClick={()=>setMenuOpen(p=>!p)}
            style={{width:44,height:44,borderRadius:12,alignItems:'center',justifyContent:'center',background:'var(--surface)',border:'1px solid var(--border)',cursor:'pointer',flexDirection:'column',gap:5,padding:12}}>
            <span style={{display:'block',width:20,height:2,background:'var(--text)',borderRadius:2,transition:'all .3s',transform:menuOpen?'rotate(45deg) translate(5px,5px)':'none'}}/>
            <span style={{display:'block',width:20,height:2,background:'var(--text)',borderRadius:2,transition:'all .3s',opacity:menuOpen?0:1}}/>
            <span style={{display:'block',width:20,height:2,background:'var(--text)',borderRadius:2,transition:'all .3s',transform:menuOpen?'rotate(-45deg) translate(5px,-5px)':'none'}}/>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu"
            initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}
            style={{position:'fixed',top:74,left:16,right:16,zIndex:49,background:'var(--nav-bg)',backdropFilter:'blur(20px)',border:'1px solid var(--border)',borderRadius:16,padding:'20px 24px',display:'flex',flexDirection:'column',gap:4}}>
            {links.map(l=>(
              <a key={l} href={'#'+l.toLowerCase()} onClick={()=>setMenuOpen(false)}
                style={{padding:'12px 16px',borderRadius:10,fontSize:13,letterSpacing:2,textTransform:'uppercase',fontWeight:700,color:active===l?'var(--cyan)':'var(--text)',textDecoration:'none',background:active===l?'rgba(6,182,212,0.08)':'transparent',transition:'all .2s'}}>
                {l}
              </a>
            ))}
            <a href="mailto:krithikraj@email.com"
              style={{marginTop:8,padding:'12px 16px',borderRadius:10,fontSize:12,letterSpacing:2,textTransform:'uppercase',fontWeight:700,color:'white',textDecoration:'none',background:'linear-gradient(135deg,var(--violet),var(--cyan))',textAlign:'center'}}>
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
`)

// ── SphereScene ───────────────────────────────────────────────────────────────
write('components/three/SphereScene.tsx', `'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
const N = 2000
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
  return(<Canvas camera={{position:[0,0,5],fov:60}} style={{position:'absolute',inset:0}} gl={{antialias:true,alpha:true}} dpr={[1,1.5]}><ParticleSphere/></Canvas>)
}
`)

// ── Hero ──────────────────────────────────────────────────────────────────────
write('components/sections/Hero.tsx', `'use client'
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
      style={{rotateX,rotateY,transformStyle:'preserve-3d',perspective:1000,width:'min(380px,85vw)',height:'min(460px,70vw)',position:'relative',margin:'0 auto'}}>
      <motion.div animate={{rotate:360}} transition={{duration:8,repeat:Infinity,ease:'linear'}}
        style={{position:'absolute',inset:-4,borderRadius:32,zIndex:0,background:'conic-gradient(from 0deg,#8B5CF6,#06B6D4,#A3E635,#8B5CF6)',filter:'blur(3px)'}}/>
      <motion.div animate={{rotate:-360}} transition={{duration:14,repeat:Infinity,ease:'linear'}}
        style={{position:'absolute',inset:-10,borderRadius:38,zIndex:0,opacity:0.35,background:'conic-gradient(from 180deg,transparent,#8B5CF6,transparent,#06B6D4,transparent)',filter:'blur(6px)'}}/>
      <div style={{position:'relative',width:'100%',height:'100%',borderRadius:28,overflow:'hidden',zIndex:1}}>
        <img src="/assets/images/profile.jpg" alt="Krithik Raj" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(139,92,246,0.08) 0%,transparent 40%,rgba(6,182,212,0.06) 100%)',border:'1px solid rgba(139,92,246,0.35)',borderRadius:28,pointerEvents:'none'}}/>
        <div style={{position:'absolute',bottom:0,left:0,right:0,background:'linear-gradient(to top,rgba(4,6,15,0.92) 0%,rgba(4,6,15,0.6) 60%,transparent 100%)',backdropFilter:'blur(10px)',padding:'32px 20px 20px',borderRadius:'0 0 28px 28px'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div>
              <p style={{fontFamily:'Orbitron,sans-serif',fontWeight:700,fontSize:16,color:'white',marginBottom:3}}>Krithik Raj</p>
              <p style={{fontFamily:'monospace',fontSize:10,letterSpacing:3,textTransform:'uppercase',color:'var(--cyan)'}}>Robotics Engineer</p>
            </div>
            <span style={{fontSize:9,letterSpacing:2,padding:'5px 12px',borderRadius:100,background:'rgba(163,230,53,0.15)',border:'1px solid rgba(163,230,53,0.5)',color:'var(--lime)',textTransform:'uppercase',fontFamily:'monospace'}}>Available</span>
          </div>
        </div>
        <motion.div animate={{y:[-5,5,-5]}} transition={{duration:3,repeat:Infinity,ease:'easeInOut'}}
          style={{position:'absolute',top:16,right:16,zIndex:10,background:'rgba(4,6,15,0.75)',backdropFilter:'blur(12px)',border:'1px solid rgba(139,92,246,0.5)',borderRadius:10,padding:'6px 12px',fontFamily:'monospace',fontSize:9,letterSpacing:2,color:'var(--violet)',textTransform:'uppercase'}}>
          NCNR Lab
        </motion.div>
        <motion.div animate={{y:[5,-5,5]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut',delay:1}}
          style={{position:'absolute',top:56,right:16,zIndex:10,background:'rgba(4,6,15,0.75)',backdropFilter:'blur(12px)',border:'1px solid rgba(6,182,212,0.5)',borderRadius:10,padding:'6px 12px',fontFamily:'monospace',fontSize:9,letterSpacing:2,color:'var(--cyan)',textTransform:'uppercase'}}>
          UoB 2025
        </motion.div>
      </div>
      {[0,1,2,3,4,5].map((i)=>(
        <motion.div key={i} animate={{rotate:360}} transition={{duration:6+i*2,repeat:Infinity,ease:'linear'}}
          style={{position:'absolute',top:'50%',left:'50%',width:6,height:6,borderRadius:'50%',background:i%2===0?'var(--violet)':'var(--cyan)',boxShadow:i%2===0?'0 0 10px var(--violet)':'0 0 10px var(--cyan)',transformOrigin:(200+i*10)+'px 0px',marginTop:-3,marginLeft:-3,zIndex:2}}/>
      ))}
    </motion.div>
  )
}
export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    let i=0,c=0,del=false,t:ReturnType<typeof setTimeout>
    const tick=()=>{const cur=roles[i];if(!typedRef.current)return;if(!del){typedRef.current.textContent=cur.slice(0,c+1);c++;if(c===cur.length){del=true;t=setTimeout(tick,2000);return}}else{typedRef.current.textContent=cur.slice(0,c-1);c--;if(c===0){del=false;i=(i+1)%roles.length}}t=setTimeout(tick,del?28:55)}
    t=setTimeout(tick,800);return()=>clearTimeout(t)
  },[])
  const cv={hidden:{},show:{transition:{staggerChildren:0.15,delayChildren:0.3}}}
  const iv={hidden:{opacity:0,y:40},show:{opacity:1,y:0,transition:{duration:0.8,ease:[0.16,1,0.3,1] as any}}}
  return (
    <section id="hero" className="hero-grid" style={{position:'relative',height:'100vh',display:'grid',gridTemplateColumns:'1fr 1fr',alignItems:'center',overflow:'hidden',padding:'0 40px',gap:40}}>
      <div style={{position:'absolute',inset:0,zIndex:0}}><SphereScene /></div>
      <div style={{position:'absolute',inset:0,zIndex:1,pointerEvents:'none',background:'linear-gradient(90deg,rgba(4,6,15,0.95) 30%,rgba(4,6,15,0.5) 60%,rgba(4,6,15,0.15) 100%)'}}/>
      <motion.div variants={cv} initial="hidden" animate="show" style={{position:'relative',zIndex:10,paddingLeft:'max(40px,4vw)'}}>
        <motion.div variants={iv} style={{display:'inline-flex',alignItems:'center',gap:8,marginBottom:24}}>
          <span style={{display:'flex',alignItems:'center',gap:8,padding:'7px 14px',borderRadius:100,fontSize:10,letterSpacing:3,textTransform:'uppercase',background:'rgba(139,92,246,0.06)',border:'1px solid rgba(139,92,246,0.2)',color:'var(--violet)'}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'var(--lime)',animation:'blink 1.5s ease infinite'}}/>
            Seeking Roles
          </span>
        </motion.div>
        <motion.h1 variants={iv} style={{fontFamily:'Orbitron,sans-serif',fontSize:'clamp(40px,6vw,88px)',fontWeight:900,lineHeight:1,marginBottom:20}}>
          KRITHIK<br/>
          <span style={{background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>RAJ</span>
        </motion.h1>
        <motion.p variants={iv} style={{fontSize:'clamp(14px,2vw,18px)',marginBottom:32,minHeight:28,color:'var(--muted)'}}>
          <span ref={typedRef}/>
          <span style={{display:'inline-block',width:2,height:18,marginLeft:4,verticalAlign:'middle',background:'var(--cyan)',animation:'blink 1s ease infinite'}}/>
        </motion.p>
        <motion.div variants={iv} className="hero-btns" style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:32}}>
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="/assets/resume/Krithik_Raj_Resume.pdf" className="btn-ghost" target="_blank" rel="noreferrer">Resume</a>
        </motion.div>
        <motion.div variants={iv} className="hero-stats" style={{display:'flex',gap:28,paddingTop:24,borderTop:'1px solid var(--border)'}}>
          {[{n:'6+',l:'Projects'},{n:'2+',l:'Years R&D'},{n:'2',l:'Published'}].map(({n,l})=>(
            <div key={l}>
              <div style={{fontFamily:'Orbitron,sans-serif',fontSize:'clamp(20px,3vw,26px)',fontWeight:900,background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{n}</div>
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
`)

// ── About ─────────────────────────────────────────────────────────────────────
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
      <div ref={cardRef} style={{position:'relative',width:'min(340px,90vw)',height:500,borderRadius:24,overflow:'hidden',background:'linear-gradient(135deg,#0F0B2A,#1A0A3B,#0A1628)',boxShadow:'0 40px 80px rgba(139,92,246,0.2)'}}>
        <div className="animate-scan" style={{background:'linear-gradient(90deg,transparent,rgba(6,182,212,0.6),transparent)',zIndex:20}}/>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'24px 24px 18px',borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
          <span style={{fontFamily:'monospace',fontWeight:700,fontSize:13,letterSpacing:3,background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>KR·ID</span>
          <span style={{fontFamily:'monospace',fontSize:9,letterSpacing:2,textTransform:'uppercase',color:'var(--muted)'}}>Research // Engineer</span>
        </div>
        <div style={{display:'flex',gap:16,alignItems:'flex-start',padding:'24px 24px 0'}}>
          <img src="/assets/images/profile.jpg" alt="Krithik Raj" style={{width:80,height:80,borderRadius:14,objectFit:'cover',objectPosition:'center top',border:'2px solid rgba(139,92,246,0.5)',flexShrink:0}}/>
          <div>
            <h3 style={{fontSize:17,fontWeight:700,marginBottom:4,fontFamily:'Orbitron,sans-serif',color:'white'}}>Krithik Raj</h3>
            <p style={{fontFamily:'monospace',fontSize:10,color:'var(--cyan)',letterSpacing:1,marginBottom:10}}>ROBOTICS_ENG.v2</p>
            <span style={{fontSize:9,letterSpacing:2,textTransform:'uppercase',padding:'4px 10px',borderRadius:100,background:'rgba(163,230,53,0.1)',border:'1px solid rgba(163,230,53,0.3)',color:'var(--lime)'}}>● AVAILABLE</span>
          </div>
        </div>
        <div style={{margin:'20px 24px 0',height:1,background:'rgba(255,255,255,0.05)'}}/>
        <div style={{padding:'16px 24px',display:'flex',flexDirection:'column',gap:12}}>
          {fields.map(({l,v,c})=>(
            <div key={l} style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <span style={{fontFamily:'monospace',fontSize:10,letterSpacing:2,textTransform:'uppercase',color:'var(--muted)'}}>{l}</span>
              <span style={{fontSize:12,fontWeight:700,color:c}}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:'1px solid rgba(255,255,255,0.05)'}}>
          <div style={{display:'flex',alignItems:'flex-end',gap:2,height:28}}>
            {[60,100,40,80,55,100,35,75,50,90,45,70].map((h,i)=>(
              <span key={i} className="animate-blink" style={{width:2,height:h+'%',background:'rgba(139,92,246,0.5)',borderRadius:2,display:'block',animationDelay:i*0.1+'s'}}/>
            ))}
          </div>
          <span style={{fontFamily:'monospace',fontSize:9,letterSpacing:2,color:'var(--muted)'}}>ID·2025·NCNR·001</span>
        </div>
      </div>
    </div>
  )
}
export default function About() {
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-100px'})
  return(
    <section id="about" className="section-pad" style={{padding:'120px 0',position:'relative',overflow:'hidden',background:'var(--bg2)',transition:'background .4s'}}>
      <div ref={ref} className="two-col" style={{maxWidth:1100,margin:'0 auto',padding:'0 clamp(20px,5vw,64px)',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'clamp(40px,6vw,96px)',alignItems:'center'}}>
        <motion.div initial={{opacity:0,x:-40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.9}}>
          <span className="section-label">// Who I Am</span>
          <h2 className="section-title" style={{marginBottom:28}}>Engineer &<br/><span className="grad-text">Innovator</span></h2>
          <div style={{color:'var(--muted)',lineHeight:1.9,fontSize:'clamp(14px,2vw,16px)',display:'flex',flexDirection:'column',gap:14}}>
            <p>Robotics engineer with a background in <strong style={{color:'var(--text)'}}>mechanical engineering</strong>, specialising in autonomous systems and intelligent perception.</p>
            <p>Currently a <strong style={{color:'var(--text)'}}>Research Associate</strong> at the Extreme Robotics Laboratory (NCNR), bridging theory and real-world autonomous applications.</p>
            <p>Interests: <strong style={{color:'var(--text)'}}>ROS 2, SLAM, Computer Vision, Autonomous Mobile Robots</strong>.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginTop:32}}>
            {[{n:'6+',l:'Projects'},{n:'2+',l:'Years R&D'},{n:'2',l:'Published'}].map(({n,l})=>(
              <div key={l} style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:14,padding:16,textAlign:'center',transition:'background .4s'}}>
                <div style={{fontSize:28,fontWeight:700,marginBottom:4,background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',fontFamily:'Orbitron,sans-serif'}}>{n}</div>
                <div style={{fontSize:10,letterSpacing:2,textTransform:'uppercase',color:'var(--muted)'}}>{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,x:40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.9,delay:0.2}}><IDCard/></motion.div>
      </div>
    </section>
  )
}
`)

// ── Projects ──────────────────────────────────────────────────────────────────
write('components/sections/Projects.tsx', `'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '../../lib/utils'
export default function Projects() {
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-100px'})
  const [open,setOpen]=useState<string|null>(null)
  return(
    <section id="projects" className="section-pad" style={{padding:'120px 0',position:'relative',background:'var(--bg)',transition:'background .4s'}}>
      <div className="grid-bg"/>
      <div ref={ref} style={{maxWidth:1100,margin:'0 auto',padding:'0 clamp(20px,5vw,64px)'}}>
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} style={{marginBottom:48}}>
          <span className="section-label">// Projects</span>
          <h2 className="section-title">Selected <span className="grad-text">Work</span></h2>
        </motion.div>
        <div style={{display:'flex',flexDirection:'column',gap:4}}>
          {PROJECTS.map((proj,idx)=>{
            const isOpen=open===proj.id
            return(
              <motion.div key={proj.id} initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.6,delay:idx*0.08}}
                style={{borderRadius:14,border:'1px solid '+(isOpen?'rgba(139,92,246,0.6)':'var(--border)'),background:'var(--surface)',overflow:'hidden',transition:'border-color .3s,background .4s'}}>
                <div style={{display:'flex',alignItems:'center',gap:'clamp(12px,3vw,24px)',padding:'clamp(16px,3vw,24px) clamp(16px,3vw,28px)'}}>
                  <span style={{fontFamily:'monospace',fontSize:11,letterSpacing:3,color:'var(--muted)',minWidth:32,flexShrink:0}}>{proj.id}</span>
                  <h3 style={{flex:1,fontSize:'clamp(13px,2.5vw,17px)',fontWeight:600,fontFamily:'Orbitron,sans-serif',color:isOpen?'var(--violet)':'var(--text)',transition:'color .3s'}}>{proj.title}</h3>
                  <div className="desktop-only" style={{display:'flex',gap:8}}>
                    {proj.tags.slice(0,2).map((tag:string)=><span key={tag} style={{fontFamily:'monospace',fontSize:9,padding:'4px 10px',borderRadius:100,background:'rgba(139,92,246,0.08)',border:'1px solid rgba(139,92,246,0.2)',color:'var(--violet)'}}>{tag}</span>)}
                  </div>
                  <button onClick={()=>setOpen((p:string|null)=>p===proj.id?null:proj.id)}
                    style={{width:40,height:40,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid '+(isOpen?'var(--violet)':'var(--border)'),background:isOpen?'var(--violet)':'transparent',cursor:'pointer',transition:'all .3s',flexShrink:0}}>
                    <span style={{fontSize:16,transform:isOpen?'rotate(135deg)':'rotate(0)',transition:'transform .3s',color:isOpen?'white':'var(--muted)'}}>&#8599;</span>
                  </button>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen&&(
                    <motion.div key="d" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.4}} style={{overflow:'hidden'}}>
                      <div className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,padding:'8px clamp(16px,3vw,28px) 28px clamp(60px,6vw,100px)'}}>
                        <p style={{color:'var(--muted)',fontSize:'clamp(13px,2vw,15px)',lineHeight:1.8}}>{proj.desc}</p>
                        <div style={{display:'flex',flexDirection:'column',gap:10}}>
                          {[{l:'Stack',v:proj.tags.join(' · ')},{l:'Domain',v:proj.domain},{l:'Year',v:proj.year}].map(({l,v})=>(
                            <div key={l} style={{display:'flex',gap:10,alignItems:'center',flexWrap:'wrap'}}>
                              <span style={{fontFamily:'monospace',fontSize:9,letterSpacing:2,textTransform:'uppercase',color:'var(--muted)',minWidth:48}}>{l}</span>
                              <span style={{fontSize:12,fontWeight:700,color:'var(--text)'}}>{v}</span>
                            </div>
                          ))}
                          <a href={proj.link} target="_blank" rel="noreferrer" style={{marginTop:8,fontWeight:700,fontSize:11,letterSpacing:2,textTransform:'uppercase',color:'var(--cyan)',textDecoration:'none'}}>
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

// ── Skills ────────────────────────────────────────────────────────────────────
write('components/sections/Skills.tsx', `'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS } from '../../lib/utils'
export default function Skills() {
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-100px'})
  return(
    <section id="skills" className="section-pad" style={{padding:'120px 0',position:'relative',background:'var(--bg2)',transition:'background .4s'}}>
      <div className="grid-bg"/>
      <div ref={ref} style={{maxWidth:1100,margin:'0 auto',padding:'0 clamp(20px,5vw,64px)'}}>
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} style={{marginBottom:48}}>
          <span className="section-label">// Toolkit</span>
          <h2 className="section-title">Technical <span className="grad-text">Skills</span></h2>
        </motion.div>
        <div className="skills-grid" style={{display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:10}}>
          {SKILLS.map((sk:{icon:string,name:string},i:number)=>(
            <motion.div key={sk.name} initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:i*0.04}} whileHover={{y:-5}}
              style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:14,display:'flex',flexDirection:'column',alignItems:'center',gap:10,padding:'16px 8px',transition:'border-color .3s,background .4s'}}
              onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.borderColor='rgba(139,92,246,0.6)'}}
              onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.borderColor='var(--border)'}}>
              <span style={{fontSize:26}}>{sk.icon}</span>
              <span style={{fontSize:10,fontWeight:700,color:'var(--muted)',textAlign:'center'}}>{sk.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
`)

// ── Experience ────────────────────────────────────────────────────────────────
write('components/sections/Experience.tsx', `'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EXPERIENCE } from '../../lib/utils'
export default function Experience() {
  const ref=useRef(null)
  const inView=useInView(ref,{once:true,margin:'-100px'})
  return(
    <section id="experience" className="section-pad" style={{padding:'120px 0',position:'relative',background:'var(--bg)',transition:'background .4s'}}>
      <div ref={ref} style={{maxWidth:1100,margin:'0 auto',padding:'0 clamp(20px,5vw,64px)'}}>
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8}} style={{marginBottom:48}}>
          <span className="section-label">// Career</span>
          <h2 className="section-title">Professional <span className="grad-text">Journey</span></h2>
        </motion.div>
        <div style={{position:'relative',paddingLeft:'clamp(24px,5vw,40px)'}}>
          <motion.div initial={{scaleY:0}} animate={inView?{scaleY:1}:{}} transition={{duration:1.5,ease:'easeOut',delay:0.3}}
            style={{position:'absolute',left:0,top:0,bottom:0,width:1,background:'linear-gradient(to bottom,var(--violet),var(--cyan),transparent)',transformOrigin:'top'}}/>
          <div style={{display:'flex',flexDirection:'column',gap:32}}>
            {EXPERIENCE.map((exp:any,i:number)=>(
              <motion.div key={exp.role} initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.3+i*0.2}} style={{position:'relative'}}>
                <div style={{position:'absolute',left:'clamp(-34px,-5vw,-40px)',top:8,width:12,height:12,borderRadius:'50%',background:exp.color,boxShadow:'0 0 16px '+exp.color}}/>
                <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:14,padding:'clamp(20px,3vw,28px)',transition:'background .4s'}}>
                  <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:12,flexWrap:'wrap',marginBottom:6}}>
                    <h3 style={{fontSize:'clamp(15px,2.5vw,18px)',fontWeight:600,fontFamily:'Orbitron,sans-serif'}}>{exp.role}</h3>
                    <span style={{fontFamily:'monospace',fontSize:10,letterSpacing:2,padding:'4px 12px',borderRadius:100,background:'rgba(6,182,212,0.08)',border:'1px solid rgba(6,182,212,0.2)',color:'var(--cyan)',whiteSpace:'nowrap'}}>{exp.date}</span>
                  </div>
                  <p style={{fontSize:13,fontWeight:700,color:exp.color,marginBottom:12}}>{exp.company}</p>
                  <ul style={{display:'flex',flexDirection:'column',gap:6,listStyle:'none'}}>
                    {exp.points.map((pt:string)=><li key={pt} style={{fontSize:'clamp(12px,2vw,14px)',paddingLeft:16,position:'relative',color:'var(--muted)',lineHeight:1.7}}><span style={{position:'absolute',left:0,color:'var(--violet)'}}>&#9657;</span>{pt}</li>)}
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

// ── Contact ───────────────────────────────────────────────────────────────────
write('components/sections/Contact.tsx', `'use client'
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
`)

// ── page.tsx — with theme state ───────────────────────────────────────────────
write('app/page.tsx', `'use client'
import { useState, useEffect } from 'react'
import Cursor from '../components/ui/Cursor'
import Navbar from '../components/ui/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
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
        <Projects/>
        <Skills/>
        <Experience/>
        <Contact/>
      </main>
      <footer style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16,padding:'clamp(20px,4vw,36px) clamp(20px,5vw,64px)',background:'var(--bg)',borderTop:'1px solid var(--border)',transition:'background .4s'}}>
        <span style={{fontFamily:'Orbitron,sans-serif',fontWeight:900,fontSize:'clamp(14px,2vw,18px)',background:'linear-gradient(135deg,var(--violet),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',letterSpacing:4}}>KRITHIK RAJ</span>
        <p style={{fontSize:13,color:'var(--muted)'}}>2026 · Robotics Engineer · Next.js + Three.js</p>
        <div style={{display:'flex',gap:10}}>
          {[{l:'in',h:'https://linkedin.com/in/krithikraj'},{l:'gh',h:'https://github.com/KrithikRajofficial'},{l:'@',h:'mailto:krithikraj@email.com'}].map(({l,h})=>(
            <a key={l} href={h} target={h.startsWith('http')?'_blank':undefined} rel="noreferrer"
              style={{width:36,height:36,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:10,border:'1px solid var(--border)',fontSize:12,fontWeight:700,color:'var(--muted)',textDecoration:'none',transition:'all .3s'}}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLAnchorElement;el.style.borderColor='var(--violet)';el.style.color='var(--violet)'}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLAnchorElement;el.style.borderColor='var(--border)';el.style.color='var(--muted)'}}>
              {l}
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}
`)

console.log('\n✅ ALL FILES WRITTEN!')
console.log('Run: npm run dev')
