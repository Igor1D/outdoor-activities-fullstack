import { ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material";

// @ts-ignore
export const ThemeSettings: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#fe5d01",
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      primary: "#fbfbfb",
    },
    info: {
      main: "#03a9f4",
    },
  },
  components: {
    MuiTypography: {},
    MuiDialogContent: {
      styleOverrides: {
        root: {
          "&.login-dialog-content": {
            backgroundColor: "hsl(210, 69%, 6%)",
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          "&.login-dialog-title": {
            backgroundColor: "hsl(210, 69%, 6%)",
          },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          "&.login-dialog-actions": {
            backgroundColor: "hsl(210, 69%, 6%)",
          },
        },
      },
    },
  },
};
export const Theme = createTheme(ThemeSettings);
