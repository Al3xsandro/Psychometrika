import Link from 'next/link';
import styles from './forbidden.module.scss';

export function Forbidden() {
    return (
        <>
            <div className={styles.container}>
                <h2>Você precisa se autenticar</h2>
                <Link href="/"><a className={styles.back_home}>Voltar para home</a></Link>
            </div>
        </>
    )
}