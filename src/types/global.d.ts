export type PostResult = {
    id: string
    properties: {
        Name: {
            title: { plain_text: string }[]
        }
        Description: {
            rich_text: { plain_text: string }[]
        }
        Date: {
            date: {
                start: string
            }
        }
        Slug: {
            rich_text: { plain_text: string }[]
        }
        Tags: {
            multi_select: { name: string }[]
        }
    }
}

export type Post = {
    id: string
    title: string
    description: string
    date: string
    slug: string
    tags: string[]
}
