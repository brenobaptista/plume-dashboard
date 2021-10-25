import { useState } from 'react'
import Head from 'next/head'

import Layout from '../components/Layout'

const Profile = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [currentPassword, setCurrentPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmedPassword, setConfirmedPassword] = useState<string>('')

  const handleEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    /* update in database, display a dialog in browser and send an email to the user */
  }

  const handlePassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    /* check if currentPassword is correct */
    /* check if newPassword has more than X characters */
    /* check if newPassword and confirmPassword match */
    /* update in database, display a dialog in browser and send an email to the user */
  }

  const deleteAccount = () => {
    /* explain what happens and confirm with user */
    /* update in database, display a dialog in browser and send an email to the user */
  }

  return (
    <Layout auth>
      <Head>
        <title>Plume - Profile</title>
      </Head>
      <h1 className='text-xl font-bold pb-4'>Profile</h1>
      <div className='flex flex-wrap gap-8 justify-between w-full p-4 sm:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded'>
        <form onSubmit={handleEmail} className='flex-grow max-w-md space-y-4'>
          <h2 className='text-lg font-semibold'>Change email</h2>
          <label className='block space-y-2'>
            <span>Email</span>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={event => setEmail(event.target.value.toLowerCase())}
              className='w-full px-3 py-2 text-sm bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded'
            />
          </label>
          <button
            type='submit'
            className='text-sm px-4 py-2 bg-purple-400 dark:bg-purple-600 hover:opacity-75 rounded'
          >
            Save changes
          </button>
        </form>
        <form
          onSubmit={handlePassword}
          className='flex-grow max-w-md space-y-4'
        >
          <h2 className='text-lg font-semibold'>Change password</h2>
          <label className='block space-y-2'>
            <span>Current password</span>
            <input
              type='password'
              placeholder='Current password'
              value={currentPassword}
              onChange={event => setCurrentPassword(event.target.value)}
              className='w-full px-3 py-2 text-sm bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded'
            />
          </label>
          <label className='block space-y-2'>
            <span>New password</span>
            <input
              type='password'
              placeholder='New password'
              value={newPassword}
              onChange={event => setNewPassword(event.target.value)}
              className='w-full px-3 py-2 text-sm bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded'
            />
          </label>
          <label className='block space-y-2'>
            <span>Confirm password</span>
            <input
              type='password'
              placeholder='Confirm password'
              value={confirmedPassword}
              onChange={event => setConfirmedPassword(event.target.value)}
              className='w-full px-3 py-2 text-sm bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded'
            />
          </label>
          <button
            type='submit'
            className='text-sm px-4 py-2 bg-purple-400 dark:bg-purple-600 hover:opacity-75 rounded'
          >
            Save changes
          </button>
        </form>
        <div className='flex-grow max-w-md space-y-4'>
          <h2 className='text-lg font-semibold'>Delete account</h2>
          <p>We’re sorry to hear you’d like to delete your account.</p>
          <button
            type='button'
            onClick={deleteAccount}
            className='text-sm px-4 py-2 bg-purple-400 dark:bg-purple-600 hover:opacity-75 rounded'
          >
            Delete account
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
