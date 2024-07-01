import ServiceHeader from '@/components/serviceheader';
import marketing from '@/assets/images/marketing.png';


export default function Page() {
  return (
    <div className="w-full">
      <ServiceHeader image={marketing} title='Digital Marketing' />
    </div>
  );
}
