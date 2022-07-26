import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <>
      <div className={styles.main}>
        <Link href='/'>
          <div className={styles.name}>
            <b>Adam</b>
          </div>
        </Link>
        <div className={styles.content}>
          <Link href='/'>
            <div>Home</div>
          </Link>
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