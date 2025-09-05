import Footer from '@/components/Footer'
import Jobs from '@/components/Jobs'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='bg-gray-200'>
        <Jobs />
      </div>
      <Footer/>
    </div>
  )
}

export default page