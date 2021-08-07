import styles from './main.module.scss';

export function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.section_right}>
                <div className={styles.section_class_right}>
                    <h2 className={styles.title}>1 Série</h2>

                    <div className={styles.refresh_right}><img src="/refresh.svg" alt="logo" /></div>
                </div>
                
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h4>Frente A <i style={{ padding: '0.3rem'}}><img src="/edit-icon.svg" alt="icon"/></i></h4>
                    </div>
                </div>
            </div>
            
            <div className={styles.section_left}>
                <div className={styles.section_class_left}>
                    <h2 className={styles.title}>2 Série</h2>

                    <a className={styles.refresh_left}><img src="/refresh.svg" alt="logo" /></a>
                </div>

                <div className={styles.content_left}>
                    <div className={styles.title_left}>
                        <h4>Frente A <i style={{ padding: '0.3rem'}}><img src="/edit-icon.svg" alt="icon"/></i></h4>
                    </div>
                </div>
            </div>
        </div>
    )
};