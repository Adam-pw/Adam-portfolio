import Footer from '../components/Footer/Footer'
import {Navbarh} from '../components/Navbarh/Navbarh'

import Head from 'next/head'
import CreatePost from '../components/Createblog/CreatePost'

export default function Blog() {
    return (
        <>
            <Head>
                <title>Adam Pithenwala</title>
                <meta charset="UTF-8" />
                <meta name="keywords" content="Adam, adam, Adam Pithenwala, adam pithenwala, Adam pithenwala" />
                <meta name="Description" content="About Adam Pithenwala" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbarh />
            <h1>Blog</h1>
            <CreatePost />
            <Footer />
        </>
    )
}
