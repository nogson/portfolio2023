'use client'
import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrthographicCamera, PerspectiveCamera, OrbitControls,useHelper} from '@react-three/drei'
import {useControls} from 'leva'

import Lights from './Light'
import Model from './Model'
import Box from './Box'



// new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );




export default function Hero() {
    return (
        <Suspense fallback={<span>loading...</span>}>
            <Canvas
                shadows
                style={{
                    width: '100vw',
                    height: '100vh',
                    background: '#FFF',
                }}
            >
                <Lights/>
                <PerspectiveCamera
                    makeDefault
                    zoom={1}
                    aspect={1200 / 600}
                    near={1}
                    far={100}
                    fav={50}
                    position={[0, 0, 20]}
                />
                <Box />
                {/*<Model/>*/}
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
                <axesHelper args={[10]} />
            </Canvas>
        </Suspense>)
}
