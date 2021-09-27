import Dropdown from './Dropdown'
import SidebarToggle from './SidebarToggle'
import Theme from './Theme'

interface Props {
  toggleCollapsed(): void
}

const Toolbar = ({ toggleCollapsed }: Props): JSX.Element => (
  <nav className='flex justify-between w-screen sm:w-auto p-6'>
    <SidebarToggle
      className='w-10 h-10 p-2 hover:opacity-75'
      toggleCollapsed={toggleCollapsed}
    />
    <div className='flex space-x-10'>
      <Theme className='w-10 h-10 p-2 hover:opacity-75' />
      <Dropdown />
    </div>
  </nav>
)

export default Toolbar
