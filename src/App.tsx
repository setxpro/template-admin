import { DefaultTheme, ThemeProvider } from "styled-components";
import Layout from "./Components/Layout";
import usePersistedState from "./Hooks/usePersistedStateTheme";
import GlobalStyle from "./Styles/GlobalStyle";
import { light } from "./Styles/theme/light";
import { dark } from "./Styles/theme/dark";
import Template from "./Components/Template";

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  // Alter between the themes
  const toggleTheme = () => setTheme(theme.title === "light" ? dark : light);

  return (
    <ThemeProvider theme={theme}>
      <Template>
        <GlobalStyle />
        <Layout toggleTheme={toggleTheme} theme={theme}/>
      </Template>
    </ThemeProvider>
  );
};

export default App;
