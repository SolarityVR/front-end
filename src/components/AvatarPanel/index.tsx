import { useEffect, useState, FC } from 'react'

const AvatarPanel: FC<any> = ({
  modelName,
}: {
  modelName: string;
}) => {

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    require('aframe/dist/aframe-master.js')
    setMounted(true)
  }, [])

  if (mounted) {
    return (
      // <div className='border border-gray-300'>
        <a-scene arjs='' embedded >
            <a-cursor></a-cursor>
          <a-entity camera look-controls /> 
          <a-assets>
            <a-asset-item id="raccoon-obj" src={`/assets/Raccoon_Blocks/model.obj`} ></a-asset-item>
            <a-asset-item id="raccoon-mtl" src="/assets/Raccoon_Blocks/materials.mtl"></a-asset-item>
          </a-assets>

        
          <a-entity rotation="0 0 0">
            <a-entity obj-model="obj: #raccoon-obj; mtl: #raccoon-mtl" scale="15 15 15" rotation="0 180 0" position="0 2 -3"></a-entity>
          </a-entity>
          {/* <a-sky src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6947f6ff-1746-4f45-ba2f-1a840430d78b/d7usuzw-a89ddbbb-e655-46cd-b636-f2f539bdd676.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY5NDdmNmZmLTE3NDYtNGY0NS1iYTJmLTFhODQwNDMwZDc4YlwvZDd1c3V6dy1hODlkZGJiYi1lNjU1LTQ2Y2QtYjYzNi1mMmY1MzliZGQ2NzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.y3jCwKD6_MQDfW566Gcb4lucoGDfpPA5KFKTQwXXGb4"></a-sky> */}
        </a-scene>
      // </div>
    )
  }
  return (
    <div>load...</div>
  )
};

export default AvatarPanel;