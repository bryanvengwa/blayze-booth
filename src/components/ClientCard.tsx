import Image from 'next/image';

interface ClientProps {
  down? : boolean,
  extra? : boolean,
  image: string

}

export default function ClientCard( { down,image , extra } :ClientProps) {
  return (
    <div className={`flex bg-white ${down ? "lg:translate-y-[2.5em]" : "lg:translate-y-[-2.5em]"} ${extra ? "md:hidden" : ''} items-center justify-center w-[47%] md:w-[28%] lg:w-[18%] rounded-[8px] p-2 bg-white h-[13rem] shadow-md`} >
      <Image src={image} className='object-contain w-full h-full ' width={900} height={900} alt="partner  logo" />
    </div>
  );
}
