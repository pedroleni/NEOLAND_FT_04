import "./App.css";
import { ThemeProvider, useTheme } from "@emotion/react";

import GlobalStyles from "./styles/globalStyles";
import { createTheme } from "./styles/utils";
import { themeLight, themeDark } from "./styles/theme";
import ButtonStyle from "./components/ButtonStyle/ButtonStyle";

import { useThemeApp } from "./context/themeContext";
import { H1C } from "./components/ui/h1.element";
import Button from "./components/ui/Button";

function App() {
  const { theme, toggleTheme } = useThemeApp();
  return (
    <ThemeProvider
      theme={createTheme(theme === "dark" ? themeDark : themeLight)}
    >
      <GlobalStyles />
      <ButtonStyle variant="small">
        <div onClick={toggleTheme}>Change Theme</div>
      </ButtonStyle>

      {/* <ButtonStyle variant="large">
        <div onClick={() => console.log("hola")}> Decir hola</div>
      </ButtonStyle>
      <ButtonStyle variant="medium">
        <div onClick={() => console.log("hola")}> Decir hola</div>
      </ButtonStyle>
      <ButtonStyle variant="extralarge">
        <div onClick={() => console.log("hola")}> Decir hola</div>
      </ButtonStyle>
      <figure>
        <H1C text="esto es un h1 custom" width="largo" />
      </figure> */}

      <Button text="Register" action={() => console.log("Hola")} />
      <Button
        text="Login"
        action={() => console.log("Login")}
        variant="contained"
      />
      <Button
        text="Text"
        action={() => console.log("Text")}
        variant="text"
        color="crimson"
      />
    </ThemeProvider>
  );
}

export default App;
