import { useState } from 'react';
import Head from 'next/head'
import { BiHide } from 'react-icons/bi';

import styles from './home.module.scss';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {

  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Psychometrika | login</title>
      </Head>

      <div className={styles.form}>
        <div className={styles.title}>
          <img className={styles.logo} src="/logo.png" alt="Psychometrika" />
          <p className={styles.subtitle}>Desafio Trainee</p>
        </div>

        <form className={styles.content_input} onSubmit={handleLogin}>
            <label>
              <span className={styles.span}>Email</span>

              <input
                className={styles.input}
                type="email"
                placeholder="Seu email institucional"
                onChange={event => setEmail(event.target.value)}
                required
              />
            </label>

            <label>
              <span className={styles.span}>Senha</span>
              <input
                className={styles.input}
                type="password"
                placeholder="Minimo de 8 characteres"
                onChange={event => setPassword(event.target.value)}
                required
              />

              <i className={styles.hideIcon}><BiHide /></i>
            </label>

            <button className={styles.button} type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};