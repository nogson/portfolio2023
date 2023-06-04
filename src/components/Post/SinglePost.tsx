'use client'
import React, {FC, useRef, useEffect, useContext} from 'react'
import {Post} from '@/types/global'
import Link from 'next/link'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: inline-block;
  margin-left: var(--size-l);
  //animation: animate-banner 10s linear infinite;
  @keyframes animate-banner {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-500px);
    }
  }

  .title {
    font-size: var(--font-xl);
    font-weight: 900;
  }
`

const SinglePost: FC<{ post: Post }> = ({post}) => {
    const {title, description, slug, tags} = post


    return (
        <StyledDiv>
            <Link href={`/posts/detail/${slug}`}>
                <div className="title">{title}</div>
                <div>2023/05/31</div>
            </Link>
        </StyledDiv>
    )
}

SinglePost.displayName = 'SinglePost'
export default SinglePost
