import type { AppProps } from 'next/app'

import '../styles/global.scss'
import styles from '../styles/app.module.scss';

import { AuthContextProvider } from '../contexts/AuthContext';
import Header from '../components/header';

import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AuthContextProvider>

      { router.pathname !== '/' && <Header /> }
      
      <div className={styles.content}>
          <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  )
}

export default MyApp