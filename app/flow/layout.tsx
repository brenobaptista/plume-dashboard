import { Feather } from '@/components/icons'
import ThemeSwitcher from '@/components/ThemeSwitcher'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='flex items-center justify-around h-screen p-6'>
      <div className='p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded'>
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
