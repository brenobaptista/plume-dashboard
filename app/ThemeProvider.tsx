'use client'

import { useState, useEffect, ReactNode } from 'react'

import DarkModeContext from '@/contexts/DarkModeContext'

interface IThemeProvider {
  children: ReactNode
}

const ThemeProvider = ({ children }: IThemeProvider) => {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [mounted, SetMounted] = useState<boolean>(false)

  useEffect(() => {
    if (
      localStorage.darkMode === 'true' ||
      (!('darkMode' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    localStorage.darkMode = darkMode

    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('style', 'color-scheme: dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('style', 'color-scheme: light')
    }

    SetMounted(true)
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {mounted && children}
    </DarkModeContext.Provider>
  )
}

export default ThemeProvider
