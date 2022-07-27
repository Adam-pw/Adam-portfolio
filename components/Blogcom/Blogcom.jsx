import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-reveal'
import styles from "./Blogcom.module.scss"

const Blogcom = () => {
    return (
        <>
            <Fade bottom>
                <div className={styles.head}>
                    <b>My Personal Blog</b>
                </div>
                <div className={styles.sub}>VIEWS & ACCOIMPLISHMENTS</div>
                <Link href='/blog'>
                    <div className={styles.box}>
                        <div className={styles.box1}>
                            <div className={styles.box11}>PUBLISH DATE : 27 JULY 2022</div>
                            <div className={styles.box12}><b>My Linux Customixation</b></div>
                        </div>
                        <div className={styles.box2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, optio consequuntur! Eum eveniet vitae, dolor ducimus quisquam at pariatur. Officiis.
                        </div>
                    </div>
                </Link>
                <Link href='/blog'>
                    <div className={styles.box}>
                        <div className={styles.box1}>
                            <div className={styles.box11}>PUBLISH DATE : 20 JULY 2022</div>
                            <div className={styles.box12}><b>How Did I Created This Website</b></div>
                        </div>
                        <div className={styles.box2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere cumque accusantium tempora ullam maxime rerum, omnis aut deleniti facilis.
                        </div>
                    </div>
                </Link>
                <Link href='/blog'>
                    <div className={styles.box}>
                        <div className={styles.box1}>
                            <div className={styles.box11}>PUBLISH DATE : 16 JULY 2022</div>
                            <div className={styles.box12}><b>Smart India Hackathon</b></div>
                        </div>
                        <div className={styles.box2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere earum modi facilis necessitatibus. Libero cum ipsam illo, facere itaque eaque?
                        </div>
                    </div>
                </Link>
                <Link href='/blog'>
                    <div className={styles.box}>
                        <div className={styles.box1}>
                            <div className={styles.box11}>PUBLISH DATE : 1 JULY 2020</div>
                            <div className={styles.box12}><b>My Journey of Data Structures</b></div>
                        </div>
                        <div className={styles.box2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere earum modi facilis necessitatibus. Libero cum ipsam illo, facere itaque eaque?
                        </div>
                    </div>
                </Link>
                <Link href='/blog'>
                    <div className={styles.cont}><button className={styles.button} type='button'>Browse More Blogs</button></div>
                </Link>
            </Fade>
        </>
    )
}

export default Blogcom