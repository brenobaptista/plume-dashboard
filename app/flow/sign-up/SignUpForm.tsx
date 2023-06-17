'use client'

import { useState } from 'react'

import { Eye, EyeOff } from '@/icons'

const SignUpForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmedPassword, setConfirmedPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // check if password and confirmPassword match
    // submit the data to the back-end to be processed
    // redirect the user to the dashboard and send an email to the user to confirm the email
    // consider adding a CAPTCHA like hCaptcha or reCAPTCHA
    // otherwise, display an error dialog in browser
    // tip: change the mouse cursor to "wait" while waiting for a response
  }

  return (
    <form onSubmit={handleSignUp} className='max-w-md flex-grow space-y-4'>
      <label className='block space-y-2'>
        <span>Email</span>
        <input
          required
          type='email'
          placeholder='Email'
          value={email}
          onChange={event => setEmail(event.target.value.toLowerCase())}
          className='w-full rounded border border-gray-200 bg-gray-100 px-3 py-2 text-sm placeholder-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:placeholder-gray-600'
        />
      </label>
      <label className='relative block space-y-2'>
        <span>Password</span>
        <input
          required
          pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}'
          title='Must contain at least one lowercase letter, one uppercase letter, one numeric value and one special symbol, and the total length should be between 8 and 24.'
          autoComplete='new-password'
          type={showPassword ? 'text' : 'password'}
          placeholder='New password'
          value={password}
          onChange={event => setPassword(event.target.value)}
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
        className='w-full rounded bg-violet-400 px-4 py-2 text-sm hover:opacity-75 dark:bg-violet-600'
      >
        Sign Up
      </button>
    </form>
  )
}
export default SignUpForm
