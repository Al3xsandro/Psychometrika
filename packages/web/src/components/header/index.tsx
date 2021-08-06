import styles from './header.module.scss'

import { FiChevronDown } from 'react-icons/fi';

export default function Header() {
    function handleClick(){
        return
    }

    return (
        <div className={styles.container}>
            <div className={styles.admin}>
                <div className={styles.title}>
                    <img className={styles.logo} src="/logo.svg" alt="Psychometrika" />
                    <p className={styles.subtitle}>Desafio Trainee</p>
                </div>
                
                <a className={styles.admin_modal} onClick={handleClick}><img className={styles.avatar} src="/avatar.svg" alt="avatar"/> <FiChevronDown /></a>
            </div>
            <div className={styles.section}>
                <h4 className={styles.title}>Nome da escola</h4>
            </div>
        </div>
    );
};