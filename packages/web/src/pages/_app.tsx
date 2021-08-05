import type { AppProps } from 'next/app'

import '../styles/global.scss'
import styles from '../styles/app.module.scss'; 
import Home from './index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.content}>
      <Home />
    </div>
  )
}

export default MyApp