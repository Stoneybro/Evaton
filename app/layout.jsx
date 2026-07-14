import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Nav from './components/nav'
import Topbar from './components/Topbar'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Topbar />
        <Nav />
        {children}
        <Gallery />
        <Reviews />
        <Contact />
        <Footer />

        </body>
    </html>
  )
}
