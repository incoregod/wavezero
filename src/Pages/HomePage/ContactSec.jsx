import SubHeader from "../../Components/SubHeader";

const ContactSec = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <SubHeader
          text={"CONTACT"}
          styles={
            "font-montserrat text-gray-100 text-md absolute bottom-0 h-4 right-16 font-black tracking-wider"
          }
          textPosition={"text-center"}
          subtext={"WANT TO MEET?"}
        />
      </div>
      <div className="mt-10 text-center text-gray-100 font-firasans font-black">
        <h3>Let&apos;s discuss how our security expertise</h3>
        <h3>can bring you value and accelerate growth</h3>
        <button className="mt-5 px-4 py-1.5 text-xs tracking-wider border-4">
          CONTACT US
        </button>
      </div>
    </>
  );
};

export default ContactSec;
