import type {
  Metadata,
  Viewport
} from 'next'

import { Header } from '@/ui/Header'
import { Footer } from '@/ui/Footer'
import { DM_Sans } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin']
})


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
      <body className={twMerge(dmSans.className, 'subpixel-antialiased text-white')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
