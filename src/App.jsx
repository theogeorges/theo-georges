import { ThemeProvider } from "@emotion/react";
import "./App.scss";
import Body from "./components/Body/Body";
import { Header } from "./components/Header/Header";
import theme from "./style/mui-theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header></Header>
        <Body></Body>
      </div>
    </ThemeProvider>
  );
};

export default App;
