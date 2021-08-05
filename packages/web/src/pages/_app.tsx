import type { AppProps } from 'next/app'

import '../styles/global.scss'
import styles from '../styles/app.module.scss'; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.content}>

    </div>
  )
}

export default MyApp