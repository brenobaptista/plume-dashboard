import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

import { Caret, Question, SignOut, User } from './icons'

const Dropdown = (): JSX.Element => {
  const [expanded, setExpanded] = useState<boolean>(false)

  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = event => {
      const insideToggle = toggleRef.current?.contains(event.target)
      const insideMenu = menuRef.current?.contains(event.target)

      if (!(insideToggle || insideMenu)) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', handleClick)

    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className='relative inline-block text-sm'>
      <button
        type='button'
        className='flex space-x-2 p-2 hover:opacity-75'
        id='menu-button'
        aria-expanded='true'
        aria-haspopup='true'
        onClick={() => setExpanded(!expanded)}
        ref={toggleRef}
      >
        <span>My Account</span>
        <Caret width={20} height={20} />
      </button>
      <div
        className={`absolute right-0 mt-2 whitespace-nowrap shadow-lg transition-dropdown motion-reduce:transition-none ease-out duration-500 ${
          expanded
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible'
        } divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded`}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
        ref={menuRef}
      >
        <div className='py-1' role='none'>
          <Link href='/profile'>
            <a
              className='flex items-center space-x-4 px-6 py-2 hover:opacity-75'
              role='menuitem'
            >
              <User width={12} height={12} />
              <span>Profile</span>
            </a>
          </Link>
          <a
            href='https://github.com/brenobaptista/plume-dashboard'
            className='flex items-center space-x-4 px-6 py-2 hover:opacity-75'
            role='menuitem'
          >
            <Question width={12} height={12} />
            <span>Help</span>
          </a>
        </div>
        <div className='py-1' role='none'>
          <Link href='/sign-in'>
            <a
              className='flex items-center space-x-4 px-6 py-2 hover:opacity-75'
              role='menuitem'
            >
              <SignOut width={12} height={12} />
              <span>Sign out</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
