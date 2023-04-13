import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Simplesignup from '@/Components/Simplesignup'
import Simplelogin from '@/Components/Simplelogin'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Login SignUP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          signup
          <Simplesignup/>
          <br />
          <br />
          login
          <Simplelogin/>
        </div>
      </main>
    </>
  )
}
