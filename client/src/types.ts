export interface UserData {
    username: string
}

export enum TagType {
    AUTHOR, SOURCE, ROLE, TO, CATEGORY, TAG,
    DELETED, ARCHIVE, MY, STOP, PINED, INTEREST,
    ENDED
}

export interface TagData {
    type: TagType
    data?: string
    isPrivate?: boolean
}

export interface ArticleData {
    title: string
    author: UserData
    content: string
    created: Date
    tags: TagData[]
    liked: number
    reply: number
    comment: number
}