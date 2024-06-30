import { headerContext } from '@/context/provider';
import { useContext } from 'react';

export default function HeaderNumbers() {
  const { activeTab, changeActiveTab } = useContext(headerContext);

  return (
    <div className={`absolute hidden right-[-1.8em] lg:right-[-2.5em] h-full md:flex items-center `}>
      <div  className={`flex items-center gap-3 text-[1.7rem]  top `}>
        <h3 onClick={()=>changeActiveTab(1)} className={`bordered-text cursor-pointer  ${activeTab === 1 ? "text-[2.8rem] jost-extrabold" :"jost-semibold text-[0.9rem]"} `}>01</h3>
        <h3 onClick={()=>changeActiveTab(2)} className={`bordered-text cursor-pointer  ${activeTab === 2 ? "text-[2.8rem] jost-extrabold" :"jost-semibold text-[0.9rem]"}  `}>02</h3>
        <h3 onClick={()=>changeActiveTab(3)} className={`bordered-text cursor-pointer  ${activeTab === 3 ? "text-[2.8rem] jost-extrabold" :"jost-semibold text-[0.9rem]"} `}>03</h3>
      </div>
    </div>
  );
}
