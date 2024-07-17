import { TfiInstagram } from 'react-icons/tfi';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex text-black bg-white items-center justify-center h-[2.5rem] w-[2.5rem] rounded-full">
      {children}
    </div>
  );
}

export default function SocialMediaIcons() {
  return (
    <div className="flex-col mt-3 gap-1 w-full">
      <h3 className="jost-regular text-white text-center">Follow Us</h3>
      <div className="flex mt-3 items-center justify-center w-full ">
        <div className="flex  items-center justify-between w-[60%]  ">
          <Icon>
            <TfiInstagram />
          </Icon>
          <Icon>
            <FaFacebook />
          </Icon>
          <Icon>
            <FaLinkedin />
          </Icon>
        </div>
      </div>
    </div>
  );
}
