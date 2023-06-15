'use client'
import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ThumbnailBox from '@/components/Home/ThumbnailBox'
import Lights from '@/components/Home/Light'
import { Post } from '@/types/global'
import { Vector3 } from 'three'

type SinglePostCubeProps = {
  posts: Post[];
  textures: string[];
};

const SinglePostCube: FC<SinglePostCubeProps> = ({ posts, textures }) => {
  const [activeId, setActiveId] = useState<string|null>(null)
  const getPosition = (index: number): [number, number, number] => {
    const x = (index % 6) + (index % 6) * 1 - 5
    const y = (Math.floor(index / 6) + Math.floor(index / 6) * 1) * -1 + 1
    const z = 0
    return [x, y, z]
  }

  // マウスに追従するカメラ
  const Rig = ({ v = new Vector3() }) => {
    // return useFrame((state: { camera: { position: { lerp: (arg0: Vector3, arg1: number) => void } }; mouse: { x: number; y: number } }) => {
    //   state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.)
    // })
  }


  return (
    <Canvas
      shadows
      flat
      style={{
        width: '100vw',
        height: '100vh',
        background: '#FFF',
      }}

    >
      <Lights />
      {/* <Rig /> */}
      {posts.map((post, index) => (
        <ThumbnailBox
          key={post.id}
          id={post.id}
          position={getPosition(index)}
          geometry={[1, 1, 1]}
          material={{ color: '#CCC' }}
          texture={textures[index]}
          setActiveId={setActiveId}
          active={activeId === post.id}
        />
      ))}
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      <axesHelper args={[100]} />
    </Canvas>
  )
}
export default SinglePostCube
