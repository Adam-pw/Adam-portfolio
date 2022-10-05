import { Fade } from 'react-reveal';
import styles from './Projects.module.scss'

const Projects = () => {
    return <>
    <Fade left>
            <div className={styles.head}>
                <b>My Projects</b>
            </div>
            <div className={styles.sub}>CREATION AND DEDICATION</div>
            <div className={styles.main}>
                <div className={styles.img}><img src='/images/project1.png' className={styles.pb}></img></div>
                <div className={styles.content}>
                    <div className={styles.type}>USING REACT JS</div>
                    <div className={styles.subhead} id="projects"><b>Smart India Hackhathon</b></div>
                    <div className={styles.read}>Read More</div>
                </div>
            </div> 
            <div className={styles.main2}>
                <div className={styles.content}>
                    <div className={styles.type}>USING NEXT JS</div>
                    <div className={styles.subhead}><b>E-commerce Website</b></div>
                    <div className={styles.read}>Read More</div>
                </div>
                <div className={styles.img}><img src='/images/project2.png' className={styles.pb}></img></div>
            </div>   
    </Fade>
    </>
};

export default Projects