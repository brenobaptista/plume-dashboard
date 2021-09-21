import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Wrapper from '../components/Wrapper'
import SidebarContext from '../contexts/SidebarContext'

const Home = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className='text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 transition-colors font-sans antialiased'>
      <div className='flex'>
        <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
          <Sidebar />
          <Wrapper />
        </SidebarContext.Provider>
      </div>
    </div>
  )
}

export default Home
