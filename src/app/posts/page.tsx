import {getAllPosts} from '@/lib/notionAPI'
import {Post} from '@/types/global'
import StyledPostMain from '@/components/Post/StyledPostMain'
import CanvasWrapper from '@/components/Post/CanvasWrapper'

export default async function Home() {
    const posts: Post[] = await getAllPosts()

    return (
        <>
            <StyledPostMain>
                <CanvasWrapper posts={posts}/>
            </StyledPostMain>
        </>
    )
}
