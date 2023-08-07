import { ReactNode } from 'react'

import { Feather } from '@/icons'
import ThemeSwitcher from '@/components/ThemeSwitcher'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex h-screen items-center justify-around p-6'>
      <div className='rounded border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800'>
        <div className='text-right'>
          <ThemeSwitcher className='hover:opacity-75' />
        </div>
        <div className='flex justify-center pb-2'>
          <Feather width={40} height={40} />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Layout
