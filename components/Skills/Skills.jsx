import React from 'react'
import styles from "./Skills.module.scss"

import Image from 'next/image'

const Skills = () => {
    return (
        <>
            <div className={styles.head}><b>Things I Know</b></div>
            <div className={styles.parent}>
                <div className={styles.box}>Java</div>
                <div className={styles.box}>C++</div>
                <div className={styles.box}>Python</div>
                <div className={styles.box}>HTML</div>
            </div>
            <div className={styles.parent2}>
                <div className={styles.box}>CSS</div>
                <div className={styles.box}>Javascript</div>
                <div className={styles.box}>React JS</div>
                <div className={styles.box}>Next JS</div>
            </div>
        </>
    )
}

export default Skills