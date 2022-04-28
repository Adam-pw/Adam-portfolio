import Cards from '../components/Cards/Cards'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Header/>
      <Cards/>
      <Footer/>
    </>
  )
}
