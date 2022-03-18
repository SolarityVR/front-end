import { useEffect, useState, FC } from 'react'
import Script from 'next/script'

import { useWebTRTC } from '../../utils/useWebTRTC';

const ChatModule = () => {
  const [mounted, setMounted] = useState(false)
  const { clients, provideRef, handelMute } = useWebTRTC(-1, {name});

  useEffect(() => {
    require('aframe/dist/aframe-master.js')
    setMounted(true)
  }, [])

  useEffect(() => {
    var entity = document.querySelector('a-entity[camera]');
    if(entity) {
      entity.setAttribute('id', 'player');
      entity.setAttribute('class', 'heads');
      entity.setAttribute('networked', 'template:#avatar-template;attachTemplateToLocal:false;');
      entity.setAttribute('position', '0 1.6 0');
    }
    require('multiuser-aframe/dist/networked-aframe.js')
  })

  if (mounted) {
    return (
      <div>
        <a-scene
          renderer="colorManagement: true"
          networked-scene="
          room: blocks;
          debug: true;"
        >
          <a-assets>
            <img id="grid" src="https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png" crossOrigin="anonymous"/>
            <img id="sky" src="https://img.gs/bbdkhfbzkk/2048x2048,stretch/https://i.imgur.com/WqlqEkq.jpg" crossOrigin="anonymous" />

            <a-asset-item id="raccoon-obj" src="/resource/models/avatar1.glb"></a-asset-item>
            {/* <a-asset-item id="raccoon-mtl" src="/assets/Raccoon_Blocks/materials.mtl"></a-asset-item> */}
            <a-asset-item id="scene-obj" src="/assets/Campfire_Blocks/model.obj"></a-asset-item>
            <a-asset-item id="scene-mtl" src="/assets/Campfire_Blocks/materials.mtl"></a-asset-item>

            <img id="sechelt" crossOrigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"/>
            <template 
              id="avatar-template"
              dangerouslySetInnerHTML={{
                __html: '<a-gltf-model src="#raccoon-obj" scale="3 3 3" position="0 2 -2"></a-gltf-model>'
              }}
            />
            
          </a-assets>

          <a-sky id="image-360" radius="100" src="#sechelt" data-set-image-fade-setup="true" animation__fade=""></a-sky>

          <a-entity obj-model="obj: #scene-obj; mtl: #scene-mtl" position="-0.542 1.5 -6.206" scale="30 30 30"/>
        </a-scene>

        <div>
          {
            clients && clients.map((client:any, index: any) => {
              return (
                <div key={index}>
                  <div>
                    <audio
                      autoPlay
                      ref={(instance) => (provideRef(instance, client.name))}
                    />
                    <img src={client.avatar} alt="avatar" srcSet="" />
                  </div>
                  <p>{client.name}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  return (
    <div id="loading_screen">
        ...Load
    </div>
  )
};

export default ChatModule;
