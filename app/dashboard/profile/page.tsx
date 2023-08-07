import { Metadata } from 'next'

import ChangeEmailForm from './ChangeEmailForm'
import ChangePasswordForm from './ChangePasswordForm'
import DeleteAccount from './DeleteAccount'
import Heading from '@/components/Heading'

export const metadata: Metadata = {
  title: 'Plume - Profile'
}

const Page = () => (
  <>
    <Heading tag='h1'>Profile</Heading>
    <div className='flex flex-col gap-8'>
      <div className='rounded border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
        <ChangeEmailForm />
      </div>
      <div className='rounded border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
        <ChangePasswordForm />
      </div>
      <div className='rounded border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
        <DeleteAccount />
      </div>
    </div>
  </>
)

export default Page
