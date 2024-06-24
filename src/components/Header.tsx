import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="w-full h-[50vh] relative">
      <Image
        src={'/images/paint.webp'}
        alt="header image"
        // width={600}
        // height={600}
        layout='fill'
        className="h-full w-full object-cover"
      />
    <h1>  sdafklhjads</h1>
    </div>
  );
}
