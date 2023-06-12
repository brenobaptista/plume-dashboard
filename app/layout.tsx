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

interface Props {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en' className={`${inter.variable} font-sans antialiased`}>
      <body className='text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900'>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
