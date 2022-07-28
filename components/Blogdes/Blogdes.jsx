import styles from './Blogdes.module.scss'



const Blogdes = props => {
    return <>
    <div className={styles.main}>
        <div className={styles.head}>{props.head}</div>
        <div className={styles.descrip}>{props.description}</div>
        <div></div>
    </div>
    </>
};

export default Blogdes