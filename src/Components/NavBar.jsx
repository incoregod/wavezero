import { Link } from "react-router-dom";
import logoHor from "../assets/wavezero_horizontal.png";
import Burger from "./Burger";
import NavRoutes from "./NavRoutes";

const NavBar = () => {
  return (
    <div className="flex h-16 justify-between items-center px-5 py-5 font-montserrat ">
      <div>
        <Link to={"/"} className="cursor-pointer ">
          <img
            className="w-40 md:w-52 2xl:w-60 hover:scale-105 ease-in-out transition-all duration-300 "
            src={logoHor}
            alt="logo-wave-zero"
          />
        </Link>
      </div>
      <NavRoutes
        styles={
          "max-sm:hidden flex gap-3 text-gray-100 text-sm md:text-base 2xl:text-lg"
        }
      />
      <Burger />
    </div>
  );
};

export default NavBar;
