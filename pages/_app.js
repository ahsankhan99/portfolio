import Navbar from '../components/Navbar'
import '@/styles/globals.css'
import Fade from 'react-reveal/Fade';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Fade> */}
      <Navbar />
      <Component {...pageProps} />
      {/* </Fade> */}
    </>
  )
}
