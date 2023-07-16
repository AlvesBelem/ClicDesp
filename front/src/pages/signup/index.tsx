import '@/styles/Home.module.scss'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Image from 'next/image'
import logoImg from '@/public/logo.jpg'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Signup() {
  return (
    <>
    <Head>
      <title>ClickDesp - Faça seu Cadastro</title>
    </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt='logo ClickDesp' />
        <div className={styles.login}>
          <form>
            <h1>Criando sua Conta</h1>
          <Input
              placeholder='Digite seu Nome'
              type='text'
            />
            <Input
              placeholder='Digite seu Email'
              type='text'
            />
            <Input
              placeholder='Digite sua Senha'
              type='password'
            />
            <Button 
            type="submit"
            loading={false}
            >
              Cadastrar
            </Button>
          </form>
          <Link className={styles.text} href="/">Já possui uma conta? Faça o login...</Link>
        </div>
      </div>
    </>
  )
}
