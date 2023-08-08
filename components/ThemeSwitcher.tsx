'use client'

import { useContext } from 'react'

import { Moon, Sun } from './icons'
import DarkModeContext from '@/contexts/DarkModeContext'

interface IThemeSwitcher {
  className: string
}

const ThemeSwitcher = ({ className }: IThemeSwitcher) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <button
      aria-label='Toggle dark mode'
      type='button'
      className={className}
      onClick={() => toggleDarkMode()}
    >
      {darkMode ? (
        <Moon width={24} height={24} />
      ) : (
        <Sun width={24} height={24} />
      )}
    </button>
  )
}

export default ThemeSwitcher
