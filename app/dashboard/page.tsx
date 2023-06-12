import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plume - Dashboard'
}

const Page = () => {
  return (
    <>
      <h1 className='text-xl font-bold pb-4'>Dashboard</h1>
      <div className='w-full min-h-main p-4 sm:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded' />
    </>
  )
}

export default Page
