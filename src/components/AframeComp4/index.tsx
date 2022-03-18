import { useEffect, useState } from 'react'


export default function AframeComp3 () {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    require('aframe/dist/aframe-master.js')
    setMounted(true)
  }, [])

  if (mounted) {
    return (
      <a-scene arjs='' embedded>
        <a-entity id="rig" position="25 10 0">
          <a-entity id="camera" camera look-controls></a-entity>
        </a-entity>
        <a-assets>
          <a-asset-item id="tio" src="/alien/scene.gltf" ></a-asset-item>
        </a-assets>
        <a-entity rotation="0 0 0">
            <a-gltf-model src="#tio" scale="2 2 2" position="0 1.6 -0.7 "  scale="1.2 1.2 1.2" rotation="0 0 0"
            animation__rot="property:rotation;
            dur:5000;
            to:0 360 0;
            loop: true;
            easing:linear;">
            </a-gltf-model>
        </a-entity>
        <a-sky src="https://media.istockphoto.com/photos/dark-background-with-a-spotlight-in-the-center-picture-id1002995898?k=20&m=1002995898&s=170667a&w=0&h=8yWv-UOChWMCefA-Md0KkzyFKnjSjzWA7kOAVP1mUUI="></a-sky>
      </a-scene>
    )
  }
  return (
    <div>load...</div>
  )
}