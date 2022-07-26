import React from 'react'
import styles from "./Blog.module.scss"

const Blog = () => {
    return (
        <>
            <div className={styles.head}>
                <b>My Personal Blog</b>
            </div>
            <div className={styles.sub}>VIEWS & ACCOIMPLISHMENTS</div>
            <div className={styles.box}>
                <div className={styles.box1}>
                    <div className={styles.box11}>PUBLISH DATE : 4 JANUARY 2020</div>
                    <div className={styles.box12}><b>what did i learn</b></div>
                </div>
                <div className={styles.box2}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, optio consequuntur! Eum eveniet vitae, dolor ducimus quisquam at pariatur. Officiis.
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.box1}>
                    <div className={styles.box11}>PUBLISH DATE : 4 JANUARY 2020</div>
                    <div className={styles.box12}><b>what did i learn</b></div>
                </div>
                <div className={styles.box2}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere cumque accusantium tempora ullam maxime rerum, omnis aut deleniti facilis.
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.box1}>
                    <div className={styles.box11}>PUBLISH DATE : 4 JANUARY 2020</div>
                    <div className={styles.box12}><b>what did i learn</b></div>
                </div>
                <div className={styles.box2}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere earum modi facilis necessitatibus. Libero cum ipsam illo, facere itaque eaque?
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.box1}>
                    <div className={styles.box11}>PUBLISH DATE : 4 JANUARY 2020</div>
                    <div className={styles.box12}><b>what did i learn</b></div>
                </div>
                <div className={styles.box2}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere earum modi facilis necessitatibus. Libero cum ipsam illo, facere itaque eaque?
                </div>
            </div>
            <div className={styles.cont}><button className={styles.button} type='button'>Browse More Blogs</button></div>
        </>
    )
}

export default Blog