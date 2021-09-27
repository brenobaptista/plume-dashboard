interface Props {
  width: number
  height: number
}

const Caret = ({ width, height }: Props): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    aria-hidden='true'
    width={width}
    height={height}
    fill='currentColor'
  >
    <title>Caret</title>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
    />
  </svg>
)

export default Caret
