'use client'

import { useState } from 'react'

import Input from '@/components/Input'
import Heading from '@/components/Heading'

const ChangeEmailForm = () => {
  const [email, setEmail] = useState<string>('')

  const handleEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // update in database, display a dialog in browser and send an email to the user
    // consider adding a CAPTCHA like hCaptcha or reCAPTCHA
    // otherwise, display an error dialog in browser
    // tip: change the mouse cursor to "wait" while waiting for a response
  }

  return (
    <form onSubmit={handleEmail} className='max-w-xs space-y-4'>
      <Heading tag='h2'>Change email</Heading>
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
        className='rounded bg-violet-400 px-4 py-2 text-sm font-medium hover:opacity-75 dark:bg-violet-600'
      >
        Save changes
      </button>
    </form>
  )
}

export default ChangeEmailForm
