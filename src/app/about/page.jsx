import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
   
    <div>
       <Navbar></Navbar>
       <div>
         <h1>About Us</h1>
         <p>We are a company dedicated to helping you find your dream job.</p>
       </div>
       <Footer></Footer>
    </div>
  )
}

export default page