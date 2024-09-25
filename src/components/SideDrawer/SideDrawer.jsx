import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import MenuIcon from "@mui/icons-material/Menu";

import Logo from "../../assets/logo.png";

const SideDrawer = () => {
  return (
    <Sheet>
      <div className="bg-[#606060] rounded-t-3xl">
        <div className="w-11/12 sm:w-5/6 mx-auto flex justify-between items-center   px-2">
          <img src={Logo} className="w-20 sm:w-24" />
          <div className="   flex justify-start items-center ">
            <SheetTrigger>
              <MenuIcon fontSize="large" className="text-white" />
            </SheetTrigger>
          </div>
        </div>
        <SheetContent side="top" className="">
          <ul className="w-full flex flex-col justify-center items-center mt-2  text-xl">
            <li className="  my-4  ">
              <SheetClose asChild>
                <a className="font-semibold flex justify-between  ">Home</a>
              </SheetClose>
            </li>
            <li className="  my-4  ">
              <SheetClose asChild>
                <a className="font-semibold flex justify-between  ">About Us</a>
              </SheetClose>
            </li>
            <li className="  my-4  ">
              <SheetClose asChild>
                <a className="font-semibold " to="get-started">
                  Our Products
                </a>
              </SheetClose>
            </li>
            <li className="   my-4 ">
              <SheetClose asChild>
                <a className="font-semibold  text-center  ">Contact</a>
              </SheetClose>
            </li>
          </ul>
          <SheetClose className="absolute right-4 top-4  rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800">
            {/* <X className="h-4 w-4  " /> */}
            <span className="sr-only   ">Close</span>
          </SheetClose>
        </SheetContent>
      </div>
    </Sheet>
  );
};

export default SideDrawer;
