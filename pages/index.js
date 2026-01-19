import Head from 'next/head'
import dynamic from 'next/dynamic'

import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Process from '../components/sections/Process'
import Product from '../components/sections/Product'
import Footer from '../components/sections/Footer'

const Home = () => {
  return (
    <div>
      <Head>
        <title>The Boost Nation - Creative Agency Portfolio Template</title>
        <meta name="description" content="Professional portfolio website for creative agencies and designers. Fully responsive, GSAP animated, ready to customize." />
        <meta name="keywords" content="portfolio, creative agency, web design, portfolio template" />
        <meta property="og:image" content="/images/hero-og.png" />
      </Head>
      <Hero/>
      <Services/>
      <Process/>
      <Product/>
      <Footer/>
    </div>
  )
}
export default Home
