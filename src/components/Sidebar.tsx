interface Props {
  collapsed: boolean
}

const Sidebar = ({ collapsed }: Props): JSX.Element => (
  <nav
    className={`w-64 h-screen p-6 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 ${
      collapsed ? 'ml-0 sm:-ml-64' : '-ml-64 sm:ml-0'
    } transition-spacing duration-500 ease-in-out`}
  />
)

export default Sidebar
