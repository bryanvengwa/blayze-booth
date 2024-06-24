import React from 'react';
import NavBar from '@/components/navBar';
import Header from '@/components/Header';
export default function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-center">
        <NavBar />
      </div>
      <Header/>

    </div>
  );
}
