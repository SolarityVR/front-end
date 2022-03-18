import { useEffect, useState } from 'react'


export default function AframeComp1 () {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    require('aframe/dist/aframe-master.js')
    setMounted(true)
  }, [])

  if (mounted) {
    return (
      <a-scene arjs='' embedded renderer="antialias: true;
      colorManagement: true;
      sortObjects: true;
      physicallyCorrectLights: true;">
        <a-entity camera />
        <a-assets>
          <a-asset-item id="bro" src="/monke/scene.gltf" ></a-asset-item>
        </a-assets>
        <a-marker preset='hiro'>
          <a-entity
            position='0 0 0'
            rotation='0 0 0'
            scale='0.05 0.05 0.05'
            gltf-model='/examples/image-tracking/nft/trex/scene.gltf'
          />
        </a-marker>
        <a-entity camera />
        <a-gltf-model src="#bro" scale="0.1 0.1 0.1" position="-2.3 1.2 -5"  rotation="0 70 0">
        </a-gltf-model>
        <a-sky src="https://media.istockphoto.com/photos/clear-sunset-sky-background-texture-with-copyspace-and-natural-picture-id936641980?k=20&m=936641980&s=170667a&w=0&h=Qg9D6OjvEp-HW90PG7bjWGEHREKzZ4t6ci_mn1zwmvQ="></a-sky>
      </a-scene>
    )
  }
  return (
    <div>load...</div>
  )
}

