import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F50057",
    },
    secondary: {
      main: "#f50057",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#F50057",
              "&:hover": {
                backgroundColor: "#DE3434",
                boxShadow: 12,
              },
            }),
        }),
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root.Mui-disabled": {
            border: 1,
            borderColor: "#F50057",
          },
        },
      },
    },
  },
  typography: {},
});
