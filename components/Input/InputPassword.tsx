'use client'

import { useState } from 'react'

import { Eye, EyeOff } from '@/icons'
import Input, { IInput } from './index'

type IInputPassword = Omit<IInput, 'type'>

const InputPassword = ({ ...props }: IInputPassword) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div className='relative'>
      <Input {...props} type={showPassword ? 'text' : 'password'} />
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
    </div>
  )
}

export default InputPassword
