import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { usePathname } from 'next/navigation';

import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ObjectType {
  href: string;
  label: string;
}

interface LinkProps {
  TriggerName: string;
  links: ObjectType[];
}

export function LinkDropDown({ TriggerName, links }: LinkProps) {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-0 jost-regular capitalize no-underline flex items center ">
        {' '}
        {TriggerName} <MdOutlineKeyboardArrowDown />{' '}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white p-2 flex flex-col gap-[1px]">
        {links.map((link, index) => {
          return (
            <DropdownMenuItem key={index}>
              <Link href={link.href}> {link.label} </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
