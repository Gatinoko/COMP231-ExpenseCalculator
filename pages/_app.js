// CSS imports
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.css'

// Next/React imports
import Head from 'next/head'
import NextApp from 'next/app'
import { useEffect, useRef } from 'react'

// Component imports
import Navigation from '@/Components/navigation'
import { Toast, ToastTypes } from '@/Components/toast/toast'

// Extra imports
import { Jwt } from 'jsonwebtoken'

/*
  Application's entry point component
*/
export default function App({ Component, pageProps, serverProps }) {

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

      {/* Navigation bar */}
      <Navigation serverProps={ serverProps } />

      {/* Main content router outlet */}
      <Component { ...pageProps } />
    </>
  )
}

/*
  getInitialProps function
*/
App.getInitialProps = async (appContext) => {

  // App props instantiation
  const appProps = await NextApp.getInitialProps(appContext)

  // Get server data and create serverProps object for component use
  const cookies = appContext.ctx.req.cookies
  const jwtTokenContent = jwt.decode(cookies.token)
  const currentPath = appContext.router.pathname
  const serverProps = { jwtTokenContent, currentPath }

  return { ...appProps, serverProps };
};
