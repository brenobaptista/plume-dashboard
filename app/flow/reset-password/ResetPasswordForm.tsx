'use client'

import { useState } from 'react'

import Input from '@/components/Input'

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
    <form onSubmit={handleResetPassword} className='max-w-xs space-y-4'>
      <Input
        label='Email'
        required
        type='email'
        placeholder='Email'
        value={email}
        onChange={event => setEmail(event.target.value.toLowerCase())}
      />
      <button
        type='submit'
        className='w-full rounded bg-violet-400 px-4 py-2 text-sm font-medium hover:opacity-75 dark:bg-violet-600'
      >
        Reset Password
      </button>
    </form>
  )
}

export default ResetPasswordForm
