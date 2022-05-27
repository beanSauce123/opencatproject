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
            <Text scale={0.8} position={[0.03,-0.2,3.6]}>
                <meshBasicMaterial color="black"/>
                {"I'm currently an undergrad. I developed an interest in 3D front-end dev with ThreeJS, React, and Blender,\n\nso I took a gap year to create a portfolio. At the end, I realized that I wanted to pursue a career in medicine\n\n(quite the plot twist, isn't it?). My goal is to use the 3D dev skills I learned to create the first comprehensive,\n\nstudent-led, (and most importantly) free resource for the MCAT and general study. The aim is not to create\n\ncluttered, elaborate visuals that distract from the main point - rather, I will keep it simple and clear. New content\n\nwill be posted on a weekly basis, and I intend to add a search/filter system once more content is up. I hope this\n\nproves to be a helpful resource. If you're interested in getting in touch, you can contact me at atmalik1331@gmail.com"}
            </Text>
        </Suspense>
    </Canvas>
      )
}
