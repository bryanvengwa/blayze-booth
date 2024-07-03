import ServiceHeader from '@/components/serviceheader';
import digitalGlobe from '@/assets/images/digital-globe.png';
import ServiceIntro from '@/components/ServiceIntro';

export default function Page() {
  return (
    <div className="w-full">
      <ServiceHeader image={digitalGlobe} title="Digital Craft & Code" />
      <div className="mt-10"></div>
      <ServiceIntro
        image="/images/globe.png"
        heading="    Crafting Powerful Solutions - Web & Software"
        paragraph1="We are passionate about building innovative and user-friendly
                software solutions. Our team of skilled full-stack developers
                combines expertise across the entire development spectrum, from
                front-end design and user experience (UX) to back-end
                functionality and database management. This allows us to take
                your project from concept to completion, ensuring a cohesive and
                efficient digital experience."
                paragraph2="We don't just write code, we translate your vision into reality. Whether you need a sleek and intuitive website, a powerful custom application, or a complex enterprise solution, we'll work closely with you to understand your goals and challenges. We believe in clear communication, iterative development, and a commitment to excellence, ensuring your software not only functions flawlessly but also exceeds your expectations."
      />
    </div>
  );
}
