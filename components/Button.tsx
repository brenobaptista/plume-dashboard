import { ButtonHTMLAttributes } from 'react'

type IButton = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ ...props }: IButton) => {
  return (
    <button
      {...props}
      className={`${props.className} rounded bg-violet-400 px-4 py-2 text-sm font-medium hover:opacity-75 dark:bg-violet-600`}
    >
      {props.children}
    </button>
  )
}

export default Button
