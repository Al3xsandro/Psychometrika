import styles from './header.module.scss'

import { FiChevronDown } from 'react-icons/fi';

export default function Header() {
    function handleClick(){
        return
    }

    return (
        <div className={styles.container}>
            <div className={styles.admin}>
                <img className={styles.logo} src="/logo.svg" alt="Psychometrika" />
                <p className={styles.subtitle}>Desafio Trainee</p>

                <img className={styles.avatar} src="/avatar.svg" alt="avatar"/>
                
                <a className={styles.admin_modal} onClick={handleClick}><FiChevronDown /></a>
            </div>
            <div className={styles.section}>
                <h4 className={styles.title}>Nome da escola</h4>
            </div>
        </div>
    );
};