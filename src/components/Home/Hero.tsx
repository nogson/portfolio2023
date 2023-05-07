'use client'

import {Canvas} from '@react-three/fiber'
import {useLoader, LoaderReturnType, LoaderProto} from '@react-three/fiber'
import {PerspectiveCamera, OrthographicCamera, OrbitControls} from '@react-three/drei'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {Suspense} from 'react'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'


const Model = () => {

    // TODO どうしても型定義エラーになる
    const loader: any = GLTFLoader

    const gltf = useLoader(loader, './3dModel/town.gltf', loader => {
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('draco/')
        loader.setDRACOLoader(dracoLoader)
    })
    return (
        <>
            <primitive object={gltf.scene} scale={0.4}/>
        </>
    )
}

// function Box(props: ThreeElements['mesh']) {
//     const ref = useRef<THREE.Mesh>(null!)
//     const [hovered, hover] = useState(false)
//     const [clicked, click] = useState(false)
//     useFrame((state, delta) => (ref.current.rotation.x += delta))
//     return (
//         <mesh
//             {...props}
//             ref={ref}
//             scale={clicked ? 1.5 : 1}
//             onClick={(event) => click(!clicked)}
//             onPointerOver={(event) => hover(true)}
//             onPointerOut={(event) => hover(false)}>
//             <boxGeometry args={[1, 1, 1]}/>
//             <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
//         </mesh>
//     )
// }

export default function Hero() {
    return (
        <Canvas
            shadows
            style={{
                width: '100vw',
                height: '100vh',
                background: '#FFF',
            }}
        >
            <ambientLight/>
            <OrthographicCamera
                makeDefault
                zoom={1}
                top={0}
                bottom={-200}
                left={200}
                right={-200}
                near={1}
                far={1000}
                position={[0, 0, 200]}
            />
            <pointLight position={[10, 10, 10]}/>
            <Model/>
            <OrbitControls/>
        </Canvas>)
}
