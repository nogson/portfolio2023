import {Inter} from 'next/font/google'
import {getAllPosts} from "@/lib/notionAPI"
import {
    GetStaticProps,
} from "next"
import SinglePost from "@/components/Post/SinglePost";
import {Post} from '@/types/global'
import Link from "next/link";
import React from "react";

const inter = Inter({subsets: ['latin']})

export default async function Home() {
    const allPosts = await getAllPosts()

    return (
        <>
            <main className="container w-full mt-16">
                <h1 className="test-5xl font-medium text-center mb-16 bg-amber-300">
                    Notion Blog
                </h1>
                {allPosts.map((post) => (
                    <div className="mx-4" key={post.id}>
                        <SinglePost post={post}/>
                    </div>
                ))}
            </main>
        </>
    )
}
