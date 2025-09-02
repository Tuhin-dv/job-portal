import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className='bg-white sticky top-0 z-50 text-black py-3 border-b border-gray-300'>
            <div className='max-w-[1700px] mx-auto flex justify-between items-center px-4'>
                <div>
                    <Link className='flex gap-1.5 items-center' href="/">
                        <img src="/logo.svg" alt="Job Portal Logo" />
                        <h1 className='text-2xl font-bold'>Job Portal</h1>
                    </Link>
                </div>
                <div className='flex space-x-12 font-semibold'>
                    <Link href="/">HOME</Link>
                    <Link href="/about">ABOUT US</Link>
                    <Link href="/jobs">JOBS</Link>
                    <Link href="/contact">CONTACT US</Link>
                </div>
                <div className='flex space-x-4 text-white font-semibold bg-blue-500 py-2 px-4 rounded-lg'>
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