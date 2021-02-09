import React, { FC } from 'react'
import { Tree } from 'antd'

import { BookOutlined, CommentOutlined, DeleteOutlined } from '@ant-design/icons'

const { DirectoryTree } = Tree

const treeData = [
    {
        title: 'Статьи',
        key: '0-0',
        children: [
            {
                title: 'Статья 1',
                key: '0-0-0',
                isLeaf: true
            },
            {
                title: 'Статья 2',
                key: '0-0-1',
                isLeaf: true
            },
            {
                title: 'Статья 3',
                key: '0-0-2',
                isLeaf: true
            }
        ]
    },
    {
        title: 'Циклы статей',
        key: '0-1',
        children: [
            {
                title: 'Цикл статьи 1',
                key: '0-1-0',
                children: [
                    {
                        title: 'Статья 4',
                        key: '0-1-0-0',
                        isLeaf: true
                    },
                    {
                        title: 'Статья 5',
                        key: '0-1-0-1',
                        isLeaf: true
                    }
                ]
            },
            {
                title: 'Цикл статьи 2',
                key: '0-1-1',
                children: [
                    {
                        title: 'Статья 6',
                        key: '0-1-1-0',
                        isLeaf: true
                    }
                ]
            }
        ]
    },
    {
        title: 'Диалоги',
        key: '0-2',
        icon: <CommentOutlined />
    },
    {
        title: 'Цитаты',
        key: '0-3'
    },
    {
        title: 'Нотатки',
        key: '0-4'
    },
    {
        title: 'Стихи',
        key: '0-5'
    },
    {
        title: 'Книги',
        key: '0-6',
        icon: <BookOutlined />
    },
    {
        title: 'Архив',
        key: '0-7'
    },
    {
        title: 'Корзина',
        key: '0-8',
        icon: <DeleteOutlined />
    }
]

const DirsTree: FC = () => {
    return (
        <DirectoryTree treeData={treeData} />
    )
}

export default DirsTree
