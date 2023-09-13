import SubHeader from "../../Components/SubHeader";

const ContactSec = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <SubHeader
          text={"CONTACT"}
          styles={
            "font-montserrat text-gray-100 text-md md:text-3xl 2xl:text-5xl absolute bottom-0 h-4 md:h-8 2xl:h-11 right-16 md:right-40 font-black tracking-wider"
          }
          textPosition={"text-center text-gray-600"}
          subtext={"WANT TO MEET?"}
        />
      </div>
      <div className="mt-10 text-center text-gray-100 font-firasans font-black md:text-xl">
        <h3>Let&apos;s discuss how our security expertise</h3>
        <h3>can bring you value and accelerate growth</h3>
        <button className="mt-5 px-4 md:px-6 py-1.5 md:py-3 text-xs md:text-sm tracking-wider border-4">
          CONTACT US
        </button>
      </div>
    </>
  );
};

export default ContactSec;
