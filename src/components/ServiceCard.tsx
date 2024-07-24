import Image from 'next/image';
import ServiceBox from './ServiceBox';

interface ServiceCardProps {
  imagePath: string;
  serviceTitle: string;
}

export default function ServiceCard({
  imagePath,
  serviceTitle,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col w-[45%] mb-[1em] md:mb-0   md:w-[25%] lg:w-[13.4%]">
      <div className="flex items-center justify-center ">
        <Image
          src={imagePath}
          width={300}
          height={300}
          className="w-[70%] h-[90%] object-contain "
          alt="service logo"
        />
      </div>
      <div className=" w-full h-[4.5rem]">
        <ServiceBox service={serviceTitle} />
      </div>
    </div>
  );
}
