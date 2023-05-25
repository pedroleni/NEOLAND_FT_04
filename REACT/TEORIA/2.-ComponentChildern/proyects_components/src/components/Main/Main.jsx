import FlexCenter from "../../layouts/FlexCenter/FlexCenter";
import "./Main.css";

const Main = ({ data }) => {
  return (
    <main>
      <FlexCenter>
        <p>{data}</p>
      </FlexCenter>
    </main>
  );
};

export default Main;
