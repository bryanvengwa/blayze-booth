import Image from 'next/image';

interface ClientProps {
  down? : boolean,
  extra? : boolean

}

export default function ClientCard( { down, extra } :ClientProps) {
  return (
    <div className={`flex bg-white ${down ? "lg:translate-y-[2.5em]" : "lg:translate-y-[-2.5em]"} ${extra ? "md:hidden" : ''} items-center justify-center w-[47%] md:w-[28%] lg:w-[18%] rounded-[8px] h-[13rem] shadow-md`} >
      <Image src="/images/zinara.png" className='object-contain w-[70%] ' width={400} height={400} alt="zinara logo" />
    </div>
  );
}
