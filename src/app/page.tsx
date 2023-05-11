import {Inter} from 'next/font/google'
import {getAllPosts} from '@/lib/notionAPI'
import SinglePost from '@/components/Post/SinglePost'
import React from 'react'
import Hero from '@/components/Home/Hero'

const inter = Inter({subsets: ['latin']})

export default async function Home() {
    const allPosts = await getAllPosts()

    return (
        <>
            <main className="container w-full">
                <Hero />
                {/*{allPosts.map((post) => (*/}
                {/*    <div className="mx-4" key={post.id}>*/}
                {/*        <SinglePost post={post}/>*/}
                {/*    </div>*/}
                {/*))}*/}
            </main>
        </>
    )
}
