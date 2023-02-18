import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer.jsx'

const Layout = ({ children, title, desc }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name='description' content={desc} data-react-helmet='true' />
      <link rel='shortcut icon' href='/' />
    </Head>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh' }}>
      <main>{children}</main>
      <Footer />
    </div>
  </>
)

export default Layout
