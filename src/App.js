import React, { useState, useEffect, useCallback } from "react";
import { createMuiTheme, ThemeProvider, Snackbar } from "@material-ui/core";
import routes, { renderRoutes } from "./Routes";
import { useDispatch, useSelector } from "react-redux"
import { auth_actions, global_actions } from "./redux"
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Alert, AlertTitle } from "@material-ui/lab";

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

const browserHistor = createBrowserHistory();
function App() {
  const { success, info, error, warning } = useSelector(state => state.global);
  const dispatch = useDispatch();
  const [snack, setSnack] = useState({
    severity: null,
    title: null,
    value: null
  });
  useEffect(() => {
    if (success)
      setSnack({ severity: "success", title: "Success", value: success });
    else if (info) setSnack({ severity: "info", title: "Info", value: info });
    else if (error)
      setSnack({ severity: "error", title: "Error", value: error });
    else if (warning)
      setSnack({ severity: "warning", title: "Warning", value: warning });
    else {
      setSnack({
        severity: null,
        title: null,
        value: null
      });
    }
  }, [success, info, error, warning]);
  useEffect(() => {
    // dispatch(auth_actions.login_by_token())
  }, [])
  const close_handler = useCallback(() => {
    dispatch(global_actions.clear_status())
  })
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistor}>
        {renderRoutes(routes)}
      </Router>
      <Snackbar
        open={snack.value}
        autoHideDuration={6000}
        onClose={close_handler}
      >
        {snack.value && (
          <Alert
            severity={snack.severity}
            variant="filled"
            onClose={close_handler}
          >
            <AlertTitle color="inherit">{snack.title}</AlertTitle>
            {snack.value}
          </Alert>
        )}
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
