import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
)

export default MyApp
