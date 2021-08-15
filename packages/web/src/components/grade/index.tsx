import styles from './grade.module.scss';

interface IGradeProps {
    title: string;
}

export function Grade(props: IGradeProps) {
    return (
        <>
            <div className={styles.section}>
                <img className={styles.icon} src="/show.png" alt="show icon"/>
                <div className={styles.position}><span className={styles.position_title}>1</span></div>
                <h1 className={styles.title}>{props.title}</h1>
                <img className={styles.icon} src="/share.png" alt="share icon" />
                <img className={styles.icon} src="/group.svg" alt="group icon" />
            </div>
        </>
    );
};