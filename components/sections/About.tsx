'use client'
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
          <img src='/assets/images/profile.jpg' alt='Krithik Raj' style={{width:88,height:88,borderRadius:16,objectFit:'cover',objectPosition:'center top',border:'2px solid rgba(139,92,246,0.4)'}}/>
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
