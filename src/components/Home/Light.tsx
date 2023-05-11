import {useControls} from 'leva'
import {useHelper} from '@react-three/drei'
import {useRef} from 'react'
import {SpotLightHelper,PointLightHelper,DirectionalLightHelper} from 'three'

export default function Lights() {
    // TODO any型
    const pointLight:any = useRef()
    const spotLight:any = useRef()
    const directionalLight:any = useRef()
    useHelper(pointLight, PointLightHelper, 10, 'blue')
    // useHelper(spotLight, SpotLightHelper, 10)
    useHelper(directionalLight, DirectionalLightHelper,10, 'yellow')

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
            x: -20,
            y: 100,
            z: -20,
        },
        intensity: {
            value: 1.0,
            min: 0,
            max: 1.0,
            step: 0.1,
        },
        castShadow: false,
    })

    const pointCtl = useControls('Point Light', {
        visible: true,
        position: {
            x: -20,
            y: 100,
            z: -20,
        },
        intensity: {
            value: 1.0,
            min: 0,
            max: 1.0,
            step: 0.1,
        },
        castShadow: true,
    })

    const spotCtl = useControls('Spot Light', {
        visible: false,
        position: {
            x: -20,
            y: 100,
            z: -20,
        },
        intensity: {
            value: 1.0,
            min: 0,
            max: 1.0,
            step: 0.1,
        },
        castShadow: true,
    })

    return (
        <>
            <ambientLight
                visible={ambientCtl.visible}
                intensity={ambientCtl.intensity}
            />
            <directionalLight
                ref={directionalLight}
                visible={directionalCtl.visible}
                position={[
                    directionalCtl.position.x,
                    directionalCtl.position.y,
                    directionalCtl.position.z,
                ]}
                intensity={directionalCtl.intensity}
                castShadow={directionalCtl.castShadow}
                shadow-bias={-0.1}
            />
            <pointLight
                ref={pointLight}
                visible={pointCtl.visible}
                position={[
                    pointCtl.position.x,
                    pointCtl.position.y,
                    pointCtl.position.z,
                ]}
                intensity={directionalCtl.intensity}
                castShadow={pointCtl.castShadow}
                shadow-bias={-0.005}
            />
            <spotLight
                ref={spotLight}
                visible={spotCtl.visible}
                position={[spotCtl.position.x, spotCtl.position.y, spotCtl.position.z]}
                castShadow={spotCtl.castShadow}
                intensity={directionalCtl.intensity}
                shadow-bias={-0.00001}
                angle={0.5}
            />
        </>
    )
}
