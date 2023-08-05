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
      <Link href='/flow/reset-password' className='hover:opacity-75'>
        Reset Password
      </Link>
      <Link href='/flow/sign-up' className='hover:opacity-75'>
        Sign Up
      </Link>
    </div>
  </>
)

export default Page
