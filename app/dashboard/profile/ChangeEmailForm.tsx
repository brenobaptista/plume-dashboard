'use client'

import { useState } from 'react'

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
    <form onSubmit={handleEmail} className='flex-grow max-w-md space-y-4'>
      <h2 className='text-lg font-semibold'>Change email</h2>
      <label className='block space-y-2'>
        <span>Email</span>
        <input
          required
          type='email'
          placeholder='Email'
          value={email}
          onChange={event => setEmail(event.target.value.toLowerCase())}
          className='w-full px-3 py-2 text-sm bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded placeholder-gray-400 dark:placeholder-gray-600'
        />
      </label>
      <button
        type='submit'
        className='text-sm px-4 py-2 bg-violet-400 dark:bg-violet-600 hover:opacity-75 rounded'
      >
        Save changes
      </button>
    </form>
  )
}

export default ChangeEmailForm
