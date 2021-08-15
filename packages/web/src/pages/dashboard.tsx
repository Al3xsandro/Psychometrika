import { GetServerSideProps } from 'next';

import { parseCookies } from 'nookies';
import { getAPIClient } from '../services/axios';

import styles from '../styles/pages/dashboard.module.scss';

import Head from "next/head";
import { Grade } from '../components/grade';

type Books = {
    id: string;
    title: string;
};

type BooksProps = {
    books: Books[];
}

export default function Dashboard({ books }: BooksProps) {
    const allbooks = [...books];

    return (
        <>
            <Head>
                <title>Psychometrika | home</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.section_right}>
                    <div className={styles.section_class_right}>
                        <h2 className={styles.title}>1 série</h2>

                        <div className={styles.refresh_right}><img src="/refresh.svg" alt="logo" /></div>
                    </div>
                    
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <h4>Frente A <i style={{ padding: '0.3rem'}}><img src="/edit-icon.svg" alt="icon"/></i></h4>
                        </div>

                        {
                            allbooks.map((book) => (
                                <Grade
                                    key={book.id}
                                    title={book.title}
                                />
                            ))
                        }
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

                        {
                            allbooks.map((book) => (
                                <Grade
                                    key={book.id}
                                    title={book.title}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['psychometrika.token']: token } = parseCookies(ctx);
    const api = getAPIClient(ctx);

    if(!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        };
    };

    const { data } = await api.get('/v1/books');

    const books = data.map(book => {
        return {
            id: book.id,
            title: book.title
        }
    })

    return {
        props: {
            books
        }
    };
};