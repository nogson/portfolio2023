'use client'
import React, {FC, useEffect, useRef, useState, createRef, MutableRefObject} from 'react'
import {Post} from '@/types/global'
import styled from 'styled-components'
import html2canvas from 'html2canvas'
import PostsCanvas from '@/components/Post/PostsCanvas'

const PostElmWrapperStyled = styled.div`
  position: absolute;
  left: -10000px;
`

const PostElmStyled = styled.div`
  width: 400px;
  height: 400px;
  background-color: #FFF;
  color: #000;
  text-align: left;
  padding: 20px;
  box-sizing: border-box;
  line-height: 1.8;

  h2 {
    font: bold 26px sans-serif;
    margin-bottom: 16px;
  }

  dl {
    dt {
      font-size: 16px;
    }

    dd {
      font-size: 16px;
    }
  }
`


const createTextures = async (refs: React.MutableRefObject<React.MutableRefObject<HTMLDivElement | null>[]>) => {
    const promise = refs.current.map(ref => html2canvas(ref.current as HTMLDivElement))
    const canvasArr = await Promise.all(promise)
    return canvasArr.map(canvas => canvas.toDataURL())
}

const CanvasWrapper: FC<{ posts: Post[] }> = ({posts}): JSX.Element => {
    const [textures, setTextures] = useState<string[]>()
    const refs = useRef<React.MutableRefObject<HTMLDivElement | null>[]>([])

    const listItems = (posts: Post[]): JSX.Element[] => {
        return posts.map((post, index) => {
            refs.current[index] = createRef<HTMLDivElement | null>()
            return (
                <div key={post.id} ref={refs.current[index]}>
                    <PostElmStyled>
                        <h2>{post.title}</h2>
                        <dl>
                            <dt>{post.date}</dt>
                            <dd>{post.description}</dd>
                        </dl>
                    </PostElmStyled>
                </div>
            )
        })
    }

    useEffect(() => {
        (async () => {
            const res = await createTextures(refs)
            setTextures(res)
        })()
    }, [])

    if (!textures) {
        return <PostElmWrapperStyled>{listItems(posts)}</PostElmWrapperStyled>
    }

    return <PostsCanvas posts={posts} textures={textures} />

}

export default CanvasWrapper
