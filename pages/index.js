import Head from 'next/head'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahsan Amin Khan</title>
        <meta name="description" content="Ahsan's Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
