'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiMenu2Fill } from 'react-icons/ri';
import links from '@/assets/data/links';
import { usePathname } from 'next/navigation';
import { FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { LinkDropDown } from './LinkDropDown';



const activeLinkStyles = {
  color: 'red', 
};

export default function NavBar() {
  const pathname = usePathname()
  
  return (
    <div className="w-full">
      <nav className="mobile-nav flex justify-between p-2 items-center h-[5rem] lg:hidden">
        <div className="h-[90%] w-[11rem] ">
         
          <Image
            src={'/images/blayze-logo-1.png'}
            className="object-cover h-full w-full"
            alt="logo"
            height={300}
            width={300}
          />
        </div>
        <RiMenu2Fill size={45} className=" cursor-pointer" />
      </nav>
      <nav className="hidden p-2 lg:flex w-full lg:w-[90%] mt-1  items-center justify-between h-[6rem] ">
        <div className="h-[90%] w-[11rem] ">
          <Image
            src={'/images/blayze-logo-1.png'}
            className="object-cover h-full w-full"
            alt="logo"
            height={300}
            width={300}
          />
        </div>
        <div className="line w-[2px] h-[80%] bg-slate-100  "></div>
        <ul className="flex gap-3 md:gap-7">
          {
            links.map((link, index )=>{
              if(link.dropDownLinks){
                
              return (
                <LinkDropDown key={index} TriggerName='Services' links={link.dropDownLinks} />
              )

              }else{
                return (

                  <Link key={index} href={link.href} className={` ${pathname === link.href ? "text-red-600 jost-medium" : 'jost-regular'} capitalize no-underline`} > {link.label}</Link>
                    
  
                )}

              }

            )
          }
        </ul>
        <div className="line w-[2px] h-[80%] bg-slate-100  "></div>

        <div className="flex flex-col gap-3">
          <a href="" className='jost-regular flex gap-1 items-center ' > <span><TbMailFilled /></span> bmvengwa@gmail.com</a>
          <a href="" className='jost-regular flex gap-1 items-center ' > <span><FaPhone /></span>  +263 785 107 909 </a>
        </div>
      </nav>
    </div>
  );
}
