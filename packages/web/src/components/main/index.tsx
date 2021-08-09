import { GetStaticProps } from 'next';
import { api } from '../../services/api';

import styles from './main.module.scss';

type Books = {
    title: string;
};

type BooksProps = {
    books: Books[];
};

export default function Main({ books }: BooksProps) {
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

                    <h1>{ books[0].title }</h1>
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
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('/v1/books');

    const books = data.map(data => {})
    
    return {
        props: {
            books
        },
        revalidate: 60 * 60 * 8,
    }
}