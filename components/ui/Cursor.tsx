'use client'
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
