import {Client} from '@notionhq/client'
import {PageObjectResponse, PartialPageObjectResponse} from "@notionhq/client/build/src/api-endpoints";
import {PostResult} from '@/types/global'
import {NotionToMarkdown} from 'notion-to-md'

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

const n2m = new NotionToMarkdown({notionClient: notion})

export const getAllPosts = async () => {
    const posts = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID || '',
        page_size: 100
    })

    const allPosts = posts.results

    return allPosts.map((post) => {
        // TODO unknownをどうするか
        return getPageMetaData(post as unknown as PostResult)
    })
}

const getPageMetaData = (post: PostResult) => {
    return {
        id: post.id,
        title: post.properties.Name.title[0].plain_text,
        description: post.properties.Description.rich_text[0].plain_text,
        date: post.properties.Date.date.start,
        slug: post.properties.Slug.rich_text[0].plain_text,
        tags: getTags(post.properties.Tags.multi_select)
    }
}

const getTags = (tags: { name: string }[]) => {
    return tags.map((tag) => tag.name)
}


export const getSinglePost = async (slug:string) => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID || '',
        filter: {
            property: 'Slug',
            formula: {
                string: {
                    equals: slug
                }
            }
        }
    })

    const page = response.results[0]
    const metadata = getPageMetaData(page as unknown as PostResult)

    const mbBlocks = await n2m.pageToMarkdown(page.id)
    const mdString = n2m.toMarkdownString(mbBlocks)

    return {
        metadata,
        markdown: mdString
    }
}

export const getPostsForTopPage = async () => {

}
