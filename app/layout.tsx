import { ReactNode } from 'react'

import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css'

import ThemeProvider from './ThemeProvider'

export const metadata: Metadata = {
  description:
    'Dashboard template made using Next.js + Tailwind CSS + TypeScript.',
  themeColor: '#8b5cf6',
  manifest: '/site.webmanifest',
  verification: {
    google: '_cd7mw2YWYlX1KdSTwEDVxDz2n5eWnW87t8mo4WdKF8'
  }
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

interface IRootLayout {
  children: ReactNode
}

const RootLayout = ({ children }: IRootLayout) => (
  <html lang='en' className={`${inter.variable} font-sans antialiased`}>
    <body className='bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
)

export default RootLayout
