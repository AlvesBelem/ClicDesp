import '@/styles/home.module.scss'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import logoImg from '@/public/logo.jpg'
import { Input } from '../components/ui/input'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>ClickDesp - Faça seu Login</title>
    </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt='logo ClickDesp' />
        <div className={styles.login}>
          <form>
            <Input
            placeholder='Digite seu Email'
            />
            
          </form>
        </div>
      </div>
    </>
  )
}
