import Heart from './icons/Heart'

const Footer = (): JSX.Element => (
  <footer className='w-screen sm:w-auto pb-6'>
    <div className='flex flex-col sm:block text-center text-sm text-gray-600 dark:text-gray-400'>
      <span>© {new Date().getFullYear()} Plume. </span>
      <span>
        Made with
        <div className='inline-flex'>
          <Heart width={26} height={13} />
        </div>
        by{' '}
        <a
          href='https://brenobaptista.vercel.app/'
          className='text-purple-600 dark:text-purple-400 hover:opacity-75'
          target='_blank'
          rel='noreferrer noopener'
        >
          Breno Baptista
        </a>
      </span>
    </div>
  </footer>
)

export default Footer
