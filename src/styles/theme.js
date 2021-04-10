import { createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: "#ffffff",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;
