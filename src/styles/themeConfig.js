import { createTheme } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    fontFamily: ["Raleway"],
  },
  palette: {
    primary: {
      main: deepPurple[900],
    },
  },
});
export default theme;
