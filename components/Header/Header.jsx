import React from 'react'
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.main}>
        <div className={styles.heading}>
          <div className={styles.main_p}>{"Hello !!"}</div>
          <div className={styles.main_p}>{"Myself Adam Pithenwala"}</div>
          <div className={styles.main_p}>{"( From Madhav Institute of Technology And Science 🏫💯 )"}</div>      
        </div>
        <div className={styles.photo}>
          <img className={styles.img} src="/images/img.jpeg" alt="HELLO" />
        </div>
      </div>
  );
}

export default Header;