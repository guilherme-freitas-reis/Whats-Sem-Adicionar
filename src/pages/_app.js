import { ThemeProvider } from "@material-ui/styles";
import "../styles/globals.css";
import "react-phone-number-input/style.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
