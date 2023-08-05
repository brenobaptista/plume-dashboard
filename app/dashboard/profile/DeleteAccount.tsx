'use client'

import Button from '@/components/Button'
import Heading from '@/components/Heading'

const DeleteAccount = () => {
  const deleteAccount = () => {
    // explain what happens and confirm with user
    // update in database, display a dialog in browser and send an email to the user
    // consider adding a CAPTCHA like hCaptcha or reCAPTCHA
    // otherwise, display an error dialog in browser
    // tip: change the mouse cursor to "wait" while waiting for a response
  }

  return (
    <>
      <Heading tag='h2'>Delete account</Heading>
      <p className='pb-8'>
        We’re sorry to hear you’d like to delete your account.
      </p>
      <Button type='button' onClick={deleteAccount}>
        Delete account
      </Button>
    </>
  )
}

export default DeleteAccount
