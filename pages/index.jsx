import Cards from '../components/Cards/Cards'
import Descrip from '../components/Descrip/Descrip'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Projectcards from '../components/Projectcards/Projectcards'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Header/>
      <Descrip/>
      <Projectcards/>
      <Projectcards/>
      <Projectcards/>
      <Cards/>
      <Footer/>
    </>
  )
}
