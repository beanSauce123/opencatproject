import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
import {Text3D, Image, Text} from '@react-three/drei'
import {useNavigate} from 'react-router-dom'


export default function Home(){

    let navigate = useNavigate()

    return(
    <Canvas>
        <Suspense>

        <Text3D
        position={[-3,0,2]}
        font={"/font/mainfont.json"}
        size={0.8}
        height={0.1}
        curveSegments={32}
        >
        {"OpenCat"}
        <meshBasicMaterial color="black"/>
        </Text3D>

        <Image position={[0,0.4,4.2]} transparent={true}  url="/home.png"/>

      <Text onClick={()=>{navigate("/about")}} position={[1,0.6,4]}>
  {"About"}
  <meshBasicMaterial color="black"/>
</Text>


<Text scale={0.75} onClick={()=>{navigate("/library")}} position={[0.8,0,4.2]}>
  {"Library"}
  <meshBasicMaterial color="black"/>
</Text>


        </Suspense>
    </Canvas>
    )
}