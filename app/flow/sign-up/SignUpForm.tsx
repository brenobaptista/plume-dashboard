'use client'

import { useState } from 'react'

import Input from '@/components/Input'
import InputPassword from '@/components/Input/InputPassword'

const SignUpForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmedPassword, setConfirmedPassword] = useState<string>('')

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
    <form onSubmit={handleSignUp} className='max-w-xs space-y-4'>
      <Input
        label='Email'
        required
        type='email'
        placeholder='Email'
        value={email}
        onChange={event => setEmail(event.target.value.toLowerCase())}
      />
      <InputPassword
        label='Password'
        required
        pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}'
        title='Must contain at least one lowercase letter, one uppercase letter, one numeric value and one special symbol, and the total length should be between 8 and 24.'
        autoComplete='new-password'
        placeholder='Password'
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <InputPassword
        label='Confirm password'
        required
        pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}'
        title='Must contain at least one lowercase letter, one uppercase letter, one numeric value and one special symbol, and the total length should be between 8 and 24.'
        autoComplete='new-password'
        placeholder='Confirm password'
        value={confirmedPassword}
        onChange={event => setConfirmedPassword(event.target.value)}
      />
      <button
        type='submit'
        className='w-full rounded bg-violet-400 px-4 py-2 text-sm font-medium hover:opacity-75 dark:bg-violet-600'
      >
        Sign Up
      </button>
    </form>
  )
}
export default SignUpForm
