import { useEffect, useState } from 'react'


export default function  () {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    require('aframe/dist/aframe-master.js')
    setMounted(true)
  }, [])

  if (mounted) {
    return (
      <a-scene arjs='' embedded >
          <a-cursor></a-cursor>
        <a-entity camera look-controls fov="70" /> 
        <a-assets>
          <a-asset-item id="nono" src="/mine/scene.gltf" ></a-asset-item>
        </a-assets>

       
        <a-entity rotation="0 0 0">
            <a-gltf-model src="#nono" scale="1 1 1" position="0 7 -130" rotation="0 70 0"> 
            </a-gltf-model>
        </a-entity>
        <a-entity camera />
        <a-sky src='/zio.jpg'></a-sky>
      </a-scene>
    )
  }
  return (
    <div>load...</div>
  )
}