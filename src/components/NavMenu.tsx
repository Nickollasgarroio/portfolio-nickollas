import { Link } from "react-router-dom";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

function NavItem({ title, path }: { title: string; path: string }) {
  return (
    <div className="cursor-pointer">
      <Link to={path} className={navigationMenuTriggerStyle()}>
        {title}
      </Link>
    </div>
  );
}

export function NavMenu() {
  return (
    <>
      <h1 className="font-black cursor-default mx-10 text-2xl max-md:hidden">
        Nickollas Giordano
      </h1>

      <div className="flex gap-4 max-md:hidden w-full justify-between max-w-[750px]">
        <NavItem title="Home" path="/home" />
        <NavItem title="Projects" path="/projects" />
        <NavItem title="Curriculum" path="/curriculum" />
        <NavItem title="Contact" path="/contact" />
      </div>
    </>
  );
}
