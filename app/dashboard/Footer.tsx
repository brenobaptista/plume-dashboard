import { Heart } from '@/icons'

const Footer = () => {
  return (
    <footer className='w-screen pb-6 sm:w-auto'>
      <div className='flex flex-col text-center text-sm text-gray-600 dark:text-gray-400 sm:block'>
        <span>© {new Date().getFullYear()} Plume. </span>
        <span>
          Made with
          <div className='inline-flex'>
            <Heart width={26} height={13} />
          </div>
          by{' '}
          <a
            href='https://www.brenobaptista.com/'
            className='text-violet-600 hover:opacity-75 dark:text-violet-400'
            target='_blank'
            rel='noreferrer noopener'
          >
            Breno Baptista
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
