import { InputHTMLAttributes } from 'react'

export interface IInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  label?: string
}

const Input = ({ ...props }: IInput) => (
  <label className='block space-y-2'>
    <span>{props.label}</span>
    <input
      {...props}
      className='w-full rounded border border-gray-200 bg-gray-100 px-3 py-2 text-sm placeholder-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:placeholder-gray-600'
    />
  </label>
)

export default Input
