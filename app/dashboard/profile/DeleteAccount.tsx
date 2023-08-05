'use client'

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
    <div className='max-w-xs space-y-4'>
      <Heading tag='h2'>Delete account</Heading>
      <p>We’re sorry to hear you’d like to delete your account.</p>
      <button
        type='button'
        onClick={deleteAccount}
        className='rounded bg-violet-400 px-4 py-2 text-sm font-medium hover:opacity-75 dark:bg-violet-600'
      >
        Delete account
      </button>
    </div>
  )
}

export default DeleteAccount
