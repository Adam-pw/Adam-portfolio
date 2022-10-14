import Footer from '../components/Footer/Footer'
import {Navbarh} from '../components/Navbarh/Navbarh'

import Head from 'next/head'
import CreatePost from '../components/Createblog/CreatePost'

export default function Create_Blog() {
    return (
        <>
            <Navbarh />
            <h1>Blog</h1>
            <CreatePost />
            <Footer />
        </>
    )
}
