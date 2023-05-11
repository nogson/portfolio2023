export default function Box() {
    return (
        <mesh>
            <boxGeometry args={[10, 0.1, 10]} />
            <meshStandardMaterial />
        </mesh>
    )
}
