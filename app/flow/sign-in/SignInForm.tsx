'use client'

import { useState } from 'react'

import Input from '@/components/Input'
import InputPassword from '@/components/Input/InputPassword'
import Button from '@/components/Button'

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
    <form onSubmit={handleSignIn} className='max-w-xs space-y-4'>
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
        minLength={8}
        autoComplete='current-password'
        placeholder='Password'
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <Button type='submit' className='w-full'>
        Sign In
      </Button>
    </form>
  )
}

export default SignInForm
