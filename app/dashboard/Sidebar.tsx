import { forwardRef } from 'react'
import Link from 'next/link'

import { Feather, Home } from '@/icons'
import Heading from '@/components/Heading'

interface Props {
  collapsed: boolean
}

const Sidebar = forwardRef(
  ({ collapsed }: Props, sidebarRef: React.Ref<HTMLElement>) => (
    <nav
      ref={sidebarRef}
      className={`min-h-screen w-64 border-r border-gray-200 bg-white px-5 py-7 dark:border-gray-700 dark:bg-gray-800 ${
        collapsed ? 'ml-0 sm:-ml-64' : '-ml-64 sm:ml-0'
      } transition-spacing duration-300 ease-in-out motion-reduce:transition-none sm:duration-500`}
    >
      <Link href='/dashboard' aria-label='Go to the dashboard' passHref>
        <div className='flex items-center justify-center space-x-3'>
          <Feather width={28} height={28} />
          <Heading tag='h2'>Plume</Heading>
        </div>
      </Link>

      <div
        className='mt-12'
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
      >
        <div role='none'>
          <Link
            href='/dashboard'
            className='flex items-center space-x-4 px-3 py-2 text-lg hover:opacity-75'
            role='menuitem'
            passHref
          >
            <Home width={20} height={20} />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </nav>
  )
)

Sidebar.displayName = 'Sidebar'

export default Sidebar
