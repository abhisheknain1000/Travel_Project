"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


import logo from  '../../public/Image/travelTime.jpg';
import { NAV_LINKS } from '@/constant';
import  Button  from './Button';
import adminLogo from '../../public/Image/user.svg';
import menu from '../../public/Image/menu.svg';

const Navbar = () => {
 
  
  return (
    <nav className='regular-16 flexBetween max-container padding-container relative z-30 py-5'>
      <Link href="/">
        <Image src={logo} alt="logo" width={74} height={29}/>
      </Link>
      
      <ul className='hidden h-full gap-12 lg:flex cursor-pointer'>
  {NAV_LINKS.map((link) => (
    <div key={link.key} className="relative">
      <Link href={link.href} className="regular-16 flexCenter pb-1.5 text-gray-50 hover:font-bold hover:text-red-300 hover:scale-x-90 transition-all">
        {link.label}
      </Link>
      <div className="absolute top-full left-0 w-full bg-gray-200 p-2 text-xs text-gray-700 opacity-0 transition-opacity duration-300 pointer-events-none">
      </div>
    </div>
  ))}
</ul>

      
      <div className='lg:flexCenter hidden cursor-pointer'>
                <Button
                type='button'
                title='Login'
                icon={adminLogo.src}
                variant='btn_dark_green'
                />
      </div>
      <div className='lg:hidden'>
        <Image src={menu} 
        alt='menu' 
        width={32} 
        height={32}
        onClick={()=><Link href='/'></Link>}
     
        />
      </div>

    </nav>
  )
}


export default Navbar