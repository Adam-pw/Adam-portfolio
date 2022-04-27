import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";

import { FaBars } from "react-icons/fa";

export default function Navbar() {
if (typeof window !== undefined) {
  function Navbarcom() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }

      window.addEventListener('resize', changeWidth)

      return () => {
        window.removeEventListener('resize', changeWidth)
      }

    }, [])
    return (
      <>
        <nav className={styles.nav}>
          <div className={styles.websitename}>Adam</div>
          <div className={styles.navbuttons}>
            {(toggleMenu || screenWidth > 500) && (
              <div className={styles.desktopnav}>
                <button className={styles.items}>Home</button>
                <button className={styles.items}>Projects</button>
                <button className={styles.items}>Resume</button>
                <button className={styles.items}>Contact</button>
              </div>)}
            <div className={styles.mobilenav}>
              <button className={styles.navlinks} onClick={toggleNav}>
                <FaBars />
              </button>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
else;
}