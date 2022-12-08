import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/Layout'
import Theme from '../components/Theme'

const Custom404 = (): JSX.Element => (
  <Layout>
    <Head>
      <title>404: Not found</title>
    </Head>
    <h1 className='flex justify-between text-xl font-bold tracking-wide'>
      404: NOT FOUND
      <Theme className='hover:opacity-75' />
    </h1>
    <p className='max-w-md mt-4 mb-8 text-lg text-justify'>
      It seems you have found something that used to exist or you spelled
      something wrong.
    </p>
    <Link
      href='/'
      className='inline-block text-sm px-4 py-2 bg-violet-400 dark:bg-violet-600 hover:opacity-75 rounded'
    >
      Return to website
    </Link>
  </Layout>
)

export default Custom404
