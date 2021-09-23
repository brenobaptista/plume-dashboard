import Document, { Html, Head, Main, NextScript } from 'next/document'

export const siteTitle = 'Plume Dashboard'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='og:title' content={siteTitle} />
          <meta
            name='description'
            content='Dashboard template made using Next.js + Tailwind CSS + TypeScript.'
          />
          <meta
            property='og:image'
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg`}
          />
          <meta
            name='google-site-verification'
            content='_cd7mw2YWYlX1KdSTwEDVxDz2n5eWnW87t8mo4WdKF8'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
