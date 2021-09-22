import { useState } from 'react'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import SidebarContext from '../contexts/SidebarContext'
import Toolbar from '../components/Toolbar'

const Home = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className='flex text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 transition-colors font-sans antialiased'>
      <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
        <Sidebar />
        <div className='w-full'>
          <Toolbar />
          <Main />
        </div>
      </SidebarContext.Provider>
    </div>
  )
}

export default Home
