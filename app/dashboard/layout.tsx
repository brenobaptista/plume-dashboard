'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'

import Sidebar from './Sidebar'
import Toolbar from './Toolbar'

interface ILayout {
  children: ReactNode
}

const Layout = ({ children }: ILayout) => {
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
        <main className='w-screen px-6 py-6 sm:w-auto sm:px-12'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
