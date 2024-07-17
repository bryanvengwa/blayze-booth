import services from '@/assets/data/services';
import ServiceBox from './ServiceBox';
import ServiceCard from './ServiceCard';

export default function ServicesCardsSection() {

  return (
    <div className=" mt-4 flex  flex-wrap md:flex-nowrap md:flex-row  justify-between items-center   w-full h-full ">
        
        <ServiceCard imagePath={'/images/design-service.webp'} serviceTitle='digital Marketing' />
        <ServiceCard imagePath={'/images/software-service.webp'} serviceTitle='Software Development' />
        <ServiceCard imagePath={'/images/design-service.webp'} serviceTitle='Graphic Design' />
        <ServiceCard imagePath={'/images/branding-service.webp'} serviceTitle='Branding' />
        <ServiceCard imagePath={'/images/marketing -service.webp'} serviceTitle='web & mobile development' />
        <ServiceCard imagePath={'/images/printing-service.webp'} serviceTitle='Printing' />
    </div>
  );
}
