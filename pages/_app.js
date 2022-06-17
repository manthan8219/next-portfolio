import Navbar from '../components/navbar.js'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar /><Component {...pageProps} /></>
}

export default MyApp
