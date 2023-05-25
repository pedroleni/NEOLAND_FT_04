import FlexCenter from "../../layouts/FlexCenter/FlexCenter";
import "./Header.css";

const Header = ({ data }) => {
  return (
    <header>
      <FlexCenter>
        <p>{data}</p>
      </FlexCenter>
    </header>
  );
};

export default Header;
