import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer.jsx'

const Layout = ({ children, title }) => (
  <>
    <Head>
      <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap'  />
      <title>{title}</title>
    </Head>
    <Navbar />
    {children}
    <Footer />
  </>
)

export default Layout
