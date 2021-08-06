import type { AppProps } from 'next/app'

import '../styles/global.scss'
import styles from '../styles/app.module.scss';
import { AuthContextProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <div className={styles.content}>
        <Component {...pageProps}/>
      </div>
    </AuthContextProvider>
  )
}

export default MyApp