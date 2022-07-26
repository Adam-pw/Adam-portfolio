import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.name}>
          <b>Adam</b>
        </div>
        <div className={styles.content}>
          <div>Home</div>
          <div>About</div>
          <div>Works</div>
          <div>Contact</div>
        </div>
        <div className={styles.let}>
          <button className={styles.button} type='button'>{"Let's talk"}</button>
        </div>
      </div>
    </>
  )
}

export default Navbar