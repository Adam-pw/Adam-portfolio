import React from 'react'
import styles from "./Projectcards.module.scss"

const Projectcards = () => {
    return (
        <div className={styles.main}>
            <div className={styles.imgs}>
                <img className={styles.photo} src="/images/project.png" alt="" />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    Project Title
                </div>
                <div className={styles.des}>
                    {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium omnis reiciendis enim quibusdam? Dignissimos omnis quo assumenda quam quae unde asperiores aspernatur natus quidem reiciendis sunt delectus, ipsam inventore eum dolorum ad quod repudiandae pariatur! Voluptatum at fuga, sequi necessitatibus fugiat et eveniet nemo, aliquam non illum temporibus. Accusantium dignissimos excepturi quas sit maxime aliquid quo atque qui amet minus vel repudiandae numquam sequi delectus architecto voluptatibus mollitia, odio, fugiat enim reiciendis temporibus facere, error hic? Minus deleniti voluptatibus iste fuga corporis, consectetur et eveniet porro ipsa rerum iusto repudiandae."}
                </div>
            </div>
        </div>
    )
}

export default Projectcards