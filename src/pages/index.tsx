import Head from 'next/head'

import Layout from '../components/Layout'

const Dashboard = (): JSX.Element => (
  <Layout auth>
    <Head>
      <title>Plume - Dashboard</title>
    </Head>
    <h1 className='text-xl font-bold pb-4'>Dashboard</h1>
    <div className='w-full min-h-main p-4 sm:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded' />
  </Layout>
)

export default Dashboard
