import { useState, useEffect, useRef } from 'react'

import { Moon, Sun } from './icons'

interface Props {
  className: string
}

const Theme = ({ className }: Props): JSX.Element => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const didMountRef = useRef<boolean>(false)

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
    if (didMountRef.current) {
      localStorage.darkMode = darkMode

      if (darkMode) {
        document.documentElement.classList.add('dark')
        document.documentElement.setAttribute('style', 'color-scheme: dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.setAttribute('style', 'color-scheme: light')
      }
    } else {
      didMountRef.current = true
    }
  }, [darkMode])

  return (
    <button
      aria-label='Toggle dark mode'
      type='button'
      className={className}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <Moon width={24} height={24} />
      ) : (
        <Sun width={24} height={24} />
      )}
    </button>
  )
}

export default Theme
