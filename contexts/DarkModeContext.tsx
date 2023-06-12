import { createContext } from 'react'

interface Context {
  darkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<Context>({
  darkMode: false,
  toggleDarkMode: () => null
})

export default DarkModeContext
