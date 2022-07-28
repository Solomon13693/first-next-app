import styles from '../styles/Header.module.css'

const Header = () => {
    return (

        <div style={{ marginTop: '60px' }}>
            <h1 className={styles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={styles.description}>
                Keep up to date with the latest web dev news
            </p>
        </div>

    )
}

export default Header