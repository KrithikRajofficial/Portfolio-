'use client'
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
