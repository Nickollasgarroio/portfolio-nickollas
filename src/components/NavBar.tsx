import { NavMenu } from "./NavMenu";
import { NavMobile } from "./NavMobile";

export default function NavBar() {
  return (
    <div className="w-full flex border-b py-2 px-10 text-nowrap justify-evenly max-[400px]:border-none max-[400px]:flex-col max-[400px]:items-center">
      <NavMenu />
      <NavMobile />
    </div>
  );
}
