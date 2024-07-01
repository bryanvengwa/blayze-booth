import Image, { StaticImageData } from 'next/image'
import digitalGlobe from '@/assets/images/digital-globe.png';
import paint from '@/assets/images/paint.webp';
import marketing from '@/assets/images/marketing.png';

interface Props{
    image : StaticImageData;
    title?: string
}

export default function ServiceHeader( {image ,title}: Props) {
    return (
      <header  className='w-full  h-[40vh] bg-red-300 relative'>

        <Image src={image} layout='fill'  className='object-cover top-0 left-0 w-[100%] h-[100%]'  alt='' />
       <div className="absolute z-10 bg-[#00000058]  flex items-end top-0 left-0 w-full h-full ">
       <div className="container">
       <h1 className='text-white text-[1.6rem] md:text-[3rem]  bottom-10 left-0 jost-bold mb-[3rem]  ' > {title} </h1>
       </div>
       </div>
      </header>
    )
  }
  