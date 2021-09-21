import { useContext } from 'react'
import Hamburger from './icons/Hamburger'
import SidebarContext from '../contexts/SidebarContext'

interface Props {
  className: string
}

const Sidebar = ({ className }: Props): JSX.Element => {
  const { collapsed, setCollapsed } = useContext(SidebarContext)

  return (
    <button
      aria-label='Toggle sidebar'
      type='button'
      className={className}
      onClick={() => setCollapsed(!collapsed)}
    >
      <Hamburger width={24} height={24} />
    </button>
  )
}

export default Sidebar
