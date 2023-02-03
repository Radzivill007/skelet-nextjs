import Layout from '../components/Layout'

import { Context } from './_app'

const Home = () => {
  const { innerWidth } = React.useContext(Context)

  return <Layout>content</Layout>
}

export default Home
