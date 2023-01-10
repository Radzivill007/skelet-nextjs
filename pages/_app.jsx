import React from 'react'
import '../styles/globals.scss'

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
    <main>
      <Component innerWidth={innerWidth} {...pageProps} />
    </main>
  )
}

export default MyApp
