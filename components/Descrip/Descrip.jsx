import React from 'react'
import styles from "./Descrip.module.scss"

import Lottie from "lottie-react"
import an from "./96512-developer-animation.json"

const Descrip = () => {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.content_p}>{"About Me :-"}</div>
                <div className={styles.content_p}>{"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis assumenda doloremque, maxime dolores omnis error adipisci iure sapiente ratione sit accusantium, laboriosam explicabo quidem, doloribus alias corporis illum? Exercitationem officia id labore ipsam, sit quo, dolore at harum cumque quibusdam sed culpa ab quia libero. Necessitatibus corporis ut et asperiores?"}</div>
            </div>
            <div className={styles.anime}>
                <Lottie animationData={an}/>
            </div>
        </div>
    )
}

export default Descrip