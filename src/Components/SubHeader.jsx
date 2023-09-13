import { Parallax } from "react-scroll-parallax";

const SubHeader = ({ text, styles, textPosition, subtext }) => {
  return (
    <div className={`relative ${textPosition}`}>
      <Parallax translateX={[-5, 1]}>
        <h1 className="font-playfair text-6xl md:text-9xl  2xl:text-xxxl">
          {text}
        </h1>
      </Parallax>
      <Parallax translateX={[5, 0]}>
        <h2 className={styles}> {subtext} </h2>
      </Parallax>
    </div>
  );
};

export default SubHeader;
