import { forwardRef } from 'react'
import Link from 'next/link'

import { Feather } from '@/icons'

interface Props {
  collapsed: boolean
}

const Sidebar = forwardRef(
  ({ collapsed }: Props, sidebarRef: React.Ref<HTMLElement>) => (
    <nav
      ref={sidebarRef}
      className={`w-64 min-h-screen p-6 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 ${
        collapsed ? 'ml-0 sm:-ml-64' : '-ml-64 sm:ml-0'
      } transition-spacing motion-reduce:transition-none duration-300 sm:duration-500 ease-in-out`}
    >
      <Link href='/dashboard' aria-label='Go to the dashboard' passHref>
        <div className='flex space-x-3 justify-center text-xl font-bold'>
          <Feather width={28} height={28} />
          <span>Plume</span>
        </div>
      </Link>
    </nav>
  )
)

Sidebar.displayName = 'Sidebar'

export default Sidebar
