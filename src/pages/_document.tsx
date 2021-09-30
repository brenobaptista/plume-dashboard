import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <meta
            name='description'
            content='Dashboard template made using Next.js + Tailwind CSS + TypeScript.'
          />
          <meta
            property='og:image'
            content='https://plumedashboard.vercel.app/og-image.png'
          />
          <meta
            name='google-site-verification'
            content='_cd7mw2YWYlX1KdSTwEDVxDz2n5eWnW87t8mo4WdKF8'
          />
        </Head>
        <body className='text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 transition-colors motion-reduce:transition-none font-sans antialiased'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
