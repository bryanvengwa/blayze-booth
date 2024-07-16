import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { RiMenu2Fill } from 'react-icons/ri';

export default function NavOverLay() {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <RiMenu2Fill size={45} className=" cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]" >
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
