'use client'

import { useState } from 'react'

import InputPassword from '@/components/InputPassword'

const SignInForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // submit email and password to back-end then redirect the user if they are correct
    // consider adding a CAPTCHA like hCaptcha or reCAPTCHA
    // otherwise, display an error dialog in browser
    // tip: change the mouse cursor to "wait" while waiting for a response
  }

  return (
    <form onSubmit={handleSignIn} className='max-w-md flex-grow space-y-4'>
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
      <InputPassword
        label='Password'
        required
        minLength={8}
        autoComplete='current-password'
        placeholder='Password'
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button
        type='submit'
        className='w-full rounded bg-violet-400 px-4 py-2 text-sm font-medium hover:opacity-75 dark:bg-violet-600'
      >
        Sign In
      </button>
    </form>
  )
}

export default SignInForm
