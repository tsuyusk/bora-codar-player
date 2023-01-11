import { ThemeProvider } from "styled-components";
import { Main } from "./pages/Main";

import { theme } from "./styles/themes/theme";
import { Global } from "./styles/Global";

export function App() {
  return (
    <ThemeProvider theme={theme}> 
      <Global />
      <Main />
    </ThemeProvider>
  )
}
