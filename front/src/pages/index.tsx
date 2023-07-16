import '@/styles/Home.module.scss'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>ClickDesp - Faça seu Login</title>
    </Head>
      <div className={styles.container}>
        <h1>ClickDesp</h1>
      </div>
    </>
  )
}
