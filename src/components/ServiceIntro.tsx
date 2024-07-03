import Image from 'next/image';

interface ServiceProps {
  image: string;
  heading: string;
  paragraph1: string;
  paragraph2: string;
}

export default function ServiceIntro({
  image,
  heading,
  paragraph1,
  paragraph2,
}: ServiceProps) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="h-[20rem] md:h-[17rem] flex items-center justify-center w-full ">
              <Image
                src={image}
                className="object-contain h-full md:h-[120%]  w-full "
                width={1900}
                height={1900}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="flex h-[20rem]  flex-col gap-5 ">
              <h1 className="jost-bold text-[1.3rem] ">{heading}</h1>
              <p className="jost-paragraph text-[1.1rem] leading-[1.6rem]">
                {paragraph1}
              </p>
              <p className="jost-paragraph text-[1.1rem] leading-[1.6rem]">
                {paragraph2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
