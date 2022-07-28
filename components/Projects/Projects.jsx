import styles from './Projects.module.scss'

const Projects = () => {
    return <>
            <div className={styles.head}>
                <b>My Projects</b>
            </div>
            <div className={styles.sub}>CREATION AND DEDICATION</div>
            <div className={styles.main}>
                <div className={styles.img}><img src='/images/project1.png' className={styles.pb}></img></div>
                <div className={styles.content}>
                    <div className={styles.type}>ART DIRECTION</div>
                    <div className={styles.subhead}><b>Project title</b></div>
                    <div className={styles.read}>Read More</div>
                </div>
            </div> 
            <div className={styles.main2}>
                <div className={styles.content}>
                    <div className={styles.type}>ART DIRECTION</div>
                    <div className={styles.subhead}><b>Project title</b></div>
                    <div className={styles.read}>Read More</div>
                </div>
                <div className={styles.img}><img src='/images/project1.png' className={styles.pb}></img></div>
            </div>   
    </>
};

export default Projects