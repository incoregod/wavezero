import { Link } from "react-router-dom";
import logoHor from "../assets/wavezero_horizontal.avif";
import Burger from "./Burger";
import NavRoutes from "./NavRoutes";
import "../index.css";

const NavBar = () => {
  return (
    <div className="flex  h-16 justify-between items-center px-5 md:px-10  py-5 md:pt-14 2xl:px-20 font-montserrat ">
      <div>
        <Link to={"/"} className="cursor-pointer ">
          <img
            className=" w-40 md:w-52 2xl:w-60 hover:scale-105 ease-in-out transition-all duration-300  "
            src={logoHor}
            alt="logo-wave-zero"
          />
        </Link>
      </div>
      <NavRoutes
        styles={
          "max-sm:hidden flex gap-3 lg:gap-10 xl:gap-16 2xl:gap-26 text-gray-950 dark:text-gray-100 text-sm md:text-base 2xl:text-lg"
        }
      />
      <Burger />
    </div>
  );
};

export default NavBar;
