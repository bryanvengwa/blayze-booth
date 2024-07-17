interface ServiceBoxProps {
  service?: string;
}
export default function ServiceBox({ service }: ServiceBoxProps) {
  return (
    <div className="flex   items-center text-center justify-center rounded-[7px]  bg-black text-white h-full w-full p-1 ">
      <h4 className="jost-regular capitalize">{service} </h4>
    </div>
  );
}
