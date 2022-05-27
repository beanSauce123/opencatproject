import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
Text,
Text3D,
Box,
Float,
PerspectiveCamera,
MeshDistortMaterial,
RoundedBox,
Plane,
Sphere,
Image
} from "@react-three/drei";
import { useSpring, animated, config } from '@react-spring/three'
import * as THREE from "three";

function Camera({ newPosCam }) {
    const camRef = useRef(null);
  
    useFrame((state, dt) => {
      state.camera.position.lerp(newPosCam, THREE.MathUtils.damp(0, 1, 2, dt));
    });
  
    return (
      <PerspectiveCamera
        ref={camRef}
        makeDefault
        position={[-2, 6, 8.6]}
        rotation={[-0.54, -0.48 + Math.PI / 10, 0.24 - Math.PI / 10]}
        fov={50}
      />
    );
  }
  
  function DirLight({ newPosDirLight }) {
    const dirRef = useRef(null);
  
    useFrame((state, dt) => {
      dirRef.current.position.lerp(
        newPosDirLight,
        THREE.MathUtils.damp(0, 1, 2, dt)
      );
    });
  
    return (
      <directionalLight
      ref={dirRef}
      intensity={1.5}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
      />
    );
  }
  
  function Sod(props){
return(
    <Text3D
    {...props}
    font={"/font/textfont.json"}
    size={0.8}
    height={0.1}
    curveSegments={32}
    bevelEnabled={true}
    bevelThickness={0.05}
    bevelSize={0.05}
    bevelOffset={0}
    bevelSegments={8}>
    {"Na+"}
    <meshStandardMaterial color="#1e90ff"/>
    </Text3D>
)
  }

  function NextBut(props){
      return(
        <Text3D
        {...props}
         font={"/font/textfont.json"}
         size={0.8}
         height={0.1}
         curveSegments={32}
         bevelEnabled={true}
         bevelThickness={0.05}
         bevelSize={0.05}
         bevelOffset={0}
         bevelSegments={8}>
             {"Next"}
             <meshStandardMaterial color="#e74c3c"/>
        </Text3D>
    
      )
  }

  const AnimatedSod = animated(Sod)
  const AnimatedPot = animated(Pot)
  const AnimatedBox = animated(RoundedBox)
  const AnimatedSphere = animated(Sphere)
  
  function BackBut(props){
    return(
      <Text3D
      {...props}
       font={"/font/textfont.json"}
       size={0.8}
       height={0.1}
       curveSegments={32}
       bevelEnabled={true}
       bevelThickness={0.05}
       bevelSize={0.05}
       bevelOffset={0}
       bevelSegments={8}>
           {"Back"}
           <meshStandardMaterial color="#0984e3"/>
      </Text3D>
  
    )
}

  function Pot({...props}){
    return(
        <Text3D
        {...props}
        font={"/font/textfont.json"}
        size={0.8}
        height={0.1}
        curveSegments={32}
        bevelEnabled={true}
        bevelThickness={0.05}
        bevelSize={0.05}
        bevelOffset={0}
        bevelSegments={8}>
        {"K+"}
        <meshStandardMaterial color="#38ada9"/>
        </Text3D>
    )
      }

      
  function Chl({...props}){
    return(
        <Text3D
        {...props}
        font={"/font/textfont.json"}
        size={0.8}
        height={0.1}
        curveSegments={32}
        bevelEnabled={true}
        bevelThickness={0.05}
        bevelSize={0.05}
        bevelOffset={0}
        bevelSegments={8}>
        {"Cl-"}
        <meshStandardMaterial color="#fed330"/>
        </Text3D>
    )
      }
     
