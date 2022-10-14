import React, { useState } from 'react'
import styles from "./Footer.module.scss"

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { addDoc, collection } from 'firebase/firestore';

const Footer = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.main2}>
          <div className={styles.last}>
            <div className={styles.last1}><b>Adam</b></div>
            <div className={styles.last2}>You can contact me via mail adampithewan@gmail.com or message me on any social media account</div>
          </div>
          <div className={styles.built}>
            <div>© Made by Adam Pithenwala </div>
            <div className={styles.icons}>
              <div><FaInstagram /></div>
              <div><FaLinkedin /></div>
              <div><FaGithub /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer