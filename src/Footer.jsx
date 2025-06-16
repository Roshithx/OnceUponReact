// Footer.jsx
const Footer = ({ length }) => {
  return (
    <div className="footer">
      {length === 0 ? "No Items Left" : `Items Left: ${length}`}
    </div>
  );
};

export default Footer;
