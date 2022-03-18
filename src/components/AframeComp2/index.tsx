import { useEffect, useState } from 'react'


export default function AframeComp2 () {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    require('aframe/dist/aframe-master.js')
    setMounted(true)
  }, [])

  if (mounted) {
    return (
      <a-scene arjs='' embedded
      renderer="antialias: true;
        colorManagement: true;
        sortObjects: true;
        physicallyCorrectLights: true;">
        <a-entity camera />
        <a-assets>
          <a-asset-item id="U" src="/normalroom.glb" ></a-asset-item>
        </a-assets>

        <a-entity camera />
        <a-entity rotation="0 -105 0">
            <a-gltf-model src="#U" scale="1 1 1" position="0 0 0"  scale="1 1 1" rotation="0 0 0">
            </a-gltf-model>
        </a-entity>
        <a-sky src="https://ak.picdn.net/shutterstock/videos/17170723/thumb/1.jpg"></a-sky>
      </a-scene>
    
      )
    }
  return (
    <div>load...</div>
  )
  }