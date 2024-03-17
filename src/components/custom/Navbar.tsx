import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DesktopLogo from "../../../public/airbnb-desktop.png"
function Navbar() {
  return (
    <div className='w-full border-b border-green-500'>
        <div className='flex items-center justify-between container mx-auto px-5 lg:px-10 py-5'>
        <Link href="/">
            <Image src={DesktopLogo} alt="Desktop Logo" className='w-32 hidden lg:block'/>
            <Image src={DesktopLogo} alt="Desktop Logo" className='w-12 block lg:hidden'/>
        </Link>

        </div>
       
    </div>
  )
}

export default Navbar