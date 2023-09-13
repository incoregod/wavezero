import SubHeader from "../../Components/SubHeader";
import { Parallax } from "react-scroll-parallax";
const Main = () => {
  return (
    <div className="p-5 md:p-10 2xl:p-20">
      <SubHeader
        text={"OUR"}
        styles={
          "font-montserrat text-gray-950 dark:text-gray-100 text-md md:text-3xl 2xl:text-5xl absolute bottom-0 h-4 md:h-8 2xl:h-11 left-7 md:left-16 font-black tracking-wider"
        }
        textPosition={"text-start text-gray-400 dark:text-black"}
        subtext={"SERVICES"}
      />
      <div className="grid  grid-cols-2 gap-2  ">
        <div className="dark:text-gray-100 text-gray-950 mt-3 text-xsm md:text-xs max-w-xs lg:text-base 2xl:text-xl lg:max-w-xl 2xl:max-w-none">
          <p>
            We help to frame issues clearly, facilitate the right conversations,
            and convert insisghts into pragmatic yet holistic business
            solutions.
          </p>
          <p className="mt-2">We do this across three key areas.</p>
        </div>
        <div className="dark:text-gray-100 text-gray-950 mt-3 text-xsm md:text-sm lg:text-base 2xl:text-2xl  max-w-xs flex gap-2 flex-col justify-center items-center md:items-end md:max-w-lg lg:max-w-none ">
          <div className="flex justify-between w-24 md:w-72 2xl:w-w128 items-center border-b-gray-100 border-b border-opacity-50">
            <p>The right direction</p>
            <Parallax translateX={[-1000, -2]}>
              <p>+</p>
            </Parallax>
          </div>
          <div className="flex justify-between w-24 md:w-72 2xl:w-w128 items-center border-b-gray-100 border-b border-opacity-50">
            <p>The right approach</p>
            <Parallax translateX={[-950, -2]}>
              <p>+</p>
            </Parallax>
          </div>
          <div className="flex justify-between w-24 md:w-72 2xl:w-w128 items-center border-b-gray-100 border-b border-opacity-50">
            <p>The right position</p>
            <Parallax translateX={[-900, -2]}>
              <p>+</p>
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
