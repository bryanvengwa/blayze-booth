import MiniHeader from '@/components/MiniHeader';
import AboutImgContainer from '@/components/AboutImgContainer';

export default function Page() {
  return (
    <div className="w-full">
      <div className="mt-10"></div>
      <MiniHeader />
      <div className="mt-4"></div>
      <div className="flex justify-center">
        <p className="jost-paragraph text-center leading-[1.2rem] text-[#0000008A] w-[90%] md:w-[80%] ">
          Epignosis Media Creations is a private owned media and software
          development company incorporated in the year 2019 and we made strides
          to refine products and services prior to full-scale operations in
          2022. A mandate to secure the present and future by creating quality
          products and services, eMedia fully commits to clientele growth and
          success which is priority to our success story.
        </p>
      </div>
      <div className="mt-[3em] md:mt-[5rem] "></div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <AboutImgContainer
                imageString="/images/black-programmer.webp"
                alt="programmer"
              />
            </div>
            <div className="col-md-6 h-[15rem]  lg:h-[28rem]">
              <div className="flex gap-3  items-end h-[4rem] ">
                <h2 className="jost-bold text-[1.5rem] mb-[-6px]">
                  Who Are We
                </h2>
              </div>
              <div className="mt-7"></div>

              <div className="flex flex-col ">
                <p className="text-[#0000008A]  jost-paragraph  leading-[1.2rem] lg:text-[1.2rem]  lg:leading-[1.42rem] ">
                  At BlayzeBooth, we are passionate about empowering businesses
                  through innovative software development, strategic digital
                  marketing, and captivating design solutions. Founded in 2020,
                  our team of experts combines technical proficiency with
                  creative flair to deliver exceptional results that drive
                  success for our clients.
                </p>
                <br />
                <p className="text-[#0000008A]  jost-paragraph  leading-[1.2rem] lg:text-[1.2rem]  lg:leading-[1.42rem] ">
                  Our mission is to help businesses thrive in the digital
                  landscape by providing tailored solutions that meet their
                  unique needs. We believe in the power of technology and
                  creativity to transform ideas into reality, enabling our
                  clients to achieve their goals and stand out in a competitive
                  market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-[10em]  lg:mt-10"></div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 order-md-1 order-last">
              <div className="flex gap-3  items-end h-[4rem] ">
                <h2 className="jost-bold text-[1.5rem] mb-[-6px]">
                  How Do We Work With Our Clients
                </h2>
              </div>
              <div className="mt-7"></div>
              <div className="flex flex-col ">
                <p className="text-[#0000008A]  jost-paragraph  leading-[1.2rem]  ">
                  At eMC we believe that collaboration is key to success. We
                  work closely with our clients to understand their needs and
                  wants, and to develop solutions that meet their unique
                  requirements. We start by getting to know our clients
                  businesses. We want to understand their goals, their
                  challenges, and their target audience. We also want to
                  understand their industry and the competitive landscape.
                </p>
                <br />
                <p className="text-[#0000008A] jost-paragraph leading-[1.2rem] ">
                  At eMC we believe that collaboration is key to success. We
                  work closely with our clients to understand their needs and
                  wants, and to develop solutions that meet their unique
                  requirements. We start by getting to know our clients
                  businesses. We want to understand their goals, their
                  challenges, and their target audience. We also want to
                  understand their industry and the competitive landscape. Once
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 order-md-2 h-[15rem]  lg:h-[28rem]">
              <AboutImgContainer
                imageString="/images/black-programmer.webp"
                alt="programmer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
