import {Image} from '@react-three/drei'
import Box from '@/components/Home/ThumbnailBox'
import TextObject from '@/components/Home/Text'

type Vector3 = [x: number, y: number, z: number]
type Props = {
    title: string
    position: Vector3
    geometry: Vector3
}


export default function Card(props: Props) {
    const margin = 0.5
    const titlePos: Vector3 = [
        props.position[0] - props.geometry[0] / 2 + margin,
        props.position[1] + 0.1,
        props.position[2] - props.geometry[2] / 2 + margin,
    ]

    const imgPos: Vector3 = [
        props.position[0],
        props.position[1] + 0.1,
        props.position[2] + 0.5,
    ]

    return (
        <>
            <mesh
                position={props.position}
                castShadow={true}
                receiveShadow={true}
                onClick={() => alert('ok')}
            >
                <Image url="/images/aws_thumb.png" position={imgPos} scale={7} rotation={[-1.58, 0, 0]}
                       transparent={true}/>
                <TextObject text={props.title} position={titlePos} size={props.geometry}/>
                <Box geometry={props.geometry} material={{color: '#FFFFFF'}} position={props.position}/>
            </mesh>
        </>
    )
}
