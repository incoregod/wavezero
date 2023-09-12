import { BsList } from "react-icons/bs";
import { useState } from "react";

import NavRoutes from "./NavRoutes";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <>
      {!isOpen ? (
        <div className=" sm:hidden relative p-2 text-white bg-black rounded-full  dark:bg-gray-100 hover:scale-105">
          <BsList
            onClick={handleMenuOpen}
            className="    text-white dark:text-black   text-xl  cursor-pointer "
          ></BsList>
        </div>
      ) : (
        <NavRoutes
          styles={
            "sm:hidden fixed top-0 right-0 h-full w-56 p-4  bg-white bg-opacity-90 dark:bg-gray-950 dark:text-gray-100"
          }
          stylesBurger={
            "flex flex-col items-center h-full justify-center gap-20"
          }
          handleMenuOpen={handleMenuOpen}
        />
      )}
    </>
  );
};

export default Burger;
