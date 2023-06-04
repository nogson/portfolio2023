'use client'
import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrthographicCamera, PerspectiveCamera, OrbitControls, useHelper} from '@react-three/drei'
import {useControls, } from 'leva'

import Lights from '@/components/Home/Light'
import Card from '@/components/Home/Card'
import Box from '@/components/Home/ThumbnailBox'

import Town from '@/components/Home/Town'

export default function Hero() {
    return (
        <Suspense fallback={<span>loading...</span>}>
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
                <fog attach="fog" color={'#fff'} near={1} far={100} />
                <PerspectiveCamera
                    makeDefault
                    zoom={1}
                    near={1}
                    far={100}
                    position={[-20, 30, 20]}
                />
                <Card title={'Typescriptの型で悩んだとき用小ネタメモ'} position={[0,1,0]} geometry={[10, 0.1, 10]} />
                <Card title={'Docker初心者によるDockerfile、Docker Composeのメモ'} position={[6,1,0]} geometry={[10, 0.1, 10]} />

                {/*<Card position={[0,1,0]}/>*/}
                <Box geometry={[200, 0.1, 200]} material={{color: '#CCC'}}/>
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
                <axesHelper args={[100]}/>
            </Canvas>
        </Suspense>)
}
