import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
import { Text, Image} from '@react-three/drei'
import {useNavigate} from 'react-router-dom'


export default function Library(){
    let navigate = useNavigate()
    
    return(
        <Canvas>
            <Suspense>
                
        <Image position={[1.3,0,3.8]} transparent={true}  url="/library.png"/>
        
        <Text position={[-1.4,0.9,3.6]} onClick={()=>{navigate("/sodium-potassium-pump")}}>
        <meshBasicMaterial color="black"/>
        {"Sodium-Potassium Pump"}
        </Text>
            </Suspense>
        </Canvas>
    )
}