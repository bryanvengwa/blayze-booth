import Image from 'next/image';

interface ClientProps {

}

export default function ClientCard() {
  return (
    <div className='flex items-center justify-center w-[47%] md:w-[17rem] rounded-[8px] h-[13rem] shadow-md ' >
      <Image src="/images/zinara.png" className='object-contain w-[70%] ' width={400} height={400} alt="zinara logo" />
    </div>
  );
}
