import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#4caf50",
      contrastText: "#eeeeee",
    },
    text: {
      main: "#eeeee",
      contrastText: "#11111",
    },
    neutral: {
      main: "#eeeee",
      contrastText: "#111111",
    },
  },
});

export default theme;
