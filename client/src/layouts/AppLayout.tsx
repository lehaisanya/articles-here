import React from 'react'
import { Layout } from 'antd'

import MyHeader from 'components/MyHeader'
import MyMenu from 'components/MyMenu'
import DirsTree from 'components/DirsTree'

// import { MainPage } from 'pages/Main'
// import { ProfilePage } from 'pages/Profile'
// import { RedactorPage } from 'pages/Redactor'

import Article from 'components/Article'

import styles from './AppLayout.module.css'

const { Header, Content, Sider } = Layout

function AppLayout() {
    return (
        <Layout>
            <Sider className={styles.sider}>
                    <MyMenu />
                    <DirsTree />
                </Sider>
            <Layout className={styles.layout}>
                <Header className={styles.header}>
                    <MyHeader />
                </Header>
                <Content className={styles.content}>
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </Content>
            </Layout>
        </Layout>
    )
}

export default AppLayout
