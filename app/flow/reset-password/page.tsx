import { Metadata } from 'next'
import Link from 'next/link'

import ResetPasswordForm from './ResetPasswordForm'
import Heading from '@/components/Heading'

export const metadata: Metadata = {
  title: 'Plume - Reset Password'
}

const Page = () => {
  return (
    <>
      <Heading tag='h2' className='text-center'>
        Reset Password
      </Heading>
      <ResetPasswordForm />
      <div className='pt-6 text-sm'>
        <Link href='/flow/sign-in' className='hover:opacity-75'>
          Sign In
        </Link>
      </div>
    </>
  )
}

export default Page
