import { Box, useTexture } from '@react-three/drei'
import { ThreeEvent, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { useSpring, animated } from '@react-spring/three'
import { Mesh, Vector3 } from 'three'
import { previewData } from 'next/dist/client/components/headers'
import { Post } from '@/types/global'
import { getThumbnailPath } from '@/lib/utils/post'

type Props = {
  id: string;
  geometry: [x: number, y: number, z: number];
  material?: { color: string };
  position: [x: number, y: number, z: number];
  rotation?: [x: number, y: number, z: number];
  texture: string;
  active?: boolean;
  setActiveId: (id: string | null) => void;
  post: Post;
};

export default function ThumbnailBox(props: Props) {
  const ref = useRef<any>()
  const [hovered, setHovered] = useState(false)
  const animationVal = Math.random() * 0.03 + 0.005
  const { position } = useSpring<{ position: any }>({
    to: async (next) => {
      if (props.active) {
        await next({ position: [0, 0, 3] })
      } else {
        await next({
          position: [props.position[0], props.position[1], props.position[2]],
        })
      }
    },
    from: {
      position: [props.position[0], props.position[1], props.position[2]],
    },
  })

  useFrame(() => {
    if (hovered) {
      return
    }
    if (!props.active) {
      ref.current.rotation.y += animationVal
      ref.current.rotation.z += animationVal
    } else {
      ref.current.rotation.y = 0
      ref.current.rotation.z = 0
    }
  })

  const getTextures = ():string[] => {
    // props.post.tagsからblogという値を削除する
    const tags = props.post.tags.filter((tag) => tag !== 'blog')
    let textures = [props.texture, props.texture]

    // タグが1つの場合
    if (tags.length === 1) {
      const tex = [
        getThumbnailPath(tags[0]),
        getThumbnailPath(tags[0]),
        getThumbnailPath(tags[0]),
        getThumbnailPath(tags[0]),
      ]
      textures = tex.concat(textures)
    } else if (tags.length === 2) {
      const tex = [
        getThumbnailPath(tags[0]),
        getThumbnailPath(tags[1]),
        getThumbnailPath(tags[0]),
        getThumbnailPath(tags[1]),
      ]
      textures = tex.concat(textures)
    } else if (tags.length === 3) {
      const tex = [
        getThumbnailPath(tags[0]),
        getThumbnailPath(tags[1]),
        getThumbnailPath(tags[2]),
        getThumbnailPath(tags[0]),
      ]
      textures = tex.concat(textures)
    } else if (tags.length === 4) {
      const tex = [
        getThumbnailPath(tags[0]),
        getThumbnailPath(tags[1]),
        getThumbnailPath(tags[2]),
        getThumbnailPath(tags[3]),
      ]
      textures = tex.concat(textures)
    } else {
      const tex = [
        getThumbnailPath(null),
        getThumbnailPath(null),
        getThumbnailPath(null),
        getThumbnailPath(null),
      ]
      textures = tex.concat(textures)
    }

    return textures
  }

  const texturePath:string[] = getTextures()

  const textures = [
    useTexture(texturePath[0]), // 右側
    useTexture(texturePath[1]), // 左側
    useTexture(texturePath[2]), // 上側
    useTexture(texturePath[3]), // 下側
    useTexture(texturePath[4]), // 前側
    useTexture(texturePath[5]), // 後側
  ]

  const onClick = (event: ThreeEvent<MouseEvent>) => {
    props.setActiveId(props.active ? null : props.id)
    // hoveredもfalseにする
    // 遅延させないと、hoveredがtrueのままになってしまう
    setTimeout(() => {
      setHovered(false)
    }, 500)
  }

  const toggleHover = () => {
    setHovered(!hovered)
  }

  return (
    <animated.mesh
      ref={ref}
      position={position}
      castShadow={true}
      receiveShadow={true}
      onClick={onClick}
      onPointerOver={toggleHover}
      onPointerOut={toggleHover}
    >
      <Box args={props.geometry}>
        {textures.map((texture, index) => (
          <meshStandardMaterial
            key={index}
            attach={`material-${index}`}
            map={texture}
          />
        ))}
      </Box>
    </animated.mesh>
  )
}
