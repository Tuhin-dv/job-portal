import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-white text-black py-3'>
        <div className='max-w-[1700px] mx-auto flex justify-between items-center px-4'>
            <div>
               <h1 className='text-2xl font-bold'>Job Portal</h1>
            </div>
            <div className='flex space-x-8'>
                  <Link href="/">HOME</Link>
                  <Link href="/about">ABOUT US</Link>
                  <Link href="/jobs">JOBS</Link>
                  <Link href="/contact">CONTACT US</Link>
            </div>
            <div className='flex space-x-4 text-white font-semibold bg-amber-500 py-2 px-4 rounded-lg'>
                <Link href="/login">LOGIN</Link>
                <div>
                    /
                </div>
                <Link href="/register">REGISTER</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar