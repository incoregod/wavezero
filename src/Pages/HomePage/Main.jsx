import SubHeader from "../../Components/SubHeader";

const Main = () => {
  return (
    <>
      <SubHeader
        text={"OUR"}
        styles={
          "font-montserrat text-gray-100 text-md absolute bottom-0 h-4 left-7 font-black tracking-wider"
        }
        textPosition={"text-start"}
        subtext={"SERVICES"}
      />
      <div className="grid  grid-cols-2 gap-2  ">
        <div className="text-gray-100 mt-3 text-xsm max-w-xs">
          <p>
            We help to frame issues clearly, facilitate the right <br />{" "}
            conversations, and convert insisghts into pragmatic yet <br />{" "}
            holistic business solutions.
          </p>
          <p className="mt-2">We do this across three key areas.</p>
        </div>
        <div className="text-gray-100 mt-3 text-xsm max-w-xs flex gap-2 flex-col">
          <div className="flex justify-between w-24 items-center border-b-gray-100 border-b border-opacity-50">
            <p>The right direction</p>
            <p>+</p>
          </div>
          <div className="flex justify-between w-24 items-center border-b-gray-100 border-b border-opacity-50">
            <p>The right approach</p>
            <p>+</p>
          </div>
          <div className="flex justify-between w-24 items-center border-b-gray-100 border-b border-opacity-50">
            <p>The right position</p>
            <p>+</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
