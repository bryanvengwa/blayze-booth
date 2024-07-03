import ServiceHeader from "@/components/serviceheader";
import paint from '@/assets/images/paint.webp';
import ServiceIntro from "@/components/ServiceIntro";


export default function Page() {
    return (
      <div className='w-full' >
        <ServiceHeader image={paint} title="Interactive Visuals" />
        <div className="mt-10"></div>
        <ServiceIntro
        image="/images/globe.png"
        heading="Unleashing Creativity: A Look at Design Fields"
        paragraph1="We breathe life into ideas, from the digital to the tangible. At Blayze Booth, we're a passionate collective of UI/UX designers and graphic artists who craft seamless user experiences and visually stunning designs. Whether you need a user-friendly app interface, a website that converts, or eye-catching business cards and marketing materials, we're your one-stop shop. We believe exceptional design is a powerful tool that can elevate your brand"
        paragraph2=', engage your audience, and ultimately drive results. Our design process is collaborative and user-focused. We work closely with you to understand your vision, target audience, and goals. From initial concept sketches to pixel-perfect execution, we create designs that are not only aesthetically pleasing but also intuitive and functional. '
      />
        
      </div>
    )
  }
  