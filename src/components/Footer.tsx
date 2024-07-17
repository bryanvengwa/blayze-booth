import Image from 'next/image';
import { CiMail } from 'react-icons/ci';
import SocialMediaIcons from './SocialMediaIcons';

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
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
              <p className="text-white text-center jost-regular ">
                {' '}
                Empowering Businesses, Transforming Futures Our unwavering
                commitment to innovation and excellence drives us to deliver
                exceptional solutions that propel your success. Let us be your
                trusted partner in unlocking your full potential
              </p>
              <div className="flex w-full items center justify-center ">
                <div className="line h-[2px] mt-5 w-[90%] bg-red-600 "></div>
              </div>
              <SocialMediaIcons />
            </div>
          </div>
          <div className="col-md-3">
            <div className="flex-col ">
              <div className="flex items-center justify-center h-[6rem]  w-full ">
                <h3 className="text-white jost-semibold text-center text-[1.4em] ">
                  Contact
                </h3>
              </div>
              <ul className="flex items-center justify-center">
                <li className="flex items-center gap-1 jost-regular " >
                  {' '}
                  <CiMail  color='white' />{' '}
                  <a href="" className="text-white  text-center ">
                    bmvengwa@gmail.com
                  </a>{' '}
                </li>
              </ul>
              <h3 className="capitalize mt-3 text-white text-center jost-bold ">
                open Hours
              </h3>
              <h3 className="text-red-500 mt-1 text-center jost-bold">
                WE ARE AVAILABLE 24/7
              </h3>
            </div>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
        <br />
        <br />
        <div className="h-[1px] w-full bg-white  "></div>

        <br />
        <br />
        <br />
      </div>
    </footer>
  );
}
