import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Eye, EyeOff, Feather } from '../components/icons'
import Layout from '../components/Layout'
import Theme from '../components/Theme'

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    /* submit email and password to back-end then redirect the user if they are correct */
    /* consider adding a CAPTCHA like hCaptcha or reCAPTCHA */
    /* otherwise, display an error dialog in browser */
    /* tip: change the mouse cursor to "wait" while waiting for a response */
  }

  return (
    <Layout>
      <Head>
        <title>Plume - Sign In</title>
      </Head>
      <div className='text-right'>
        <Theme className='hover:opacity-75' />
      </div>
      <div className='flex justify-center pb-2'>
        <Feather width={40} height={40} />
      </div>
      <div className='flex justify-center pb-4 text-xl font-bold'>
        Welcome to Plume
      </div>
      <form onSubmit={handleSignIn} className='flex-grow max-w-md space-y-4'>
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
        <label className='block relative space-y-2'>
          <span>Password</span>
          <input
            required
            minLength={8}
            autoComplete='current-password'
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            value={password}
            onChange={event => setPassword(event.target.value)}
            className='w-full pl-3 pr-10 py-2 text-sm bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded placeholder-gray-400 dark:placeholder-gray-600'
          />
          <div
            className='absolute top-6 right-0 px-3 py-2 text-gray-400 dark:text-gray-600 cursor-pointer'
            onClick={() => setShowPassword(!showPassword)}
            aria-hidden='true'
          >
            {showPassword ? (
              <EyeOff width={20} height={20} />
            ) : (
              <Eye width={20} height={20} />
            )}
          </div>
        </label>
        <button
          type='submit'
          className='w-full text-sm px-4 py-2 bg-violet-400 dark:bg-violet-600 hover:opacity-75 rounded'
        >
          Sign In
        </button>
      </form>
      <div className='flex justify-between pt-6 text-sm'>
        <Link href='/reset-password'>
          <a className='hover:opacity-75'>Reset Password</a>
        </Link>
        <Link href='/sign-up'>
          <a className='hover:opacity-75'>Sign Up</a>
        </Link>
      </div>
    </Layout>
  )
}

export default SignIn
