import React from 'react'
import '../styles/globals.scss'

import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({ preload: false, fallback: ['sans-serif'], weight: ['400', '500', '700'] })

const MyApp = ({ Component, pageProps }) => {
  const [innerWidth, setInnerWidth] = React.useState(0)
  React.useEffect(() => {
    const resize = () => setInnerWidth(window.innerWidth)
    window.removeEventListener('resize', resize)
    window.addEventListener('resize', resize, { passive: true })
    resize()
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
