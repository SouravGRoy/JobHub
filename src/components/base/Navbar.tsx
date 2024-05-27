import Brand from "./Brand";
import Links from "./Links";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="flex items-center justify-between p-5 md:px-10 border-n-[1px]">
          <Brand />
          <div className="flex items-center space-x-2 ">
            <Links />
            <div className="block md:hidden">
              <NavMenu />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
