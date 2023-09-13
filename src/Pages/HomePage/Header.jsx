import { Parallax } from "react-scroll-parallax";
const Header = () => {
  return (
    <div className="dark:text-gray-100 text-gray-950 p-5 md:p-10 2xl:p-20">
      <Parallax translateY={[0, 20]}>
        <h1 className="text-2xl/[1.4rem] md:text-7xl/[3.8rem] 2xl:text-8xl/[5rem] font-montserrat font-black tracking-wider  ">
          WE <br /> MAKE IT <br /> DIFFERENT
        </h1>
      </Parallax>
      <Parallax translateY={[-50, 150]} translateX={[-1, 1]}>
        <p className="text-xsm md:text-xs lg:text-base 2xl:text-xl lg:max-w-xl max-w-xs 2xl:max-w-4xl 2xl:mt-5">
          Incididunt nisi reprehenderit veniam sunt ullamco ipsum exercitation
          aute. Aute fugiat velit amet quis velit sit ut consectetur deserunt
          sunt exercitation.
        </p>
      </Parallax>
    </div>
  );
};

export default Header;
