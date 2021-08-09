import styles from '../styles/pages/dashboard.module.scss';

import Head from "next/head";

type Books = {
    title: string;
};

type BooksProps = {
    book: Books[];
}

export default function Dashboard({ book }: BooksProps) {
    return (
        <>
            <Head>
                <title>Psychometrika | home</title>
            </Head>

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
            </div>
        </>
    );
};