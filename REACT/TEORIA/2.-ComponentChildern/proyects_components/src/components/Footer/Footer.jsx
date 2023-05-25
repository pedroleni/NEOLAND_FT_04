import FlexCenter from "../../layouts/FlexCenter/FlexCenter";
import "./Footer.css";

const Footer = ({ data }) => {
  return (
    <footer>
      <FlexCenter>
        <p className="parrafoFooter">{data}</p>
      </FlexCenter>
    </footer>
  );
};

export default Footer;
