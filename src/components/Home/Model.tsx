import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {useLoader} from '@react-three/fiber'
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'

export default function Model () {

    // TODO どうしても型定義エラーになる
    const gltfLoader: any = GLTFLoader

    const gltf = useLoader(gltfLoader, './3dModel/town.gltf', loader => {
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('draco/')
        loader.setDRACOLoader(dracoLoader)
    })

    gltf.scene.children.forEach((mesh, i) => {
        mesh.castShadow = true
        mesh.receiveShadow = true
    })
    gltf.castShadow = true
    gltf.scene.castShadow = true


    return (
        <group dispose={null}>
            <primitive scale={1} object={gltf.scene}/>
        </group>
    )
}
