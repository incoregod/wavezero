import SubHeader from "../../Components/SubHeader";
import SwiperSlides from "../../Features/SwiperSlides";

const Partners = () => {
  return (
    <div className="p-5 md:p-10 2xl:p-20 ">
      <SubHeader
        text={"OUR"}
        styles={
          "font-montserrat text-gray-100 text-md md:text-3xl 2xl:text-5xl absolute bottom-0 h-4 md:h-8 2xl:h-11 2xl:right-5 right-3 md:right-10 font-black tracking-wider"
        }
        textPosition={"text-end text-gray-600 "}
        subtext={"PARTNERS"}
      />

      <SwiperSlides />
    </div>
  );
};

export default Partners;
