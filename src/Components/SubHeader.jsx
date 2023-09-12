const SubHeader = ({ text, styles, textPosition, subtext }) => {
  return (
    <div className={`relative ${textPosition}`}>
      <h1 className="font-playfair text-6xl ">{text}</h1>
      <h2 className={styles}> {subtext} </h2>
    </div>
  );
};

export default SubHeader;
