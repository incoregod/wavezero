import { Parallax } from "react-scroll-parallax";

const SubHeader = ({ text, styles, textPosition, subtext }) => {
  const effect = subtext === "SERVICES" ? [5, -1] : [-5, 1];
  const effect2 = subtext === "SERVICES" ? [0, 5] : [5, 0];
  return (
    <div className={`relative ${textPosition}`}>
      <Parallax translateX={effect}>
        <h1 className="font-playfair text-6xl md:text-9xl  2xl:text-xxxl">
          {text}
        </h1>
      </Parallax>
      <Parallax translateX={effect2}>
        <h2 className={styles}> {subtext} </h2>
      </Parallax>
    </div>
  );
};

export default SubHeader;
