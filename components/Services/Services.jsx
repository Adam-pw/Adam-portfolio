import React from 'react'
import styles from "./Services.module.scss"

const Services = () => {
    return (
        <>
            <div className={styles.head}><b>Services</b></div>
            <div className={styles.sub}>REGONITIONS & ACCOIMPLISHMENTS</div>
            <div className={styles.parent}>
                <div className={styles.box}>
                    <div className={styles.heading}>
                        <b>Web Design</b>
                    </div>
                    <div className={styles.subhead}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ratione excepturi incidunt possimus! Voluptate.
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.heading}>
                        <b>Product Design</b>
                    </div>
                    <div className={styles.subhead}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dicta excepturi recusandae enim accusamus.
                    </div>
                </div>
            </div>
            <div className={styles.parent2}>
                <div className={styles.box}>
                    <div className={styles.heading}>
                        <b>UI/UX Design</b>
                    </div>
                    <div className={styles.subhead}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic impedit facere repellendus architecto ut!
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.heading}>
                        <b>Art Direction</b>
                    </div>
                    <div className={styles.subhead} >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero esse eveniet ipsum quod explicabo?
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services