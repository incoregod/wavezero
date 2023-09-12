const FooterContacts = ({ type, text }) => {
  return (
    <>
      <div className="flex gap-1">
        <span className="text-azulclaro">{type}</span>
        <p>{text}</p>
      </div>
    </>
  );
};

export default FooterContacts;
