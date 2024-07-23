interface ServiceBoxProps {
  service?: string;
}
export default function ServiceBox({ service }: ServiceBoxProps) {
  return (
    <div className="flex cursor-pointer transition-all duration-[3s]  group relative  items-center text-center justify-center rounded-[7px]  bg-black text-white h-full w-full p-1 ">
      <h4 className="jost-regular capitalize">{service} </h4>
      <div className="line h-[3px] w-[80%]  bg-red-600 transition-all duration-[3s] opacity-0 group-hover:w-full group-hover:opacity-1 rounded-[7px]  left-0 absolute bottom-[-1px]   "></div>
    </div>
  );
}
