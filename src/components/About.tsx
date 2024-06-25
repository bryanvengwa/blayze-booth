import Image from 'next/image';

export default function About() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="flex gap-3  items-end h-[4rem] ">
              <h2 className="jost-bold text-[2.8rem] mb-[-6px]">About</h2>
              <div className="h-[full] mt  w-[2.5rem]">
                <Image
                  src={'/images/blayze-fire-logo.png'}
                  width={300}
                  height={300}
                  className="object-contain h-full"
                  alt="blayze booth logo"
                />
              </div>
            </div>
            <h5 className="jost-medium mt-2">
              It's all about <span className="text-red-800">Blayze Booth</span>{' '}
            </h5>
            <div className="mt-7"></div>

            <p className="jost-light text-[#3e3c3c] leading-5 ">
              {' '}
              <span className="jost-regular text-[#3e3c3c]">Blayze Booth</span> is a
              full-service software-development, branding, and digital marketing
              company that helps businesses of all sizes make a lasting
              impression
            </p>
            <div className="mt-6"></div>

            <h6 className="jost-light text-[#3e3c3c]">
              We offer a wide range of services, including :
            </h6>
            <div className="mt-3"></div>
            <ul className='flex flex-col gap-[0.36rem] mt-2'>
              <li className='jost-light normal-case text-[#3e3c3c] '>~ Business Cards, Company profiles.</li>
              <li className='jost-light normal-case text-[#3e3c3c] '>~ Custom logo design and branding</li>
              <li className='jost-light normal-case text-[#3e3c3c] '>~ Social media management & content creation</li>
              <li className='jost-light normal-case text-[#3e3c3c] '>~ Email Marketing and SEO</li>
              <li className='jost-light normal-case text-[#3e3c3c] '>~ Web and mobile development</li>
              <li className='jost-light normal-case text-[#3e3c3c] '>~ Management software</li>
              <li className='jost-light normal-case text-[#3e3c3c] '>~ And many more❗️</li>

            </ul>
            <div className='bg-red-600 mt-4 text-white relative px-4 py-3 h-[3rem] w-[8rem] jost-regular' >
           <div className='bg-black h-full w-full absolute left-0 top-0  rounded-tl-[30px] rounded-br-[30px] flex items-center justify-center ' >  Read More</div>
          </div>
          </div>

    
          <div className="col-md-6"></div>
        </div>
      </div>
    </section>
  );
}
