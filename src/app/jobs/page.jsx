import Jobs from '@/components/Jobs'
import React from 'react'

function page() {
  return (
    <div className='bg-gray-200'>
      <h1 className='text-3xl font-bold text-black text-center pt-6 mb-6'>Job Listings</h1>
      <Jobs />
    </div>
  )
}

export default page