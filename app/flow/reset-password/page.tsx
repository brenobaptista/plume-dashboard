import { Metadata } from 'next'
import Link from 'next/link'

import ResetPasswordForm from './ResetPasswordForm'

export const metadata: Metadata = {
  title: 'Plume - Reset Password'
}

const Page = () => {
  return (
    <>
      <div className='flex justify-center pb-4 text-xl font-bold'>
        Reset Password
      </div>
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
