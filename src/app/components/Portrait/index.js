/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Portrait(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/assets/myface.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0.06]} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.teeth.geometry}
          material={materials.Default}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.back.geometry}
          material={materials.back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lens.geometry}
          material={materials.lens}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pupil.geometry}
          material={materials.pupil}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eyeball.geometry}
          material={materials.eyeball}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hair.geometry}
          material={materials.hair}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.head.geometry}
          material={materials.head}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/myface.glb')