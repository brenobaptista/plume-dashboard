import { Metadata } from 'next'
import Link from 'next/link'

import SignUpForm from './SignUpForm'
import Heading from '@/components/Heading'

export const metadata: Metadata = {
  title: 'Plume - Sign Up'
}

const Page = () => (
  <>
    <Heading tag='h2' className='text-center'>
      Create Account
    </Heading>
    <SignUpForm />
    <div className='flex justify-between pt-6 text-sm'>
      <Link href='/flow/sign-in' className='hover:opacity-75'>
        Sign In
      </Link>
    </div>
  </>
)

export default Page
