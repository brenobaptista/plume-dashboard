'use client'

const DeleteAccount = () => {
  const deleteAccount = () => {
    // explain what happens and confirm with user
    // update in database, display a dialog in browser and send an email to the user
    // consider adding a CAPTCHA like hCaptcha or reCAPTCHA
    // otherwise, display an error dialog in browser
    // tip: change the mouse cursor to "wait" while waiting for a response
  }

  return (
    <div className='flex-grow max-w-md space-y-4'>
      <h2 className='text-lg font-semibold'>Delete account</h2>
      <p>We’re sorry to hear you’d like to delete your account.</p>
      <button
        type='button'
        onClick={deleteAccount}
        className='text-sm px-4 py-2 bg-violet-400 dark:bg-violet-600 hover:opacity-75 rounded'
      >
        Delete account
      </button>
    </div>
  )
}

export default DeleteAccount
