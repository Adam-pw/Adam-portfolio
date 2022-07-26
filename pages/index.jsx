import Cards from '../components/Cards/Cards'
import Descrip from '../components/Descrip/Descrip'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Projectcards from '../components/Projectcards/Projectcards'
import styles from '../styles/Home.module.scss'

import Head from 'next/head'
import Line from '../components/Line/Line'
import Skills from '../components/Skills/Skills'
import Blog from '../components/Blog/Blog'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Pithenwala</title>
        <meta charset="UTF-8" />
        <meta name="keywords" content="Adam, adam, Adam Pithenwala, adam pithenwala, Adam pithenwala" />
        <meta name="Description" content="About Adam Pithenwala" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Header />
      <Line />
      <Descrip />
      <Blog />
      <Skills />
      {/* <Projectcards /> */}
      {/* <Projectcards /> */}
      <Cards />
      <Footer />
    </>
  )
}
