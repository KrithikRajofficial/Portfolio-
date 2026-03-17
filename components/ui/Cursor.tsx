'use client'
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
