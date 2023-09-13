import SubHeader from "../../Components/SubHeader";
import SwiperSlides from "../../Features/SwiperSlides";

const Partners = () => {
  return (
    <>
      <div className="text-center text-gray-100 font-playfair font-black tracking-wider mb-20 md:mb-28 lg:mb-36">
        <h3 className="text-2xl md:text-5xl 2xl:text-7xl">
          When Your Business Runs Better
        </h3>
        <h1 className="text-4xl md:text-7xl 2xl:text-9xl">
          Your Customers <br />
          Will Feel It
        </h1>
      </div>

      <SubHeader
        text={"OUR"}
        styles={
          "font-montserrat text-gray-100 text-md md:text-3xl 2xl:text-5xl absolute bottom-0 h-4 md:h-8 2xl:h-11 2xl:right-5 right-3 md:right-10 font-black tracking-wider px-10"
        }
        textPosition={"text-end text-gray-600 px-10"}
        subtext={"PARTNERS"}
      />

      <SwiperSlides />
    </>
  );
};

export default Partners;
