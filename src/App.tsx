import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import Profile from "./components/Profile";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import { CardContainer } from "./components/Card/styles";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Profile />
      <SearchBar />
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </ThemeProvider>
  );
}

export default App;
