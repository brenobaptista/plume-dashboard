import { Metadata } from 'next'
import Link from 'next/link'

import SignUpForm from './SignUpForm'

export const metadata: Metadata = {
  title: 'Plume - Sign Up'
}

const Page = () => {
  return (
    <>
      <div className='flex justify-center pb-4 text-xl font-bold'>
        Create Account
      </div>
      <SignUpForm />
      <div className='flex justify-between pt-6 text-sm'>
        <Link href='/flow/sign-in' className='hover:opacity-75'>
          Sign In
        </Link>
      </div>
    </>
  )
}

export default Page
