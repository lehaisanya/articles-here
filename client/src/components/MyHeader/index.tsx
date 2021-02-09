import { ContainerOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Space, Row, Col, Typography } from 'antd'
import React from 'react'

import styles from './styles.module.css'

const { Title } = Typography

function MyHeader() {
    return (
        <Row justify='space-between' align='middle'>
            <Col>
                <Title level={3}>
                    <Space>
                        <ContainerOutlined />
                        Articles Here
                    </Space>
                </Title>
            </Col>
            <Col>
                <Space className={styles.userBlock}>
                    lehaisanya
                    <Avatar
                        size={40}
                        icon={<UserOutlined />}
                    />
                </Space>
            </Col>
        </Row>
    )
}

export default MyHeader
