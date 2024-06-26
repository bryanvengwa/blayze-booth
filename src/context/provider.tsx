'use client';
import React, { createContext, useState, useEffect, useCallback } from 'react';

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

  const next = useCallback(() => {
    if (activeTab < 3) {
      setActiveTab(activeTab + 1);
    } else {
      setActiveTab(1);
    }
  }, [activeTab]);
  
  function previous() {
    if (activeTab == 1) {
      setActiveTab(3);
    } else {
      setActiveTab(activeTab - 1);
    }
  }
  function changeActiveTab(tab: number) {
    const allowedTabs = [1, 2, 3];
    if (allowedTabs.includes(tab)) {
      setActiveTab(tab);
    }
  }
  useEffect(() => {
    const interval: any = setInterval(next, 6000);

    return () => clearInterval(interval);
  }, [activeTab, next]);

  const contextData = {
    next,
    previous,
    activeTab,
    changeActiveTab,
  };

  return (
    <headerContext.Provider value={contextData}>
      {children}
    </headerContext.Provider>
  );
};
