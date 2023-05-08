'use client'

import {Canvas} from '@react-three/fiber'
import {useLoader} from '@react-three/fiber'
import {OrthographicCamera, OrbitControls} from '@react-three/drei'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'
import {useControls} from 'leva'

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

// new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );


export default function Hero() {
    const cameraCtl = useControls('Camera Controller', {
        zoom: 50,
        top: 0,
        bottom: -100,
        left: 100,
        right: -100,
        x: 200,
        y: 200,
        z: 200
    })

    const ambientCtl = useControls('Ambient Light', {
        visible: false,
        intensity: {
            value: 1.0,
            min: 0,
            max: 1.0,
            step: 0.1,
        },
    })

    const directionalCtl = useControls('Directional Light', {
        visible: true,
        position: {
            x: 3.3,
            y: 1.0,
            z: 4.4,
        },
        castShadow: true,
    })

    return (
        <Canvas
            shadows
            style={{
                width: '100vw',
                height: '100vh',
                background: '#FFF',
            }}
        >
            <ambientLight
                visible={ambientCtl.visible}
                intensity={ambientCtl.intensity}
            />
            <directionalLight
                visible={directionalCtl.visible}
                position={[
                    directionalCtl.position.x,
                    directionalCtl.position.y,
                    directionalCtl.position.z,
                ]}
                castShadow={directionalCtl.castShadow}
            />
            <OrthographicCamera
                makeDefault
                zoom={cameraCtl.zoom}
                top={cameraCtl.top}
                bottom={cameraCtl.bottom}
                left={cameraCtl.left}
                right={cameraCtl.right}
                near={1}
                far={1000}
                position={[cameraCtl.x, cameraCtl.y, cameraCtl.z]}
            />
            <pointLight position={[10, 10, 10]}/>
            <Model/>
            <OrbitControls/>
        </Canvas>)
}
