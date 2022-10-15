import Cards from "../components/Cards/Cards";
import Descrip from "../components/Descrip/Descrip";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Navbarh } from "../components/Navbarh/Navbarh";
// import Projectcards from '../components/Projectcards/Projectcards'
// import styles from '../styles/Home.module.scss'
import Head from "next/head";
import { useState, useEffect } from "react";
import Line from "../components/Line/Line";
import Skills from "../components/Skills/Skills";
import Blogcom from "../components/Blogcom/Blogcom";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import { Email } from "../components/Email/Email";
import Stars from "../components/Stars/Stars";
import PreLoader from "../components/Preloader/Preloader";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, []);

  return (
    <>
      <PreLoader isLoaded={isLoaded} />
      <Navbarh />
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
      <Email />
      <Footer />
    </>
  );
}
