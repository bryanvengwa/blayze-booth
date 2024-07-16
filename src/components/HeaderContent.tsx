interface HeaderContentProps {
  activeTab: number;
}

export default function HeaderContent({ activeTab }: HeaderContentProps) {
  return (
    <div className="">
      {activeTab === 1 && (
        <>
          <div className="flex flex-col gap-4">
            <h1 className="capitalize jost-bold text-[2.2rem] ">
              {' '}
              Unleashing Innovation, Empowering Success
            </h1>
            <h1 className="capitalize hidden md:block jost-bold text-[2.2rem] ">
              your vision our expertise
            </h1>
          </div>
          <p className="w-[90%] md:w-[70%] jost-extralight text-[1.18rem] leading-6">
            We craft cutting-edge software solutions that drive your business
            forward. From custom web and mobile applications to robust
            e-commerce platforms,{' '}
            <span className="hidden md:flex">
              our expert developers deliver scalable, innovative solutions
              tailored to your unique needs.
            </span>{' '}
            <span className="hidden md:flex">
              Trust us to transform your digital landscape and propel your
              success.
            </span>
          </p>
        </>
      )}

      {activeTab === 2 && (
        <>
          <div className="flex flex-col gap-4">
            <h1 className="capitalize jost-bold text-[2.2rem] ">
              {' '}
              Inspiring Experiences, Captivating Audiences
            </h1>
            <h1 className="capitalize hidden md:block jost-bold text-[2.2rem] ">
              your vision our expertise
            </h1>
          </div>
          <p className="w-[90%] md:w-[70%] jost-extralight text-[1.18rem] leading-6">
            We craft captivating experiences that leave a lasting impression.
            <span className="hidden md:flex">
              {' '}
              From striking branding and logo design to visually stunning
              websites and marketing materials,
            </span>{' '}
            Our team of creative professionals helps you cultivate a cohesive,
            memorable brand identity.
          </p>
        </>
      )}
      {activeTab === 3 && (
        <>
          <div className="flex flex-col gap-4">
            <h1 className="capitalize jost-bold text-[2.2rem] ">
              {' '}
              Amplifying Online Presence, Driving Results
            </h1>
            <h1 className="capitalize hidden md:block jost-bold text-[2.2rem] ">
              your vision our expertise
            </h1>
          </div>
          <p className="w-[90%] md:w-[70%] jost-extralight text-[1.18rem] leading-6">
            Leverage the power of SEO, social media, PPC advertising{' '}
            <span className="hidden md:flex">, and email campaigns</span> to
            connect with your target audience, generate leads, and drive
            measurable results. Our comprehensive digital marketing strategies
            help you outshine the competition{' '}
            <span className="hidden md:flex">
              {' '}
              and achieve your marketing goals.
            </span>
          </p>
        </>
      )}
    </div>
  );
}
