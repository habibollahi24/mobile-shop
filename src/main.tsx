import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./style/index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { theme } from "./style/theme.ts";
import CartProvider from "./context/CartProvider.tsx";
// import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <CartProvider>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
        <CssBaseline />
        <Toaster />
      </ThemeProvider>
    </BrowserRouter>
  </CartProvider>
  // </React.StrictMode>
);
