import React from 'react'
import styles from "./Projectcards.module.scss"

const Projectcards = () => {
    return (
        <div className={styles.main}>
            <div className={styles.card}>
                <div className={styles.imgs}>
                    <img className={styles.photo} src="/images/project" alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        Project Title
                    </div>
                    <div className={styles.des}>
                        {"Lorem ipsum dolor sit amet consectetur adipisicing tetur et eveniet porro ipsa rerum iusto repudiandae."}
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.imgs}>
                    <img className={styles.photo} src="/images/project" alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        Project Title
                    </div>
                    <div className={styles.des}>
                        {"Lorem ipsum dolor sit amet consectetur adipisicing tetur et eveniet porro ipsa rerum iusto repudiandae."}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projectcards