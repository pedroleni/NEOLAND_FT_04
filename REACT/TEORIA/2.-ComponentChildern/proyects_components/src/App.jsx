import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import FlexCenter from "./layouts/FlexCenter/FlexCenter";

const App = () => {
  const iAmHeader = "Soy el header";
  const iAmFooter = "Soy el footer";
  const iAmMain = "Soy el main";
  return (
    <>
      <FlexCenter>
        <Header data={iAmHeader} />
      </FlexCenter>
      <FlexCenter>
        <Main data={iAmMain} />
      </FlexCenter>
      <FlexCenter>
        <Footer data={iAmFooter} />
      </FlexCenter>
    </>
  );
};

export default App;
