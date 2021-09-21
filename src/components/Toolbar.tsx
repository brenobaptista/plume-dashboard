import SidebarToggle from './SidebarToggle'
import Theme from './Theme'

const Toolbar = (): JSX.Element => (
  <nav className='p-3 shadow-sm bg-white dark:bg-gray-800'>
    <SidebarToggle className='w-10 h-10 p-2 hover:opacity-75 rounded' />
    <Theme className='w-10 h-10 p-2 hover:opacity-75 rounded float-right' />
  </nav>
)

export default Toolbar
