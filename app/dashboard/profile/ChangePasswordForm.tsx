'use client'

import { useState } from 'react'

import { Eye, EyeOff } from '@/icons'

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmedPassword, setConfirmedPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handlePassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // check if newPassword and confirmPassword match
    // check if currentPassword hash is correct in database
    // update in database, display a dialog in browser and send an email to the user
    // consider adding a CAPTCHA like hCaptcha or reCAPTCHA
    // otherwise, display an error dialog in browser
    // tip: change the mouse cursor to "wait" while waiting for a response
  }

  return (
    <form onSubmit={handlePassword} className='max-w-md flex-grow space-y-4'>
      <h2 className='text-lg font-semibold'>Change password</h2>
      <label className='relative block space-y-2'>
        <span>Current password</span>
        <input
          required
          minLength={8}
          autoComplete='current-password'
          type={showPassword ? 'text' : 'password'}
          placeholder='Current password'
          value={currentPassword}
          onChange={event => setCurrentPassword(event.target.value)}
          className='w-full rounded border border-gray-200 bg-gray-100 py-2 pl-3 pr-10 text-sm placeholder-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:placeholder-gray-600'
        />
        <div
          className='absolute right-0 top-6 cursor-pointer px-3 py-2 text-gray-400 dark:text-gray-600'
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
      <label className='relative block space-y-2'>
        <span>New password</span>
        <input
          required
          pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}'
          title='Must contain at least one lowercase letter, one uppercase letter, one numeric value and one special symbol, and the total length should be between 8 and 24.'
          autoComplete='new-password'
          type={showPassword ? 'text' : 'password'}
          placeholder='New password'
          value={newPassword}
          onChange={event => setNewPassword(event.target.value)}
          className='w-full rounded border border-gray-200 bg-gray-100 py-2 pl-3 pr-10 text-sm placeholder-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:placeholder-gray-600'
        />
        <div
          className='absolute right-0 top-6 cursor-pointer px-3 py-2 text-gray-400 dark:text-gray-600'
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
      <label className='relative block space-y-2'>
        <span>Confirm password</span>
        <input
          required
          pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}'
          title='Must contain at least one lowercase letter, one uppercase letter, one numeric value and one special symbol, and the total length should be between 8 and 24.'
          autoComplete='new-password'
          type={showPassword ? 'text' : 'password'}
          placeholder='Confirm password'
          value={confirmedPassword}
          onChange={event => setConfirmedPassword(event.target.value)}
          className='w-full rounded border border-gray-200 bg-gray-100 py-2 pl-3 pr-10 text-sm placeholder-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:placeholder-gray-600'
        />
        <div
          className='absolute right-0 top-6 cursor-pointer px-3 py-2 text-gray-400 dark:text-gray-600'
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
        className='rounded bg-violet-400 px-4 py-2 text-sm hover:opacity-75 dark:bg-violet-600'
      >
        Save changes
      </button>
    </form>
  )
}

export default ChangePasswordForm
