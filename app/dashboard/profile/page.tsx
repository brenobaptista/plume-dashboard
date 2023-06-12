import { Metadata } from 'next'

import ChangeEmailForm from './ChangeEmailForm'
import ChangePasswordForm from './ChangePasswordForm'
import DeleteAccount from './DeleteAccount'

export const metadata: Metadata = {
  title: 'Plume - Profile'
}

const Page = () => {
  return (
    <>
      <h1 className='text-xl font-bold pb-4'>Profile</h1>
      <div className='flex flex-wrap gap-8 justify-between w-full p-4 sm:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded'>
        <ChangeEmailForm />
        <ChangePasswordForm />
        <DeleteAccount />
      </div>
    </>
  )
}

export default Page
