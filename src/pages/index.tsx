import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import Navbar from '@components/Navbar'
import Loading from '@components/Loading'
import 'react-multi-carousel/lib/styles.css'
import Footer from '@components/Footer'
import Hero from '@components/modules/displays/Hero'
import Introduction from '@components/modules/displays/Introduction'
import FocusedText from '@components/modules/displays/FocusedText'
import ProjectShowcase from '@components/modules/displays/ProjectShowCase'
import Blogs from '@components/modules/displays/Blog/Blogs'
import GetInTouch from '@components/modules/displays/GetInTouch'
import Extras from '@components/modules/displays/Extras'

const Home: NextPage = () => {
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 8000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Head>
        <title>Albarms</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Introduction />
      <FocusedText />
      <ProjectShowcase />
      <Blogs />
      <Extras />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default Home
