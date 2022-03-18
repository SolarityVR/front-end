import { useEffect, useState } from 'react'


export default function AframeComp () {
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
          <a-asset-item id="ciao" src="/slot/scene.gltf"></a-asset-item>
        </a-assets>

        <a-entity camera />
        <a-gltf-model src="#ciao" scale="0.06 0.06 0.06" position="3 -5 -7" rotation="0 -50 0"></a-gltf-model>
        <a-sky src="https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhciUyMHRleHR1cmV8ZW58MHx8MHx8&w=1000&q=80"></a-sky>
      </a-scene>
    )
  }
  return (
    <div>load...</div>
  )
}


