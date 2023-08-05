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
    <form onSubmit={handleEmail} className='max-w-md flex-grow space-y-4'>
      <h2 className='text-lg font-semibold'>Change email</h2>
      <label className='block space-y-2'>
        <span>Email</span>
        <input
          required
          type='email'
          placeholder='Email'
          value={email}
          onChange={event => setEmail(event.target.value.toLowerCase())}
          className='w-full rounded border border-gray-200 bg-gray-100 px-3 py-2 text-sm placeholder-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:placeholder-gray-600'
        />
      </label>
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
