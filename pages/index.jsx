import Cards from '../components/Cards/Cards'
import Descrip from '../components/Descrip/Descrip'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Navbarh } from '../components/Navbarh/Navbarh'
import Projectcards from '../components/Projectcards/Projectcards'
import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import Line from '../components/Line/Line'
import Skills from '../components/Skills/Skills'
import Blogcom from '../components/Blogcom/Blogcom'
import Services from '../components/Services/Services'
import Projects from '../components/Projects/Projects'

import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB78Aq0L2IB576kyLEmyfzFxB9ij0RFCGc",
  authDomain: "portfolio-65801.firebaseapp.com",
  databaseURL: "https://portfolio-65801-default-rtdb.firebaseio.com",
  projectId: "portfolio-65801",
  storageBucket: "portfolio-65801.appspot.com",
  messagingSenderId: "432743562677",
  appId: "1:432743562677:web:9faa442734de9342266dfc",
  measurementId: "G-LY2Y2ZY648",
};

initializeApp(firebaseConfig);

export const db = getFirestore();

export const colRef = collection(db, "blogs");

getDocs(colRef).then((snapshot) => {
  let blogs = []
  snapshot.docs.forEach((doc) => {
    blogs.push({ ...doc.data(), id: doc.id })
  })
  console.log(blogs)
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Pithenwala</title>
        <meta charset="UTF-8" />
        <meta name="keywords" content="Adam, adam, Adam Pithenwala, adam pithenwala, Adam pithenwala" />
        <meta name="Description" content="About Adam Pithenwala" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Navbarh/>
      <Header />
      <Line />
      <Descrip />
      <Cards />
      <Blogcom />
      <Services />
      <Projects />
      <Skills />
      {/* <Projectcards /> */}
      {/* <Projectcards /> */}
      <Footer />
    </>
  )
}
