import { forwardRef } from 'react'
import Link from 'next/link'

import { Feather } from '@/icons'
import Heading from '@/components/Heading'

interface Props {
  collapsed: boolean
}

const Sidebar = forwardRef(
  ({ collapsed }: Props, sidebarRef: React.Ref<HTMLElement>) => (
    <nav
      ref={sidebarRef}
      className={`min-h-screen w-64 border-r border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 ${
        collapsed ? 'ml-0 sm:-ml-64' : '-ml-64 sm:ml-0'
      } transition-spacing duration-300 ease-in-out motion-reduce:transition-none sm:duration-500`}
    >
      <Link href='/dashboard' aria-label='Go to the dashboard' passHref>
        <div className='flex justify-center space-x-3'>
          <Feather width={28} height={28} />
          <Heading tag='h2'>Plume</Heading>
        </div>
      </Link>
    </nav>
  )
)

Sidebar.displayName = 'Sidebar'

export default Sidebar
