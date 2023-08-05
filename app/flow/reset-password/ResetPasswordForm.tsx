'use client'

import { useState } from 'react'

import Input from '@/components/Input'
import Button from '@/components/Button'

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
      <Button type='submit' className='w-full'>
        Reset Password
      </Button>
    </form>
  )
}

export default ResetPasswordForm
