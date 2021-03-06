import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import List from './components/list'

const dummy_items = [
  {
    id: 'e1',
    title: "EARNINGS(MONTHLY)",
    amount: 94.12,
    color: "#00008B",
  },
  {
    id: 'e2',
    title: "EARNINGS(ANNUAL)",
    amount: 799.49,
    color: "#006400",
  },
  {
    id: 'e3',
    title: "NO. OF PRODUCTS",
    amount: 294.67,
    color: "#CCCC00",
  },
  {
    id: 'e4',
    title: "CANCELLED ORDERS",
    amount: 450,
    color: "#7D0552",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <List items={dummy_items}/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
