'use client';
import React, { createContext, useState, useEffect } from 'react';

const initialData = {
  next: () => {},
  previous: () => {},
  activeTab: 1,
};
export const headerContext = createContext<any>(initialData);

export const HeaderContextProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  function next() {
    if (activeTab < 3) {
      setActiveTab(activeTab + 1);
    } else {
      setActiveTab(1);
    }
  }
  function previous() {
    if (activeTab == 1) {
      setActiveTab(3);
    } else {
      setActiveTab(activeTab - 1);
    }
  }
  useEffect(()=>{
  const interval: any = setInterval(next, 6000);

  return () => clearInterval(interval);

  })

  const contextData = {
    next,
    previous,
    activeTab,
  };

  return (
    <headerContext.Provider value={contextData}>
      {children}
    </headerContext.Provider>
  );
};
