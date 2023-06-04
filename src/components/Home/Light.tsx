import {useControls} from 'leva'
import {useHelper} from '@react-three/drei'
import {useRef} from 'react'
import {SpotLightHelper, PointLightHelper, DirectionalLightHelper} from 'three'

export default function Lights() {
    // TODO any型
    const pointLight: any = useRef()
    const spotLight: any = useRef()
    const directionalLight: any = useRef()
    //useHelper(pointLight, PointLightHelper, 10, 'blue')
    // useHelper(spotLight, SpotLightHelper, 10)
    //useHelper(directionalLight, DirectionalLightHelper, 10, 'yellow')

    const ambientOptions = {
        visible: true,
        intensity: {
            value: 0.5,
            min: 0,
            max: 1.0,
            step: 0.1,
        },
    }

    const directionalOptions = {
        visible: true,
        position: {
            x: -20,
            y: 10,
            z: -20,
        },
        intensity: {
            value: 1.0,
            min: 0,
            max: 1.0,
            step: 0.1,
        },
        castShadow: false,
    }

    const pointOptions = {
        visible: true,
        position: {
            x: -20,
            y: 10,
            z: -20,
        },
        intensity: {
            value: 1.0,
            min: 0,
            max: 1.0,
            step: 0.1,
        },
        castShadow: true,
    }

    const spotOptions = {visible: false,
        position: {
            x: -20,
            y: 10,
            z: -20,
        },
        intensity: {
            value: 1.0,
            min: 0,
            max: 1.0,
            step: 0.1,
        },
        castShadow: true,}

    // const ambientCtl = useControls('Ambient Light', ambientOptions)
    // const directionalCtl = useControls('Directional Light', directionalOptions)
    // const pointCtl = useControls('Point Light', pointOptions)
    // const spotCtl = useControls('Spot Light', spotOptions)

    return (
        <>
            <ambientLight
                visible={ambientOptions.visible}
                intensity={0.5}
            />
            <directionalLight
                visible={directionalOptions.visible}
                position={[
                    directionalOptions.position.x,
                    directionalOptions.position.y,
                    directionalOptions.position.z,
                ]}
                intensity={0.5}
                castShadow={directionalOptions.castShadow}
                shadow-bias={-0.1}
            />
            {/*<pointLight*/}
            {/*    ref={pointLight}*/}
            {/*    visible={pointCtl.visible}*/}
            {/*    position={[*/}
            {/*        pointCtl.position.x,*/}
            {/*        pointCtl.position.y,*/}
            {/*        pointCtl.position.z,*/}
            {/*    ]}*/}
            {/*    intensity={directionalCtl.intensity}*/}
            {/*    castShadow={pointCtl.castShadow}*/}
            {/*    shadow-bias={-0.005}*/}
            {/*/>*/}
            {/*<spotLight*/}
            {/*    ref={spotLight}*/}
            {/*    visible={spotCtl.visible}*/}
            {/*    position={[spotCtl.position.x, spotCtl.position.y, spotCtl.position.z]}*/}
            {/*    castShadow={spotCtl.castShadow}*/}
            {/*    intensity={directionalCtl.intensity}*/}
            {/*    shadow-bias={-0.00001}*/}
            {/*    angle={0.5}*/}
            {/*/>*/}
        </>
    )
}
