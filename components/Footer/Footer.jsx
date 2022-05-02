import React from 'react'
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.last}>
        © 2022 Adam Pithenwala
      </div>
      <div className={styles.built}>
        Built With Next Js
      </div>
    </div>
  )
}

export default Footer