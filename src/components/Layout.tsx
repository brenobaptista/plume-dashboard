import { useState, useEffect, useRef } from 'react'

import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Toolbar from '../components/Toolbar'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggleRef = useRef<HTMLButtonElement>(null)
  const sidebarRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleClick = event => {
      const insideToggle = toggleRef.current?.contains(event.target)
      const insideMenu = sidebarRef.current?.contains(event.target)

      if (!(insideToggle || insideMenu)) {
        setCollapsed(false)
      }
    }

    const mediaQuery = window.matchMedia('(max-width: 639px)')

    if (mediaQuery.matches) {
      window.addEventListener('click', handleClick)
    }

    return () => window.removeEventListener('click', handleClick)
  }, [])

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className='flex'>
      <Sidebar collapsed={collapsed} ref={sidebarRef} />
      <div className='w-full overflow-y-hidden'>
        <Toolbar toggleCollapsed={toggleCollapsed} ref={toggleRef} />
        <main className='w-screen sm:w-auto py-6 px-6 sm:px-12'>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
