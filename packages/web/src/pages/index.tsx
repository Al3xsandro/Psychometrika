import { useState, FormEvent } from 'react';
import Head from 'next/head'

import { BiHide } from 'react-icons/bi';

import styles from '../styles/pages/home.module.scss';

import { useAuth } from '../hooks/auth';

import SyncLoader from "react-spinners/SyncLoader";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const { 
    signIn,
    isLoading
  } = useAuth();

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if(!email.trim() || !password){
      return;
    };

    await signIn({ email, password });
  };

  function handleShow() {
    return !showPass ? setShowPass(true) : setShowPass(false);
  }

  return (    
    <div className={styles.container}>
      <Head>
        <title>Psychometrika | login</title>
      </Head>

      {
        !isLoading ? <></> : (
          <div className={styles.loading}>
            <SyncLoader color="#00718A" size={20}/>
          </div>
        )
      }

      <div className={styles.form}>
        <div className={styles.title}>
          <img className={styles.logo} src="/logo.svg" alt="Psychometrika" />
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
                type={ !showPass ? "password" : "text" }
                placeholder="Minimo de 8 characteres"
                onChange={event => setPassword(event.target.value)}
                required
              />

              <i className={styles.hideIcon} onClick={handleShow}><BiHide /></i>
            </label>

            <button className={styles.button} type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  }
}