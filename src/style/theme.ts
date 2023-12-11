import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4a6dff",
      700: "#6e8aff",
      500: "#92a7ff",
      300: "#b7c5ff",
      100: "#dbe2ff",
    },
    secondary: {
      900: "#111827",
      main: "#374151",
      500: "#6b7280",
      300: "#d1d5db",
      100: "#f3f4f6",
      // contrastText: "#ccc",
    },
  },
  typography: {
    fontFamily: ["Lato", '"Open Sans"'].join(","),
  },
  components: {
    // MuiButton: {
    //   defaultProps: {
    //     disableRipple: true,
    //     disableElevation: true,
    //   },
    //   styleOverrides: {
    //     root: {
    //       textTransform: "none",
    //       fontWeight: "600",
    //       borderWidth: "2px",
    //       borderRadius: "10px",
    //       letterSpacing: ".5px",
    //       padding: " .5rem 1rem",
    //       "&:hover": {
    //         borderWidth: "2px",
    //         // boxShadow: `0 0 0 2px #fff , 0 0 0 4px #ccc`,
    //       },
    //     },
    //   },
    // },
  },
});
