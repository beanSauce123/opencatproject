import './App.css';
import { Canvas, } from "@react-three/fiber";
import { Suspense } from "react";
import {Text} from "@react-three/drei";

export default function About(){

      return(
    <Canvas>
        <Suspense>
            <Text position={[0,0.4,4.2]}>
                <meshBasicMaterial color="black"/>
                {"Hello, my name is Ahmed. Welcome"}
            </Text>
            <Text scale={0.8} position={[0,-0.1,3.6]}>
                <meshBasicMaterial color="black"/>
                {"I'm currently an undergrad. Last year, I developed an interest in 3D front-end dev and took\n\na gap year to create a portfolio. At the end, I realized that I wanted to pursue a career in medicine.\n\nMy goal is to use the 3D dev skills I learned to create a study resource for the MCAT and\n\ngeneral study. The aim is not to create cluttered, elaborate visuals that distract from the main point -\n\nrather, I will keep it simple and clear. New content will be posted on a weekly basis, and I hope to add\n\na search/filter system once more content is up. I hope this proves to be a helpful resource."}
            </Text>
        </Suspense>
    </Canvas>
      )
}
