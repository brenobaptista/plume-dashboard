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
      <h1 className='pb-4 text-xl font-bold'>Profile</h1>
      <div className='flex w-full flex-wrap justify-between gap-8 rounded border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
        <ChangeEmailForm />
        <ChangePasswordForm />
        <DeleteAccount />
      </div>
    </>
  )
}

export default Page
