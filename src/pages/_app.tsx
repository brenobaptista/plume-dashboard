import Head from 'next/head'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

import { siteTitle } from './_document'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp
