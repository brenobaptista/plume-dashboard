import { Heart } from '@/components/icons'

const Footer = () => {
  return (
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
            href='https://www.brenobaptista.com/'
            className='text-violet-600 dark:text-violet-400 hover:opacity-75'
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
