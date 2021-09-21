import Theme from './Theme'

const Toolbar = (): JSX.Element => (
  <nav className='p-3 shadow-sm bg-white dark:bg-gray-800'>
    <Theme className='w-10 h-10 p-2 hover:opacity-75 rounded bg-gray-100 dark:bg-gray-700' />
  </nav>
)

export default Toolbar
