'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiMenu2Fill } from 'react-icons/ri';
import links from '@/assets/data/links';
import { usePathname } from 'next/navigation';
import { FaPhone } from 'react-icons/fa6';
import { TbMailFilled } from 'react-icons/tb';
import { LinkDropDown } from './LinkDropDown';

const activeLinkStyles = {
  color: 'red',
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTimeoutActive, setIsTimeoutActive] = useState(false);
  const pathname = usePathname();

  function handleMenuClick() {
    if (isTimeoutActive) return;

    const nextState = !isOpen;
    setIsOpen(nextState);

    if (nextState) {
      setIsTimeoutActive(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsTimeoutActive(false);
      }, 5000);
    }
  }

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="w-full">
      <nav className="mobile-nav shadow-md flex justify-between p-2 items-center h-[12vh] lg:hidden">
        <div className="h-[90%] w-[11rem] ">
          <Link onClick={handleMenuClick} href={'/'}>
            <Image
              src={'/images/3.png'}
              className="object-cover h-full w-full "
              alt="blayzebooth logo"
              height={300}
              width={300}
            />
          </Link>
        </div>
        <RiMenu2Fill
          onClick={handleMenuClick}
          color="black"
          className="pl-3"
          size={43}
        />
        <div
          className={`overlay ${
            isOpen ? 'translate-x-0 w-[100vw] ' : 'translate-x-[-100vw]  '
          } w-0 transition-all duration-1000 flex items-center text-white jost-bold lg:hidden capitalize justify-center top-[12vh] left-0 absolute z-20 h-[90vh]  bg-[#fe1515d9]`}
        >
          <div className="flex flex-col gap-5 text-[1.3rem]">
            <Link onClick={handleMenuClick} href={'/'}>
              Home
            </Link>
            <Link onClick={handleMenuClick} href={'/about'}>
              About
            </Link>
            <LinkDropDown
              font="jost-bold"
              TriggerName="Services"
              links={links[2].dropDownLinks!}
            />
            <Link onClick={handleMenuClick} href={'/testimonials'}>
              Testimonials
            </Link>
            <Link onClick={handleMenuClick} href={'/promotions'}>
              Promotions
            </Link>
            <Link onClick={handleMenuClick} href={'/contact'}>
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      <nav className="hidden shadow-sm  p-2 lg:flex w-full lg:w-[100%] mt-1  items-center justify-between h-[6rem] ">
        <div className="h-[90%] w-[11rem] ">
          <Link href={'/'}>
            <Image
              src={'/images/3.png'}
              className="object-cover h-full w-full"
              alt="logo"
              height={300}
              width={300}
            />
          </Link>
        </div>
        <div className="line w-[2px] h-[80%] bg-slate-100  "></div>
        <ul className="flex gap-3 md:gap-7">
          {links.map((link, index) => {
            if (link.dropDownLinks) {
              return (
                <LinkDropDown
                  key={index}
                  TriggerName="Services"
                  links={link.dropDownLinks}
                />
              );
            } else {
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={` ${
                    pathname === link.href
                      ? 'text-red-600 jost-medium'
                      : 'jost-regular'
                  } capitalize no-underline`}
                >
                  {' '}
                  {link.label}
                </Link>
              );
            }
          })}
        </ul>
        <div className="line w-[2px] h-[80%] bg-slate-100  "></div>

        <div className="flex flex-col gap-3 lg:translate-x-[-3em] ">
          <a href="" className="jost-regular flex gap-1 items-center ">
            {' '}
            <span>
              <TbMailFilled />
            </span>{' '}
            blayzebooth@gmail.com
          </a>
          <a href="" className="jost-regular flex gap-1 items-center ">
            {' '}
            <span>
              <FaPhone />
            </span>{' '}
            +263 718 329 922{' '}
          </a>
        </div>
      </nav>
    </div>
  );
}
