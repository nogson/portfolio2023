'use client'
import React, {FC, useEffect, useState} from 'react'
import styled from 'styled-components'
import {Canvas} from '@react-three/fiber'
import {OrthographicCamera, PerspectiveCamera, OrbitControls, useHelper} from '@react-three/drei'
import ThumbnailBox from '@/components/Home/ThumbnailBox'
import Lights from '@/components/Home/Light'
import {Post} from '@/types/global'

type SinglePostCubeProps = {
    posts: Post[]
    textures: string[]
}


const SinglePostCube: FC<SinglePostCubeProps> = ({posts, textures}) => {

    const getPosition = (index: number): [number, number, number] => {
        const x = index % 6 + index % 6 * 1 - 5
        const y = (Math.floor(index / 6) +  Math.floor(index / 6) * 1) * -1 + 1
        const z = 0
        return [x, y, z]
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
            <Lights/>
            {
                posts.map((post, index) => (
                    <ThumbnailBox key={post.id} position={getPosition(index)} geometry={[1, 1, 1]}
                                  material={{color: '#CCC'}}
                                  texture={textures[index]}/>
                ))

            }
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
            <axesHelper args={[100]}/>
        </Canvas>
    )
}


export default SinglePostCube
