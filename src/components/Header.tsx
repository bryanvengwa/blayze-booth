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
    <header className="w-full h-[70vh] relative">
      <Image
        src={data}
        alt="header image"
        layout="fill"
        className="h-full w-full object-cover"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-[#00000058] text-white">
        <div className="container h-full w-full">
          <div className="content relative h-full w-full flex items-center  ">
            <div className="relative flex flex-col gap-6">
              <HeaderButtons />

              <h1 className="capitalize jost-bold text-[2.1rem] leading-9">
                {' '}
                Unleashing Creativity, Inspiring Impressions: <br /> your vision
                our expertise
              </h1>
              <p className="w-[70%] jost-extralight text-[1.18rem] leading-5">
                We help you create a brand identity and execute it flawlessly,
                from design to installation. We have expertise to turn your
                vision into reality.
              </p>
              <Link href={'/'}>
                <button className="bg-white px-[2rem] py-[1.5rem] text-black jost-regular">
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
