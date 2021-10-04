import Head from 'next/head'
import Link from 'next/link'

import Theme from '../components/Theme'

const Custom404 = (): JSX.Element => (
  <>
    <Head>
      <title>404: Not found</title>
    </Head>
    <div className='flex items-center justify-around h-screen p-6'>
      <div>
        <h1 className='flex text-2xl font-bold tracking-wide'>
          404: NOT FOUND
          <Theme className='pl-8 hover:opacity-75' />
        </h1>
        <p className='max-w-md mt-4 mb-8 text-xl text-justify'>
          It seems you have found something that used to exist or you spelled
          something wrong.
        </p>
        <Link href='/'>
          <a className='px-4 py-2 bg-white dark:bg-gray-800 hover:opacity-75 border border-gray-200 dark:border-gray-700 rounded'>
            Return to website
          </a>
        </Link>
      </div>
    </div>
  </>
)

export default Custom404
