import styles from './header.module.scss'

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.admin}>
                <img className={styles.logo} src="/logo.svg" alt="Psychometrika" />
                <p className={styles.subtitle}>Desafio Trainee</p>

                <img className={styles.avatar} src="/avatar.svg" alt="avatar"/>
            </div>
            <div className={styles.section}>
                <h4 className={styles.title}>Nome da escola</h4>
            </div>
        </div>
    );
};