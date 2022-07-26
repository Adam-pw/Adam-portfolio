import React from 'react'
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.heading}>
        <div className={styles.main_p}><b>{"HI, I'M ADAM."}</b></div>
        <div className={styles.main_p}><b>{"A CREATIVE DEVELOPER & PROGRAMMER"}</b></div>
        <div className={styles.main_pc}>{"DESIGN * PROGRAM * DEBUG"}</div>
        <div className={styles.buttonc}>
          <div className={styles.name}>{"     Got a project?     "}</div>
          <div><button className={styles.button} type='button'>{"Let's Talk"}</button></div>
        </div>
      </div>
      <div className={styles.photo}>
        <img className={styles.img} src="/images/img.jpeg" alt="HELLO" />
      </div>
    </div>
  );
}

export default Header;