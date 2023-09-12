import SubHeader from "../../Components/SubHeader";
import SwiperSlides from "../../Features/SwiperSlides";

const Partners = () => {
  return (
    <>
      <div className="text-center text-gray-100 font-playfair font-black tracking-wider mb-20">
        <h3 className="text-2xl">When Your Business Runs Better</h3>
        <h1 className="text-4xl">
          Your Customers <br />
          Will Feel It
        </h1>
      </div>

      <SubHeader
        text={"OUR"}
        styles={
          "font-montserrat text-gray-100 text-md absolute bottom-0 h-4 right-3 font-black tracking-wider"
        }
        textPosition={"text-end"}
        subtext={"PARTNERS"}
      />

      <SwiperSlides />
    </>
  );
};

export default Partners;
