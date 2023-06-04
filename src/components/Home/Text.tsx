import {Text} from '@react-three/drei'

type Vector3 =  [x: number, y: number, z: number]


type Props = {
    text: string
    position?:Vector3
    size:Vector3
}

export default function TextObject(props:Props) {
    return (
        <Text
            color="#333"
            anchorX="left"
            anchorY="top"
            position={props.position}
            rotation={[-1.58,0,0]}
            maxWidth={props.size[0] - 1}
            font="/font/Kosugi-Regular.ttf"
            fontSize={0.5}
            overflowWrap={'break-word'}
            lineHeight={1.7}
        >
            {props.text}
        </Text>
    )
}
