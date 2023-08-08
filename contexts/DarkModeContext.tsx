import { createContext } from 'react'

interface IDarkModeContext {
  darkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<IDarkModeContext>({
  darkMode: false,
  toggleDarkMode: () => null
})

export default DarkModeContext
