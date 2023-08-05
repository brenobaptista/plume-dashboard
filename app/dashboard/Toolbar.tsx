import { forwardRef } from 'react'

import Dropdown from './Dropdown'
import { Hamburger } from '@/icons'
import ThemeSwitcher from '@/components/ThemeSwitcher'

interface Props {
  toggleCollapsed(): void
}

const Toolbar = forwardRef(
  ({ toggleCollapsed }: Props, toggleRef: React.Ref<HTMLButtonElement>) => (
    <nav className='flex w-screen justify-between p-6 sm:w-auto'>
      <button
        ref={toggleRef}
        aria-label='Toggle sidebar'
        type='button'
        className='h-10 w-10 p-2 hover:opacity-75'
        onClick={toggleCollapsed}
      >
        <Hamburger width={24} height={24} />
      </button>
      <div className='flex items-center space-x-10'>
        <ThemeSwitcher className='h-10 w-10 p-2 hover:opacity-75' />
        <Dropdown />
      </div>
    </nav>
  )
)

Toolbar.displayName = 'Toolbar'

export default Toolbar
