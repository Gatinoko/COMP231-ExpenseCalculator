// CSS imports
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

// Next/React imports
import Head from 'next/head'
import { useEffect, useRef } from 'react'

// Component imports
import Navigation from '../Components/navigation'
import { Toast, ToastTypes } from '@/Components/toast/toast'

export default function App({ Component, pageProps }) {

  // Toast component reference
  const toastRef = useRef()

  // Bootstrap js functionalities import
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return(
    <>
      {/* Default page head */}
      <Head>
        <title>Expense Calculator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Toast container */}
      <div className='toast-container' style={{position: "absolute", top: 100, right: 25}}>
        <Toast ref={toastRef}/>
      </div>

      {/* Page content */}
      <Navigation />
      <Component {...pageProps} toast={toastRef} />
    </>
  )
}
