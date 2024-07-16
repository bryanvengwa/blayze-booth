'use client';
import { useContext, useEffect, useState } from 'react';
import digitalGlobe from '@/assets/images/digital-globe.png';
import paint from '@/assets/images/paint.webp';
import marketing from '@/assets/images/marketing.png';
import Image from 'next/image';
import Link from 'next/link';
import HeaderButtons from './HeaderButtons';
import HeaderNumbers from './HeaderNumbers';
import { headerContext } from '@/context/provider';
import HeaderContent from './HeaderContent';

export default function Header() {
  const { activeTab, next } = useContext(headerContext);
  const [data, setData] = useState(digitalGlobe);
  useEffect(() => {
    if (activeTab == 1) {
      setData(digitalGlobe);
    } else if (activeTab == 2) {
      setData(paint);
    } else {
      setData(marketing);
    }
  }, [activeTab]);

  return (
    <header className="w-full h-[80vh] md:h-[60vh] relative">
      <Image
        src={data}
        alt="header image"
        layout="fill"
        className="h-full w-full object-cover"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-[#00000058] text-white">
        <div className="container h-full w-full">
          <div className="content relative h-full w-full flex items-center  ">
            <div className="relative ml-4 flex flex-col gap-4 md:gap-10 ">
              <HeaderButtons />
              <HeaderContent activeTab={activeTab} />

           
              <Link href={'/'}>
                <button className="bg-white mt-3 px-[2.3rem] py-[1.3rem] text-black jost-regular rounded-[4px]">
                  Work with us
                </button>
              </Link>
            </div>
            <HeaderNumbers />
          </div>
        </div>
      </div>
    </header>
  );
}
