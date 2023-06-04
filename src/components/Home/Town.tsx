import Model from '@/components/Home/Model'

const models = [
    {path: './3dModel/town.glb', position: [0, 0, 0]},
    // {path: './3dModel/tree01.glb', position: [13, 0, 13]},
    // {path: './3dModel/tree02.glb', position: [2, 0, 2]},
    // {path: './3dModel/kitchenCar.glb', position: [1, 0, 1]},
    // {path: './3dModel/house01.glb', position: [1, 0, 1]},
    // {path: './3dModel/house02.glb', position: [3, 0, 3]},
    // {path: './3dModel/human01.glb', position: [3, 0, 3]},
    // {path: './3dModel/human02.glb', position: [3, 0, 3]},
    // {path: './3dModel/light01.glb', position: [3, 0, 3]},
    // {path: './3dModel/light02.glb', position: [3, 0, 3]},
    // {path: './3dModel/building01.glb', position: [3, 0, 3]},
    // {path: './3dModel/building02.glb', position: [3, 0, 3]},
    // {path: './3dModel/building03.glb', position: [3, 0, 3]},
    // {path: './3dModel/building04.glb', position: [3, 0, 3]},
]

export default function Town() {
    return (
        <>
        {
            models.map((model, index) => (
                <Model key={index} path={model.path} position={model.position}/>
            ))
        }
        </>
    )
}
