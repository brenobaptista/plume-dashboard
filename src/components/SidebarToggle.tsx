import Hamburger from './icons/Hamburger'

interface Props {
  className: string
  toggleCollapsed(): void
}

const Sidebar = ({ className, toggleCollapsed }: Props): JSX.Element => (
  <button
    aria-label='Toggle sidebar'
    type='button'
    className={className}
    onClick={toggleCollapsed}
  >
    <Hamburger width={24} height={24} />
  </button>
)

export default Sidebar
