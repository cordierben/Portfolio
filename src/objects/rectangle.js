import { useState,useRef } from "react";
import { useFrame } from '@react-three/fiber'

function Rectangle(props) {
    // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
      ref.current.rotation.x = -0.13
      ref.current.rotation.y = 0.05
      ref.current.rotation.z = 0.0
  })

  
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxBufferGeometry args={[1,2,3]} />
      <meshStandardMaterial roughness={1} color={'orange'} />
    </mesh>
  )
}

export default Rectangle;