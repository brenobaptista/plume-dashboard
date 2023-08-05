import { Metadata } from 'next'

import Heading from '@/components/Heading'

export const metadata: Metadata = {
  title: 'Plume - Dashboard'
}

const Page = () => {
  return (
    <>
      <Heading tag='h1'>Dashboard</Heading>
      <div className='mt-4 min-h-main w-full rounded border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6' />
    </>
  )
}

export default Page
