import { useState } from 'react'

import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Toolbar from '../components/Toolbar'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className='flex'>
      <Sidebar collapsed={collapsed} />
      <div className='w-full overflow-y-hidden'>
        <Toolbar toggleCollapsed={toggleCollapsed} />
        <main className='w-screen sm:w-auto py-6 px-6 sm:px-12'>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
