'use client'

import { useState } from 'react'

import Input from '@/components/Input'
import Button from '@/components/Button'
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
    <>
      <Heading tag='h2'>Change email</Heading>
      <form onSubmit={handleEmail} className='max-w-xs space-y-4'>
        <Input
          label='Email'
          required
          type='email'
          placeholder='Email'
          value={email}
          onChange={event => setEmail(event.target.value.toLowerCase())}
        />
        <Button type='submit'>Save changes</Button>
      </form>
    </>
  )
}

export default ChangeEmailForm
