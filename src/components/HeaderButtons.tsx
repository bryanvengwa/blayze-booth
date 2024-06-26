'use client';
import { headerContext } from '@/context/provider';
import { act, useContext } from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { BsArrowRightCircle } from 'react-icons/bs';

export default function HeaderButtons() {
  const { next, activeTab, previous } = useContext(headerContext);

  return (
    <div className="absolute bottom-[-3rem] md:bottom-[unset] left-0 w-full md:left-[-2.5em] md:h-full md:w-[unset] flex items-center justify-center ">
      <div className="flex items-end md:flex-col gap-3 text-white text-[1.7rem]  top">
        <button onClick={previous} disabled={activeTab == 1}>
          <BsArrowLeftCircle
            className={`${activeTab === 1 ? 'text-[#838282dd]' : ''}`}
          />
        </button>
        <button disabled={activeTab == 3}>
          <BsArrowRightCircle
            className={`${activeTab === 3 ? 'text-[#838282dd]' : ''}`}
            onClick={next}
          />
        </button>
      </div>
    </div>
  );
}
