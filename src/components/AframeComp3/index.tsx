import { useEffect, useState } from 'react'


export default function AframeComp4 () {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    require('aframe/dist/aframe-master.js')
    setMounted(true)
  }, [])

  if (mounted) {
    return (
      <a-scene arjs='' embedded>
        <a-entity camera />
        <a-assets>
          <a-asset-item id="bastardo" src="/room/scene.gltf" ></a-asset-item>
        </a-assets>

        <a-entity camera />
        <a-entity rotation="0 -105 0">
            <a-gltf-model src="#bastardo" scale="1 1 1" position="0 -40 0" rotation="0 -35 0">
            </a-gltf-model>
        </a-entity>
        <a-sky src="https://t4.ftcdn.net/jpg/03/38/03/31/360_F_338033132_xBAEbVbjqYOkxtpyhWF5CzdyiecmRp2F.jpg"></a-sky>
      </a-scene>
    )
  }
  return (
    <div>load...</div>
  )
}