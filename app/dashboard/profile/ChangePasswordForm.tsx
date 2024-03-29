'use client'

import { useState } from 'react'

import InputPassword from '@/components/Input/InputPassword'
import Button from '@/components/Button'
import Heading from '@/components/Heading'

const ChangePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmedPassword, setConfirmedPassword] = useState<string>('')

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
    <>
      <Heading tag='h2' className='pb-4'>
        Change password
      </Heading>
      <form onSubmit={handlePassword} className='max-w-xs space-y-4'>
        <InputPassword
          label='Current password'
          required
          minLength={8}
          autoComplete='current-password'
          placeholder='Current password'
          value={currentPassword}
          onChange={event => setCurrentPassword(event.target.value)}
        />
        <InputPassword
          label='New password'
          required
          pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}'
          title='Must contain at least one lowercase letter, one uppercase letter, one numeric value and one special symbol, and the total length should be between 8 and 24.'
          autoComplete='new-password'
          placeholder='New password'
          value={newPassword}
          onChange={event => setNewPassword(event.target.value)}
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
        <Button type='submit'>Save changes</Button>
      </form>
    </>
  )
}

export default ChangePasswordForm
