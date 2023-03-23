// CSS imports
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.css'

// Next/React imports
import Head from 'next/head'
import { useEffect } from 'react'

// Component imports
import Navigation from '@/Components/navigation'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, [])
  return(
    <>
      <Head>
        <title>Expense Calculator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}
