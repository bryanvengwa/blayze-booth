import Image from 'next/image';
import { CiMail } from 'react-icons/ci';
import SocialMediaIcons from './SocialMediaIcons';
import { FiPhoneCall } from 'react-icons/fi';
import IGFeed from './IGFeed';
import ConsultationForm from './ConsultationForm';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="mt-2"></div>
            <div className="flex-col items-center justify-center">
              <div className="flex items-center justify-center h-[6rem] w-full  ">
                <Image
                  src="/images/blayze-logo-white.webp"
                  className="object-cover w-[70%] h-[70%] "
                  width={800}
                  height={800}
                  alt="blayzebooth logo"
                />
              </div>
              <p className="text-black text-center jost-paragraph leading-[1.2rem] ">
                {' '}
                Empowering Businesses, Transforming Futures Our unwavering
                commitment to innovation and excellence drives us to deliver
                exceptional solutions that propel your success. Let us be your
                trusted partner in unlocking your full potential
              </p>
              <div className="flex w-full items center justify-center ">
                <div className="line h-[2px] mt-3 w-[90%] bg-red-600 "></div>
              </div>
              <SocialMediaIcons />
            </div>
          </div>
          <div className="col-md-3">
            <div className="flex-col  ">
              <div className="flex items-center justify-center h-[6rem]  w-full ">
                <h3 className="text-black jost-semibold text-center text-[1.4em] ">
                  Contact
                </h3>
              </div>
              <div className="flex mt-2 flex-col items-center h-full w-full gap-4 jost-regular ">
                <div className="flex gap-1 w-full items-center justify-center">
                  <CiMail color="white" />
                  <a href="" className="text-black jost-regular ">
                    blayzebooth@gmail.com
                  </a>
                </div>
                <div className="flex w-full justify-center gap-1 items-center">
                  <CiMail color="white" />
                  <a href="" className="text-black jost-regular  ">
                    bmvengwa@gmail.com
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="capitalize mt-3 text-black text-center jost-semibold text-[1.4em]">
                    open Hours
                  </h3>
                  <h3 className="text-black  text-center jost-bold">
                    WE ARE AVAILABLE 24/7
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="flex-col ">
              <div className="flex items-center justify-center h-[6rem]  w-full ">
                <h3 className="text-black jost-semibold text-center text-[1.4em] ">
                  Instagram and FaceBook
                </h3>
              </div>
              <div className="  p-2 flex gap-2 flex-col items-center justify-center justify-items-center ">
                <div className="flex justify-center  w-[90%] gap-2  ">
                  <IGFeed />
                  <IGFeed />
                  <IGFeed />
                </div>
                <div className="flex justify-center  w-[90%] gap-2">
                  <IGFeed />
                  <IGFeed />
                  <IGFeed />
                </div>
                <div className="flex justify-center  bg-red-600  w-[90%] gap-2">
                  <div className=" flex text-black   items-center w-[95%] min-h-[4.5rem]  justify-between  border-2   border-solid border-transparent">
                    <div className="min-w-[30%] h-full flex items-center justify-center  ">
                      <FiPhoneCall size={22} color="white" />
                    </div>
                    <div className="flex w-full h-full gap-1 text-white jost-regular flex-col items-start justify-center ">
                      <a href="">+263 71 832 9922</a>
                      <h6 className="capitalize">Call to our experts</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="flex-col ">
              <div className="flex items-center justify-center h-[6rem]  w-full ">
                <h3 className="text-black jost-semibold text-center text-[1.4em] ">
                  Site Map
                </h3>
              </div>
              <div className="flex justify-center">
                <ul className="flex flex-col items-start gap-2 jost-regular">
                  <li>
                    {' '}
                    <Link href="">Home</Link>{' '}
                  </li>
                  <li>
                    {' '}
                    <Link href="">About</Link>{' '}
                  </li>
                  <li>
                    {' '}
                    <Link href="">Services</Link>{' '}
                  </li>
                  <li>
                    {' '}
                    <Link href="">Testimonials</Link>{' '}
                  </li>
                  <li>
                    {' '}
                    <Link href="">Promotions</Link>{' '}
                  </li>
                  <li>
                    {' '}
                    <Link href="">Contact Us</Link>{' '}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="h-[1px] w-full bg-white"></div>

        <br />
        <br />
        <br />
      </div>
    </footer>
  );
}
