import type {
  Metadata,
  Viewport
} from 'next'

import { Header } from '@/ui/Header'
import { Footer } from '@/ui/Footer'

import './globals.css'


export const metadata = {
  title: 'kunosyn - Portfolio',
  description: '',
} satisfies Metadata

export const viewport = {
  themeColor: '#f00'
} satisfies Viewport

export default function Layout ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='subpixel-antialiased'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
