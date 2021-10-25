import { useState } from 'react'
import Head from 'next/head'

import Eye from '../components/icons/Eye'
import EyeOff from '../components/icons/EyeOff'
import Layout from '../components/Layout'

const Profile = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [currentPassword, setCurrentPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmedPassword, setConfirmedPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    /* update in database, display a dialog in browser and send an email to the user */
  }

  const handlePassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    /* check if newPassword and confirmPassword match */
    /* check if currentPassword hash is correct in database */
    /* update in database, display a dialog in browser and send an email to the user */
  }

  const deleteAccount = () => {
    /* explain what happens and confirm with user */
    /* update in database, display a dialog in browser and send an email to the user */
  }

  return (
    <Layout authenticated>
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
              required
              type='email'
              placeholder='Email'
              value={email}
              onChange={event => setEmail(event.target.value.toLowerCase())}
              className='w-full px-3 py-2 text-sm bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded placeholder-gray-400 dark:placeholder-gray-600'
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
          <label className='block relative space-y-2'>
            <span>Current password</span>
            <input
              required
              minLength={8}
              autoComplete='current-password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Current password'
              value={currentPassword}
              onChange={event => setCurrentPassword(event.target.value)}
              className='w-full pl-3 pr-10 py-2 text-sm bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded placeholder-gray-400 dark:placeholder-gray-600'
            />
            <div
              className='absolute top-6 right-0 px-3 py-2 text-gray-400 dark:text-gray-600 cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
              aria-hidden='true'
            >
              {showPassword ? (
                <EyeOff width={20} height={20} />
              ) : (
                <Eye width={20} height={20} />
              )}
            </div>
          </label>
          <label className='block relative space-y-2'>
            <span>New password</span>
            <input
              required
              pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}'
              title='Must contain at least one lowercase letter, one uppercase letter, one numeric value and one special symbol, and the total length should be greater than or equal to 8.'
              autoComplete='new-password'
              type={showPassword ? 'text' : 'password'}
              placeholder='New password'
              value={newPassword}
              onChange={event => setNewPassword(event.target.value)}
              className='w-full pl-3 pr-10 py-2 text-sm bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded placeholder-gray-400 dark:placeholder-gray-600'
            />
            <div
              className='absolute top-6 right-0 px-3 py-2 text-gray-400 dark:text-gray-600 cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
              aria-hidden='true'
            >
              {showPassword ? (
                <EyeOff width={20} height={20} />
              ) : (
                <Eye width={20} height={20} />
              )}
            </div>
          </label>
          <label className='block relative space-y-2'>
            <span>Confirm password</span>
            <input
              required
              pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}'
              title='Must contain at least one lowercase letter, one uppercase letter, one numeric value and one special symbol, and the total length should be greater than or equal to 8.'
              autoComplete='new-password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Confirm password'
              value={confirmedPassword}
              onChange={event => setConfirmedPassword(event.target.value)}
              className='w-full pl-3 pr-10 py-2 text-sm bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded placeholder-gray-400 dark:placeholder-gray-600'
            />
            <div
              className='absolute top-6 right-0 px-3 py-2 text-gray-400 dark:text-gray-600 cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
              aria-hidden='true'
            >
              {showPassword ? (
                <EyeOff width={20} height={20} />
              ) : (
                <Eye width={20} height={20} />
              )}
            </div>
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
