import {Box,useTexture} from '@react-three/drei'

type Props = {
    geometry: [x: number, y: number, z: number]
    material?: { color: string }
    position?: [x: number, y: number, z: number]
    rotation?: [x: number, y: number, z: number]
    texture: string
}

export default function ThumbnailBox(props: Props) {
    const textures = [
        useTexture('/images/docker_thumb.png'), // 右側
        useTexture('/images/docker_thumb.png'),  // 左側
        useTexture('/images/docker_thumb.png'), // 上側
        useTexture('/images/docker_thumb.png'), // 下側
        useTexture(props.texture), // 前側
        useTexture(props.texture), // 後側
    ]

    return (
        <mesh position={props.position} castShadow={true} receiveShadow={true} rotation={props.rotation}>
            <Box args={props.geometry}>
                {textures.map((texture, index) => (
                    <meshStandardMaterial key={index} attach={`material-${index}`} map={texture} />
                ))}
            </Box>
        </mesh>
    )
}
