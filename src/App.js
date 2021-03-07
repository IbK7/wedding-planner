import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
//import { Provider } from "react-redux";
import routes, { renderRoutes } from "./Routes";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D7A7AA"
    },
    secondary: {
      main: "#8B5B6E"
    },
    typography: {
      "fontFamily": `"DancingScript", sans-serif`,
      "fontWeightRegular": 400, 
      "fontWeightBold": 900
    }
    
  }
});

function App() {
  const browserHistor = createBrowserHistory();
  return (
      <ThemeProvider theme={theme}>
        <Router history = {browserHistor}>
          {renderRoutes(routes)}
        </Router>
      </ThemeProvider>
  );
}

export default App;
