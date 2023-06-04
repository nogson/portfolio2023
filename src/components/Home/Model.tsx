import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {useLoader} from '@react-three/fiber'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'

type Props = {
    path: string
    position: number[]
}

export default function Model(props: Props)
{

    // TODO どうしても型定義エラーになる
    const gltfLoader: any = GLTFLoader

    const gltf = useLoader(gltfLoader, props.path, loader => {
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('draco/')
        loader.setDRACOLoader(dracoLoader)
    })

    gltf.scene.children.forEach((mesh:any, i:number) => {
        mesh.castShadow = true
        mesh.receiveShadow = true
    })
    gltf.castShadow = true
    gltf.scene.castShadow = true

    return (
        <primitive scale={1} object={gltf.scene} position={props.position}/>
    )
}
