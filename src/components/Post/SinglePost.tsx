import React, {FC} from 'react'
import {Post} from '@/types/global'
import Link from "next/link";

const SinglePost: FC<{ post: Post }> = ({post}) => {
    const {title, description, slug, tags} = post
    return <>
        <article className="border p-4 mb-4">
            <Link href={`/posts/${slug}`}>
                <div>{title}</div>
                <div>{description}</div>
                <div>{tags}</div>
            </Link>
        </article>
    </>
}

export default SinglePost
