import Cards from '../components/Cards/Cards'
import Descrip from '../components/Descrip/Descrip'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Projectcards from '../components/Projectcards/Projectcards'
import styles from '../styles/Home.module.scss'

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="Adam, adam, Adam Pithenwala, adam pithenwala, Adam pithenwala" />
        <meta name="Description" content="About Adam Pithenwala" />
      </Head>
      {/* <Navbar /> */}
      <Header />
      <Descrip />
      <Projectcards />
      <Projectcards />
      <Projectcards />
      <Cards />
      <Footer />
    </>
  )
}
