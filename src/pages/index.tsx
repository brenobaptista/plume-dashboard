import { useState } from 'react'

import Footer from '../components/Footer'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import Toolbar from '../components/Toolbar'

const Dashboard = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className='flex'>
      <Sidebar collapsed={collapsed} />
      <div className='w-full overflow-y-hidden'>
        <Toolbar toggleCollapsed={toggleCollapsed} />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
