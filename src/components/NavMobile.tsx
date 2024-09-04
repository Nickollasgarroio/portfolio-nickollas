import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import "material-icons/iconfont/material-icons.css";

function NavItem({ title, path }: { title: string; path: string }) {
  return (
    <div className="cursor-pointer">
      <Link to={path} className={navigationMenuTriggerStyle()}>
        {title}
      </Link>
    </div>
  );
}

export function NavMobile() {
  return (
    <>
      <h1 className="font-black cursor-default mx-10 text-2xl self-center md:hidden">
        Nickollas Giordano
      </h1>
      <Sheet>
        <SheetTrigger className=" h-14 px-10 flex items-center md:hidden">
          <span className="material-icons text-2xl">menu</span>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader className="items-center">
            <div>
              <div className="gap-4 flex flex-row">
                <NavItem title="Home" path="/home" />
                <NavItem title="Projects" path="/projects" />
                <NavItem title="Curriculum" path="/curriculum" />
                <NavItem title="Contact" path="/contact" />
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
