import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <div className={`${inter.variable} font-sans`}>
    <Component {...pageProps} />
  </div>
)

export default MyApp
