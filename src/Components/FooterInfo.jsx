import React from "react";

const FooterInfo = ({ info }) => {
  return (
    <ul>
      <li className="text-azulclaro">{info.localidade}</li>
      <li>{info.morada}</li>
      <li>{info.escritorio}</li>
      <li>{info.edificio}</li>
      <li>{info.postal}</li>
      <li>{info.pais}</li>
    </ul>
  );
};

export default FooterInfo;
