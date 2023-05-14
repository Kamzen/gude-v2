import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F50057"
    },
    secondary: {
      main: "#3c4358"
    }
  },
  components: {
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          borderRadius: 0
        }
      }
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root.Mui-disabled": {
            border: 1,
            borderColor: "#F50057"
          },
          [`& fieldset`]: {
            borderRadius: 0
          }
        }
      }
    },
  },
  typography: {}
});
