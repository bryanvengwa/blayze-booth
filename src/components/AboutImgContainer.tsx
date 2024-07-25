import Image from 'next/image';

interface Props {
  imageString: string;
  alt: string;
}

export default function AboutImgContainer({ imageString, alt }: Props) {
  return (
    <div className="flex items-center justify-center w-full h-[15rem]  lg:h-[25rem]">
      <Image
        src={imageString}
        height={800}
        className="h-full w-full object-fill"
        width={800}
        alt={alt}
      />
    </div>
  );
}
