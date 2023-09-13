import logoVert from "../assets/wavezero_vertical.png";
import FooterInfo from "./FooterInfo";
import FooterContacts from "./FooterContacts";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="pt-20 font-firasans text-gray-100 text-xs md:text-base">
      <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 lg:justify-items-center lg:items-center lg:pb-10 justify-items-center">
        <img
          onClick={scrollToTop}
          className="max-w-xs cursor-pointer"
          src={logoVert}
          alt="logo-wave-zero"
        />

        <div className="grid grid-cols-2 gap-10 justify-items-center items-end ">
          <FooterInfo
            info={{
              localidade: "Lisbon",
              morada: "Rua de Lisboa Lote 1",
              escritorio: "Escritório 1",
              edificio: "Edificio Tejo",
              postal: "1000-001 Lisboa",
              pais: "Portugal",
            }}
          />
          <FooterInfo
            info={{
              localidade: "Porto",
              morada: "Rua de Porto Lote 1",
              escritorio: "Escritório Dragão",
              edificio: "Edificio Tejo",
              postal: "2000-001 Porto",
              pais: "Portugal",
            }}
          />
        </div>
        <div className="flex flex-col gap-3 font-firasans text-gray-100 text-xs md:text-base justify-center">
          <FooterContacts type={"Phone"} text={"(+351) 212 123 456"} />
          <FooterContacts type={"Phone"} text={"(+351) 212 123 456"} />
          <FooterContacts type={"Email"} text={"geral@wavezero.pt"} />
        </div>
      </div>
      <div className="flex items-center justify-center p-10 flex-col">
        <p>Privacy Notice</p>
        <p className="text-xs">
          2023 © <span className="text-azulclaro">WaveZero</span> - Protecting
          Your Business
        </p>
      </div>
    </div>
  );
};

export default Footer;
