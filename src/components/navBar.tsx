import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function NavBar() {
  return (
<div className="w-full">
  <nav className="mobile-nav h-[5rem] md:hidden">

  <div className="h-[90%] w-[11rem] ">
<Image src={'/images/blayze-logo-1.png'} className='object-cover h-full w-full' alt='logo'  height={300} width={300}/>

</div>


  </nav>
<div className='hidden p-2 md:flex w-[90%] mt-1  items-center justify-between h-[6rem] ' >

<div className="h-[90%] w-[11rem] ">
<Image src={'/images/blayze-logo-1.png'} className='object-cover h-full w-full' alt='logo'  height={300} width={300}/>

</div>
<div className="line w-[2px] h-[80%] bg-slate-100  "></div>
<ul className='flex gap-3' >
  <li> <Link href={'/'} >Home</Link> </li>
  <li> <Link href={'/'} >About</Link> </li>
  <li> <Link href={'/'} >Services</Link> </li>
  <li> <Link href={'/'} >Testimonials</Link> </li>
  <li> <Link href={'/'} >Promotions</Link> </li>
  <li> <Link href={'/'} >Contact</Link> </li>
</ul>
<div className="line w-[2px] h-[80%] bg-slate-100  "></div>

<div className="flex flex-col gap-3">
  <a href="">bmvengwa@gmail.com</a>
  <a href="">+263 785 107 909 </a>
</div>
</div>

</div>
  )
}
