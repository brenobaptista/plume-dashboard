import { Metadata } from 'next'
import Link from 'next/link'

import SignInForm from './SignInForm'
import Heading from '@/components/Heading'

export const metadata: Metadata = {
  title: 'Plume - Sign In'
}

const Page = () => (
  <>
    <Heading tag='h2' className='text-center'>
      Welcome to Plume
    </Heading>
    <SignInForm />
    <div className='flex justify-between pt-6 text-sm'>
      <Link
        href='/flow/reset-password'
        className='text-violet-600 hover:opacity-75 dark:text-violet-400'
      >
        Reset Password
      </Link>
      <Link
        href='/flow/sign-up'
        className='text-violet-600 hover:opacity-75 dark:text-violet-400'
      >
        Sign Up
      </Link>
    </div>
  </>
)

export default Page
