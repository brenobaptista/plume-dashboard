'use client'

import { useState, InputHTMLAttributes } from 'react'

import { Eye, EyeOff } from '@/icons'

interface IInputPassword
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'> {
  label?: string
}

const InputPassword = ({ ...props }: IInputPassword) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <label className='relative block space-y-2'>
      <span>{props.label}</span>
      <input
        {...props}
        type={showPassword ? 'text' : 'password'}
        className='w-full rounded border border-gray-200 bg-gray-100 py-2 pl-3 pr-10 text-sm placeholder-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:placeholder-gray-600'
      />
      <div
        className='absolute bottom-0 right-0 cursor-pointer px-3 py-2 text-gray-400 dark:text-gray-600'
        onClick={() => setShowPassword(!showPassword)}
        aria-hidden='true'
      >
        {showPassword ? (
          <EyeOff width={20} height={20} />
        ) : (
          <Eye width={20} height={20} />
        )}
      </div>
    </label>
  )
}

export default InputPassword
