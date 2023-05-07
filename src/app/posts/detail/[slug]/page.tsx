import React from 'react'
import {getSinglePost} from '@/lib/notionAPI'
import {ReactMarkdown} from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import CodeBlock from './CodeBlock'
import styles from '@/styles/PostDetail.module.scss'

const Post = async ({ params }: { params: { slug: string } }) => {
    const post = await getSinglePost(params?.slug as string)

    return (
        <section>
            <div className={styles.postMeta}>
                <h2>{post.metadata.title}</h2>
                <span>{post.metadata.date}</span>
                {post.metadata.tags.map((tag:string) => (
                    <p key={tag}>{tag}</p>
                ))}
            </div>
            <div className={styles.postBody}>
                <ReactMarkdown
                    components={{code:CodeBlock}}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                >{post.markdown}</ReactMarkdown>
            </div>
        </section>
    )
}

export default Post
