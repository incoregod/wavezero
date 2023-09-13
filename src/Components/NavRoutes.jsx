import { Link } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";

const NavRoutes = ({ styles, stylesBurger, handleMenuOpen }) => {
  const { handleThemeChange, theme } = useContext(ThemeContext);
  return (
    <div className={styles}>
      <FaTimes onClick={handleMenuOpen} className="cursor-pointer sm:hidden" />
      <div className={stylesBurger || styles}>
        <Link to={"/produtos"}>Produtos</Link>
        <Link to={"/servicos"}>Serviços</Link>
        <Link to={"/sobre-nos"}>Sobre</Link>
        <Link to={"/contactos"}>Contactos</Link>
        <div className="flex items-center" onClick={handleThemeChange}>
          {theme === "light" ? (
            <BsFillMoonFill className="ml-2 cursor-pointer hover:text-gray-200 ease-in-out transition-all duration-300 text-md" />
          ) : (
            <BsFillSunFill className="ml-2 cursor-pointer hover:text-yellow-500 ease-in-out transition-all duration-300 text-md" />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavRoutes;
