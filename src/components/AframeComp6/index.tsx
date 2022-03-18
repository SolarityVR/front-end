import { useEffect, useState } from 'react'


export default function AframeComp6 () {
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
          <a-asset-item id="zizzi" src="/Final.glb" ></a-asset-item>

        </a-assets>

       
        <a-entity rotation="0 0 0">
            <a-gltf-model src="#zizzi" scale="10 10 10" position="0 0 -30">
            </a-gltf-model>
            
        </a-entity>
        <a-entity camera />
        <a-sky src='https://t3.ftcdn.net/jpg/03/56/62/18/360_F_356621844_02EwpDTxw9lOCA8B52cagLvT8j7zczbS.jpg'></a-sky>
      </a-scene>
    )
  }
  return (
    <div>load...</div>
  )
}