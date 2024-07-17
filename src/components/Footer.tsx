import Image from 'next/image';
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
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
        <br />
        <div className="h-[1px] w-full bg-white  "></div>

        <br />
        <br />
      </div>
    </footer>
  );
}
