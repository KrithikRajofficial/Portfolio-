'use client'
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
