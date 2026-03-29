import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import seoConfig from '../../seo.config.js'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
  const { pathname } = useLocation()
  const seo = seoConfig[pathname] || { title: 'Developero', description: '', canonical: pathname }
  const baseUrl = 'https://dev.developero.ro'

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`${baseUrl}${seo.canonical}`} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={`${baseUrl}${seo.canonical}`} />
      </Helmet>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout