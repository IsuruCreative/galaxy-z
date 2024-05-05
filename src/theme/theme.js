import { createTheme, responsiveFontSizes } from "@mui/material";
import { orange } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    // primary: {
    //   main: "#4A646C",
    // },
    primary: {
      main: "#0B3D91",
    },
  },
  typography: {
    fontFamily: "Orbitron",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
