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
                        Design to me is something magical - I am lucky that it lets me get creative and build new projects.
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.heading}>
                        <b>Product Design</b>
                    </div>
                    <div className={styles.subhead}>
                        {"Even single project is a challenge that I accept eagerly. Let's implement innovative ideas together."} 
                    </div>
                </div>
            </div>
            <div className={styles.parent2}>
                <div className={styles.box}>
                    <div className={styles.heading}>
                        <b>UI/UX Design</b>
                    </div>
                    <div className={styles.subhead}>
                        I am willing to solve any inquiry that comes from your side within minutes.
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.heading}>
                        <b>Artificial Intelligence</b>
                    </div>
                    <div className={styles.subhead} >
                        I will deliver my best in each and every project given to me. So you can trust me with everything.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services