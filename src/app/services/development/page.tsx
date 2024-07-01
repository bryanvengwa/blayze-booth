import ServiceHeader from '@/components/serviceheader';
import digitalGlobe from '@/assets/images/digital-globe.png';
import ServiceIntro from '@/components/ServiceIntro';

export default function Page() {
  return (
    <div className="w-full">
      <ServiceHeader image={digitalGlobe} title='Digital Craft & Code' />
      <ServiceIntro />
    </div>
  );
}
