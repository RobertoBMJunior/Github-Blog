import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./Styles_and_Themes/DefaultTheme";
import { GloBalStyle } from "./Styles_and_Themes/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GloBalStyle/>

      <BrowserRouter>
        <Router/>
      </BrowserRouter>

    </ThemeProvider>
  )
}

