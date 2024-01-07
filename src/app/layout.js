
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'


import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {

  title: 'New App',
  description: 'Generated',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><meta charSet="UTF-8" /></head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 