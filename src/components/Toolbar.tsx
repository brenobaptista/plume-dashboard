import SidebarToggle from './SidebarToggle'
import Theme from './Theme'

const Toolbar = (): JSX.Element => (
  <nav className='p-4'>
    <SidebarToggle className='w-10 h-10 p-2 hover:opacity-75 rounded' />
    <Theme className='w-10 h-10 p-2 hover:opacity-75 rounded float-right' />
  </nav>
)

export default Toolbar
