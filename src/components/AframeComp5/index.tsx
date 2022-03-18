import { useEffect, useState } from 'react'


export default function AframeComp5 () {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    require('aframe/dist/aframe-master.js')
    setMounted(true)
  }, [])

  if (mounted) {
    return (
      <a-scene arjs='' embedded >
          <a-cursor></a-cursor>
        <a-entity camera look-controls /> 
        <a-assets>
          <a-asset-item id="nonno" src="/super mario/scene.gltf" ></a-asset-item>
        </a-assets>

       
        <a-entity rotation="0 0 0">
            <a-gltf-model src="#nonno" scale="1 1 1" position="0 -5 0">
            </a-gltf-model>
        </a-entity>
        <a-entity camera />
        <a-sky src="https://cdna.artstation.com/p/assets/images/images/027/829/656/medium/porntap-paenmook-nsmbu-sky-background-1.jpg?1592674343∂"></a-sky>
      </a-scene>
    )
  }
  return (
    <div>load...</div>
  )
}