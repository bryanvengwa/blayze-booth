import { color } from "framer-motion";

interface Props{
    innerColor?: string,
    outerColor?: string,
    text: string,
    color?:string,
}

export default function StylishButton({innerColor , outerColor,  text , color}:  Props) {
  return (
    <div className={` ${outerColor ? outerColor : "bg-black"}  text-${color ? color : 'white' } relative px-4 py-3 h-[3rem] w-[8rem] jost-regular`} >
    <div className={` ${innerColor ? innerColor : "bg-black"} h-full w-full absolute left-0 top-0  rounded-tl-[30px] rounded-br-[30px] flex items-center justify-center `} > {text} </div>
   </div>
  )
}
