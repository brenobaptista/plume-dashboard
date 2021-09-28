import { useState } from 'react'
import Link from 'next/link'

import Caret from './icons/Caret'

const Dropdown = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='relative inline-block text-sm'>
      <button
        type='button'
        className='flex space-x-3 rounded px-4 py-2 bg-white dark:bg-gray-800 hover:opacity-75 border border-gray-200 dark:border-gray-700'
        id='menu-button'
        aria-expanded='true'
        aria-haspopup='true'
        onClick={() => setExpanded(!expanded)}
      >
        <span>Options</span>
        <Caret width={20} height={20} />
      </button>
      <div
        className={`absolute right-0 mt-2 w-56 rounded shadow-lg transition-dropdown transform-gpu ease-out duration-500 ${
          expanded
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible'
        } divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700`}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
      >
        <div className='py-1' role='none'>
          <Link href='/profile'>
            <a className='block px-4 py-2 hover:opacity-75' role='menuitem'>
              Profile
            </a>
          </Link>
          <a
            href='https://github.com/brenobaptista/plume-dashboard'
            className='block px-4 py-2 hover:opacity-75'
            role='menuitem'
          >
            Help
          </a>
        </div>
        <div className='py-1' role='none'>
          <Link href='/signin'>
            <a className='block px-4 py-2 hover:opacity-75' role='menuitem'>
              Sign out
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
