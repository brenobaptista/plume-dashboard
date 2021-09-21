import { useContext } from 'react'
import SidebarContext from '../contexts/SidebarContext'

const Sidebar = (): JSX.Element => {
  const { collapsed } = useContext(SidebarContext)

  return (
    <nav
      className={`w-64 h-screen p-6 bg-gray-300 dark:bg-gray-900 ${
        collapsed && '-ml-64'
      } transition-spacing duration-500 ease-in-out`}
    />
  )
}

export default Sidebar
