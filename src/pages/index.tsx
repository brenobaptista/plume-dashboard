import { useState } from 'react'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import Toolbar from '../components/Toolbar'

const Dashboard = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className='flex text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-900 transition-colors font-sans antialiased'>
      <Sidebar collapsed={collapsed} />
      <div className='w-full'>
        <Toolbar toggleCollapsed={toggleCollapsed} />
        <Main />
      </div>
    </div>
  )
}

export default Dashboard
