
export const getThumbnailPath = (tag: string | null):string => {
    switch (tag) {
        case 'Docker':
            return '/images/content/thumbnail/docker_thumb.png'
        case 'TypeScript':
            return '/images/content/thumbnail/typescript_thumb.png'
        case 'React':
            return '/images/content/thumbnail/react_thumb.png'
        case 'NextJS':
            return '/images/content/thumbnail/docker_thumb.png'
        case 'Node.js':
            return '/images/content/thumbnail/nodejs_thumb.png'
        default:
            return '/images/content/thumbnail/note_thumb.png'
    }
}

