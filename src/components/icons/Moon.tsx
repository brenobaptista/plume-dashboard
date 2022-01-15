interface Props {
  width: number
  height: number
}

const Moon = ({ width, height }: Props): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={width}
    height={height}
    fill='none'
    stroke='currentColor'
    aria-hidden='true'
  >
    <title>Activate light mode</title>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
    />
  </svg>
)

export default Moon
