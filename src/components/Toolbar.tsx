import { forwardRef } from 'react'

import { Hamburger } from './icons'
import Dropdown from './Dropdown'
import Theme from './Theme'

interface Props {
  toggleCollapsed(): void
}

const Toolbar = forwardRef(
  (
    { toggleCollapsed }: Props,
    toggleRef: React.Ref<HTMLButtonElement>
  ): JSX.Element => (
    <nav className='flex justify-between w-screen sm:w-auto p-6'>
      <button
        ref={toggleRef}
        aria-label='Toggle sidebar'
        type='button'
        className='w-10 h-10 p-2 hover:opacity-75'
        onClick={toggleCollapsed}
      >
        <Hamburger width={24} height={24} />
      </button>
      <div className='flex space-x-10'>
        <Theme className='w-10 h-10 p-2 hover:opacity-75' />
        <Dropdown />
      </div>
    </nav>
  )
)

export default Toolbar
