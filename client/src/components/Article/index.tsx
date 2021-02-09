import React from 'react'
import { Typography, Card, Tag, Space } from 'antd'
import { ArticleData, TagData, TagType } from 'types'
import { LikeOutlined, MessageOutlined, RollbackOutlined } from '@ant-design/icons'

const { Text } = Typography

const articleExample: ArticleData = {
    title: 'Article title',
    author: {
        username: 'lehaisanya'
    },
    liked: 10,
    reply: 5,
    comment: 3,
    created: new Date(),
    tags: [
        {
            type: TagType.CATEGORY,
            data: 'Цитата'
        },
        {
            type: TagType.ENDED,
            isPrivate: true
        },
        {
            type: TagType.MY,
            isPrivate: true
        }
    ],
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, harum eum fugit iure at consequuntur expedita odio, iste autem nihil totam, amet fuga pariatur molestias doloribus saepe consequatur dolor perferendis.`
}

function tagMap (tag: TagData, i: number): React.ReactElement {
    switch (tag.type) {
        case TagType.CATEGORY:
            return <Tag key={i} color='blue'>Тип: {tag.data}</Tag>
        case TagType.ENDED:
            return <Tag key={i} color='success'>Законченая</Tag>
        case TagType.MY:
            return <Tag key={i} color='green'>Моя</Tag>
        case TagType.AUTHOR:
            return <Tag key={i} color='red'>Автор: {tag.data}</Tag>
        default:
            return <Tag key={i} color='orange'>{tag.data}</Tag>
    }
}

function articleActions (article: ArticleData): React.ReactElement[] {
    return [
        <Space key='like'>
            {article.liked}
            <LikeOutlined />
        </Space>,
        <Space key='reply'>
            {article.reply}
            <RollbackOutlined />
        </Space>,
        <Space key='comment'>
            {article.comment}
            <MessageOutlined />
        </Space>
    ]
}

function Article() {
    const tagsElement = <div style={{ marginBottom: 4 }}>
        {[{
            type: TagType.AUTHOR,
            data: articleExample.author.username
        }, ...articleExample.tags].map(tagMap)}
    </div>
    const actions = articleActions(articleExample)
    return (
        <Card
            title={articleExample.title}
            hoverable
            style={{ margin: 5 }}
            actions={actions}
        >
            {tagsElement}
            <Text>{articleExample.content}</Text>
            
        </Card>
    )
}

export default Article
