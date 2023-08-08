import { Metadata } from 'next'
import Link from 'next/link'

import ResetPasswordForm from './ResetPasswordForm'
import Heading from '@/components/Heading'

export const metadata: Metadata = {
  title: 'Plume - Reset Password'
}

const Page = () => (
  <>
    <Heading tag='h2' className='pb-4 text-center'>
      Reset Password
    </Heading>
    <ResetPasswordForm />
    <div className='pt-6 text-sm'>
      <Link
        href='/auth/sign-in'
        className='text-violet-600 hover:opacity-75 dark:text-violet-400'
      >
        Sign In
      </Link>
    </div>
  </>
)

export default Page
