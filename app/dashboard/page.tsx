import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plume - Dashboard'
}

const Page = () => {
  return (
    <>
      <h1 className='pb-4 text-xl font-bold'>Dashboard</h1>
      <div className='min-h-main w-full rounded border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6' />
    </>
  )
}

export default Page
