import Image from 'next/image';

interface ClientProps {
  down? : boolean

}

export default function ClientCard( { down } :ClientProps) {
  return (
    <div className={`flex bg-white ${down ? "lg:mt-[6.5rem]" : ""} items-center justify-center w-[47%] md:w-[28%] lg:w-[16rem] rounded-[8px] h-[13rem] shadow-md`} >
      <Image src="/images/zinara.png" className='object-contain w-[70%] ' width={400} height={400} alt="zinara logo" />
    </div>
  );
}
