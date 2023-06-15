import { Box, useTexture } from '@react-three/drei'
import { ThreeEvent, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/three'
import { Mesh, Vector3 } from 'three'
import { previewData } from 'next/dist/client/components/headers'

type Props = {
    id:string;
  geometry: [x: number, y: number, z: number];
  material?: { color: string };
  position: [x: number, y: number, z: number];
  rotation?: [x: number, y: number, z: number];
  texture: string;
  active?: boolean;
  setActiveId: (id:string|null) => void;
};

export default function ThumbnailBox(props: Props) {
  const ref = useRef<any>()
    const animationVal = Math.random() * 0.03 + 0.005
  const { position } = useSpring<{ position: any }>({
    to: async (next) => {
      if (props.active) {
        await next({ position: [0, 0, 3] })
      } else {
        await next({
          position: [props.position[0], props.position[1], props.position[2]],
        })
      }
    },
    from: {
      position: [props.position[0], props.position[1], props.position[2]],
    },
  })

  useFrame(() => {
    if(!props.active) {
        ref.current.rotation.y += animationVal
        ref.current.rotation.z += animationVal
    }else {
        ref.current.rotation.y = 0
        ref.current.rotation.z = 0
    }
  })

  const textures = [
    useTexture('/images/docker_thumb.png'), // 右側
    useTexture('/images/docker_thumb.png'), // 左側
    useTexture('/images/docker_thumb.png'), // 上側
    useTexture('/images/docker_thumb.png'), // 下側
    useTexture(props.texture), // 前側
    useTexture(props.texture), // 後側
  ]

  const onClick = (event: ThreeEvent<MouseEvent>) => {
    props.setActiveId(props.active ? null :props.id)
}


  return (
    <animated.mesh
      ref={ref}
      position={position}
      castShadow={true}
      receiveShadow={true}
      onClick={onClick}
    >
      <Box args={props.geometry}>
        {textures.map((texture, index) => (
          <meshStandardMaterial
            key={index}
            attach={`material-${index}`}
            map={texture}
          />
        ))}
      </Box>
    </animated.mesh>
  )
}
