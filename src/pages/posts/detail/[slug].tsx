import React from 'react'
import {GetStaticProps, GetStaticPaths, GetStaticPropsContext} from 'next';
import {getAllPosts, getSinglePost} from '@/lib/notionAPI'
import {ReactMarkdown} from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styles from '@/styles/PostDetail.module.scss'

export const getStaticPaths: GetStaticPaths = async () => {
    const allPosts = await getAllPosts()
    const paths = allPosts.map(({slug}) => ({params: {slug}}))
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext) => {
    const post = await getSinglePost(params?.slug as string)

    return {
        props: {
            post
        },
        revalidate: 60 * 60 * 24
    }
}


const Post = ({post}:any) => {
    console.log(post)
    return (
        <section className={styles.post}>
            <h2>{post.metadata.title}</h2>
            <span>{post.metadata.date}</span>
            {post.metadata.tags.map((tag:string) => (
                <p key={tag}>{tag}</p>
            ))}
            <div>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code({node, inline, className, children, ...props}) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    //{...props}
                                    style={dracula}
                                    language={match[1]}
                                    PreTag="div"
                                >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                            ) : (
                                <code {...props} className={className}>
                                    {children}
                                </code>
                            )
                        }
                    }}
                >{post.markdown}</ReactMarkdown>
            </div>
        </section>
    )
}

export default Post
