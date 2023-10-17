// 'use client'
import './globals.css'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'


export const metadata = {
  title: 'Van Leeuwen Media',
  description: 'Breng jouw visie tot leven met onze creatieve high-end media oplossingen',
}

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      
      <body>
        <Navbar />

        {children}
        
        <Footer />

        </body>
    </html>
  )
}
