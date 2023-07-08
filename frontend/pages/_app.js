import '@/styles/globals.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { SSRProvider } from 'react-bootstrap'
config.autoAddCss = false;

// process.env.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=false;

function Loading() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true)
    const handleComplete = (url) => (url === router.asPath) && setTimeout(() => { setLoading(false) })

    router.events.on('routerChangeStart', handleStart)
    router.events.on('routerChangeComplete', handleComplete)
    router.events.on('routerChangeError', handleComplete)

    return () => {
      router.events.off('routerChangeStart', handleStart)
      router.events.off('routerChangeComplete', handleComplete)
      router.events.off('routerChangeError', handleComplete)
    }
  })
  return loading && (
    <div className='spinner-wrapper'>
      <div className='spinner' />
    </div>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <><Loading /><Component {...pageProps} /></>
    </SSRProvider>
  )
}
