import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Feather from '../components/icons/Feather'
import Layout from '../components/Layout'
import Theme from '../components/Theme'

const ResetPassword = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')

  const handleResetPassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    /* submit email to back-end, which will send the user an email with instructions */
    /* then, display a success dialog in browser */
  }

  return (
    <Layout>
      <Head>
        <title>Plume - Reset Password</title>
      </Head>
      <div className='text-right'>
        <Theme className='hover:opacity-75' />
      </div>
      <div className='flex justify-center pb-2'>
        <Feather width={40} height={40} />
      </div>
      <div className='flex justify-center pb-4 text-xl font-bold'>
        Reset Password
      </div>
      <form
        onSubmit={handleResetPassword}
        className='flex-grow max-w-md space-y-4'
      >
        <label className='block space-y-2'>
          <span>Email</span>
          <input
            required
            type='email'
            placeholder='Email'
            value={email}
            onChange={event => setEmail(event.target.value.toLowerCase())}
            className='w-full px-3 py-2 text-sm bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded placeholder-gray-400 dark:placeholder-gray-600'
          />
        </label>
        <button
          type='submit'
          className='w-full text-sm px-4 py-2 bg-purple-400 dark:bg-purple-600 hover:opacity-75 rounded'
        >
          Reset Password
        </button>
      </form>
      <div className='pt-6 text-sm'>
        <Link href='/sign-in'>
          <a className='hover:opacity-75'>Sign In</a>
        </Link>
      </div>
    </Layout>
  )
}

export default ResetPassword
