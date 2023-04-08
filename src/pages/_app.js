import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'


export default function App({ Component, pageProps }) {
  return(
    <>
    <div className="container">
    <Navbar/>
       <Component {...pageProps} />
    </div>
    </>
  )
}
