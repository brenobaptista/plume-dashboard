'use client'

import { useState } from 'react'

const ResetPasswordForm = () => {
  const [email, setEmail] = useState<string>('')

  const handleResetPassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // submit email to back-end, which will send the user an email with instructions
    // consider adding a CAPTCHA like hCaptcha or reCAPTCHA
    // create a new page for the second step: allowing the user to reset the password
    // then, display a success dialog in browser
    // otherwise, display an error dialog in browser
    // tip: change the mouse cursor to "wait" while waiting for a response
  }

  return (
    <form
      onSubmit={handleResetPassword}
      className='max-w-md flex-grow space-y-4'
    >
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
      <button
        type='submit'
        className='w-full rounded bg-violet-400 px-4 py-2 text-sm hover:opacity-75 dark:bg-violet-600'
      >
        Reset Password
      </button>
    </form>
  )
}

export default ResetPasswordForm