export default function Pump(){
   
    
  const [newPosCam, setNewPosCam] = useState(new THREE.Vector3(-2, 6, 8.6));

  const [newPosDirLight, setnewPosDirLight] = useState(
    new THREE.Vector3(11.4, 10, 5.2)
  );

  
  const updatePosDirLight = (vector) => {
    setnewPosDirLight(vector);
  };

  const updatePosCam = (vector) => {
    setNewPosCam(vector);
  };



  const clickUpdate = (vector1, vector2) => {
    updatePosCam(vector1);
    updatePosDirLight(vector2);
    
  };

  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);


  const { position } = useSpring({
    position: active ?[40.4,2.7,2.7] : [41,2,5.7],
    config: config.gentle
  });

  const { position2 } = useSpring({
    position2: active ?[40.2,1.7,2.7]:[40,2,5.5],
    config: config.gentle
  });

  const { position3 } = useSpring({
    position3: active ? [39.8,0.9,3]:[39,1,4.5],
    config: config.gentle
  });

  const { position4 } = useSpring({
    position4: active2 ? [63,4,2]:[62,2,3],
    config: config.gentle
  });

  const { position5 } = useSpring({
    position5: active2 ? [64.5,4,2]:[62,1.2,3],
    config: config.gentle
  });

  const { position6 } = useSpring({
    position6: active2 ? [66,4.5,1]:[61.8,0.3,3.2],
    config: config.gentle
  });
  const { position7 } = useSpring({
    position7: active3 ? [75.2,1.5,2]:[72.5,3.5,-1],
    config: config.gentle
  });
  const { position8 } = useSpring({
    position8: active3 ? [75.8,2.5,1.6]:[76,2,-1],
    config: config.gentle
  });
  const { position9 } = useSpring({
    position9: active4 ? [94,-2.5,2.5]:[93,2.2,2.1],
    config: config.gentle
  });
  const { position10 } = useSpring({
    position10: active4 ? [92,-2.5,2.5]:[93,1,2.6],
    config: config.gentle
  });
  const { position11 } = useSpring({
    position11: active5 ? [134,0,3.5]:[134.5,4.6,0],
    config: config.gentle
  });
  const { position12 } = useSpring({
    position12: active5 ? [135.5,1,-4]:[139,3.6,-4.3],
    config: config.gentle
  });
  const { position13 } = useSpring({
    position13: active6 ? [158,1.8,1]:[150,1.8,0.5],
    config: config.gentle
  });
  const { position14 } = useSpring({
    position14: active6 ? [160,1.8,1.3]:[152,1.8,0.5],
    config: config.gentle
  });
  const { position15 } = useSpring({
    position15: active6 ?[158,-1.6,2.5]:[152,-1.6,2.5],
    config: config.gentle
  });
 

  const { rotation } = useSpring({
    rotation: active2 ?[-0.4,-0.4,0.5]: [-0.4,-0.4,-0.3],
    config: config.gentle
  });
 
  const { rotation2 } = useSpring({
    rotation2: active2 ?[-0.4,-0.4,-0.5]: [-0.4,0.18,0.36],
    config: config.gentle
  });

  const { rotation3 } = useSpring({
    rotation3: active4 ?[-0.4,-0.06,0.4]:[-0.4,-0.06,-0.4],
    config: config.gentle
  });

  const { rotation4 } = useSpring({
    rotation4: active4 ? [-0.3,-0.4,-0.5]:[-0.3,-0.4,0.24],
    config: config.gentle
  });


  const { color1 } = useSpring({
    color1: active6 ? "#6a89cc":"#ff5252",
    config: config.gentle
  });

  const { color2 } = useSpring({
    color2: active6 ? "#ff5252":"#6a89cc",
    config: config.gentle
  });
 


  return(
    <Canvas>
    <Suspense>
    <ambientLight/>
    <Camera newPosCam={newPosCam}/>
    <DirLight newPosDirLight={newPosDirLight} />
    
    <Box args={[10,0.7,1000]} castShadow position={[7.3,-1,-3.1]} rotation={[0.06,0.78,-0.1]}>
    <MeshDistortMaterial  distort={0.65} speed={1} color="#ffa502"/>
    </Box>
    

{/*Page 1*/} 
<Float
  speed={1} 
  rotationIntensity={1} 
  floatIntensity={1} 
>
  <Sod position={[3.7,0.2,-4.9]} rotation={[-0.2,-0.1,0.06]}/>
  </Float>

  <Float
  speed={1} 
  rotationIntensity={1} 
  floatIntensity={1} 
>
  <Pot position={[0,1.8,-5.4]} rotation={[-0.06,0,0]}/>
  </Float>
    
  <Float
  speed={1} 
  rotationIntensity={1} 
  floatIntensity={1} 
>
  <Sod position={[4.7,1.2,-1.9]} rotation={[-0.2,-0.1,0.06]}/>
  </Float>

  <Float
  speed={1} 
  rotationIntensity={1} 
  floatIntensity={1} 
>
  <Sod position={[-2.3,2,-9.1]} rotation={[-0.2,-0.1,0.06]}/>
  </Float>

  <Float
  speed={1} 
  rotationIntensity={1} 
  floatIntensity={1} 
>
  <Sod position={[6.7,0.8,-0.7]} rotation={[-0.2,-0.1,0.06]}/>
  </Float>

  <Float
  speed={1} 
  rotationIntensity={1} 
  floatIntensity={1} 
>
  <Pot position={[-5.9,2.6,-11.7]} rotation={[-0.06,0,0]}/>
  </Float>
    
  <Float
  speed={1} 
  rotationIntensity={1} 
  floatIntensity={1} 
>
  <Pot position={[1.3,-0.4,3.5]} rotation={[-0.2,-0.1,0.06]}/>
  </Float>

  <Float
  speed={1} 
  rotationIntensity={1} 
  floatIntensity={1} 
>
  <Pot position={[0.1,-1.6,0.5]} rotation={[-0.2,-0.1,0.06]}/>
  </Float>

  <Float
  speed={1} 
  rotationIntensity={1} 
  floatIntensity={1} 
>
  <Pot position={[-1.1,-2.2,-5.5]} rotation={[-0.2,-0.1,0.06]}/>
  </Float>

  <Float
  speed={1} 
  rotationIntensity={1} 
  floatIntensity={1} 
>
  <Sod position={[-9.5,-2.5,-6.5]} rotation={[-0.2,-0.1,0.06]}/>
  </Float>

  <Float
  speed={1} 
  rotationIntensity={1} 
  floatIntensity={1} 
>
  <Pot position={[-11.3,-2.2,-12.1]} rotation={[-0.2,-0.1,0.06]}/>
  </Float>

  <Text scale={1.2} position={[-3.1,3.5,6.2]} rotation={[-0.55,0.06,-0.12]}>
    {"Neurons have more potassium ions\ninside the membrane"}
    <meshBasicMaterial color="black"/>
  </Text>

  <Text scale={1.2} position={[0.4,5.5,5.9]} rotation={[-0.3,-0.4,-0.06]}>
    {"and more sodium ions\noutside the membrane"}
    <meshBasicMaterial color="black"/>
  </Text>


    <NextBut 
    onClick={() =>
        clickUpdate(
          new THREE.Vector3(29, 6, 8.6),
          new THREE.Vector3(34.4, 10, 5.2)
        )
      }
    position={[11.1,1.2,-4.8]}
    rotation={[-0.45,-0.7,-0.1]}
    />

{/*Page 2*/} 
<NextBut 
    onClick={() =>
        clickUpdate(
          new THREE.Vector3(40, 6, 8.6),
          new THREE.Vector3(45.4, 10, 5.2)
        )
      }
    position={[31.9,0.8,4.7]}
    rotation={[-0.7,0.06,-0.1]}
    />

    <BackBut 
    onClick={() =>
        clickUpdate(
          new THREE.Vector3(-2, 6, 8.6),
          new THREE.Vector3(11.4,10,5.2)
        )
      }
    position={[24.2,0.2,2.9]}
    rotation={[-0.5,0.48,0]}
    />
    
  <Text scale={1} position={[29.2,5.6,7.7]} rotation={[-0.48,-0.1,-0.06]}>
    {"This gradient is created by\n the sodium potassium pump"}
    <meshBasicMaterial color="black"/>
  </Text>

{/*Page 3*/}
    
<Text scale={1} position={[40.4,5.4,6.2]} rotation={[-0.3,-0.3,-0.05]}>
    {"1. Three sodium ions bind to the pump"}
    <meshBasicMaterial color="black"/>
  </Text>

<Text  position={[40,5,7]} rotation={[-0.7,-0.8,0.78]}>
    {"Click me!"}
<meshBasicMaterial color="#cd84f1"/>
</Text>

<RoundedBox onClick={() => setActive(!active)}  args={[1,4,1]} radius={0.15} smoothness={4} position={[40,2,2.5]} rotation={[-0.48,-0.54,-0.5]}>
<meshStandardMaterial color="#8e44ad"/>
</RoundedBox>

<RoundedBox args={[1,4,1]} rotation={[-0.4,0.24,0.3]} position={[42.5,2,3]} radius={0.15} smoothness={4} >
<meshStandardMaterial color="#e67e22"/>
</RoundedBox>

<AnimatedSod scale={0.6} position={position} rotation={[-0.3,0,0]}/>
<AnimatedSod scale={0.6} position={position2} rotation={[-0.3,0,0]}/>
<AnimatedSod scale={0.6} position={position3} rotation={[-0.3,0,0]}/>

<BackBut 
    onClick={() =>
        clickUpdate(
          new THREE.Vector3(29,6,8.6),
          new THREE.Vector3(34.4,10,5.2)
        )
      }
    position={[48,3,-2]}
    rotation={[-0.3,-0.7,0.06]}
    />

    <NextBut 
    onClick={() =>
        clickUpdate(
          new THREE.Vector3(61.4,6,8.6),
          new THREE.Vector3(63.4,10,5.2)
        )
      }
    position={[47,-3,2.4]}
    rotation={[-1,-0.6,-0.2]}
    />

{/*Page 4*/}

<Text scale={1} position={[62,5.5,5.9]} rotation={[-0.25,-0.15,-0.01]}>
    {"2. The pump changes shape and\n releases the ions outside"}
    <meshBasicMaterial color="black"/>
  </Text>


  <Text  position={[61.5,5,7]} rotation={[-0.5,-0.6,1.2]}>
    {"Click me!"}
<meshBasicMaterial color="#cd84f1"/>
</Text>

<AnimatedBox onClick={() => setActive2(!active2)} position={[61.8,2,2.7]} rotation={rotation} args={[1,4,1]} radius={0.15} smoothness={4} >
<meshStandardMaterial color="#8e44ad"/>
</AnimatedBox>

<AnimatedBox args={[1,4,1]} position={[64,2,3]} rotation={rotation2} radius={0.15} smoothness={4} >
<meshStandardMaterial color="#e67e22"/>
</AnimatedBox>
<BackBut 
    onClick={() =>
        clickUpdate(
            new THREE.Vector3(40, 6, 8.6),
            new THREE.Vector3(45.4, 10, 5.2)
        )
      }
    position={[56,3.6,-4]}
    rotation={[-0.4,0.48,0]}
    />

    <NextBut 
    onClick={() =>
        clickUpdate(
          new THREE.Vector3(74.4,6,8.6),
          new THREE.Vector3(76.4,10,5.2)
        )
      }
    position={[68.5,3.4,0]}
    rotation={[-0.3,-1,0.12]}
    />

<AnimatedSod scale={0.6} position={position4} rotation={[-0.3,0,0]}/>
<AnimatedSod scale={0.6} position={position5} rotation={[-0.3,0,0]}/>
<AnimatedSod scale={0.6} position={position6} rotation={[-0.3,0,0]}/>

{/*Page 5*/}

<Text scale={1} position={[74.7,5.5,6]} rotation={[-0.4,-0.21,-0.06]}>
    {"3. Two potassium ions\nbind to the pump"}
    <meshBasicMaterial color="black"/>
  </Text>

  <Text  position={[75,5.1,7]} rotation={[-0.3,0,1.14]}>
    {"Click me!"}
<meshBasicMaterial color="#ffb142"/>
</Text>

  <BackBut 
    onClick={() =>
        clickUpdate(
            new THREE.Vector3(61.4,6,8.6),
            new THREE.Vector3(63.4,10,5.2)
        )
      }
    position={[82,3,-2]}
    rotation={[-0.4,-0.8,-0.1]}
    />

    <NextBut 
    onClick={() =>
        clickUpdate(
            new THREE.Vector3(91.4,6,8.6),
            new THREE.Vector3(94.4,10,5.2)
        )
      }
      position={[82,-2,1]}
      rotation={[-0.6,-0.6,-0.05]}
    />

<AnimatedBox position={[74,2,2]} rotation={[-0.3,-0.4,0.36]} args={[1,4,1]} radius={0.15} smoothness={4} >
<meshStandardMaterial color="#8e44ad"/>
</AnimatedBox>

<AnimatedBox onClick={() => setActive3(!active3)} args={[1,4,1]} position={[76.3,2,2.3]} rotation={[-0.3,0,-0.4]} radius={0.15} smoothness={4} >
<meshStandardMaterial color="#e67e22"/>
</AnimatedBox>

<AnimatedPot position={position7} rotation={[-0.2,-0.4,0.36]}/>
<AnimatedPot position={position8} rotation={[-0.2,-0.4,0.36]}/>

{/*Page 6*/}

<Text scale={1} position={[92,5.5,6]} rotation={[-0.3,-0.1,-0.03]}>
{"4. The pump changes shape and\n releases the ions inside"}
    <meshBasicMaterial color="black"/>
  </Text>

  <Text  position={[92,5,7]} rotation={[-0.3,0,-1.2]}>
    {"Click me!"}
<meshBasicMaterial color="#ffb142"/>
</Text>

<BackBut 
    onClick={() =>
        clickUpdate(
            new THREE.Vector3(74.4,6,8.6),
            new THREE.Vector3(76.4,10,5.2)   
            )
      }
    position={[100,3.2,-3.7]}
    rotation={[-0.3,-0.4,-0.06]}
    />

    <NextBut 
    onClick={() =>
        clickUpdate(
            new THREE.Vector3(112.4,6,8.6),
            new THREE.Vector3(115.4,10,5.2)
        )
      }
      position={[100,-3.6,2]}
      rotation={[-0.7,-0.6,0]}
    />

<AnimatedBox position={[91.6,1.6,2.3]} rotation={rotation4} args={[1,4,1]} radius={0.15} smoothness={4} >
<meshStandardMaterial color="#8e44ad"/>
</AnimatedBox>

<AnimatedBox onClick={() => setActive4(!active4)} position={[93.7,1.6,2.7]} rotation={rotation3} args={[1,4,1]} radius={0.15} smoothness={4} >
<meshStandardMaterial color="#e67e22"/>
</AnimatedBox>

<AnimatedPot position={position9} rotation={[-0.2,0.06,0.36]}/>
<AnimatedPot position={position10} rotation={[-0.3,-0.1,1.02]}/>

{/*Page 7*/}

<Text scale={1} position={[113,5,7]} rotation={[-0.45,-0.17,-0.06]}>
{"This happens very slowly - the\npotential only changes by a few mV.\n\n\n\nSo how is the membrane potential -60 to -80 mV?"}
    <meshBasicMaterial color="black"/>
  </Text>

  <BackBut 
    onClick={() =>
        clickUpdate(
            new THREE.Vector3(91.4,6,8.6),
            new THREE.Vector3(94.4,10,5.2)
            )
      }
      position={[108,3.6,-3.5]}
      rotation={[-0.45,0.48,0]}
    />

    <NextBut 
    onClick={() =>
        clickUpdate(
            new THREE.Vector3(133.4,6,8.6),
            new THREE.Vector3(136.4,10,5.2)
        )
      }
      position={[119,3.4,-0.8]}
      rotation={[-0.3,-1,-0.06]}
    />

{/*Page 8*/}

<Text scale={1} position={[132.8,5.5,6]} rotation={[-0.5,-0.14,-0.06]}>
{"Neurons have ions channels: openings\nthat allow a specific ion to pass."}
    <meshBasicMaterial color="black"/>
  </Text>

  <Text scale={1} position={[135,4.2,7.2]} rotation={[-0.5,-0.2,-0.05]}>
{"There are more potassium channels\nthan sodium channels"}
    <meshBasicMaterial color="black"/>
  </Text>

  <RoundedBox  args={[1,4,1]} radius={0.5} smoothness={10} position={[133,2.4,2.5]} rotation={[-0.6,0,-0.06]}>
<meshStandardMaterial color="#8e44ad"/>
</RoundedBox>

<RoundedBox  args={[1,4,1]} radius={0.5} smoothness={10} position={[133,2.4,2.5]} rotation={[-0.6,0,-0.06]}>
<meshStandardMaterial color="#ff5252"/>
</RoundedBox>

<RoundedBox  args={[1,4,1]} radius={0.5} smoothness={10} position={[135.5,2.3,2.7]} rotation={[-0.5,0.06,-0.06]}>
<meshStandardMaterial color="#ff5252"/>
</RoundedBox>

<Plane onClick={() => setActive5(!active5)} args={[2,3.6]} position={[134.2,2.34,2.5]} rotation={[-0.54,-0.18,-0.06]}>
  <meshStandardMaterial color="#ff5252"/>
</Plane>

<AnimatedSphere args={[0.7,64,64]} position={position11}>
<meshStandardMaterial color="#ff5252"/>
</AnimatedSphere>

<AnimatedSphere args={[1,64,64]} position={position12}>
<meshStandardMaterial color="#227093"/>
</AnimatedSphere>

<Text  position={[133.65,5.1,7.1]} rotation={[-0.6,-0.12,0]}>
    {"Click me!"}
<meshBasicMaterial color="#b33939"/>
</Text>

<BackBut 
    onClick={() =>
        clickUpdate(
          new THREE.Vector3(112.4,6,8.6),
          new THREE.Vector3(115.4,10,5.2)
            )
      }
      position={[127,-2.2,0.5]}
      rotation={[-0.84,0.6,0.18]}
    />

    <NextBut 
    onClick={() =>
        clickUpdate(
            new THREE.Vector3(153.4,6,8.6),
            new THREE.Vector3(156.4,10,5.2)
        )
      }
      position={[140,3.6,0.1]}
      rotation={[-0.54,-0.6,0]}
    />

{/*Page 9*/}
<Text scale={0.75} position={[152.7,5.5,6.3]} rotation={[-0.42,0,-0.02]}>
{"[K+] is 140 mM inside and 5 mM\noutside, so potassium ions leave"}
    <meshBasicMaterial color="black"/>
  </Text>

<Text scale={0.75} position={[154.9,5.6,6.7]} rotation={[-0.4,-0.2,-0.06]}>
{"which makes the outside net positive\nand the inside net negative."}
    <meshBasicMaterial color="black"/>
  </Text>

<Plane onClick={() => setActive6(!active6)} args={[9,7]} position={[151,0.4,0.9]} rotation={[-0.4,-0.1,-0.05]}>
<animated.meshStandardMaterial color={color1}/>
</Plane>

<Plane args={[9,8]} position={[160,-0.13,1.9]} rotation={[-0.36,-0.18,-0.04]}>
<animated.meshStandardMaterial color={color2}/>
</Plane>

<RoundedBox args={[1,4,1]} radius={0.5} smoothness={10} position={[133,2.4,2.5]} rotation={[-0.6,0,-0.06]}>
<meshStandardMaterial color="#ff5252"/>
</RoundedBox>

<RoundedBox  args={[1,4,1]} radius={0.5} smoothness={10} position={[155.5,3,0.7]} rotation={[-1,-0.1,-1.7]}>
<meshStandardMaterial color="#38ada9"/>
</RoundedBox>

<RoundedBox  args={[1,4,1]} radius={0.5} smoothness={10} position={[155.5,1.3,1.2]} rotation={[-1,-0.1,-1.7]}>
<meshStandardMaterial color="#38ada9"/>
</RoundedBox>

<RoundedBox  args={[1,4,1]} radius={0.5} smoothness={10} position={[155.5,-0.3,2.2]} rotation={[-1,-0.1,-1.7]}>
<meshStandardMaterial color="#38ada9"/>
</RoundedBox>

<RoundedBox  args={[1,4,1]} radius={0.5} smoothness={10} position={[155.5,-2.2,2.8]} rotation={[-1,-0.1,-1.7]}>
<meshStandardMaterial color="#38ada9"/>
</RoundedBox>

<AnimatedPot scale={0.75} position={position13}/>
<AnimatedPot scale={0.75} position={position14} rotation={[-0.3,-0.3,0.24]}/>
<AnimatedPot scale={0.75} position={[150,-0.4,1.7]} rotation={[-0.3,0.18,0.25]}/>
<AnimatedPot scale={0.75} position={position15} rotation={[-0.3,0.18,0.25]}/>

<Chl scale={0.75} position={[148,1,0.7]} rotation={[-0.6,0.24,0]}/>
<Chl scale={0.75} position={[150,3,0.7]} rotation={[-0.6,0.24,0]}/>
<Chl scale={0.75} position={[150,-1.5,2]} rotation={[-0.6,0.24,0]}/>
<Chl scale={0.75} position={[158,1.5,3]} rotation={[-0.7,-0.2,0]}/>
<Chl scale={0.75} position={[160,2.5,3]} rotation={[-0.7,-0.1,0]}/>

<Text  position={[152,5,6]} rotation={[-0.3,0.24,-0.05]}>
    {"Click me!"}
<meshBasicMaterial color="#c0392b"/>
</Text>

<BackBut 
    onClick={() =>
        clickUpdate(
          new THREE.Vector3(133.4,6,8.6),
          new THREE.Vector3(136.4,10,5.2)
            )
      }
      position={[152.5,3.4,-7.1]}
      rotation={[-0.12,0.3,0]}
    />

    <NextBut 
    onClick={() =>
        clickUpdate(
            new THREE.Vector3(173.4,6,8.6),
            new THREE.Vector3(176.4,10,5.2)
        )
      }
      position={[156,3.4,-4.6]}
      rotation={[-0.1,0.18,0]}
    />

{/*Page 10*/}
<Text scale={0.75} position={[173.7,5.7,7.1]} rotation={[-0.3,-0.2,-0.04]}>
{"Using these potassium concentrations, the Nernst equation gives"}
    <meshBasicMaterial color="black"/>
  </Text>

  <Text scale={0.75} position={[173.2,5.5,7.8]} rotation={[-0.3,-0.2,-0.04]}>
{"62 mV"}
    <meshBasicMaterial color="black"/>
  </Text>

  <Text scale={0.75} position={[173.2,5.5,7.8]} rotation={[-0.3,-0.2,-0.04]}>
{"62 mV"}
    <meshBasicMaterial color="black"/>
  </Text>

  <Text scale={1.2} position={[173.33,5.5,7.8]} rotation={[-0.3,-0.2,-0.04]}>
{"("}
    <meshBasicMaterial color="black"/>
  </Text>

  <Text scale={1.2} position={[173.8,5.43,7.8]} rotation={[-0.3,-0.2,-0.04]}>
{")"}
    <meshBasicMaterial color="black"/>
  </Text>

  <Text scale={1.2} position={[174.1,5.43,7.8]} rotation={[-0.3,-0.2,-0.04]}>
{"= -90 mV"}
    <meshBasicMaterial color="black"/>
  </Text>

  <Text scale={0.75} position={[173.4,5.51,7.85]} rotation={[-0.3,-0.2,-0.04]}>
{"log"}
    <meshBasicMaterial color="black"/>
  </Text>

  <Text scale={0.75} position={[173.6,5.51,7.85]} rotation={[-0.3,-0.2,-0.04]}>
{"5 mM"}
    <meshBasicMaterial color="black"/>
  </Text>

  <Text scale={0.75} position={[173.6,5.49,7.85]} rotation={[-0.3,-0.2,-0.04]}>
{"________"}
    <meshBasicMaterial color="black"/>
  </Text>

  <Text scale={0.75} position={[173.6,5.38,7.85]} rotation={[-0.3,-0.2,-0.04]}>
{"140 mM"}
    <meshBasicMaterial color="black"/>
  </Text>

  <Text scale={0.75} position={[173.7,4.9,7.6]} rotation={[-0.3,-0.2,-0.04]}>
{"but the actual potential is less negative."}
    <meshBasicMaterial color="black"/>
  </Text>
  
<BackBut 
    onClick={() =>
        clickUpdate(
          new THREE.Vector3(153.4,6,8.6),
          new THREE.Vector3(156.4,10,5.2)
            )
      }
      position={[173,1.6,-4]}
      rotation={[-0.1,0.24,0]}
    />

    <NextBut 
    onClick={() =>
        clickUpdate(
            new THREE.Vector3(193.4,6,8.6),
            new THREE.Vector3(196.4,10,5.2)
        )
      }
      position={[184,1,-3.1]}
      rotation={[-0.3,-0.7,0]}
    />

{/*Page 11*/}
<Text scale={0.75} position={[193.7,5.6,6.7]} rotation={[-0.35,-0.25,-0.05]}>
{"[Na+] is 15 mM inside and 150 mM outside, so there is a minor influx\nthrough the few open sodium channels."}
    <meshBasicMaterial color="black"/>
  </Text>

  <Text scale={0.75} position={[193.6,5,7.3]} rotation={[-0.42,-0.1,-0.05]}>
{"The Nernst equation for sodium gives +62 mV. The actual\nmembrane potential varies between these values"}
    <meshBasicMaterial color="black"/>
  </Text>

 
    </Suspense>
    </Canvas>
  )
}
