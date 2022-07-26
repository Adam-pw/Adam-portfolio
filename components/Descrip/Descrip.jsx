import React from 'react'
import styles from "./Descrip.module.scss"

const Descrip = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.area1}>
                    <div className={styles.name}>
                        Adam Pithenwala
                    </div>
                    <div className={styles.heading}>
                        <b>{"Creative & Modern Approach"}</b>
                    </div>
                </div>
                <div className={styles.area2}>
                    <div className={styles.head}>
                        <b>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet temporibus saepe. Lorem ipsum dolor sit amet consectetur."}</b>
                    </div>
                    <div className={styles.subhead}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores amet corrupti quod? Eveniet quia assumenda expedita numquam aperiam!
                    </div>
                    <div className={styles.info}>
                        <div>BORN IN</div>
                        <div>EXPERIENCE</div>
                        <div>DATE OF BIRTH</div>
                    </div>
                    <div className={styles.info2}>
                        <div><b>Ujjain, India</b></div>
                        <div><b>10+ Years</b></div>
                        <div><b>03 January 2003</b></div>
                    </div>
                </div>
            </div>
            <div className={styles.main2}>
                <div className={styles.one}>
                    <div className={styles.namehead}>7+</div>
                    <div className={styles.namesub}><b>YEARS OF EXPERIENCE</b></div>
                </div>
                <div className={styles.two}>
                    <div className={styles.namehead}>7+</div>
                    <div className={styles.namesub}><b>PROJECTS COMPLETED</b></div>
                </div>
                <div className={styles.one}>
                    <div className={styles.namehead}>7+</div>
                    <div className={styles.namesub}><b>HAPPY CLIENTS</b></div>
                </div>
            </div>
        </>
    )
}

export default Descrip