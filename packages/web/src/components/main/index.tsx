import styles from './main.module.scss';

export function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.section_right}>
                <div className={styles.section_class_right}>
                    <h2 className={styles.title}>1 Série</h2>

                    <div className={styles.refresh_right}><img src="/refresh.svg" alt="logo" /></div>
                </div>
            </div>
            
            <div className={styles.section_left}>
                <div className={styles.section_class_left}>
                    <h2 className={styles.title}>2 Série</h2>

                    <a className={styles.refresh_left}><img src="/refresh.svg" alt="logo" /></a>
                </div>
            </div>
        </div>
    )
};