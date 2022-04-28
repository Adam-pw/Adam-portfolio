import Link from 'next/link'
import React from 'react'
import styles from "./Cards.module.scss"

import { motion } from "framer-motion"

const Cards = () => {
    return (
        <motion.div className={styles.main}>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} className={styles.card}>
                <div className={styles.circle}>
                    <img src="/images/Github.png" className={styles.photo}></img>
                </div>
                <div className={styles.content}>
                    Check out my Github
                    <Link href="https://github.com/Adam-pw" passHref>
                        <button className={styles.button}>Github</button>
                    </Link>
                </div>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} className={styles.card}>
                <div className={styles.circle}>
                    <img src="/images/Linkedin.png" className={styles.photo}></img>
                </div>
                <div className={styles.content}>
                    Check out my Linkedin
                    <Link href="https://www.linkedin.com/in/adam-pithewan/" passHref>
                        <button className={styles.button}>Linkedin</button>
                    </Link>
                </div>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }} className={styles.card}>
                <div className={styles.circle}>
                    <img src="/images/Instagram.png" className={styles.photo}></img>
                </div>
                <div className={styles.content}>
                    Check out my Instagram
                    <Link href="https://www.instagram.com/_._.adam._/" passHref>
                        <button className={styles.button}>Instagram</button>
                    </Link>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Cards